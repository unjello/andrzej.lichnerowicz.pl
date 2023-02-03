import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as THREE from 'three'
import {ShaderMaterial, Mesh, Vector2} from 'three';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import {PerspectiveCamera, ScreenQuad, shaderMaterial, TransformControls} from '@react-three/drei';
import {useWheel} from "@use-gesture/react";
import {Suspense, useEffect, useMemo, useRef} from "react";

const vert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const frag = `
// shader by fb39ca4
// https://www.shadertoy.com/view/XsXXDH
#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform float u_time;

const float PI = 3.14159265;

vec2 rotate(vec2 v, float a) {
\tfloat sinA = sin(a);
\tfloat cosA = cos(a);
\treturn vec2(v.x * cosA - v.y * sinA, v.y * cosA + v.x * sinA); \t
}

float square(vec2 uv, float d) {
\treturn max(abs(uv.x), abs(uv.y)) - d;\t
}

float smootheststep(float edge0, float edge1, float x)
{
    x = clamp((x - edge0)/(edge1 - edge0), 0.0, 1.0) * 3.14159265;
    return 0.5 - (cos(x) * 0.5);
}


void main() {
vec2 fragCoord = gl_FragCoord.xy;
vec4 fragColor = vec4(0.);
\tvec2 uv = fragCoord.xy / u_resolution.xy;
\tuv = uv * 2.0 - 1.0;
\tuv.x *= u_resolution.x / u_resolution.y;
\tuv *= 1.5;
\t
    float blurAmount = -0.005 * 1080.0 / u_resolution.y;
    
\tfloat period = 2.0;
\tfloat time = u_time / period;
\ttime = mod(time, 1.0);
\ttime = smootheststep(0.0, 1.0, time);
\t
\tfragColor = vec4(1.0, 1.0, 1.0, 1.0);
\tfor (int i = 0; i < 9; i++) {
\t\tfloat n = float(i);
\t\tfloat size = 1.0 - n / 9.0;
\t\tfloat rotateAmount = (n * 0.5 + 0.25) * PI * 2.0; 
\t\tfragColor.rgb = mix(fragColor.rgb, vec3(1.0), smoothstep(0.0, blurAmount, square(rotate(uv, -rotateAmount * time), size)));
\t\tfloat blackOffset = mix(1.0 / 4.0, 1.0 / 2.0, n / 9.0) / 9.0;
\t\tfragColor.rgb = mix(fragColor.rgb, vec3(0.0), smoothstep(0.0, blurAmount, square(rotate(uv, -(rotateAmount + PI / 2.0) * time), size - blackOffset)));
    }
    
    gl_FragColor = vec4(fragColor);
}`;



export function Scene404() {
    const matRef = useRef<ShaderMaterial>(null!);
    const size = useThree((state) => state.size);
    const uniforms = useMemo(
        () => {
            return ({
                u_resolution: {value: new Vector2(size.width, size.height)},
                u_time: {
                    value: 0.0
                }
            });
        },
        []
    );

    useFrame((state) => {
        if (matRef.current.uniforms) {
            matRef.current.uniforms.u_time.value = state.clock.elapsedTime;
            matRef.current.needsUpdate = true;
        }
    });
    useEffect(() => {
        if (matRef.current.uniforms) {
            matRef.current.uniforms.u_resolution.value.x = size.width*2
            matRef.current.uniforms.u_resolution.value.y = size.height*2;
        }
    }, [size]);

    return <ScreenQuad>
        <shaderMaterial
            ref={matRef}
            uniforms={uniforms}
            fragmentShader={frag}
            vertexShader={vert}
        />
    </ScreenQuad>
}
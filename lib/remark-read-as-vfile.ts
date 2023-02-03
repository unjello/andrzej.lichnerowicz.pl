import fs from "fs";
import {VFile} from "vfile";

export default function remarkReadAsVfile(fullPath: string, options: any) {
    const fileContents = fs.readFileSync(fullPath, options);

    return new VFile({
        path: fullPath,
        value: fileContents
    })
}
all: clean install build

clean:
	find ./docs ! -name CNAME ! -name keybase.txt -delete

install:
	pnpm install

build:
	pnpm build
	pnpm export -o out
	cp -rf out/* docs/

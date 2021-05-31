SHELL=/bin/sh

clean:
	rm -rf ./dist ./electron-dist ./node_modules

install:
	$(call clean)
	npm install

build:
	$(call clean)
	npm ci
	npm run build

dev:
	npm run dev

electron:
	npm run electron:dev

lint:
	npm run lint

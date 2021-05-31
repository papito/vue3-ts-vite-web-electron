
# Vue 3 Typescript project, powered by Vite, to build web and Electron distros

### Initial Setup

    make install

### Running the dev web server

    make dev

#### Build

    make build

### Running the dev Electron server

The `dev` version of Electron app simply loads what's on the 
dev server, so you must start the dev server first:

    make dev
    make electron

#### Build

    npm run electron:build

### Running ESLint

    make lint

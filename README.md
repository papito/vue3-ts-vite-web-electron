
# Vue3 TypeScript project, powered by Vite, to build web and Electron distros

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
    
## Contributing

I am not a full-time front-end engineer, but I am looking for a simple way to bootstrap a project like this whithout jumping on bandwagons and [cargo cults](https://en.wikipedia.org/wiki/Cargo_cult_programming). Hopefully, the community can help me improve this template in that spirit. Please create PRs if you know of ways to do things better, especially if it reqruies *fewer* dependencies and less wiring, as my knowledge of the Node echosystem is not that amazing.

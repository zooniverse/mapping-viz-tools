# Mapping Viz Tools
Tools to Visualize Floating Forest Classifications

Be sure to check out [Zoomapper](https://github.com/zooniverse/zoomapper), which serves custom mbtiles for this app to consume.

## Available Scripts

In the project directory, you can run:

### `yarn install`

This will install all dependencies for the project. Run this command the first time you check out the code for this repo. If you get a node version error, either update your Node.js version or try running the install with the `--ignore-engines` flag like so: `yarn install --ignore-engines`

### `yarn start`

Runs the app in the development mode.<br />
Open [https://localhost:4000](https://localhost:4000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn storybook`

Launches the Storybook viewer at [http://localhost:9009/](http://localhost:9009/)

## Analyze the Bundle

Uses [source-map-explorer](https://www.npmjs.com/package/source-map-explorer) to visually analyze the bundle for bloats.  
To run this:
`yarn build && yarn analyze`

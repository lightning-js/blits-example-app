# Blits L3 Example App

## Getting started

Clone this repository and run `npm install` in the project root.

Then run `npm run dev` to start the dev server and open the URL printed in your terminal to check the App.

This Blits L3 Example App contains a demo of a TMBD integration. Head over to https://developers.themoviedb.org/3/getting-started/introduction to get your own TMDB API key and paste it inside a `.env` file (following the example in `.example.env`). To use your own TMDB API key, you also need to change `VITE_TMDB_BASE_URL` in your `.env` file to `https://api.themoviedb.org/3`.

You can also take a look at the [hosted version](http://blits-demo.lightningjs.io) of this App.

## App Usage

Once you've directed your browser to the URL displayed in your terminal, you have the option to navigate through the various examples using the `arrow keys` or directly access a specific example. Assuming it's running at `http://localhost:5173/`: here are the direct links to each example:

- Loading  http://localhost:5173/#/demos/loading
- Splash screen: http://localhost:5173/#/demos/intro
- Theming: http://localhost:5173/#/demos/theming
- TMDB example app ( API key required as described above ): http://localhost:5173/#/demos/theming
- Sprites: http://localhost:5173/#/demos/sprites
- Focus Handling: http://localhost:5173/#/demos/focushandling
- Memory Game: http://localhost:5173/#/demos/memory-game
- Positioning: http://localhost:5173/#/examples/positioning
- Colors: http://localhost:5173/#/examples/colors
- Gradients: http://localhost:5173/#/examples/gradients
- Transitions: http://localhost:5173/#/examples/transitions
- Components: http://localhost:5173/#/examples/components
- Alpha: http://localhost:5173/#/examples/alpha
- Apply scaling: http://localhost:5173/#/examples/scaling
- Rotation: http://localhost:5173/#/examples/rotation
- Keyinput handling: http://localhost:5173/#/examples/keyinput
- For loop implementation: http://localhost:5173/#/examples/forloop
- Different effects: http://localhost:5173/#/examples/effects
- Conditional rendering: http://localhost:5173/#/examples/showif
- Events: http://localhost:5173/#/examples/events
- Images: http://localhost:5173/#/examples/images
- Text: http://localhost:5173/#/examples/texts
- Slots: http://localhost:5173/#/examples/slots


## Visual Regression Test


[BackstopJS](https://github.com/garris/BackstopJS) is a tool that facilitates automated visual regression testing for responsive web user interfaces.
It accomplishes this by comparing DOM screenshots over time.

### Setup

To get started with BackstopJS, follow these steps:

1. Run the App via the command: `npm run start:test` or `NODE_ENV=testing npm run dev`
2. Run `npm test` to test the App against the reference bitmaps.


> Note: To ensure consistency regarding the performance of the app while creating the reference bitmaps or running the tests, `asyncCaptureLimit` should be set to `1` in the `backstop.cjs` file. This will ensure that the tests are run sequentially and not in parallel (so concurrency won't affect the performance of the app).

> Note: The default host and port of the dev server is `http://localhost:5173`. If you are running the app on a different host or port, you should update `TEST_HOST` and `TEST_PORT` in the `.env` file. Or you can directly modify the `backstop.cjs` file.

### Creating Reference Bitmaps

To create reference bitmaps for visual regression testing, use the following command in the terminal:

```bash
npm run test:reference
```

This command will remove any existing reference snapshots and generate new ones based on the provided configuration `URL` in the previous section.


### Creating Test Bitmaps

Generate test bitmaps by using the following command in the terminal:

```bash
$ npm test
```

This command will produce a new set of bitmaps in the `bitmap_test/<timestamp>` folder. After bitmap generation is complete,
a report comparing the most recent bitmaps against the reference will be displayed.


### Browser Options

BackstopJS supports both Puppeteer and Playwright. The existing reference bitmaps were created using Puppeteer with its default browser (Chrome headless). Changing browser settings may change page load and animation timings so after a change reference bitmaps might not match with test bitmaps. In that case, reference bitmaps should be generated again.


If you want to modify browser configuration, use the following settings in your `backstop.cjs` file:

To use webkit:


```json
"engine": "playwright",
"engineOptions": {
    "args": ["--no-sandbox"],
    "browser": "webkit"
},

```

### Debugging

In case you prefer to visually monitor your application's state during the tests, you can enable the debug window using the following setting:

```json
"debugWindow": true
```

## Bugs or issues?

If you find any bugs or issues, please feel free to file a GitHub issue or open a PR.


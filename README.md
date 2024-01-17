# Blits L3 Example App

## Getting started

Clone this repository and run `npm install` in the project root.

Then run `npm run dev` to start the dev server and open the URL printed in your terminal to check the App.

This Blits L3 Example App contains a demo of a TMBD integration. Head over to https://developers.themoviedb.org/3/getting-started/introduction to get your own TMDB API key and paste it inside a `.env` file (following the example in `.example.env`). To use your own TMDB API key, you also need to change `VITE_TMDB_BASE_URL` in your `.env` file to `https://api.themoviedb.org/3`.

You can also take a look at the [hosted version](http://blits-demo.lightningjs.io) of this App.

## App Usage

Once you've directed your browser to the URL displayed in your terminal, you have the option to navigate through the various examples using the `arrow keys` or directly access a specific example. Assuming it's running at `http://localhost:5173/`: here are the direct links to each example:

- Loading  http://localhost:5173/
- Splash screen: http://localhost:5173/#/intro
- Positioning: http://localhost:5173/#/positioning
- Transitions: http://localhost:5173/#/transitions
- Gradients: http://localhost:5173/#/gradients
- Components: http://localhost:5173/#/components
- Keyinput handling: http://localhost:5173/#/keyinput
- Coloring: http://localhost:5173/#/colors
- For loop implementation: http://localhost:5173/#/forloop
- Apply scaling: http://localhost:5173/#/scaling
- Different effects: http://localhost:5173/#/effects
- Alpha: http://localhost:5173/#/alpha
- Conditional rendering: http://localhost:5173/#/showif
- Images: http://localhost:5173/#/images
- Rotation: http://localhost:5173/#/rotation
- Events: http://localhost:5173/#/events
- Focus handling: http://localhost:5173/#/focushandling
- Rendering spritemaps: http://localhost:5173/#/sprites
- Text: http://localhost:5173/#/texts
- Apply theming: http://localhost:5173/#/theming
- TMDB example app ( API key required as described above ): http://localhost:5173/#/theming


## Visual Regression Test


[BackstopJS](https://github.com/garris/BackstopJS) is a tool that facilitates automated visual regression testing for responsive web user interfaces.
It accomplishes this by comparing DOM screenshots over time.

### Setup

To get started with BackstopJS, follow these steps:

1. Install `backstopJS` globally using the following npm command: `npm install -g backstopjs`
2. Run the App via the the command: `npm start` or `npm run dev`
3. Copy the local URL of the specific route you want to test. It might look something like this: `http://localhost:5174/#/gradients`
4. open `backstop.json` and update the `{ url }` of the first `scenarios[]` element with the URL you copied in the previous step.

### Creating Reference Bitmaps

To create reference bitmaps for visual regression testing, use the following command in the terminal:

```
$ backstop reference
```

This command will remove any existing reference snapshots and generate new ones based on the provided configuration `URL` in the previous section.


### Creating Test Bitmaps

Generate test bitmaps by using the following command in the terminal:

```
$ backstop test
```

This command will produce a new set of bitmaps in the `bitmap_test/<timestamp>` folder. After bitmap generation is complete,
a report comparing the most recent bitmaps against the reference will be displayed.


### Browser Options

BackstopJS supports both Puppeteer and Playwright. To configure your browser, use the following settings in your `backstop.json` file:

To use Chrome Headless:


```
"engine": "playwright",
"engineOptions": {
    "args": ["--no-sandbox"],
},
```

to use webkit:


```
"engine": "playwright",
"engineOptions": {
    "args": ["--no-sandbox"],
    "browser": "webkit"
},

```

### Debugging

In case you prefer to visually monitor your application's state during the tests, you can enable the debug window using the following setting:

```
"debugWindow": true
```

## Bugs or issues?

If you find any bugs or issues, please feel free to file a GitHub issue or open a PR.


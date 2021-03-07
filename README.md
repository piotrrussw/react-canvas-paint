# react-canvas-paint
#### [DEMO](https://piotrrussw.github.io/react-canvas-paint/)
> A react drawing library
<br/>

![library example](assets/gif.gif?raw=true "GIF")

[![NPM](https://img.shields.io/npm/v/react-canvas-paint.svg)](https://www.npmjs.com/package/react-canvas-paint) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-canvas-paint
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactCanvasPaint from 'react-canvas-paint'
import 'react-canvas-paint/dist/index.css'

class Example extends Component {
  render() {
    return <ReactCanvasPaint />
  }
}
```

## Props

| Property      | Type     | Default                                                            | Description                                     |
| :------------ | :------- | :----------------------------------------------------------------- | :---------------------------------------------- |
| `width`       | number   | 400                                                                | canvas width                                    |
| `height`      | number   | 400                                                                | canvas height                                   |
| `viewOnly`    | bool     | false                                                              | Set to true disable drawing on canvas           |
| `data`        | Object   | undefined                                                          | Initial imageData that can be put on the canvas |
| `onDraw`      | function | undefined                                                          | Function with imageData on every line drawn     |
| `colors`      | Array    | ['#7030A2', '#000000', '#0170C1', '#FE0002', '#FFFF01', '#00AF52'] | array of choosable colors to draw               |
| `strokeWidth` | number   | 5                                                                  | width of drawing stroke                         |


## License

MIT © [piotrrussw](https://github.com/piotrrussw)

This module was bootstrapped with [create-react-library](https://github.com/transitive-bullshit/create-react-library).

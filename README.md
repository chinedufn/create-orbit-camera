create-orbit-camera [![npm version](https://badge.fury.io/js/create-orbit-camera.svg)](http://badge.fury.io/js/create-orbit-camera) [![Build Status](https://travis-ci.org/chinedufn/create-orbit-camera.svg?branch=master)](https://travis-ci.org/chinedufn/create-orbit-camera)
===============

> A standalone, stateless orbital camera API

[View live demo](http://chinedufn.github.io/create-orbit-camera/)

## Background / Initial Motivation

`create-orbit-camera` aims to provide an API for orbital camera management while letting the consumer control the relevant state.

Thus, `create-orbit-camera` is a stateless abstraction around the math required to create an orbital camera's view matrix.

Your camera can orbit and look at some target position in your scene (world space).

When combined with event listeners on DOM canvas elements, or other types of controls, `create-orbit-camera` can help to power
camera's for demos and third person games.

## To Install

```sh
$ npm install --save create-orbit-camera
```

## Demo

To run the demo locally:

```sh
$ git clone https://github.com/chinedufn/create-orbit-camera
$ cd create-orbit-camera
$ npm install
$ npm run demo
```

Changes to the `demo` and `src` directories will now live reload in your browser.

## Usage

```js
var createCamera = require('create-orbit-camera')

var cameraData = createCamera({
 position: [0, 3, 5],
 target: [0, 0, 0],
 xRadians: Math.PI / 2,
 yRadians: -Math.PI / 3.5
})

console.log(cameraData.viewMatrix) // ...
console.log(cameraData.position) // ...
```

## API

### `createCamera(options)` -> `cameraData`

#### options

###### position

Type: `Array[3]`

Default: `[0, 1, -10]`

Your camera's position in world space.

###### up

Type: `Array[3]`

Default: `[0, 1, 0]`

The up direction. This is almost always `1` in the Y direction unless you're doing something very strange.

###### target

Type: `Array[3]`

Default: `[0, 0, 0]`

The position in world space that your camera is looking at.

###### xRadians

Type: `Number`

Default: `0`

The number of radians to rotate about your target about the X axis who's origin is at your targets position.

If your thumb is pointed to your left the direction that your fingers rotate is the direction that your camera rotates.

###### yRadians

Type: `Number`

Default: `0`

The number of radians to rotate about your target about the Y axis who's origin is at your targets position.

If your thumb is pointed up the direction that your fingers rotate is the direction that your camera rotates.

## Returns -> cameraData

#### cameraData.position

Type: `Array[3]`

You can use the calculated camera's position when projecting rays into your scene.

One example use case for this is mouse picking.

#### cameraData.viewMatrix

You can use this `4x4` view matrix to transform your scene into your camera's eye matrix.

Type: `Array[16]`

## See Also

- [WebGL Fundamentals - Cameras](http://webglfundamentals.org/webgl/lessons/webgl-3d-camera.html)

## References

## License

MIT

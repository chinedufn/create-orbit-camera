var mat4Multiply = require('gl-mat4/multiply')
var mat4Translate = require('gl-mat4/translate')
var mat4Invert = require('gl-mat4/invert')

var makeLookAt = require('./matrix-math/make-look-at.js')
var makeXRotation = require('./matrix-math/make-x-rotation.js')
var makeYRotation = require('./matrix-math/make-y-rotation.js')

module.exports = createOrbitCamera

var defaults = {
  position: [0, 1, -10],
  up: [0, 1, 0],
  target: [0, 0, 0],
  xRadians: 0,
  yRadians: 0
}

function createOrbitCamera (opts) {
  opts = Object.assign({}, defaults, opts)

  // Create an indentity matrix
  var cameraMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

  // Translate the matrix to our camera position
  mat4Translate(cameraMatrix, cameraMatrix, [
    opts.position[0],
    opts.position[1],
    opts.position[2]
  ])

  // Rotate about the X and Y axis
  mat4Multiply(cameraMatrix, makeXRotation(0 - opts.xRadians), cameraMatrix)
  mat4Multiply(cameraMatrix, makeYRotation(opts.yRadians), cameraMatrix)

  // Our camera's position after orbiting using our provided radians
  var cameraPosition = [
    cameraMatrix[12],
    cameraMatrix[13],
    cameraMatrix[14]
  ]

  // Look at the target
  cameraMatrix = makeLookAt(cameraPosition, opts.target, opts.up)
  mat4Invert(cameraMatrix, cameraMatrix)

  // Return our camera's position and view matrix after rotating and looking at the target
  return {
    position: cameraPosition,
    viewMatrix: cameraMatrix
  }
}

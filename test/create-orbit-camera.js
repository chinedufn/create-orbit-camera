var test = require('tape')

var createCamera = require('../')

test('Create camera', function (t) {
  // No rotational orbit

  var cameraData = createCamera({
    position: [0, 0, -5],
    target: [0, 0, 0]
  })
  t.deepEqual(
    fixedArray(cameraData.viewMatrix),
    fixedArray([-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, -5, 1]),
    'Create with no rotation'
  )

  // X axis rotational orbit

  cameraData = createCamera({
    position: [0, 0, -1],
    target: [0, 0, 0],
    xRadians: Math.PI / 2
  })
  t.deepEqual(
    fixedArray(cameraData.viewMatrix),
    fixedArray([-6.123233995736766e-17, 0, -0, 0, 0, 3.749399456654644e-33, -6.123233995736766e-17, 0, 0, -1, -6.123233995736766e-17, 0, 0, -1, -6.123233995736766e-17, 1]),
    'Orbit around the Y axis'
  )

  // Y axis rotational orbit

  cameraData = createCamera({
    position: [0, 0, -1],
    target: [0, 0, 0],
    yRadians: Math.PI / 2
  })
  t.deepEqual(
    fixedArray(cameraData.viewMatrix),
    fixedArray([-6.123233995736766e-17, 0, 1, 0, 0, 1, 0, 0, -1, 0, -6.123233995736766e-17, 0, -1, 0, -6.123233995736766e-17, 1]),
    'Orbit around the X axis'
  )

  t.end()
})

// Fix numbers in an array to three decimal places
// This helps us compare numbers even if machines have different precisions
function fixedArray (array) {
  return array.map(function (num) {
    return num.toFixed(3)
  })
}

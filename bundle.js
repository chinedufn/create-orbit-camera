(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var mount = document.createElement('div')
mount.style.width = '100%'
mount.style.height = '100%'
mount.style.overflow = 'hidden'

var demo = require('./demo.js')()

// Download a fork me on GitHub banner for use offline..

mount.appendChild(demo.element)
document.body.appendChild(mount)

document.querySelector('html').style.height = '100%'
document.body.style.height = '100%'
document.body.style.margin = 0

},{"./demo.js":2}],2:[function(require,module,exports){
module.exports = initDemo

function initDemo () {
  var canvas = document.createElement('div')
  canvas.innerHTML = 'TODO'

  return {
    element: canvas
  }
}

},{}]},{},[1]);

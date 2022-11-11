import React from 'react'
import '../styles/styles.css'
import { createRoot } from "react-dom/client";
import * as dat from 'dat.gui'
const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var img = new Image();
img.src = 'https://preview.redd.it/wuju158yygm61.png?width=2000&format=png&auto=webp&s=836a8a1a7457d989f3372850c5caf8c8a591cc58';
img.onload = function() {
    init();
};

var options = {
	slices: 5,
	maxHorizOffset: 5,
    triggerSliceLoop: false,
    triggerHorizOffset: false
}

function init() {
    var portrait = document.getElementById('portrait');
    var canvas = portrait.getContext('2d');
    portrait.setAttribute("width", img.width);
    portrait.setAttribute("height", img.height);
    window.requestAnimFrame(function() {
        draw(canvas);
    });
}
function draw(canvas) {
    var slicePx = (img.width / options.slices)
    canvas.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height) //used background will be retained even if image is shifted greatly

    for (var i = 0; i < options.slices; i++) {
        var horizOffset = Math.floor(Math.random() * (2 * options.maxHorizOffset + 1)) - options.maxHorizOffset;
        canvas.drawImage(img, 0, i * slicePx, img.width, img.height, horizOffset, i * slicePx, img.width, img.height);
    }
    if (options.triggerSliceLoop){if (options.slices<300){options.slices = options.slices+1;}}
    if (options.triggerHorizOffset){if (options.maxHorizOffset<300){options.maxHorizOffset = options.maxHorizOffset+1;}}
    window.requestAnimFrame(function() {
        draw(canvas);
    });
}




var datGUI = new dat.GUI()

datGUI.add(options, 'slices').min(1).max(300).step(1).name('slices').listen().onChange(function(val){ options.slices = val })
datGUI.add(options, 'maxHorizOffset').min(1).max(300).step(1).name('maxHorizOffset').listen().onChange(function(val){ options.maxHorizOffset = val })
datGUI.add(options, 'triggerSliceLoop', true, false).name('Trigger slice loop').onChange(function(val){ options.triggerSliceLoop = val })
datGUI.add(options, 'triggerHorizOffset', true, false).name('Trigger HorizOffset loop').onChange(function(val){ options.triggerHorizOffset = val })

return <canvas id="portrait" width="1" height="1"></canvas>
}

root.render(<App />);
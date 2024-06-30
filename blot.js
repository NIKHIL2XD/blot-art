// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

const d=50

drawLines([
    [[0, 0], [0, d]],
    [[0, d], [d, d]],
    [[d, d], [d, 0]],
    [[d, 0], [0, 0]]
])


drawLines([
    [[100, 90], [60, 120]],
    [[120, 120], [120, 120]],
    [[d, d], [d, 0]]
])

const s = 60;

drawLines([
    [[0, 0], [0, s], [s, s], [s, 0], [0, 0]]
])

// transform lines using the toolkit
bt.rotate(finalLines, 45);

// draw it
drawLines(finalLines);
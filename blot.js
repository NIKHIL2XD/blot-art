// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

const t = new bt.Turtle()
const size = 100

t.forward(size)
t.left(120)
t.forward(size)
t.left(120)
t.forward(size)

drawLines(t.lines())


drawLines([
    [[45, 20],[70, 20]],
    [[45, 20],[41, 37]],
    [[70, 20],[74, 37]],
    [[41, 37],[57.5, 50]],
    [[74, 37],[57.5, 50]]  
  ])
    
// transform lines using the toolkit
bt.rotate(finalLines, 45);

// draw it
drawLines(finalLines);
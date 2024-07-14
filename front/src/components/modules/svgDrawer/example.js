/*

// https://codepen.io/SitePoint/pen/mdrdpVr

<svg xmlns="http://www.w3.org/2000/svg" id="mysvg" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">

  <title>SVG curve</title>
  <desc>example curves in SVG</desc>

  <circle id="p1" cx="100" cy="250" r="30" class="control" />
  <circle id="p2" cx="400" cy="250" r="30" class="control" />

  <circle id="c1" cx="100" cy="100" r="20" class="control" />
  <circle id="c2" cx="400" cy="100" r="20" class="control" />

  <line id="l1" x1="100" y1="250" x2="100" y2="100" />
  <line id="l2" x1="400" y1="250" x2="400" y2="100" />

  <path id="curve" d="M100,250 C100,100 400,100 400,250" />

</svg>

<div id="output">
  <h1>SVG Quadratic B&eacute;zier Curve</h1>
  <p id="path"></p>
</div>

*/

// initialize
const
  svg = document.getElementById('mysvg'),
  NS = svg.getAttribute('xmlns'),
  vb = svg.getAttribute('viewBox').split(' ').map(v => +v),
  box = {
    xMin: vb[0], xMax: vb[0] + vb[2] - 1,
    yMin: vb[1], yMax: vb[1] + vb[3] - 1
  }
  node = {};

'p1,p2,c1,c2,l1,l2,curve,path'.split(',').map(s => {
  node[s] = document.getElementById(s);
});

// events
svg.addEventListener('pointerdown', dragHandler);
document.addEventListener('pointermove', dragHandler);
document.addEventListener('pointerup', dragHandler);

drawCurve();


// drag handler
let drag;
function dragHandler(event) {

  event.preventDefault();

  const
    target = event.target,
    type = event.type,
    svgP = svgPoint(svg, event.clientX, event.clientY);

  // fill toggle
  if (!drag && type === 'pointerdown' && target === node.curve) {

    node.curve.classList.toggle('fill');
    drawCurve();

  }

  // start drag
  if (!drag && type === 'pointerdown' && target.classList.contains('control')) {

    drag = {
      node: target,
      start: getControlPoint(target),
      cursor: svgP
    };

    drag.node.classList.add('drag');

  }

  // move element
  if (drag && type === 'pointermove') {

    updateElement(
      drag.node,
      {
        cx: Math.max(box.xMin, Math.min( drag.start.x + svgP.x - drag.cursor.x, box.xMax )),
        cy: Math.max(box.yMin, Math.min( drag.start.y + svgP.y - drag.cursor.y, box.yMax ))
      }
    );

    drawCurve();

  }

  // stop drag
  if (drag && type === 'pointerup') {

    drag.node.classList.remove('drag');
    drag = null;

  }

}


// translate page to SVG co-ordinate
function svgPoint(element, x, y) {

  var pt = svg.createSVGPoint();
  pt.x = x;
  pt.y = y;
  return pt.matrixTransform(element.getScreenCTM().inverse());

}


// update element
function updateElement(element, attr) {

  for (a in attr) {
    let v = attr[a];
    element.setAttribute(a, isNaN(v) ? v : Math.round(v));
  }

}


// get control point location
function getControlPoint(circle) {

  return {
    x: Math.round( +circle.getAttribute('cx') ),
    y: Math.round( +circle.getAttribute('cy') )
  }

}


// update curve
function drawCurve() {

  const
    p1 = getControlPoint(node.p1),
    p2 = getControlPoint(node.p2),
    c1 = getControlPoint(node.c1);
    c2 = getControlPoint(node.c2);

  // control line 1
  updateElement(
    node.l1,
    {
      x1: p1.x,
      y1: p1.y,
      x2: c1.x,
      y2: c1.y
    }
  );

  // control line 2
  updateElement(
    node.l2,
    {
      x1: p2.x,
      y1: p2.y,
      x2: c2.x,
      y2: c2.y
    }
  );

  // curve
  const
    d = `M${p1.x},${p1.y} C${c1.x},${c1.y} ${c2.x},${c2.y} ${p2.x},${p2.y}` +
    (node.curve.classList.contains('fill') ? ' Z' : '');

  updateElement( node.curve, { d } );

  node.path.textContent = `<path d="${d}" />`;

}
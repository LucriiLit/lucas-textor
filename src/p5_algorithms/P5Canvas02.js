// import React, { useRef } from "react";
// import p5 from "p5";
// import { useEffect } from "react";
// import { useState } from "react";

// function P5Canvas02() {
//   const canvasRef02 = useRef(null);
//   const canvasInst = useRef(null);
//   const [isInitialized, setIsInitialized] = useState(false);

//   useEffect(() => {
//     if (isInitialized) return;

//     canvasInst.current = new p5(
//       (sketch) => {
//         let firstRun = true;
//         let runCounter = 0;
//         let r = 50;

//         sketch.setup = function () {
//           const container = canvasRef02.current.parentElement;
//           const containerSize = container.getBoundingClientRect();
//           const canvs = sketch.createCanvas(
//             containerSize.width,
//             containerSize.height
//           );
//           canvs.mouseOver(() => sketch.loop());
//           canvs.mouseOut(() => sketch.noLoop());
//           setIsInitialized(true);
//           sketch.blendMode(sketch.BLEND);
//           sketch.colorMode(sketch.HSL);
//           sketch.background(50, 20, 10);
//         };

//         sketch.draw = function () {
//           const container = canvasRef02.current.parentElement;
//           const containerSize = container.getBoundingClientRect();

//           sketch.blendMode(sketch.BLEND);
//           sketch.background(50, 20, 0, 0.02);
//           sketch.translate(containerSize.width / 2, containerSize.height / 2);
//           sketch.noFill();
//           sketch.strokeWeight(sketch.random(0, 1));
//           sketch.stroke(sketch.random(10, 70), 100, sketch.random(50, 80));

//           let increment = sketch.map(
//             sketch.mouseX,
//             100,
//             containerSize.width,
//             0.01,
//             sketch.PI
//           );

//           let circleWidth = sketch.map(
//             sketch.mouseX,
//             100,
//             containerSize.width,
//             0,
//             10
//           );

//           if (circleWidth > 5) {
//             sketch.stroke(sketch.random(180, 270), 100, sketch.random(50, 80));
//           } else if (circleWidth < 3) {
//             sketch.stroke(360, 100, 100);
//           }

//           let circleCounter = 0.05;

//           sketch.beginShape();
//           for (let a = 0; a < sketch.TWO_PI; a += circleCounter) {
//             let r1 = r + sketch.random(-20, 20);
//             let x = r1 * sketch.cos(a);
//             let y = r1 * sketch.sin(a);

//             if (circleWidth < 1) {
//               circleCounter = 0.2;
//             }

//             // circleCounter = sketch.map(
//             //   sketch.mouseX,
//             //   100,
//             //   containerSize.width,
//             //   0.1,
//             //   0.02
//             // );

//             sketch.circle(x, y, sketch.random(0, circleWidth));

//             r = increment * 100;
//             sketch.print(containerSize.width);
//           }

//           sketch.endShape(sketch.CLOSE);

//           if (runCounter < 20) {
//             runCounter += 1;
//             if (firstRun && runCounter === 20) {
//               firstRun = false;
//               sketch.noLoop();
//             }
//           }
//         };

//         sketch.windowResized = function () {
//           const container = canvasRef02.current.parentElement;
//           const containerSize = container.getBoundingClientRect();
//           sketch.resizeCanvas(containerSize.width, containerSize.height);
//         };
//       },
//       canvasRef02.current,
//       // WebGL2RenderingContext
//     );

//     return function () {
//       canvasInst.current.remove();
//       canvasInst.current = null;
//     };
//   }, [isInitialized]);

//   return <div ref={canvasRef02}>
//     <div className="renderTESTred"></div>
//   </div>
// }

// export default P5Canvas02;


import React, { useRef, useEffect, useState } from "react";
import p5 from "p5";

function P5Canvas02() {
  const canvasRef02 = useRef(null);
  const canvasInst = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;

    const sketch = (p) => {
      let firstRun = true;
      let runCounter = 0;
      let r = 50;

      p.setup = function () {
        const container = canvasRef02.current.parentElement;
        const containerSize = container.getBoundingClientRect();
        const canvs = p.createCanvas(containerSize.width, containerSize.height);
        canvs.mouseOver(() => p.loop());
        canvs.mouseOut(() => p.noLoop());
        setIsInitialized(true);
        p.blendMode(p.BLEND);
        p.colorMode(p.HSL);
        p.background(50, 20, 10);
      };

      p.draw = function () {
        const container = canvasRef02.current.parentElement;
        const containerSize = container.getBoundingClientRect();

        p.blendMode(p.BLEND);
        p.background(50, 20, 0, 0.02);
        p.translate(containerSize.width / 2, containerSize.height / 2);
        p.noFill();
        p.strokeWeight(p.random(0, 1));
        p.stroke(p.random(10, 70), 100, p.random(50, 80));

        let increment = p.map(
          p.mouseX,
          100,
          containerSize.width,
          0.01,
          p.PI
        );

        let circleWidth = p.map(
          p.mouseX,
          100,
          containerSize.width,
          0,
          10
        );

        if (circleWidth > 5) {
          p.stroke(p.random(180, 270), 100, p.random(50, 80));
        } else if (circleWidth < 3) {
          p.stroke(360, 100, 100);
        }

        let circleCounter = 0.05;

        p.beginShape();
        for (let a = 0; a < p.TWO_PI; a += circleCounter) {
          let r1 = r + p.random(-20, 20);
          let x = r1 * p.cos(a);
          let y = r1 * p.sin(a);

          if (circleWidth < 1) {
            circleCounter = 0.2;
          }

          // circleCounter = p.map(
          //   p.mouseX,
          //   100,
          //   containerSize.width,
          //   0.1,
          //   0.02
          // );

          p.circle(x, y, p.random(0, circleWidth));

          r = increment * 100;
          p.print(containerSize.width);
        }

        p.endShape(p.CLOSE);

        if (runCounter < 20) {
          runCounter += 1;
          if (firstRun && runCounter === 20) {
            firstRun = false;
            p.noLoop();
          }
        }
      };

      p.windowResized = function () {
        const container = canvasRef02.current.parentElement;
        const containerSize = container.getBoundingClientRect();
        p.resizeCanvas(containerSize.width, containerSize.height);
      };
    };

    canvasInst.current = new p5(sketch, canvasRef02.current);

    return () => {
      canvasInst.current.remove();
      canvasInst.current = null;
    };
  }, [isInitialized]);

  return <div ref={canvasRef02} />
}

export default P5Canvas02;

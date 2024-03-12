import React, { useRef, useEffect } from "react";
import p5 from "p5";

function P5Canvas01() {
  const canvasRef01 = useRef(null);
  const canvasInst = useRef(null);
  // const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // if (isInitialized) return;

    canvasInst.current = new p5(
      (sketch) => {
        let firstRun = true;
        let runCounter = 0;
        let strahlen = 16;
        let rects = 1;

        let c = 0;
        let constructColor = [280, 10, 100];
        let constructColor2 = [250, 180, 250];
        let constructColor3 = [20, 255, 255];

        let perlenWert1 = 0;
        let perlenWert2 = 100;
        let perlenWert3 = 69;
        let perlenWert4 = 42;

        sketch.setup = function () {
          const container = canvasRef01.current.parentElement;
          const containerSize = container.getBoundingClientRect();
          const canvs = sketch.createCanvas(
            containerSize.width,
            containerSize.height
          );
          canvs.mouseOver(() => sketch.loop());
          canvs.mouseOut(() => sketch.noLoop());
          // setIsInitialized(true);
          sketch.frameRate(20);
          sketch.angleMode(sketch.DEGREES);
          sketch.blendMode(sketch.BLEND);
          sketch.background(0);
          sketch.noiseSeed(200);
        };

        sketch.draw = function () {
          const container = canvasRef01.current.parentElement;
          const containerSize = container.getBoundingClientRect();

          sketch.background(0, 20);
          sketch.translate(containerSize.width / 2, containerSize.height / 2);
          sketch.strokeWeight(1);
          sketch.noFill();
          sketch.scale(1.3);

          //RADIAL SPECTRUM LINES
          sketch.push();

          let perle1 = sketch.noise(perlenWert1 / 15);
          perlenWert1 += 1;
          let perle2 = sketch.noise(perlenWert2 / 50);
          perlenWert2 += 1;
          let perle3 = sketch.noise(perlenWert3 / 30);
          perlenWert3 += 1;
          let perle4 = sketch.noise(perlenWert4 / 30);
          perlenWert4 += 1;

          // STRAHLEN
          for (let i = 0; i < strahlen; i++) {
            let angle = sketch.map(i, 0, strahlen, 0, 360);
            let r = sketch.map(perle1, 0, 1, 0, 120);
            let grow = sketch.map(perle3, 0, 1, 1, 20);
            let grow2 = sketch.map(perle4, 0, 1, 1, 20);

            let x = r * sketch.cos(angle);
            let y = r * sketch.sin(angle);
            let x2 = 20 * sketch.cos(angle);
            let y2 = 20 * sketch.sin(angle);

            sketch.rotate(45);
            sketch.colorMode(sketch.RGB);
            sketch.stroke(
              constructColor3[0],
              constructColor3[1],
              constructColor3[2],
              [0.4]
            );
            sketch.strokeWeight(0.5);
            sketch.line(x / 1.5, y / 1.5, x, y);

            sketch.colorMode(sketch.HSB);
            sketch.stroke(
              i * 6 + constructColor[c],
              constructColor[c + 1],
              constructColor[c + 2],
              [0.4]
            );
            sketch.line(
              x2 * 3 * (containerSize.width / 250) + grow,
              y2 * 2 * (containerSize.width / 250) + grow,
              x,
              y
            );

            sketch.line(
              x2 * 3 * (containerSize.width / 250) + grow2,
              y2 * 4 * (containerSize.width / 250) + grow2,
              x,
              y
            );
          }
          sketch.pop();

          // RECT
          sketch.push();
          for (let j = 0; j < rects; j++) {
            let r = sketch.map(perle2, 0, 1, 0, 80);

            sketch.stroke(
              constructColor2[c],
              constructColor2[c + 1],
              constructColor2[c + 2],
              [0.4]
            );
            sketch.strokeWeight(0.5);
            sketch.circle(0, 0, r, r);
          }
          sketch.pop();

          if (runCounter < 20) {
            runCounter += 1;
            if (firstRun && runCounter === 20) {
              firstRun = false;
              sketch.noLoop();
            }
          }
        };

        sketch.windowResized = function () {
          const container = canvasRef01.current.parentElement;
          const containerSize = container.getBoundingClientRect();
          sketch.resizeCanvas(containerSize.width, containerSize.height);
        };
      },
      canvasRef01.current,
      WebGL2RenderingContext
    );

    return function () {
      canvasInst.current.remove();
      canvasInst.current = null;
    };
  }, );

  return <div className="p5Canvas" ref={canvasRef01} />;
}

export default P5Canvas01;

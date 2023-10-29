import React, { useRef } from "react";
import p5 from "p5";
import { useEffect } from "react";
import { useState } from "react";

function P5Canvas02() {
  const canvasRef02 = useRef(null);
  const canvasInst = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;

    canvasInst.current = new p5(
      (p5) => {
        let firstRun = true;
        let runCounter = 0;
        let r = 50;

        p5.setup = function () {
          const container = canvasRef02.current.parentElement;
          const containerSize = container.getBoundingClientRect();
          const canvs = p5.createCanvas(
            containerSize.width,
            containerSize.height
          );
          canvs.mouseOver(() => p5.loop());
          canvs.mouseOut(() => p5.noLoop());
          setIsInitialized(true);
          p5.blendMode(p5.BLEND);
          p5.colorMode(p5.HSL);
          p5.background(50, 20, 10);
        };

        p5.draw = function () {
          const container = canvasRef02.current.parentElement;
          const containerSize = container.getBoundingClientRect();

          p5.blendMode(p5.BLEND);
          p5.background(50, 20, 0, 0.02);
          p5.translate(containerSize.width / 2, containerSize.height / 2);
          p5.noFill();
          p5.strokeWeight(p5.random(0, 1));
          p5.stroke(p5.random(10, 70), 100, p5.random(50, 80));

          let increment = p5.map(
            p5.mouseX,
            100,
            containerSize.width,
            0.01,
            p5.PI
          );

          let circleWidth = p5.map(p5.mouseX, 100, containerSize.width, 0, 10);

          if (circleWidth > 5) {
            p5.stroke(p5.random(180, 270), 100, p5.random(50, 80));
          } else if (circleWidth < 3) {
            p5.stroke(360, 100, 100);
          }

          let circleCounter = 0.05;

          p5.beginShape();
          for (let a = 0; a < p5.TWO_PI; a += circleCounter) {
            let r1 = r + p5.random(-20, 20);
            let x = r1 * p5.cos(a);
            let y = r1 * p5.sin(a);

            if (circleWidth < 1) {
              circleCounter = 0.2;
            }

            // circleCounter = p5.map(
            //   p5.mouseX,
            //   100,
            //   containerSize.width,
            //   0.1,
            //   0.02
            // );

            p5.circle(x, y, p5.random(0, circleWidth));

            r = increment * 100;
            p5.print(containerSize.width);
          }

          p5.endShape(p5.CLOSE);

          if (runCounter < 20) {
            runCounter += 1;
            if (firstRun && runCounter === 20) {
              firstRun = false;
              p5.noLoop();
            }
          }
        };

        p5.windowResized = function () {
          const container = canvasRef02.current.parentElement;
          const containerSize = container.getBoundingClientRect();
          p5.resizeCanvas(containerSize.width, containerSize.height);
        };
      },
      canvasRef02.current,
      WebGL2RenderingContext
    );

    return function () {
      canvasInst.current.remove();
      canvasInst.current = null;
    };
  }, [isInitialized]);

  return <div ref={canvasRef02} />;
}

export default P5Canvas02;

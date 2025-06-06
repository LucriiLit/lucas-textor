import React, { useRef, useEffect } from "react";
import p5 from "p5";

function P5Canvas02() {
  const canvasRef02 = useRef(null);
  const canvasInst = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let firstRun = true;
      let runCounter = 0;
      let r = 50;

      // Define custom color palette
      const softPink = "#f6d4f3";
      const mutedOrange = "#f8c8a0";
      const oliveGreen = "#4a5a3c";

      p.setup = function () {
        const container = canvasRef02.current.parentElement;
        const containerSize = container.getBoundingClientRect();
        const canvs = p.createCanvas(containerSize.width, containerSize.height);
        canvs.mouseOver(() => p.loop());
        canvs.mouseOut(() => p.noLoop());
        p.blendMode(p.BLEND);
        p.colorMode(p.RGB);
        p.background(p.color(softPink)); // Soft pink background
      };

      p.draw = function () {
        const container = canvasRef02.current.parentElement;
        const containerSize = container.getBoundingClientRect();

        p.blendMode(p.BLEND);
        // Soft pink background with slight transparency for trailing
        p.background(p.color(softPink + "10")); 
        p.translate(containerSize.width / 2, containerSize.height / 2);
        p.noFill();
        p.strokeWeight(p.random(0, 1));

        // Alternate stroke between muted orange and olive green
        const useMuted = p.random() > 3.5;
        const strokeColor = useMuted
          ? p.color(mutedOrange)
          : p.color(oliveGreen);
        p.stroke(strokeColor);

        let increment = p.map(p.mouseX, 100, containerSize.width, 0.2, p.PI);
        let circleWidth = p.map(p.mouseX, 100, containerSize.width, 0.5, 10);

        // Additional variation based on size
        if (circleWidth > 4.5) {
          p.stroke(p.random() > 0.5 ? p.color(mutedOrange) : p.color(255)); // Emphasize structure
        } else if (circleWidth < 1) {
          p.stroke(p.color(oliveGreen)); // Delicate highlights
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

          p.circle(x, y, p.random(0, circleWidth));

          r = increment * 100;
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
  }, []);

  return <div ref={canvasRef02} />;
}

export default P5Canvas02;

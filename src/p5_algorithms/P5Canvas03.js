import React, { useRef, useEffect } from "react";
import p5 from "p5";

function P5Canvas03() {
  const canvasRef03 = useRef(null);
  const canvasInst = useRef(null);

  useEffect(() => {
    canvasInst.current = new p5((sketch) => {
      let firstRun = true;

      // Define colors
      const lerpColor1 = sketch.color(250, 255, 10); // Primary color
      const lerpColor2 = sketch.color(58, 253, 253); // Secondary color
      const lerpColor3 = sketch.color(255, 55, 250); // Least used color

      sketch.setup = function () {
        const container = canvasRef03.current.parentElement;
        const containerSize = container.getBoundingClientRect();
        const canvs = sketch.createCanvas(
          containerSize.width,
          containerSize.height
        );
        canvs.mouseOver(() => sketch.loop());
        canvs.mouseOut(() => sketch.noLoop());
        sketch.background(0, 0, 0);
      };

      sketch.draw = function () {
        sketch.background(0, 0, 0, 20);
        sketch.noFill();

        let linienanzahl = 10; // Number of lines
        let wellen = sketch.mouseY / 100 + 80; // Based on mouseY
        let timeInteractor = sketch.mouseX / 2 + 100; // Based on mouseX

        if (firstRun) {
          wellen = 200; // Default value
          timeInteractor = 100; // Default value
        }

        let time = (sketch.millis() / timeInteractor) * -0.01;

        for (let j = 0; j < linienanzahl; j++) {
          // Calculate color blend
          let colorValue = j / linienanzahl;
          let strokeColor = sketch.lerpColor(lerpColor1, lerpColor2, colorValue);
          strokeColor = sketch.lerpColor(strokeColor, lerpColor3, colorValue * 0.1); // Least used color blended sparingly

          sketch.beginShape();
          sketch.stroke(strokeColor);
          sketch.strokeWeight(0.8 + j * 0.05); // Adjust stroke weight based on line index

          for (let i = 0; i < wellen; i++) {
            let wellenabstand = (j / timeInteractor) * 4 + time;
            let py = i / (50 + j);

            let y = sketch.noise(wellenabstand, py) * sketch.height;
            let x = (i / (wellen - 20)) * sketch.width;

            sketch.vertex(x, y);
          }
          sketch.endShape();
        }

        if (firstRun) {
          sketch.noLoop();
          firstRun = false;
        }
      };

      sketch.windowResized = function () {
        const container = canvasRef03.current.parentElement;
        const containerSize = container.getBoundingClientRect();
        sketch.resizeCanvas(containerSize.width, containerSize.height);
      };
    }, canvasRef03.current);

    return function () {
      canvasInst.current.remove();
      canvasInst.current = null;
    };
  }, []);

  return <div ref={canvasRef03} />;
}

export default P5Canvas03;

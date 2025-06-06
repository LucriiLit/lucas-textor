import React, { useRef, useEffect } from "react";
import p5 from "p5";

function P5Canvas03() {
  const canvasRef03 = useRef(null);
  const canvasInst = useRef(null);

  useEffect(() => {
    canvasInst.current = new p5((sketch) => {
      let firstRun = true;

      // Define custom color palette
      const lerpColor1 = sketch.color("#f8c8a0"); // Muted Orange
      const lerpColor2 = sketch.color("#4a5a3c"); // Olive Green
      const lerpColor3 = sketch.color("#f6d4f3"); // Soft Pink (used as light blend)

      sketch.setup = function () {
        const container = canvasRef03.current.parentElement;
        const containerSize = container.getBoundingClientRect();
        const canvs = sketch.createCanvas(
          containerSize.width,
          containerSize.height
        );
        canvs.mouseOver(() => sketch.loop());
        canvs.mouseOut(() => sketch.noLoop());
        sketch.background(lerpColor3); // Soft pink background
      };

      sketch.draw = function () {
        // Faint trailing effect with soft pink
        sketch.background(lerpColor3.levels[0], lerpColor3.levels[1], lerpColor3.levels[2], 20);
        sketch.noFill();

        let linienanzahl = 10; // Number of lines
        let wellen = sketch.mouseY / 100 + 80; // Based on mouseY
        let timeInteractor = sketch.mouseX / 2 + 100; // Based on mouseX

        if (firstRun) {
          wellen = 200;
          timeInteractor = 100;
        }

        let time = (sketch.millis() / timeInteractor) * -0.01;

        for (let j = 0; j < linienanzahl; j++) {
          let colorValue = j / linienanzahl;

          // Blend between muted orange and olive green, with a soft pink overlay
          let strokeColor = sketch.lerpColor(lerpColor1, lerpColor2, colorValue);
          strokeColor = sketch.lerpColor(strokeColor, lerpColor3, 0.2); // Slightly soften with pink

          sketch.beginShape();
          sketch.stroke(strokeColor);
          sketch.strokeWeight(0.8 + j * 0.05); // Dynamic stroke weight

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

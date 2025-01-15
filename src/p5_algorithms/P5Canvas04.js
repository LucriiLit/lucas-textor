import React, { useRef, useEffect } from "react";
import p5 from "p5";

function P5Canvas04() {
  const canvasRef04 = useRef(null);
  const canvasInstance = useRef(null);

  useEffect(() => {
    canvasInstance.current = new p5(
      (sketch) => {
        let firstRun = true;
        let wellen = 200;
        let timeInteractor;

        // Taiwan Flag Colors
        const lerpColor1 = sketch.color(186, 12, 47); // Red
        const lerpColor2 = sketch.color(0, 56, 168); // Blue
        const lerpColor3 = sketch.color(255); // White (for highlights)

        sketch.setup = function () {
          const container = canvasRef04.current.parentElement;
          const containerSize = container.getBoundingClientRect();
          const canvs = sketch.createCanvas(
            containerSize.width,
            containerSize.height
          );
          canvs.mouseOver(() => sketch.loop());
          canvs.mouseOut(() => sketch.noLoop());
          sketch.frameRate(40);
          sketch.background(0); // Dark background
        };

        sketch.draw = function () {
          // Check for firstRun and run initial setup
          if (firstRun) {
            sketch.background(0);
            wellen = 200;
            timeInteractor = 120;
          }

          sketch.background(0, 70);
          sketch.noFill();

          const linienanzahlAussen = 6; // Number of outer circular lines
          const linienanzahlMitte = 7; // Number of inner circular lines
          const linienanzahlInnen = 8; // Number of inner circular lines
          const timee = (sketch.millis() / timeInteractor) * -0.01;

          const centerX = sketch.width / 1.2;
          const centerY = sketch.height * 0.1;

          // Outer lines
          sketch.noiseSeed(121);
          for (let j = 0; j < linienanzahlInnen; j++) {
            const colorValue = sketch.map(j, 0, linienanzahlInnen - 1, 0, 1);
            let strokeColor = sketch.lerpColor(lerpColor1, lerpColor3, colorValue);
            strokeColor = sketch.lerpColor(strokeColor, lerpColor3, colorValue * 0.2); // Least used color sparingly

            const strokeWeightVal = 1.4 + j * 0.04;

            sketch.beginShape();
            sketch.stroke(strokeColor);
            sketch.strokeWeight(strokeWeightVal);

            for (let i = 0; i <= wellen; i++) {
              const angle = sketch.map(i, 0, wellen, 0, sketch.TWO_PI);
              const radiusOffset = (j / timeInteractor) * 2 + timee;
              const radius = 270 + (j * 1) + sketch.noise(radiusOffset, angle) * 150;

              const x = centerX + sketch.cos(angle) * radius;
              const y = centerY + sketch.sin(angle) * radius;

              sketch.vertex(x, y);
            }
            sketch.endShape(sketch.CLOSE);
          }

          // Middle lines
          sketch.noiseSeed(42);
          for (let j = 0; j < linienanzahlMitte; j++) {
            const colorValue = sketch.map(j, 0, linienanzahlAussen - 1, 0, 1);
            let strokeColor = sketch.lerpColor(lerpColor1, lerpColor2, colorValue);
            strokeColor = sketch.lerpColor(strokeColor, lerpColor3, colorValue * 0.2); // Least used color sparingly

            const strokeWeightVal = 0.8 + j * 0.2;

            sketch.beginShape();
            sketch.stroke(strokeColor);
            sketch.strokeWeight(strokeWeightVal);

            for (let i = 0; i <= wellen; i++) {
              const angle = sketch.map(i, 0, wellen, 0, sketch.TWO_PI);
              const radiusOffset = (j / timeInteractor) * 2 + timee;
              const radius = 150 + (j * 2) + sketch.noise(radiusOffset, angle) * 120;

              const x = centerX + sketch.cos(angle) * radius;
              const y = centerY + sketch.sin(angle) * radius;

              sketch.vertex(x, y);
            }
            sketch.endShape(sketch.CLOSE);
          }

          // Inner lines
          sketch.noiseSeed(84);
          for (let j = 0; j < linienanzahlInnen; j++) {
            const colorValue = sketch.map(j, 0, linienanzahlInnen - 1, 0, 1);
            let strokeColor = sketch.lerpColor(lerpColor2, lerpColor3, colorValue);
            strokeColor = sketch.lerpColor(strokeColor, lerpColor3, colorValue * 0.2); // Least used color sparingly

            const strokeWeightVal = 0.8 + j * 0.02;

            sketch.beginShape();
            sketch.stroke(strokeColor);
            sketch.strokeWeight(strokeWeightVal);

            for (let i = 0; i <= wellen; i++) {
              const angle = sketch.map(i, 0, wellen, 0, sketch.TWO_PI);
              const radiusOffset = (j / timeInteractor) * 2 + timee;
              const radius = 60 + (j * 1) + sketch.noise(radiusOffset, angle) * 50;

              const x = centerX + sketch.cos(angle) * radius;
              const y = centerY + sketch.sin(angle) * radius;

              sketch.vertex(x, y);
            }
            sketch.endShape(sketch.CLOSE);
          }

          if (firstRun) {
            sketch.noLoop();
            firstRun = false;
          }
        };

        sketch.mouseMoved = function () {
          timeInteractor = sketch.map(sketch.mouseX, 0, sketch.width, 26, 100);
        };

        sketch.windowResized = function () {
          const container = canvasRef04.current.parentElement;
          const containerSize = container.getBoundingClientRect();
          sketch.resizeCanvas(containerSize.width, containerSize.height);
        };
      },
      canvasRef04.current,
      WebGL2RenderingContext
    );

    return () => {
      canvasInstance.current.remove();
      canvasInstance.current = null;
    };
  }, []);

  return <div ref={canvasRef04} />;
}

export default P5Canvas04;

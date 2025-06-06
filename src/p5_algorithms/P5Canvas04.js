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

        // Custom color palette
        const lerpColor1 = sketch.color("#f8c8a0"); // Muted Orange
        const lerpColor2 = sketch.color("#4a5a3c"); // Olive Green
        const lerpColor3 = sketch.color("#f6d4f3"); // Soft Pink (highlight)

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
          sketch.background(lerpColor3); // Soft Pink background
        };

        sketch.draw = function () {
          if (firstRun) {
            sketch.background(lerpColor3);
            wellen = 200;
            timeInteractor = 120;
          }

          // Transparent background layer for motion blur effect
          sketch.background(
            lerpColor3.levels[0],
            lerpColor3.levels[1],
            lerpColor3.levels[2],
            70
          );

          sketch.noFill();

          const linienanzahlMitte = 7;
          const linienanzahlInnen = 8;
          const timee = (sketch.millis() / timeInteractor) * -0.01;

          const centerX = sketch.width / 1.2;
          const centerY = sketch.height * 0.1;

          // Outer Lines — from Olive Green to Soft Pink
          sketch.noiseSeed(121);
          for (let j = 0; j < linienanzahlInnen; j++) {
            const colorValue = sketch.map(j, 0, linienanzahlInnen - 1, 0, 1);
            let strokeColor = sketch.lerpColor(lerpColor2, lerpColor3, colorValue);
            strokeColor = sketch.lerpColor(strokeColor, lerpColor3, colorValue * 0.2);

            sketch.beginShape();
            sketch.stroke(strokeColor);
            sketch.strokeWeight(1.4 + j * 0.04);

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

          // Middle Lines — from Muted Orange to Olive Green
          sketch.noiseSeed(42);
          for (let j = 0; j < linienanzahlMitte; j++) {
            const colorValue = sketch.map(j, 0, linienanzahlMitte - 1, 0, 1);
            let strokeColor = sketch.lerpColor(lerpColor1, lerpColor2, colorValue);
            strokeColor = sketch.lerpColor(strokeColor, lerpColor3, colorValue * 0.2);

            sketch.beginShape();
            sketch.stroke(strokeColor);
            sketch.strokeWeight(0.8 + j * 0.2);

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

          // Inner Lines — from Olive Green to Soft Pink
          sketch.noiseSeed(84);
          for (let j = 0; j < linienanzahlInnen; j++) {
            const colorValue = sketch.map(j, 0, linienanzahlInnen - 1, 0, 1);
            let strokeColor = sketch.lerpColor(lerpColor2, lerpColor3, colorValue);
            strokeColor = sketch.lerpColor(strokeColor, lerpColor3, colorValue * 0.2);

            sketch.beginShape();
            sketch.stroke(strokeColor);
            sketch.strokeWeight(0.8 + j * 0.02);

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

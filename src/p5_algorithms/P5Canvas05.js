import React, { useRef, useEffect } from "react";
import p5 from "p5";

function P5CanvasOrganic() {
  const canvasRefOrganic = useRef(null);
  const canvasInst = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      // Taiwanese Flag Colors
      const lerpColor1 = p.color(186, 12, 47); // Red (Primary Color)
      const lerpColor2 = p.color(0, 56, 168); // Blue (Secondary Color)
      const cellSize = 10; // Smaller cells for higher resolution

      p.setup = function () {
        const container = canvasRefOrganic.current.parentElement;
        const containerSize = container.getBoundingClientRect();
        const canvas = p.createCanvas(containerSize.width, containerSize.height);
        canvas.mouseOver(() => p.loop());
        canvas.mouseOut(() => p.noLoop());
        p.noStroke();
        p.noLoop();
      };

      p.draw = function () {
        const container = canvasRefOrganic.current.parentElement;
        const containerSize = container.getBoundingClientRect();
        p.resizeCanvas(containerSize.width, containerSize.height);

        // Background
        p.background(30); // Dark background for good contrast

        // Layer 1: Colorful organic shapes
        for (let y = 0; y < containerSize.height; y += cellSize) {
          for (let x = 0; x < containerSize.width; x += cellSize) {
            const distance = p.dist(x, y, p.mouseX, p.mouseY);
            const lerpFactor = p.map(distance, 0, containerSize.width, 0, 1);
            const cellColor = p.lerpColor(lerpColor1, lerpColor2, lerpFactor);

            // Calculate the radius of the colorful circles (we reduce them)
            const radius = p.map(distance * 14, 0, containerSize.width, (cellSize / 20), (cellSize / 200));

            p.fill(cellColor);
            p.push();
            p.translate(x, y);
            p.beginShape();
            for (let a = 0; a < p.TWO_PI; a += p.PI / 6) {
              const r = radius + p.noise(x * 0.05, y * 0.05, p.frameCount * 0.01) * 8;
              const posX = r * p.cos(a);
              const posY = r * p.sin(a);
              p.vertex(posX, posY);
            }
            p.endShape(p.CLOSE);
            p.pop();
          }
        }

        // Layer 2: White dots
        for (let y = 0; y < containerSize.height; y += cellSize) {
          for (let x = 0; x < containerSize.width; x += cellSize) {
            const distance = p.dist(x, y, p.mouseX, p.mouseY);

            // Calculate the radius of the white dots (they are 1/3 the size of the colorful circles)
            // Ensure white dots remain visible even at a large distance, but always shrink
            const maxWhiteRadius = (cellSize * 0.15) / 3; // Max radius of the white dots
            const whiteRadius = p.map(distance, 0, containerSize.width, maxWhiteRadius, 0);

            // White dots always on top
            p.fill(255, 200); // Semi-transparent white color
            p.circle(x, y, whiteRadius);
          }
        }
      };

      p.windowResized = function () {
        const container = canvasRefOrganic.current.parentElement;
        const containerSize = container.getBoundingClientRect();
        p.resizeCanvas(containerSize.width, containerSize.height);
      };
    };

    canvasInst.current = new p5(sketch, canvasRefOrganic.current);

    return () => {
      canvasInst.current.remove();
      canvasInst.current = null;
    };
  }, []);

  return <div ref={canvasRefOrganic} />;
}

export default P5CanvasOrganic;

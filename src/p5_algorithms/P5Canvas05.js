import React, { useRef, useEffect } from "react";
import p5 from "p5";

function P5CanvasOrganic() {
  const canvasRefOrganic = useRef(null);
  const canvasInst = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      // Custom pastel palette
      const lerpColor1 = p.color("#f8c8a0"); // Muted Orange
      const lerpColor2 = p.color("#4a5a3c"); // Olive Green
      const highlightColor = p.color("#f6d4f3"); // Soft Pink for white dots
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
        p.background("#f6d4f3"); // Soft Pink background

        // Layer 1: Organic color blobs
        for (let y = 0; y < containerSize.height; y += cellSize) {
          for (let x = 0; x < containerSize.width; x += cellSize) {
            const distance = p.dist(x, y, p.mouseX, p.mouseY);
            const lerpFactor = p.map(distance, 0, containerSize.width, 0, 1);
            const cellColor = p.lerpColor(lerpColor1, lerpColor2, lerpFactor);

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

        // Layer 2: Soft Pink "highlight" dots
        for (let y = 0; y < containerSize.height; y += cellSize) {
          for (let x = 0; x < containerSize.width; x += cellSize) {
            const distance = p.dist(x, y, p.mouseX, p.mouseY);
            const maxRadius = (cellSize * 0.15) / 3;
            const highlightRadius = p.map(distance, 0, containerSize.width, maxRadius, 0);

            p.fill(highlightColor);
            p.circle(x, y, highlightRadius);
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

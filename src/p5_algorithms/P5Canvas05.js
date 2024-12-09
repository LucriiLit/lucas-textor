import React, { useRef, useEffect } from "react";
import p5 from "p5";

function P5CanvasOrganic() {
  const canvasRefOrganic = useRef(null);
  const canvasInst = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      const lerpColor1 = p.color(250, 255, 10); // Primärfarbe
      const lerpColor2 = p.color(58, 253, 253); // Sekundärfarbe
      const cellSize = 10; // Kleinere Zellen für höhere Auflösung

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

        // Hintergrund
        p.background(30); // Dunkler Hintergrund für guten Kontrast

        // Layer 1: Bunte organische Formen
        for (let y = 0; y < containerSize.height; y += cellSize) {
          for (let x = 0; x < containerSize.width; x += cellSize) {
            const distance = p.dist(x, y, p.mouseX, p.mouseY);
            const lerpFactor = p.map(distance, 0, containerSize.width, 0, 1);
            const cellColor = p.lerpColor(lerpColor1, lerpColor2, lerpFactor);

            // Berechnung des Radius der bunten Kreise (wir verkleinern sie)
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

        // Layer 2: Weiße Punkte
        for (let y = 0; y < containerSize.height; y += cellSize) {
          for (let x = 0; x < containerSize.width; x += cellSize) {
            const distance = p.dist(x, y, p.mouseX, p.mouseY);

            // Berechnung des Radius der weißen Punkte (sie sind 1/3 der bunten Kreise)
            // Wir sorgen dafür, dass weiße Punkte auch bei großer Entfernung noch sichtbar sind, aber immer kleiner werden
            const maxWhiteRadius = (cellSize * 0.15) / 3; // Maximaler Radius der weißen Punkte
            const whiteRadius = p.map(distance, 0, containerSize.width, maxWhiteRadius, 0);

            // Weiße Punkte sind immer oben
            p.fill(255, 200); // Semi-transparente weiße Farbe
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

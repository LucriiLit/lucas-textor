import React, { useRef } from "react";
import p5 from "p5";
import { useEffect } from "react";
import { useState } from "react";

function P5Canvas03() {
  const canvasRef03 = useRef(null);
  const canvasInst = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;

    canvasInst.current = new p5((sketch) => {
      let firstRun = true;

      sketch.setup = function () {
        const container = canvasRef03.current.parentElement;
        const containerSize = container.getBoundingClientRect();
        const canvs = sketch.createCanvas(
          containerSize.width,
          containerSize.height
        );
        canvs.mouseOver(() => sketch.loop());
        canvs.mouseOut(() => sketch.noLoop());
        setIsInitialized(true);
        sketch.background(105, 180, 190);
      };

      sketch.draw = function () {
        sketch.background(105, 180, 190, 10);
        sketch.noFill();

        let linienanzahl = 10;
        let wellen = 200;

        let time = sketch.millis() / 5000;

        for (let j = 0; j < linienanzahl; j++) {
          let farbe = (j / linienanzahl) * 360;

          sketch.beginShape();
          sketch.stroke(200, 200, farbe);

          for (let i = 0; i < wellen; i++) {
            let wellenabstand = j / 10 + time;
            let py = i / (50 + j);

            let y = sketch.noise(wellenabstand, py) * sketch.height;

            let x = (i / (wellen - 1)) * sketch.width;

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
  }, [isInitialized]);

  return <div ref={canvasRef03} />;
}

export default P5Canvas03;

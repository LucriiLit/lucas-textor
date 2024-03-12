import React, { useRef, useEffect } from "react";
import p5 from "p5";

function P5Canvas03() {
  const canvasRef03 = useRef(null);
  const canvasInst = useRef(null);
  // const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // if (isInitialized) return;

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
        // setIsInitialized(true);
        sketch.background(0, 0, 0);
      };

      sketch.draw = function () {
        sketch.background(0, 0, 0, 20);
        sketch.noFill();

        let linienanzahl = 10;
        let wellen = sketch.mouseY;
        let timeInteractor = sketch.mouseX;

        if (firstRun) {
          wellen = 200;
          timeInteractor = 100;
        }

        let time = (sketch.millis() / timeInteractor) * -0.01;

        for (let j = 0; j < linienanzahl; j++) {
          let farbe = (j / linienanzahl) * 360;

          sketch.beginShape();
          sketch.stroke(300, 200, farbe);
          sketch.strokeWeight(0.8);

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
  }, );

  return <div ref={canvasRef03} />;
}

export default P5Canvas03;

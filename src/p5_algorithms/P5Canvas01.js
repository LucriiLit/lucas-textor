import React, { useRef, useEffect } from "react";
import p5 from "p5";

function P5Canvas01() {
  const canvasRef01 = useRef(null);
  const canvasInst = useRef(null);

  useEffect(() => {
    canvasInst.current = new p5(
      (sketch) => {
        let firstRun = true;
        let runCounter = 0;
        let strahlen = [16, 5, 8];
        let strahlenIndex = 0;
        let rects = 1;

        let perlenWert1 = 10;
        let perlenWert2 = 100;
        let perlenWert3 = 69;
        let perlenWert4 = 42;

        // Define the color palette
        const primaryColor = sketch.color(205, 255, 14); // Primary
        const secondaryColor = sketch.color(58, 253, 253); // Secondary

        sketch.setup = function () {
          const container = canvasRef01.current.parentElement;
          const containerSize = container.getBoundingClientRect();
          const canvs = sketch.createCanvas(
            containerSize.width,
            containerSize.height
          );
          canvs.mouseOver(() => sketch.loop());
          canvs.mouseOut(() => sketch.noLoop());
          sketch.frameRate(30);
          sketch.angleMode(sketch.DEGREES);
          sketch.blendMode(sketch.BLEND);
          sketch.background(0);
          sketch.noiseSeed(200);
        };
        

        sketch.draw = function () {  

          const container = canvasRef01.current.parentElement;
          const containerSize = container.getBoundingClientRect();

          sketch.background(0, 10);
          sketch.translate(containerSize.width / 2, containerSize.height / 2);
          sketch.strokeWeight(1);
          sketch.noFill();
          sketch.scale(1);

          let constructColor1 = primaryColor;
          let constructColor2 = secondaryColor;

          // Berechne die Distanz der Maus zur Mitte
          const mouseX = sketch.mouseX - containerSize.width / 2;
          const mouseY = sketch.mouseY - containerSize.height / 2;
          const distanceToCenter = sketch.dist(0, 0, mouseX, mouseY);
          // console.log('Distance to Center:', distanceToCenter);
          
          // Skaliere den Einfluss der Maus basierend auf der Distanz
          const mouseEffect = sketch.map(
            distanceToCenter,
            0,
            Math.min(containerSize.width, containerSize.height) / 2,
            2,
            0.9
          );

          // RADIAL SPECTRUM LINES
          sketch.push();

          let perle1 = sketch.noise(perlenWert1 / 30);
          perlenWert1 += 1;
          let perle2 = sketch.noise(perlenWert2 / 60);
          perlenWert2 += 1;
          let perle3 = sketch.noise(perlenWert3 / 40);
          perlenWert3 += 1;
          let perle4 = sketch.noise(perlenWert4 / 40);
          perlenWert4 += 1;

          // STRAHLEN
          for (let i = 0; i < strahlen[strahlenIndex]; i++) {
            let angle = sketch.map(i, 0, strahlen[strahlenIndex], 0, 360);
            let r = sketch.map(perle1, 0, 1, 30, 120);
            let grow = sketch.map(perle3, 0, 1, 1, 20);
            let grow2 = sketch.map(perle4, 0, 1, 1, 20);

            let x = r * sketch.cos(angle);
            let y = r * sketch.sin(angle);
            let x2 = 26 * sketch.cos(angle);
            let y2 = 26 * sketch.sin(angle);

            sketch.rotate(45);
            if (firstRun) {
              sketch.strokeWeight(0.5);
            }
            sketch.stroke(
              constructColor2.levels[1],
              constructColor2.levels[1],
              constructColor2.levels[2],
              100
            );
            sketch.strokeWeight(1);
            sketch.line(x / mouseEffect, y / mouseEffect, x, y);

            sketch.stroke(
              constructColor1.levels[0],
              constructColor1.levels[1],
              constructColor1.levels[2],
              100
            );
            sketch.line(
              x2 * 3 * (containerSize.width / 250) + grow,
              y2 * 2 * (containerSize.width / 250) + grow,
              x,
              y
            );

            sketch.stroke(
              constructColor2.levels[0],
              constructColor2.levels[1],
              constructColor2.levels[2],
              100
            );
            sketch.line(
              x2 * 3 * (containerSize.width / 250) + grow2,
              y2 * 4 * (containerSize.width / 250) + grow2,
              x,
              y
            );
          }
          sketch.pop();

          // CIRC (White Circle in the middle)
          sketch.push();
          for (let j = 0; j < rects; j++) {
            let r = sketch.map(perle2, 0, 1, 0, 80);

            sketch.stroke(255); // White color for the circle
            sketch.strokeWeight(0.5);
            sketch.circle(0, 0, r, r);
          }
          sketch.pop();

          if (runCounter < 20) {
            runCounter += 1;
            if (firstRun && runCounter === 20) {
              firstRun = false;
              sketch.noLoop();
            }
          }
        };

        sketch.windowResized = function () {
          const container = canvasRef01.current.parentElement;
          const containerSize = container.getBoundingClientRect();
          sketch.resizeCanvas(containerSize.width, containerSize.height);
        };
      },
      canvasRef01.current,
      WebGL2RenderingContext
    );

    return function () {
      canvasInst.current.remove();
      canvasInst.current = null;
    };
  }, []);

  return <div className="p5Canvas" ref={canvasRef01} />;
}

export default P5Canvas01;
import React, { useRef } from "react";
import p5 from "p5";
import { useEffect } from "react";
import { useState } from "react";

function P5Canvas05() {
  const canvasRef05 = useRef(null);
  const canvasInst = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;

    canvasInst.current = new p5((sketch) => {
      let firstRun = true;
      let xoff1 = 0;
      let xoff2 = 10;

      let xoff1A = 20;
      let xoff2A = 120;

      let xoff1B = 40;
      let xoff2B = 140;

      let xoff1C = 60;
      let xoff2C = 160;

      sketch.setup = function () {
        const container = canvasRef05.current.parentElement;
        const containerSize = container.getBoundingClientRect();
        const canvs = sketch.createCanvas(
          containerSize.width,
          containerSize.height
        );
        canvs.mouseOver(() => sketch.loop());
        canvs.mouseOut(() => sketch.noLoop());
        setIsInitialized(true);
      };

      sketch.draw = function () {
        sketch.background(0, 0, 0);
        sketch.noStroke();

        const container = canvasRef05.current.parentElement;
        const containerSize = container.getBoundingClientRect();

        let Viertel0 = 0;
        let Viertel1 = (containerSize.width / 4) * 1;
        let Viertel2 = (containerSize.width / 4) * 2;
        let Viertel3 = (containerSize.width / 4) * 3;
        let Viertel4 = containerSize.width;
        let hälfteHöheStart = (containerSize.height / 4) * 1;
        let hälfteHöheEnde = (containerSize.height / 4) * 3;
        let starDustSize = sketch.random(1, 10);

        //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
        //GreenGrid
        xoff1 = xoff1 + 0.005;
        xoff2 = xoff2 + 0.005;
        sketch.fill(240, 160, 59);
        // let y = map(noise(x / 100), 0, 1, 0, containerSize.height)
        // let x = noise(xoff) * width;
        // let y = containerSize.height / 2;
        let x = sketch.map(sketch.noise(xoff1), 0, 1, Viertel0, Viertel1);
        let y = sketch.map(
          sketch.noise(xoff2),
          0,
          1,
          hälfteHöheStart,
          hälfteHöheEnde
        );

        // Hover Feld Viertel 1
        if (sketch.mouseX >= Viertel0 && sketch.mouseX <= Viertel1) {
          sketch.noStroke();
          // fill(255, 255, 255, 0.5);
          // rect(Viertel0,Viertel0,Viertel1,containerSize.height);

          //stop movement
          xoff1 -= 0.005;
          xoff2 -= 0.005;

          //spawn Stardust
          sketch.push();
          sketch.noFill();
          sketch.stroke(240, 160, 59);
          sketch.ellipse(
            sketch.random(Viertel0, Viertel1),
            sketch.random(0, containerSize.height),
            starDustSize,
            starDustSize
          );
          sketch.noStroke();
          sketch.fill(200, 200, 200, 20);
          sketch.rect(Viertel0, Viertel0, Viertel1, containerSize.height);
          sketch.pop();
        }

        for (let w = 0; w < 6; w++) {
          for (let s = 0; s < 6; s++) {
            sketch.rect(x + w * 15, y + s * 15, 3, 3);
          }
        }
        x += sketch.noise();

        //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
        //GreenBall
        xoff1A += 0.005;
        xoff2A += 0.005;
        sketch.fill(231, 165, 131);
        // let xA = noise(xoff1A) * Viertel1 + Viertel1;
        // let yA = noise(xoff2A) * hälfteHöheStart + hälfteHöheStart;
        let xA = sketch.map(sketch.noise(xoff1A), 0, 1, Viertel1, Viertel2);
        let yA = sketch.map(
          sketch.noise(xoff2A),
          0,
          1,
          hälfteHöheStart,
          hälfteHöheEnde
        );

        // Hover Feld Viertel 2
        if (sketch.mouseX >= Viertel1 && sketch.mouseX <= Viertel2) {
          //stop movement
          xoff1A -= 0.005;
          xoff2A -= 0.005;

          //spawn Stardust
          sketch.push();
          sketch.noFill();
          sketch.stroke(231, 165, 131);
          sketch.ellipse(
            xA + sketch.random(-50, 50),
            yA + sketch.random(-50, 50),
            starDustSize,
            starDustSize
          );
          sketch.noStroke();
          sketch.fill(200, 200, 200, 20);
          sketch.rect(Viertel1, Viertel0, Viertel1, containerSize.height);
          sketch.pop();
        }

        sketch.ellipse(xA, yA, 25, 25);

        xA += sketch.noise();

        //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
        //BlueGrid
        xoff1B += 0.005;
        xoff2B += 0.005;
        sketch.fill(202, 73, 88);
        sketch.stroke(143, 173, 255);
        // let y = map(noise(x / 100), 0, 1, 0, containerSize.height)
        // let x = noise(xoff) * width;
        // let y = containerSize.height / 2;
        let xB = sketch.map(sketch.noise(xoff1B), 0, 1, Viertel2, Viertel3);
        let yB = sketch.map(
          sketch.noise(xoff2B),
          0,
          1,
          hälfteHöheStart,
          hälfteHöheEnde
        );

        // Hover Feld Viertel 3
        if (sketch.mouseX >= Viertel2 && sketch.mouseX <= Viertel3) {
          //stop movement
          xoff1B -= 0.005;
          xoff2B -= 0.005;

          //spawn Stardust
          sketch.push();
          sketch.noFill();
          sketch.stroke(143, 173, 255);
          sketch.ellipse(
            sketch.random(Viertel2, Viertel3),
            sketch.random(0, containerSize.height),
            starDustSize,
            starDustSize
          );
          sketch.noStroke();
          sketch.fill(200, 200, 200, 20);
          sketch.rect(Viertel2, Viertel0, Viertel1, containerSize.height);
          sketch.pop();
        }

        for (let g = 0; g < 10; g++) {
          sketch.strokeWeight(1);
          sketch.line(xB + g * 8, yB, xB + g * 8, yB + 80);
        }

        // for(l = 0; l < 10; l++) {
        //     line(xB - 4, yB + l*8 + 4, xB + 80 - 4, yB + l*8 + 4);
        // }

        xB += sketch.noise();

        //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
        //RingBall
        xoff1C += 0.005;
        xoff2C += 0.005;
        sketch.fill(202, 73, 88);
        sketch.stroke(202, 73, 88);
        let xC = sketch.map(sketch.noise(xoff1C), 0, 1, Viertel3, Viertel4);
        let yC = sketch.map(
          sketch.noise(xoff2C),
          0,
          1,
          hälfteHöheStart,
          hälfteHöheEnde
        );

        // Hover Feld Viertel 4
        if (sketch.mouseX >= Viertel3 && sketch.mouseX <= Viertel4) {
          //stop movement
          xoff1C -= 0.005;
          xoff2C -= 0.005;

          //spawn Stardust
          sketch.push();
          sketch.noFill();
          sketch.stroke(202, 73, 88);
          sketch.ellipse(
            xC + sketch.random(-50, 50),
            yC + sketch.random(-50, 50),
            starDustSize,
            starDustSize
          );
          sketch.noStroke();
          sketch.fill(200, 200, 200, 20);
          sketch.rect(Viertel3, Viertel0, Viertel1, containerSize.height);
          sketch.pop();
        }

        sketch.ellipse(xC, yC, 25, 25);
        sketch.noFill();
        sketch.ellipse(xC, yC, 50, 50);

        xC += sketch.noise();

        if (firstRun) {
          sketch.noLoop();
          firstRun = false;
        }
      };

      sketch.windowResized = function () {
        const container = canvasRef05.current.parentElement;
        const containerSize = container.getBoundingClientRect();
        sketch.resizeCanvas(containerSize.width, containerSize.height);
      };
    }, canvasRef05.current);

    return function () {
      canvasInst.current.remove();
      canvasInst.current = null;
    };
  }, [isInitialized]);

  return <div ref={canvasRef05} />;
}

export default P5Canvas05;

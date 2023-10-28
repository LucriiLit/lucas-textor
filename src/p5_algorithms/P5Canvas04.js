import React, { useRef } from "react";
import p5 from "p5";
import { useEffect } from "react";
import { useState } from "react";

function P5Canvas04() {
  const canvasRef04 = useRef(null);
  const canvasInst = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;

    canvasInst.current = new p5((sketch) => {
      let firstRun = true;
      let angle = 0;

      sketch.setup = function () {
        const container = canvasRef04.current.parentElement;
        const containerSize = container.getBoundingClientRect();
        const canvs = sketch.createCanvas(
          containerSize.width,
          containerSize.height
        );
        canvs.mouseOver(() => sketch.loop());
        canvs.mouseOut(() => sketch.noLoop());
        sketch.rectMode(sketch.CENTER);
        setIsInitialized(true);
        sketch.background(0, 0, 0);
      };

      sketch.draw = function () {
        sketch.background(0, 0, 0, 80);
        sketch.noFill();
        sketch.strokeWeight(1);

        const container = canvasRef04.current.parentElement;
        const containerSize = container.getBoundingClientRect();

        sketch.translate(containerSize.width / 2, containerSize.height / 2);

        sketch.push();
        sketch.stroke(100, 100, 255);
        sketch.rotate((sketch.PI / 360) * angle);
        sketch.rect(0, 0, 50, 50);
        sketch.circle(70, 70, 40);
        sketch.line(25, 25, 55, 55);

        sketch.push();
        sketch.stroke("white");
        sketch.translate(70, 70);
        sketch.rotate((sketch.PI / 180) * angle);
        sketch.circle(40, 0, 8);
        sketch.circle(0, 40, 8);
        sketch.circle(-40, 0, 8);
        sketch.circle(0, -40, 8);
        sketch.pop();
        sketch.pop();

        sketch.push();
        sketch.stroke(200, 170, 100);
        sketch.rotate((sketch.PI / 180) * angle * -1);
        sketch.circle(70, 70, 20);
        sketch.rect(0, 0, 15, 15);
        sketch.pop();

        angle = angle + 1;

        if (firstRun) {
          sketch.noLoop();
          firstRun = false;
        }
      };

      sketch.windowResized = function () {
        const container = canvasRef04.current.parentElement;
        const containerSize = container.getBoundingClientRect();
        sketch.resizeCanvas(containerSize.width, containerSize.height);
      };
    }, canvasRef04.current);

    return function () {
      canvasInst.current.remove();
      canvasInst.current = null;
    };
  }, [isInitialized]);

  return <div ref={canvasRef04} />;
}

export default P5Canvas04;

import Head from "next/head";
import {
  Engine,
  Render,
  Bodies,
  Composite,
  Runner,
  Mouse,
  MouseConstraint,
  Constraint,
  World,
} from "matter-js";
import { useEffect } from "react";

export default function Play() {
  useEffect(() => {
    var canvas = document.getElementById("canvas")!;

    const backgrounds = ["#111921", "#fffbf3", "#f4d4d6", "#5f8db5", "#035157"];
    const background =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];

    console.log(background);

    var engine = Engine.create();
    var world = engine.world;
    var render = Render.create({
      element: canvas,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: background,
      },
    });

    addEventListener("resize", () => {
      render.canvas.height = window.innerHeight;
      render.canvas.width = window.innerWidth;
    });

    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    World.add(world, [boxA, boxB, ground]);
    Render.run(render);

    var runner = Runner.create();
    Runner.run(runner, engine);

    var mouse = Mouse.create(render.canvas);
    var mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      } as any,
    });

    World.add(world, mouseConstraint);

    (render as any).mouse = mouse;
  }, []);

  return (
    <>
      <Head>
        <title>Play - Berly Dai</title>
      </Head>
      <div id="canvas" className="w-full h-full relative"></div>
    </>
  );
}

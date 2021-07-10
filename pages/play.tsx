import Head from "next/head";
import {
  Engine,
  Render,
  Bodies,
  Runner,
  Mouse,
  MouseConstraint,
  World,
} from "matter-js";
import { useEffect, useState } from "react";
import Header from "../components/Landing/Header";

export default function Play() {
  const [dirty, setDirty] = useState(false);
  const [tooSmall, setTooSmall] = useState(false);
  const [background, setBackground] = useState("");
  let renderBackground;

  useEffect(() => {
    if (window.innerWidth < 768) {
      setTooSmall(true);
      return;
    } else {
      setTooSmall(false);
    }
    const canvas = document.getElementById("canvas")!;

    const back = Math.floor(Math.random() * 3);
    const backgrounds = ["#111921", "#f4d4d6", "#5f8db5", "#035157"];
    while (true) {
      renderBackground =
        backgrounds[Math.floor(Math.random() * backgrounds.length)];
      if (
        !(
          (renderBackground === "#f4d4d6" && back === 0) ||
          (renderBackground === "#035157" && back === 1) ||
          (renderBackground === "#5f8db5" && back === 2)
        )
      ) {
        break;
      }
    }
    setBackground(renderBackground);

    const engine = Engine.create();
    const world = engine.world;
    const render = Render.create({
      element: canvas,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: renderBackground,
        wireframes: false,
      },
    });

    const flowerOptions = {
      restitution: 0.5,
      frictionAir: 0.001,
      density: 0.05,
      friction: 0.3,
      frictionStatic: 3,
    };

    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 51,
      window.innerWidth,
      100,
      { isStatic: true, restitution: 0.5, friction: 0.3 }
    );
    const wallLeft = Bodies.rectangle(
      -51,
      window.innerHeight / 2,
      100,
      window.innerHeight,
      { isStatic: true }
    );
    const wallRight = Bodies.rectangle(
      window.innerWidth + 51,
      window.innerHeight / 2,
      100,
      window.innerHeight,
      { isStatic: true }
    );

    const bcard = Bodies.rectangle(
      Math.random() * window.innerWidth,
      -Math.random() * 1000,
      220,
      220 * 1.74611399,
      {
        render: {
          sprite: {
            texture: "/play/bcard.png",
            xScale: 0.38,
            yScale: 0.38,
          },
        },
        ...flowerOptions,
      }
    );

    const objList = [ground, wallRight, wallLeft, bcard];
    let backTexture: string;
    switch (back) {
      case 0: {
        backTexture = "/play/bcard_back1.png";
        break;
      }
      case 1: {
        backTexture = "/play/bcard_back2.png";
        break;
      }
      case 2: {
        backTexture = "/play/bcard_back3.png";
        break;
      }
    }
    objList.push(
      Bodies.rectangle(
        Math.random() * window.innerWidth,
        -Math.random() * 1000,
        220,
        220 * 1.74611399,
        {
          render: {
            sprite: {
              texture: backTexture!,
              xScale: 0.38,
              yScale: 0.38,
            },
          },
          ...flowerOptions,
        }
      )
    );
    for (let i = 0; i !== 15; i++) {
      switch (Math.floor(Math.random() * 4)) {
        case 0: {
          objList.push(
            Bodies.fromVertices(
              Math.random() * window.innerWidth,
              -Math.random() * 1000,
              [
                [
                  { x: -40, y: 50 },
                  { x: 0, y: 65 },
                  { x: 40, y: 50 },
                  { x: -75, y: -33 },
                  { x: 0, y: -50 },
                  { x: 65, y: -38 },
                ],
              ],
              {
                render: {
                  sprite: {
                    texture: "/play/flower1.png",
                    xScale: 0.15,
                    yScale: 0.15,
                  },
                },
                ...flowerOptions,
              }
            )
          );
          break;
        }
        case 1: {
          objList.push(
            Bodies.circle(
              Math.random() * window.innerWidth,
              -Math.random() * 1000,
              50,
              {
                render: {
                  sprite: {
                    texture: "/play/flower2.png",
                    xScale: 0.18,
                    yScale: 0.18,
                  },
                },
                ...flowerOptions,
              }
            )
          );
          break;
        }
        case 2: {
          objList.push(
            Bodies.fromVertices(
              Math.random() * window.innerWidth,
              -Math.random() * 1000,
              [
                [
                  { x: -40, y: 65 },
                  { x: 50, y: 50 },
                  { x: 75, y: -10 },
                  { x: 75, y: -10 },
                  { x: 50, y: -40 },
                  { x: -40, y: -30 },
                ],
              ],
              {
                render: {
                  sprite: {
                    texture: "/play/flower3.png",
                    xScale: 0.18,
                    yScale: 0.18,
                  },
                },
                ...flowerOptions,
              }
            )
          );
          break;
        }
        case 3: {
          objList.push(
            Bodies.fromVertices(
              Math.random() * window.innerWidth,
              -Math.random() * 1000,
              [
                [
                  { x: -55, y: 40 },
                  { x: 25, y: 40 },
                  { x: 55, y: 30 },
                  { x: 55, y: -40 },
                  { x: -55, y: -40 },
                ],
              ],
              {
                render: {
                  sprite: {
                    texture: "/play/flower4.png",
                    xScale: 0.13,
                    yScale: 0.13,
                  },
                },
                ...flowerOptions,
              }
            )
          );
          break;
        }
      }
    }

    addEventListener("resize", () => {
      setDirty(true);
    });

    World.add(world, objList);
    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
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
      {!tooSmall && !dirty && (
        <>
          {background === "#111921" && <Header color="pink" />}
          {background === "#f4d4d6" && <Header color="black" />}
          {(background === "#5f8db5" || background === "#035157") && (
            <Header color="white" />
          )}
          <div id="canvas" className="w-full h-full relative"></div>
        </>
      )}
      {dirty && (
        <div className="font-roboto text-center mt-32">
          Canvas size has changed. Refresh to update the scene.
        </div>
      )}
      {tooSmall && (
        <div className="font-roboto text-center mt-32">
          Your screen is too small. Resize your window or try again on another
          device.
        </div>
      )}
    </>
  );
}

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
import { Width } from "../utils/global_types";

export default function Play() {
  const [dirty, setDirty] = useState(false);
  const [tooSmall, setTooSmall] = useState(false);
  const [background, setBackground] = useState("");
  let renderBackground;

  useEffect(() => {
    if (window.innerWidth < 1024 || window.innerHeight < 768) {
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
                  { x: 22.701363073110286, y: -75.43990086741016 },
                  { x: 24.485749690210653, y: -75.43990086741016 },
                  { x: 29.244114002478327, y: -74.05204460966543 },
                  { x: 61.561338289962805, y: -61.561338289962826 },
                  { x: 68.30235439900866, y: -58.1908302354399 },
                  { x: 92.2924411400248, y: -37.76951672862453 },
                  { x: 92.68897149938041, y: -37.3729863692689 },
                  { x: 92.88723667905825, y: -36.97645600991326 },
                  { x: 93.08550185873605, y: -35.58859975216852 },
                  { x: 93.08550185873605, y: -33.605947955390334 },
                  { x: 92.88723667905825, y: -32.416356877323416 },
                  { x: 92.68897149938041, y: -31.425030978934323 },
                  { x: 92.2924411400248, y: -30.037174721189587 },
                  { x: 92.09417596034697, y: -29.44237918215613 },
                  { x: 79.40520446096653, y: 7.236679058240412 },
                  { x: 70.68153655514249, y: 27.459727385377946 },
                  { x: 69.4919454770756, y: 30.037174721189587 },
                  { x: 68.30235439900866, y: 32.41635687732342 },
                  { x: 63.74225526641882, y: 40.14869888475836 },
                  { x: 53.035935563816594, y: 58.190830235439904 },
                  { x: 52.24287484510535, y: 59.380421313506815 },
                  { x: 52.044609665427515, y: 59.57868649318465 },
                  { x: 28.64931846344487, y: 75.63816604708796 },
                  { x: 28.252788104089205, y: 75.8364312267658 },
                  { x: 25.873605947955397, y: 75.8364312267658 },
                  { x: 24.882280049566305, y: 75.63816604708796 },
                  { x: -22.70136307311028, y: 63.54399008674102 },
                  { x: -23.296158612143742, y: 62.94919454770758 },
                  { x: -65.92317224287484, y: 12.589838909541527 },
                  { x: -66.71623296158612, y: 11.400247831474601 },
                  { x: -67.11276332094175, y: 10.210656753407676 },
                  { x: -72.26765799256506, y: -6.641883519206942 },
                  { x: -72.6641883519207, y: -8.029739776951672 },
                  { x: -72.86245353159852, y: -9.219330855018598 },
                  { x: -72.86245353159852, y: -15.365551425030986 },
                  { x: -72.6641883519207, y: -16.55514250309789 },
                  { x: -69.29368029739777, y: -34.39900867410161 },
                  { x: -69.09541511771995, y: -35.19206939281289 },
                  { x: -68.69888475836431, y: -35.786864931846345 },
                  { x: -67.70755885997522, y: -36.77819083023544 },
                  { x: -47.68277571251549, y: -54.22552664188352 },
                  { x: -47.286245353159856, y: -54.42379182156134 },
                  { x: -41.14002478314746, y: -57.001239157372986 },
                  { x: 3.271375464684013, y: -73.45724907063197 },
                  { x: 12.589838909541527, y: -74.64684014869889 },
                ],
              ],
              {
                render: {
                  sprite: {
                    texture: "/play/flower1.png",
                    xScale: 0.2,
                    yScale: 0.2,
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
              70,
              {
                render: {
                  sprite: {
                    texture: "/play/flower2.png",
                    xScale: 0.24,
                    yScale: 0.24,
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
                  { x: 37.521613832853035, y: -61.52737752161383 },
                  { x: 41.757925072046106, y: -61.52737752161383 },
                  { x: 44.985590778097986, y: -61.325648414985594 },
                  { x: 46.19596541786744, y: -61.123919308357344 },
                  { x: 49.020172910662836, y: -60.518731988472624 },
                  { x: 68.18443804034581, y: -56.080691642651296 },
                  { x: 69.39481268011528, y: -55.67723342939481 },
                  { x: 69.79827089337175, y: -55.47550432276657 },
                  { x: 74.03458213256485, y: -53.054755043227665 },
                  { x: 74.63976945244957, y: -52.65129682997119 },
                  { x: 75.64841498559079, y: -51.84438040345822 },
                  { x: 76.65706051873201, y: -50.835734870317005 },
                  { x: 94.20749279538904, y: -31.268011527377517 },
                  { x: 99.65417867435158, y: -17.95389048991354 },
                  { x: 100.86455331412103, y: -14.32276657060519 },
                  { x: 101.46974063400575, y: -12.103746397694529 },
                  { x: 101.67146974063402, y: -11.095100864553316 },
                  { x: 101.67146974063402, y: -9.481268011527384 },
                  { x: 101.26801152737752, y: -7.4639769452449585 },
                  { x: 97.23342939481267, y: 11.095100864553302 },
                  { x: 96.82997118155617, y: 12.910662824207492 },
                  { x: 96.02305475504323, y: 14.726224783861667 },
                  { x: 95.01440922190201, y: 16.743515850144092 },
                  { x: 93.40057636887607, y: 19.365994236311238 },
                  { x: 92.39193083573488, y: 20.576368876080693 },
                  { x: 91.98847262247838, y: 20.979827089337164 },
                  { x: 80.08645533141208, y: 32.680115273775215 },
                  { x: 78.27089337175792, y: 34.293948126801155 },
                  { x: 73.8328530259366, y: 37.521613832853035 },
                  { x: 72.62247838616716, y: 38.328530259366005 },
                  { x: 71.81556195965416, y: 38.731988472622476 },
                  { x: 68.78962536023053, y: 39.94236311239193 },
                  { x: 66.97406340057637, y: 40.54755043227665 },
                  { x: 0.80691642651297, y: 56.0806916426513 },
                  { x: -6.6570605187319885, y: 57.69452449567723 },
                  { x: -10.288184438040346, y: 58.0979827089337 },
                  { x: -18.760806916426517, y: 58.0979827089337 },
                  { x: -21.786743515850148, y: 57.89625360230548 },
                  { x: -24.61095100864553, y: 57.49279538904899 },
                  { x: -26.82997118155619, y: 57.08933717579251 },
                  { x: -27.636887608069166, y: 56.88760806916427 },
                  { x: -30.05763688760807, y: 56.0806916426513 },
                  { x: -30.259365994236312, y: 55.87896253602305 },
                  { x: -30.662824207492797, y: 55.07204610951008 },
                  { x: -61.930835734870314, y: -20.979827089337178 },
                  { x: -62.13256484149856, y: -21.5850144092219 },
                  { x: -62.13256484149856, y: -22.79538904899136 },
                  { x: -61.72910662824208, y: -24.61095100864553 },
                  { x: -60.720461095100866, y: -27.23342939481268 },
                  { x: -60.518731988472624, y: -27.636887608069166 },
                  { x: -59.106628242074926, y: -29.855907780979827 },
                  { x: -58.5014409221902, y: -30.662824207492797 },
                  { x: -57.29106628242075, y: -32.074927953890494 },
                  { x: -56.68587896253602, y: -32.680115273775215 },
                  { x: -54.06340057636888, y: -35.100864553314125 },
                  { x: -51.64265129682997, y: -37.11815561959654 },
                  { x: -50.028818443804035, y: -38.126801152737755 },
                  { x: -47.60806916426513, y: -39.538904899135446 },
                  { x: -42.36311239193084, y: -42.16138328530259 },
                  { x: -40.14409221902017, y: -43.170028818443804 },
                  { x: -35.706051873198845, y: -44.78386167146974 },
                  { x: -32.680115273775215, y: -45.59077809798271 },
                  { x: -25.61959654178674, y: -47.40634005763689 },
                  { x: -24.81268011527378, y: -47.60806916426513 },
                  { x: 35.50432276657061, y: -61.325648414985594 },
                ],
              ],
              {
                render: {
                  sprite: {
                    texture: "/play/flower3.png",
                    xScale: 0.19,
                    yScale: 0.19,
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
                  { x: 71.73106646058733, y: -66.32148377125193 },
                  { x: 72.8129829984544, y: -66.32148377125193 },
                  { x: 107.86707882534776, y: -57.44976816074188 },
                  { x: 108.94899536321486, y: -56.80061823802164 },
                  { x: 109.59814528593509, y: -56.15146831530139 },
                  { x: 130.80370942812982, y: -32.9984544049459 },
                  { x: 131.45285935085008, y: -31.916537867078823 },
                  { x: 131.6692426584235, y: -31.483771251931998 },
                  { x: 155.47140649149924, y: 19.149922720247304 },
                  { x: 155.47140649149924, y: 19.58268933539412 },
                  { x: 155.2550231839258, y: 20.015455950540968 },
                  { x: 155.03863987635242, y: 20.231839258114377 },
                  { x: 154.60587326120555, y: 20.448222565687786 },
                  { x: 55.285935085007736, y: 68.48531684698608 },
                  { x: 54.42040185471407, y: 68.48531684698608 },
                  { x: 52.68933539412673, y: 68.26893353941267 },
                  { x: -46.630602782071094, y: 42.30293663060277 },
                  { x: -47.27975270479135, y: 42.086553323029364 },
                  { x: -47.49613601236476, y: 41.870170015455955 },
                  { x: -64.80680061823801, y: 6.599690880989186 },
                  { x: -64.80680061823801, y: 5.734157650695508 },
                  { x: -55.93508500772798, y: -32.349304482225655 },
                  { x: -55.502318392581145, y: -33.214837712519326 },
                  { x: -55.06955177743431, y: -33.64760432766615 },
                  { x: 27.58887171561051, y: -58.74806800618238 },
                ],
              ],
              {
                render: {
                  sprite: {
                    texture: "/play/flower4.png",
                    xScale: 0.22,
                    yScale: 0.22,
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

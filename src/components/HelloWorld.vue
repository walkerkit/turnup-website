<template>
  <div ref="wrapper">
    <canvas ref="canvas"> </canvas>
  </div>
</template>
<style scoped>
#progress-pride-canvas {
  height: 100vh;
  width: 100vw;
  background-color: #353839;
}
</style>
<script>
const geometric = require("geometric");
const d3 = require("d3-random");

class Simulation {
  init(opts) {
    this.width = opts && opts.width ? opts.width : innerWidth;
    this.height = opts && opts.height ? opts.height : innerHeight;
    this.center = [this.width / 2, this.height / 2];
    this.data = [];

    return this;
  }

  add(datum) {
    const d = datum || {};
    d.pos = d.pos || this.center;
    d.radius = d.radius || 5;
    d.angle = d.angle || 0;
    d.speed = d.speed || 1;
    d.colour = d.colour || 0;

    this.data.push(d);

    return this;
  }

  tick() {
    // Loop through the data
    for (let i = 0; i < this.data.length; i++) {
      const d = this.data[i];
      d.collided = false;

      // Detect collisions
      for (let i0 = 0; i0 < this.data.length; i0++) {
        const d0 = this.data[i0];
        d0.collided = false;

        // Collision!
        if (
          i !== i0 &&
          geometric.lineLength([d.pos, d0.pos]) < d.radius + d0.radius &&
          !d.collided &&
          !d0.collided
        ) {
          // To avoid having them stick to each other,
          // test if moving them in each other's angles will bring them closer or farther apart
          const keep = geometric.lineLength([
              geometric.pointTranslate(d.pos, d.angle, d.speed),
              geometric.pointTranslate(d0.pos, d0.angle, d0.speed),
            ]),
            swap = geometric.lineLength([
              geometric.pointTranslate(d.pos, d0.angle, d0.speed),
              geometric.pointTranslate(d0.pos, d.angle, d.speed),
            ]);

          if (keep < swap) {
            const dc = JSON.parse(JSON.stringify(d));

            d.angle = d0.angle;
            d.speed = d0.speed;
            d0.angle = dc.angle;
            d0.speed = dc.speed;

            d.collided = true;
            d0.collided = true;
          }

          break;
        }
      }

      // Detect sides
      const wallVertical =
          d.pos[0] <= d.radius || d.pos[0] >= this.width - d.radius,
        wallHorizontal =
          d.pos[1] <= d.radius || d.pos[1] >= this.height - d.radius;

      if (wallVertical || wallHorizontal) {
        // Is it moving more towards the middle or away from it?
        const t0 = geometric.pointTranslate(d.pos, d.angle, d.speed);
        const l0 = geometric.lineLength([this.center, t0]);

        const reflected = geometric.angleReflect(
          d.angle,
          wallVertical ? 90 : 0
        );
        const t1 = geometric.pointTranslate(d.pos, reflected, d.speed);
        const l1 = geometric.lineLength([this.center, t1]);

        if (l1 < l0) d.angle = reflected;
      }

      d.pos = geometric.pointTranslate(d.pos, d.angle, d.speed);
    }
  }
}
const colourValues = [
  "#EE3123",
  "#F57F2A",
  "#FFF001",
  "#59B947",
  "#0054A7",
  "#A0238F",
  "#000000",
  "#613917",
  "#7CC1E9",
  "#F398C0",
  "#FFFFFF",
];
function animationTick(ctx, network, canvas) {
  requestAnimationFrame(() => animationTick(ctx, network, canvas));
  ctx.clearRect(0, 0, network.width, network.height);

  // The simulation.tick method advances the simulation one tick
  network.tick();
  for (let i = 0, l = network.data.length; i < l; i++) {
    const d = network.data[i];
    ctx.beginPath();
    ctx.arc(d.pos[0], d.pos[1], d.radius, 0, 2 * Math.PI);
    ctx.fillStyle = colourValues[d.colour];
    console.log(canvas.getContext("2d").fill());
  }
}
export default {
  name: "HelloWorld",
  mounted: function () {
    const network = this.networkInit(this.$refs.wrapper, this.$refs.canvas);
    const ctx = this.animationInit(
      this.$refs.wrapper,
      this.$refs.canvas,
      network
    );
    animationTick(ctx, network, this.$refs.canvas);
  },
  methods: {
    networkInit: function () {
      const network = (() => {
        const network = new Simulation();

        // Initialize this simulation with simulation.init
        // You can pass an optional configuration object to init with the properties:
        //   - width
        //   - height
        network.init();

        // We'll create 100 circles of random radii, moving in random directions at random speeds.
        for (let i = 0; i < 50; i++) {
          const radius = d3.randomUniform(4, 6)();

          // Add a circle to your simulation with simulation.add
          network.add({
            colour: d3.randomInt(0, 10)(),
            speed: d3.randomUniform(1.5, 3.5)(),
            angle: d3.randomUniform(0, 360)(),
            pos: [
              d3.randomUniform(radius, network.width - radius)(),
              d3.randomUniform(radius, network.height - radius)(),
            ],
            radius,
          });
        }

        return network;
      })();
      return network;
    },
    animationInit: function (wrapper, canvas, network) {
      canvas.width = network.width;
      canvas.height = network.height;

      canvas.style.background = "#353839";
      wrapper.appendChild(canvas);
      const ctx = canvas.getContext("2d");
      return ctx;
    },
  },
};
</script>
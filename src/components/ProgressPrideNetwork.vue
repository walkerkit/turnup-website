<template>
    <canvas ref="canvas" />
</template>
<style scoped>
#progress-pride-canvas {
  height: 100vh;
  width: 100vw;
  background-color: #202329;
}
</style>
<script>
const geometric = require('geometric');
const d3 = require('d3-random');

class Simulation {
  init(opts) {
    this.width = opts && opts.width ? opts.width : window.innerWidth;
    this.height = opts && opts.height ? opts.height : window.innerHeight;
    this.center = [this.width / 2, this.height / 2];
    this.nodeData = [];
    this.lineData = [];
    return this;
  }

  addNode(datum) {
    this.nodeData.push(datum);
    return this;
  }

  addLine(datum) {
    this.lineData.push(datum);
    return this;
  }

  tick() {
    // Loop through the nodeData
    for (let i = 0; i < this.nodeData.length; i += 1) {
      const d = this.nodeData[i];
      d.collided = false;
      // Detect collisions
      for (let i0 = 0; i0 < this.nodeData.length; i0 += 1) {
        const d0 = this.nodeData[i0];
        d0.collided = false;
        // Collision!
        if (
          i !== i0
          && geometric.lineLength([d.pos, d0.pos]) < d.radius + d0.radius
          && !d.collided
          && !d0.collided
        ) {
          // To avoid having them stick to each other,
          // test if moving them in each other's angles will bring them closer or farther apart
          const keep = geometric.lineLength([
            geometric.pointTranslate(d.pos, d.angle, d.speed),
            geometric.pointTranslate(d0.pos, d0.angle, d0.speed),
          ]);
          const swap = geometric.lineLength([
            geometric.pointTranslate(d.pos, d0.angle, d0.speed),
            geometric.pointTranslate(d0.pos, d.angle, d.speed),
          ]);
          if (keep < swap) {
            const dc = JSON.parse(JSON.stringify(d));
            d.angle = d0.angle;
            // d.speed = d0.speed;
            d.speed = (d0.speed * d0.radius) / d.radius;
            d0.angle = dc.angle;
            // d0.speed = dc.speed;
            d0.speed = (d.speed * d.radius) / d0.radius;
            d.collided = true;
            d0.collided = true;
          }
          break;
        }
      }
      // Detect sides
      const wallVertical = d.pos[0] <= d.radius || d.pos[0] >= this.width - d.radius;
      const wallHorizontal = d.pos[1] <= d.radius || d.pos[1] >= this.height - d.radius;
      if (wallVertical || wallHorizontal) {
        // Is it moving more towards the middle or away from it?
        const t0 = geometric.pointTranslate(d.pos, d.angle, d.speed);
        const l0 = geometric.lineLength([this.center, t0]);
        const reflected = geometric.angleReflect(
          d.angle,
          wallVertical ? 90 : 0,
        );
        const t1 = geometric.pointTranslate(d.pos, reflected, d.speed);
        const l1 = geometric.lineLength([this.center, t1]);
        if (l1 < l0) d.angle = reflected;
      }
      d.pos = geometric.pointTranslate(d.pos, d.angle, d.speed);
    }
    this.lineData.length = 0;
    // let remainderList = this.nodeData; // eslint-disable-line
    let remainderList = []; // eslint-disable-line
    const interConnectCount = 2;
    for (let i = 0; i < this.nodeData.length; i += 1) {
      remainderList.push(i);
    }
    do {
      const tempNode = this.nodeData[remainderList[0]];
      remainderList = remainderList.slice(1);
      let distanceList = [];
      for (let j = 0; j < remainderList.length; j += 1) {
        const xdiff = Math.abs(tempNode.pos[0] - this.nodeData[remainderList[j]].pos[0])**2 ; //eslint-disable-line
        const ydiff = Math.abs(tempNode.pos[1] - this.nodeData[remainderList[j]].pos[1])**2; // eslint-disable-line
        const distance = Math.sqrt(xdiff + ydiff);
        distanceList.push([this.nodeData[remainderList[j]].index, distance]);
      }
      distanceList = distanceList.sort((a, b) => a[1] - b[1]);

      const lineList = [];
      for (let k = 0; k < interConnectCount; k += 1) {
        if (distanceList[k][1] < this.width * 0.15) {
          lineList.push(distanceList[k]);
        }
      }

      for (let l = 0; l < lineList.length; l += 1) {
        this.addLine(
          {
            node1: tempNode.index,
            node2: lineList[l][0],
          },
        );
      }
    } while (remainderList.length > interConnectCount);
  }
}
const colourValues = [
  '#EE3123',
  '#F57F2A',
  '#FFF001',
  '#59B947',
  '#0054A7',
  '#A0238F',
  '#000000',
  '#613917',
  '#7CC1E9',
  '#F398C0',
  '#FFFFFF',
];
function animationTick(ctx, network, canvas) {
// function animationTick(ctx, network) {
  requestAnimationFrame(() => animationTick(ctx, network, canvas));
  ctx.clearRect(0, 0, network.width, network.height);
  // The simulation.tick method advances the simulation one tick
  network.tick();
  for (let i = 0, l = network.lineData.length; i < l; i += 1) {
    const nodeOne = network.nodeData[network.lineData[i].node1];
    const nodeTwo = network.nodeData[network.lineData[i].node2];
    ctx.beginPath();
    ctx.strokeStyle = '#333'; // eslint-disable-line no-param-reassign
    ctx.moveTo(nodeOne.pos[0], nodeOne.pos[1]);
    ctx.lineTo(nodeTwo.pos[0], nodeTwo.pos[1]);
    ctx.stroke();
  }
  for (let i = 0, l = network.nodeData.length; i < l; i += 1) {
    const d = network.nodeData[i];
    ctx.beginPath();
    ctx.arc(d.pos[0], d.pos[1], d.radius, 0, 2 * Math.PI);
    ctx.fillStyle = colourValues[d.colour]; // eslint-disable-line no-param-reassign
    ctx.fill();
  }
}

export default {
  name: 'ProgressPrideNetwork',
  created() {
    window.addEventListener('resize', this.windowResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.windowResize);
  },
  mounted() {
    this.network = this.networkInit();
    this.$refs.canvas.width = this.network.width;
    this.$refs.canvas.height = this.network.height;
    this.$refs.canvas.style.background = '#202329';
    const ctx = this.$refs.canvas.getContext('2d');
    animationTick(ctx, this.network, this.$refs.canvas);
  },
  data() {
    return {
      network: null,
    };
  },
  methods: {
    networkInit() {
      const network = new Simulation();
      // Initialize this simulation with simulation.init
      // You can pass an optional configuration object to init with the properties:
      //   - width
      //   - height
      network.init();
      // const pixelCount = network.width * network.height;
      // const count = Math.floor(pixelCount / (Math.sqrt(pixelCount) * 10));

      // We'll create 100 circles of random radii, moving in random directions at random speeds.
      for (let i = 0; i < 50; i += 1) {
        const radius = d3.randomUniform(2, 5)();
        // Add a circle to your simulation with simulation.add
        network.addNode({
          index: i,
          colour: d3.randomInt(0, 10)(),
          speed: d3.randomUniform(1.5, 2.5)(),
          angle: d3.randomUniform(0, 360)(),
          pos: [
            d3.randomUniform(radius, network.width - radius)(),
            d3.randomUniform(radius, network.height - radius)(),
          ],
          radius,
        });
      }
      console.log(network.nodeData);
      const nodeOne = d3.randomInt(0, network.nodeData.length)();
      let nodeTwo = nodeOne;
      do {
        nodeTwo = d3.randomInt(0, network.nodeData.length)();
      } while (nodeOne === nodeTwo);

      network.addLine({
        node1: nodeOne,
        node2: nodeTwo,
      });
      return network;
    },
    windowResize(e) {
      this.network.width = e.target.innerWidth;
      this.$refs.canvas.width = e.target.innerWidth;
      this.network.height = e.target.innerHeight;
      this.$refs.canvas.height = e.target.innerHeight;
    },
  },
};
</script>

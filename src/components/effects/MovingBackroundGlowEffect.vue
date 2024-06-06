<script lang="ts">
export default {
  props: ['x', 'y', 'color', 'glowRadius', 'pathRadius'],
  mounted() {
    const canvas : HTMLCanvasElement = document.getElementById('backgroundCanvas') as HTMLCanvasElement;
    const context : CanvasRenderingContext2D = canvas.getContext("2d");

    let x : number = 0;

    const radius : number = this.pathRadius; //60

    setInterval(() => {
      context.reset();
      context.beginPath();
      context.fillStyle = getComputedStyle(document.body).getPropertyValue("--color-accent");
      context.arc(this.x + Math.cos(x) * radius, this.y + Math.sin(x) * radius, this.glowRadius, 0, 2 * Math.PI);
      context.fill();

      x += 0.03;
    }, 50);
  }
}
</script>

<template>
  <canvas id="backgroundCanvas">
  </canvas>
</template>

<style scoped>
#backgroundCanvas {
  width: 100%;
  height: 99vh;
  filter: blur(500px) brightness(140%);
}
</style>
<template>

    <div id="header-container">
      <div id="canvas-container">
        <ProgressPrideNetwork />
      </div>
      <div id="heading-container">
        <div>
          <h1>TurnUpLondon</h1>
          <h4>Just you wait.</h4>
        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import ProgressPrideNetwork from '@/components/ProgressPrideNetwork.vue';
import './home.sass';

export default {
  name: 'Home',
  components: {
    ProgressPrideNetwork,
  },
};
</script>

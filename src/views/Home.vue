<template>
  <div class="home">
    <asl-hello></asl-hello>
    <asl-test></asl-test>
    <img alt="Vue logo" src="../assets/logo.png" />
    <asl-frame :width="2560" :height="1440" bgColor="green">
      <asl-test />
    </asl-frame>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

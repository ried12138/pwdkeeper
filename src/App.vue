<template>
  <div id="app">
    <div class="snowflakes" aria-hidden="true">
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
    </div>
    <div class="welcome-message">
      欢迎光临
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background-color: #282c34;
  color: white;
}

.snowflakes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.snowflake {
  position: absolute;
  width: 10px;
  height: 10px;
  background-size: cover;
  color: white;
  font-size: 10px;
  text-align: center;
  list-style: none;
  animation-name: snowfall;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.snowflake:nth-child(odd) {
  animation-duration: 10s;
  animation-delay: 0s;
}

.snowflake:nth-child(even) {
  animation-duration: 12s;
  animation-delay: 2s;
}

@keyframes snowfall {
  0% {
    top: -10%;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    top: 110%;
    opacity: 0;
  }
}

.welcome-message {
  position: relative;
  z-index: 2;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
}
</style>
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div>안녕하세요!</div>
    <button type="button" @click="buttonOnclick">버튼</button>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    buttonOnclick () {
      axios.get('/api/test')
        .then(data => { alert(data.data) })
        .catch(() => { alert('실패!!') })
    }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

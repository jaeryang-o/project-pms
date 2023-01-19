<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>안녕하세요!</div>
    <button type="button" @click="buttonOnclick">버튼</button>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

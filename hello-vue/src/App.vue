<template>
  <div>
    <vaadin-text-field id="text" placeholder="Type Something"></vaadin-text-field>
    <vaadin-button @click="clicked">Click Me!</vaadin-button>
    <h4>Hello {{msg}}!</h4>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue App'
    }
  },

  methods: {
    clicked() {
      this.msg = document.getElementById("text").value;
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

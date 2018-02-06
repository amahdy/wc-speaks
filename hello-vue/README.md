# Hello Vue with Web Components

This is a sample app showing how to use Vaadin Elements and Web Compoenents inside **Vue 2**.

# Steps

Install [npm](https://docs.npmjs.com/getting-started/installing-node).

`$ npm install -g vue-cli`

`$ vue init webpack-simple hello-vue` *Keep everything default*

`$ cd hello-vue`

`$ npm install`

`$ bower init` *Keep everything default*

`$ bower install --save Polymer/polymer`

`$ bower install --save vaadin`

#### Open index.html
##### In the `head` section add:
```html
  <script src="bower_components/webcomponentsjs/webcomponents-loader.js"></script>
  <link rel="import" href="bower_components/vaadin-valo-theme/vaadin-button.html">
  <link rel="import" href="bower_components/vaadin-button/vaadin-button.html">
  <link rel="import" href="bower_components/vaadin-valo-theme/vaadin-text-field.html">
  <link rel="import" href="bower_components/vaadin-text-field/vaadin-text-field.html">
```

#### Open src/main.js
##### After the imports section add:
```ts
Vue.config.ignoredElements = [
  /^vaadin-/
]
```

#### Open src/App.vue
##### 	Replace all HTML in the `<template>` with:
```
  <div>
    <vaadin-text-field id="text" placeholder="Type Something"></vaadin-text-field>
    <vaadin-button @click="clicked">Click Me!</vaadin-button>
    <h2>Hello {{msg}}!</h2>
  </div>
```

###	In the `<script>` section, inside `default` define methods and the click event:
```
  methods: {
    clicked() {
      this.msg = document.getElementById("text").value;
    }
  }
```

`$ npm run dev`

💰

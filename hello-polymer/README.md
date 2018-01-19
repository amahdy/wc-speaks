# Hello Polymer with Web Components (duh!)

This is a sample app showing how to use Vaadin Elements and Web Compoenents inside **Polymer 2**.

# Steps

Install [npm](https://docs.npmjs.com/getting-started/installing-node).

`$ npm install -g bower`

`$ npm install -g polymer-cli`

`$ mkdir hello-polymer`

`$ cd hello-polymer`

`$ polymer init`
  * Select “polymer-2-application”
  * Give a name “hello-polymer”
  * Keep everything else default

`$ bower install --save vaadin`

#### Open src/hello-polymer-app/hello-polymer-app.html
##### In the top, after importing `polymer-element`, import Vaadin Elements:

```html
  <link rel="import" href="../../bower_components/vaadin-valo-theme/vaadin-button.html">
  <link rel="import" href="../../bower_components/vaadin-button/vaadin-button.html">
  <link rel="import" href="../../bower_components/vaadin-valo-theme/vaadin-text-field.html">
  <link rel="import" href="../../bower_components/vaadin-text-field/vaadin-text-field.html">
```

##### In `<template>` section, after `</style>` add the elements:

```html
  <vaadin-text-field id="text" placeholder="Type Something"></vaadin-text-field>
  <vaadin-button on-click='clicked'>Click Me!</vaadin-button>
```

##### In `<script>` section, inside the `class`, define the click event:

```ts
  clicked() {
    this.prop1 = this.$.text.value;
  }
```

`$ polymer serve --open`

💰

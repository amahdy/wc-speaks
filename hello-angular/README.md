[![Build Status](https://travis-ci.org/amahdy/hello-angular-wc.svg?branch=master)](https://travis-ci.org/amahdy/hello-angular-wc)

# Hello Angular with Web Components

This is a sample app showing how to use Vaadin Elements and Web Compoenents inside **Angular 5**.

# Steps

Install [npm](https://docs.npmjs.com/getting-started/installing-node).

`$ npm install -g bower`

`$ npm install -g @angular/cli`

`$ ng new hello-angular`

`$ cd hello-angular`

`$ npm install --save @codebakery/origami` *We will use a third-party helper [library](https://github.com/hotforfeature/origami).*

`$ bower init` *Keep everything default*

`$ cat > .bowerrc`

    {"directory": "src/assets/bower_components"}
    ctrl+D

`$ bower install --save Polymer/polymer`

`$ bower install --save vaadin`

#### Open src/index.html
##### In `<head>` section, add:
  ```html
  <script src="assets/bower_components/webcomponentsjs/webcomponents-loader.js"></script>
  <link rel="import" href="assets/bower_components/vaadin-valo-theme/vaadin-button.html">
  <link rel="import" href="assets/bower_components/vaadin-button/vaadin-button.html">
  <link rel="import" href="assets/bower_components/vaadin-valo-theme/vaadin-text-field.html">
  <link rel="import" href="assets/bower_components/vaadin-text-field/vaadin-text-field.html">
  ```

#### Open src/main.ts
##### In `import` section, add:
  ```ts
  import { webcomponentsReady } from '@codebakery/origami';
  ```

##### Wrap `platformBrowserDynamic` code with:
  ```ts
  webcomponentsReady().then(() => {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.log(err));
  }).catch(error => {
    // No WebComponent support and webcomponentsjs is not loaded
    console.error(error);
  });
  ```

#### Open src/app/app.module.ts
##### In `import` section, update them:
  ```ts
  import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
  import { PolymerModule } from '@codebakery/origami';
  ```

##### Inside `@NgModule` definition, add:
  ```ts
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  ```

##### Inside `@NgModule` definition, add to the `imports` array:
  ```ts
  PolymerModule.forRoot(),
  ```

#### Open src/app/app.component.html
##### Replace all the HTML code with:
  ```html
  <vaadin-text-field id="text" placeholder="Type Something"></vaadin-text-field>
  <vaadin-button (click)='clicked()'>Click Me!</vaadin-button>
  <h2>Hello {{title}}!</h2>
  ```

#### Open src/app/app.component.ts
##### Inside the `class` define the click event:

  ```ts
  clicked() {
    this.title = document.getElementById("text")["value"];
  }
  ```

`$ ng serve --open`

💰

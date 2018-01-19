# Hello React with Web Components

This is a sample app showing how to use Vaadin Elements and Web Compoenents inside **React 16**.

# Steps

Install [npm](https://docs.npmjs.com/getting-started/installing-node).

`$ npm install -g bower`

`$ npm install -g create-react-app`

`$ create-react-app hello-react`

`$ cd hello-react`

`$ npm install`

`$ bower init` *Keep everything default*

`$ cat > .bowerrc`

    {"directory": "public/bower_components"}
    ctrl+D

`$ bower install --save Polymer/polymer`

`$ bower install --save vaadin`

#### Open public/index.html
##### In the `<head>` section, add:
```html
  <script src="%PUBLIC_URL%/bower_components/webcomponentsjs/webcomponents-loader.js"></script>
  <link rel="import" href="%PUBLIC_URL%/bower_components/vaadin-valo-theme/vaadin-button.html">
  <link rel="import" href="%PUBLIC_URL%/bower_components/vaadin-button/vaadin-button.html">
  <link rel="import" href="%PUBLIC_URL%/bower_components/vaadin-valo-theme/vaadin-text-field.html">
  <link rel="import" href="%PUBLIC_URL%/bower_components/vaadin-text-field/vaadin-text-field.html">
```

#### Open src/App.js and in the `class`..
##### Define a constructor with a simple property:
```ts
  constructor(props) {
    super(props);
    this.state = {greeting: "React App"};
    this.clicked = this.clicked.bind(this);
  }
```

##### Replace all the HTML in the `return` of `render` method with:
```html
  <div>
    <vaadin-text-field ref="text" placeholder="Type Something"></vaadin-text-field>
    <vaadin-button onClick={this.clicked}>Click Me!</vaadin-button>
    <h2>Hello {this.state.greeting}!</h2>
  </div>
```

##### Define the click event
```js
  clicked() {
    this.setState({greeting: this.refs.text.value})
  }
```

`$ npm start`

💰

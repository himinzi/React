'use strict';

const element = <h1>Hello, world!</h1>;

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(element));
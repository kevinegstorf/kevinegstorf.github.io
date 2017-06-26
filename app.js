let myHeader = document.querySelector('h1')
let paragraph = document.createElement('p');

paragraph.textContent = 'Welcome to my site'

myHeader.appendChild(paragraph)

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

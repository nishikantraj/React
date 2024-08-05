import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <>
      <h1>hello bro!!!</h1>
    </>
  )
}


const createElement = {
  type : 'a',
  props: {
      href: 'https://www.google.com',
      target: '_blank'
  },
  children:'click me'
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)

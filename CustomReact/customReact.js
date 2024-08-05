function renderElement(DOMElement, createElement) {
    const element = document.createElement(createElement.type)
    element.innerHTML = createElement.children
    for (prop  in createElement.props) {
        if(prop === 'children') continue
        element.setAttribute(prop, createElement.props[prop])
    }
    DOMElement.appendChild(element)
}


const createElement = {
    type : 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children:'click me'
}
const DOMElement = document.querySelector('#root')

renderElement(DOMElement,createElement)
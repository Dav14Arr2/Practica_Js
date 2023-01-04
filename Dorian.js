

const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = 'Soy el elemento nuevo'

list.insertBefore (newElement, list.children[1])
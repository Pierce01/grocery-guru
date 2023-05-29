const locations = ['QFC', 'Safeway', 'Fred Myers']
const defaultObj = {
  products: [],
  total: 0
}

if (!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify(defaultObj))
if (window.location.href.includes('cart')) renderItems()

function updateStorage(name, price) {
  const cart = JSON.parse(localStorage.getItem('cart'))
  const locationNum = Math.floor(Math.random() * locations.length)
  cart.products.push([name, '$' + price, locations[locationNum]])
  cart.total = parseFloat(cart.total) + parseFloat(price)
  localStorage.setItem('cart', JSON.stringify(cart))
}

function clearCart() {
  localStorage.setItem('cart', JSON.stringify(defaultObj))
}

function renderItems() {
  const cart = JSON.parse(localStorage.getItem('cart'))
  const cartList = document.getElementById('cartList')
  if (!cart.total) return cartList.append('No Items')
  for (let product of cart.products) {
    product.forEach(entry => {
      const newDiv = document.createElement('div')
      newDiv.innerText = entry
      cartList.append(newDiv)
    })
  }
}
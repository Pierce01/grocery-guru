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
  let included = false
  for (let product of cart.products) {
    if (product[0] == name) { 
      product[3]++; product[1] = (parseFloat(product[1]) + parseFloat(price)).toFixed(2); included = true
      break
    }
  }
  if (!included) cart.products.push([name, price, locations[locationNum], 1])
  cart.total = parseFloat(cart.total) + parseFloat(price)
  localStorage.setItem('cart', JSON.stringify(cart))
}

function clearCart() {
  localStorage.setItem('cart', JSON.stringify(defaultObj))
}

function renderItems() {
  const cart = JSON.parse(localStorage.getItem('cart'))
  const cartList = document.getElementById('cartList')
  document.getElementById('totalText').innerText += ` $${parseFloat(cart.total).toFixed(2)}`
  if (!cart.total) return cartList.append('No Items')
  for (let product of cart.products) {
    product.forEach((entry, index) => {
      if (index == 3) return
      const newDiv = document.createElement('div')
      newDiv.innerText = (index == 0 && (product[3] > 1)) ? `${entry} x ${product[3]}` : entry
      cartList.append(newDiv)
    })
  }
}
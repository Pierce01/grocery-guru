const products = [
  {
      "name": "Red Hothouse Bell Pepper",
      "price": "0.89",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0000000004688"
  },
  {
      "name": "English Cucumber",
      "price": "0.89",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0000000004593"
  },
  {
      "name": "Orange Bell Pepper",
      "price": "0.89",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0000000003121"
  },
  {
      "name": "Yellow Bell Pepper",
      "price": "0.89",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0000000004689"
  },
  {
      "name": "Fresh Whole Pineapple",
      "price": "1.50",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0000000004430"
  },
  {
      "name": "Jif® Creamy Peanut Butter Spread",
      "price": "2.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0005150025516"
  },
  {
      "name": "Extra Large EZ Peel Shrimp 21/25",
      "price": "6.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0026947940000"
  },
  {
      "name": "Wild Caught Sockeye Salmon Fillet (Previously Frozen)",
      "price": "13.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0026910540000"
  },
  {
      "name": "Sand Bar® Shell-On Extra Large Easy Peel Raw Frozen Shrimp",
      "price": "13.98",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0001111064116"
  },
  {
      "name": "Cook's Portion Ham",
      "price": "7.12",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0023376550000"
  },
  {
      "name": "Jif Natural Creamy Peanut Butter",
      "price": "2.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0005150025565"
  },
  {
      "name": "Chateau Ste. Michelle Columbia Valley Chardonnay White Wine",
      "price": "8.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008858660384"
  },
  {
      "name": "Jif® Extra Crunchy Peanut Butter",
      "price": "2.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0005150025537"
  },
  {
      "name": "Chateau Ste Michelle Rose Wine",
      "price": "8.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008858600932"
  },
  {
      "name": "Chateau Ste. Michelle Columbia Valley Riesling White Wine",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008858662184"
  },
  {
      "name": "Chateau Ste Michelle Sauvignon Blanc White Wine",
      "price": "8.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008858663098"
  },
  {
      "name": "Chateau Ste Michelle Dry Riesling White Wine",
      "price": "8.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008858664289"
  },
  {
      "name": "Barefoot Cellars Pinot Grigio White Wine 1.5L",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008500001443"
  },
  {
      "name": "Chateau Ste Michelle Pinot Gris",
      "price": "8.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008858600076"
  },
  {
      "name": "Chateau Ste. Michelle Harvest Select Riesling White Wine",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008858600416"
  },
  {
      "name": "Bogle Vineyards Cabernet Sauvignon",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008088749396"
  },
  {
      "name": "Segura Viudas Brut Reserva Sparkling Wine",
      "price": "10.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0003329369000"
  },
  {
      "name": "Bogle Vineyards Chardonnay White Wine",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008088749392"
  },
  {
      "name": "Jif Simply Creamy Peanut Butter",
      "price": "2.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0005150025527"
  },
  {
      "name": "M&M'S Peanut Butter Chocolate Speckled Easter Egg Candy Bag",
      "price": "3.33",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0004000055385"
  },
  {
      "name": "Bogle Vineyards Essential Red Wine",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008088749643"
  },
  {
      "name": "M&M'S Peanut Milk Chocolate Pastel Easter Candy Assortment Bag",
      "price": "3.33",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0004000055426"
  },
  {
      "name": "Barefoot Moscato White Wine",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008500001667"
  },
  {
      "name": "M&M'S Easter Milk Chocolate Candy Assortment Bag",
      "price": "3.33",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0004000055383"
  },
  {
      "name": "Chateau Ste. Michelle Gewurztraminer",
      "price": "8.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008858662584"
  },
  {
      "name": "Bogle Vineyards Petite Sirah",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008088749374"
  },
  {
      "name": "Jif® Reduced Fat Creamy Peanut Butter",
      "price": "2.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0005150025518"
  },
  {
      "name": "Barefoot Cellars Riesling White Wine 1.5L",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008500001813"
  },
  {
      "name": "Bogle Vineyards Merlot Red Wine",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008088749378"
  },
  {
      "name": "M&M'S Easter Eggs Milk Chocolate Candy Assortment Bag",
      "price": "3.33",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0004000055387"
  },
  {
      "name": "Barefoot Cellars Pink Moscato Wine 1.5L",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008500002060"
  },
  {
      "name": "Barefoot Cellars Chardonnay White Wine 1.5L",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0001834115105"
  },
  {
      "name": "M&M'S Milk Chocolate Honey Graham Easter Candy Bag",
      "price": "3.33",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0004000057715"
  },
  {
      "name": "Snickers Easter Chocolate Candy Bar Assortment Bag",
      "price": "3.33",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0004000055469"
  },
  {
      "name": "Snickers Twix Milky Way & 3 Musketeers Bulk Easter Chocolate Candy Variety Pack",
      "price": "3.33",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0004000057620"
  },
  {
      "name": "Barefoot Cellars Merlot Red Wine 1.5L",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0001834115110"
  },
  {
      "name": "Barefoot® Fruitscato™ Peach Moscato Sweet Wine",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008500002989"
  },
  {
      "name": "Twix Easter Caramel Chocolate Candy Cookie Bars Bag",
      "price": "3.33",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0004000055471"
  },
  {
      "name": "Barefoot Cellars Cabernet Sauvignon Red Wine 1.5L",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0001834115101"
  },
  {
      "name": "Barefoot Cellars Pinot Noir Red Wine 1.5L",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008500001736"
  },
  {
      "name": "Barefoot Cellars Red Moscato Red Wine 1.5L",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008500002028"
  },
  {
      "name": "Barefoot Wine Sauvignon Blanc",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0001834115102"
  },
  {
      "name": "M&M'S Easter White Chocolate Key Lime Pie Candy Assortment Bag",
      "price": "3.33",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0004000056680"
  },
  {
      "name": "M&M'S White Chocolate Marshmallow Crispy Treat Pastel Easter Candy Bag",
      "price": "3.33",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0004000058570"
  },
  {
      "name": "Cook's Butt Portion Ham (Limit 2 at Sale Retail)",
      "price": "8.46",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0022370100000"
  },
  {
      "name": "Cook's Shank Half Ham (Limit 2 at Sale Retail)",
      "price": "8.46",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0022372700000"
  },
  {
      "name": "M&M'S Easter Fun Size Milk Chocolate Egg Hunt Candy",
      "price": "3.33",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0004000051315"
  },
  {
      "name": "Barefoot® Fruitscato™ Strawberry Moscato Sweet Wine",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008500002990"
  },
  {
      "name": "Barefoot Buttery Chardonnay White Wine",
      "price": "9.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008500003193"
  },
  {
      "name": "Segura Viudas Brut Rose Brut",
      "price": "10.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0003329364000"
  },
  {
      "name": "Choice Beef Bone In Rib Roast (3-4 Ribs per Roast)",
      "price": "48.17",
      "discount": "Coupon: $6.77",
      "image": "https://www.kroger.com/product/images/medium/front/0202008000000"
  },
  {
      "name": "Honeycrisp Apple",
      "price": "0.90",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0000000003283"
  },
  {
      "name": "Organic Ripe Avocado",
      "price": "1.25",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0000000094225"
  },
  {
      "name": "Simple Truth Organic™ Honeycrisp Apples",
      "price": "1.35",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0000000093283"
  },
  {
      "name": "Tillamook Vanilla Bean Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008114"
  },
  {
      "name": "Tillamook Old-Fashioned Vanilla Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008109"
  },
  {
      "name": "La Marca Prosecco Sparkling Wine 750ml",
      "price": "12.99",
      "discount": "Cash Back: $3.00 Cash Back on 2",
      "image": "https://www.kroger.com/product/images/medium/front/0008500001773"
  },
  {
      "name": "Fresh Steelhead Trout Fillet",
      "price": "8.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0026901840000"
  },
  {
      "name": "Simple Truth Organic® Air-Chilled Whole Young Chicken",
      "price": "12.20",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0020891150000"
  },
  {
      "name": "Tillamook Mudslide Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008119"
  },
  {
      "name": "Tillamook Mint Chocolate Chip Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008104"
  },
  {
      "name": "Simple Truth™ Boneless & Skinless Chicken Breast Value Pack",
      "price": "14.96",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0021016850000"
  },
  {
      "name": "Kim Crawford Marlborough Sauvignon Blanc White Wine",
      "price": "12.99",
      "discount": "Cash Back: $3.00 Cash Back on 2",
      "image": "https://www.kroger.com/product/images/medium/front/0068935200961"
  },
  {
      "name": "Tillamook Chocolate Peanut Butter Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008116"
  },
  {
      "name": "Tillamook French Vanilla Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008108"
  },
  {
      "name": "Tillamook Cookies and Cream Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008105"
  },
  {
      "name": "Aqua Star® Wild Patagonian Pink™ Raw Shrimp (31-40 ct)",
      "price": "17.98",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0073114959632"
  },
  {
      "name": "Tillamook Oregon Strawberry Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008110"
  },
  {
      "name": "Tillamook Chocolate Chip Cookie Dough Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008111"
  },
  {
      "name": "Steelhead Fillet (Fresh Farm Raised)",
      "price": "8.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0026901800000"
  },
  {
      "name": "Tillamook Udderly Chocolate Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008121"
  },
  {
      "name": "Tillamook Waffle Cone Swirl Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008126"
  },
  {
      "name": "Tillamook Salted Caramel Ice Cream Sandwiches",
      "price": "7.69",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283002018"
  },
  {
      "name": "Tillamook Chocolate Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008103"
  },
  {
      "name": "Tillamook Coffee Almond Fudge Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008107"
  },
  {
      "name": "Tillamook Oregon Strawberry Ice Cream Sandwiches",
      "price": "7.69",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283002029"
  },
  {
      "name": "La Marca Prosecco Rose Sparkling Wine",
      "price": "12.99",
      "discount": "Cash Back: $3.00 Cash Back on 2",
      "image": "https://www.kroger.com/product/images/medium/front/0008500003244"
  },
  {
      "name": "Tillamook Oregon Dark Cherry Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008123"
  },
  {
      "name": "Tillamook Caramel Swirl Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008127"
  },
  {
      "name": "Tillamook Vanilla Bean Ice Cream Sandwiches",
      "price": "7.69",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283002017"
  },
  {
      "name": "Simple Truth™ Boneless & Skinless Chicken Breast Value Pack",
      "price": "14.96",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0021016850000"
  },
  {
      "name": "Kim Crawford Illuminate New Zealand Sauvignon Blanc White Wine",
      "price": "12.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0068935201008"
  },
  {
      "name": "Tillamook Malted Moo Shake Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008122"
  },
  {
      "name": "Tillamook Chocolate Chip Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008112"
  },
  {
      "name": "Tillamook Peanut Butter Chocolate Ice Cream Sandwiches",
      "price": "7.69",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283002015"
  },
  {
      "name": "Rodney Strong Chardonnay White Wine",
      "price": "10.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0008751291325"
  },
  {
      "name": "Tillamook Monster Cookie Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008120"
  },
  {
      "name": "Steelhead Fillet (Fresh Farm Raised)",
      "price": "8.99",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0026901800000"
  },
  {
      "name": "Tillamook Birthday Cake Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008124"
  },
  {
      "name": "Tillamook Marionberry Pie Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008118"
  },
  {
      "name": "Tillamook® Limited Edition Campfire Peanut Butter Cup Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008136"
  },
  {
      "name": "Aqua Star® Wild Patagonian Pink™ Raw Shrimp (31-40 ct)",
      "price": "17.98",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0073114959632"
  },
  {
      "name": "Tillamook® Limited Edition Orange And Cream Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008137"
  },
  {
      "name": "Tillamook Banana Split Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008100"
  },
  {
      "name": "Tillamook® Neapolitan Ice Cream",
      "price": "6.49",
      "discount": null,
      "image": "https://www.kroger.com/product/images/medium/front/0007283008132"
  },
  {
      "name": "Hormel Spiral Ham (Limit 1 at Sale Retail)",
      "price": "15.05",
      "discount": "Coupon: $1.37",
      "image": "https://www.kroger.com/product/images/medium/front/0023381300000"
  },
  {
      "name": "Hormel Cure 81 Spiral Sliced Ham (Limit 2 at Sale Retail)",
      "price": "17.36",
      "discount": "Coupon: $1.37",
      "image": "https://www.kroger.com/product/images/medium/front/0029332600000"
  }
]

const template = (data) => {
  const newElement = document.createElement('div')
  newElement.className = 'card'
  newElement.innerHTML = `
    <div class="card-content">
        <div class="card-image">
            <img src="${data.image}" alt="Product Image">
        </div>
        <div class="card-body">
            <h3>${data.name}</h3>
            <h2>$${data.price}</h2>
            <p>${!data.discount ? 'No additional discounts' : data.discount}</p>
            <button>Add to Cart</button>
        </div>
    </div>
  `
  return newElement
}

const itemContainer = document.getElementById('itemsContainer')
const input = document.querySelector('div.search > input')
const productSliderElement = document.getElementsByClassName('product-container')[0]
const doesMatch = (item) => item.innerText.toLowerCase().includes(input.value.toLowerCase())
const filter = () => {
  for (let item of itemContainer.children) item.style.display = doesMatch(item) ? 'block' : 'none'
}
function toTop () { 
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0 
}
const activeAnimation = (element) => {
  element = element.querySelector('button')
  element.innerText = 'Added!'
  setTimeout(() => {element.innerText = 'Add to Cart'}, 1000)
}
const appendProduct = (parent, product) => {
  const productDiv = template(product)
  productDiv.addEventListener('click', () => { 
    updateStorage(product.name, product.price)
    activeAnimation(productDiv)
  })
  parent.append(productDiv)
}
const generateProducts = () => {
  for (let product of products) {
    appendProduct(itemContainer, product)
  }
  input.addEventListener('input', filter)
  let toTopButton = document.getElementById("toTopButton")
  toTopButton.addEventListener('click', toTop)
  const scrollFunction = () => {
    toTopButton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? 'block' : 'none'
  }
  window.addEventListener('scroll', scrollFunction)
}
const generateSlider = () => {
  const sorted = products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
  for (let i = 0; i < 10; i++) {
    appendProduct(productSliderElement, sorted[i])
  }
}

if (window.location.href.includes('catalog')) generateProducts()
if (productSliderElement) generateSlider()

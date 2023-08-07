const cart = document.querySelector('.modalBody')
let counter = document.querySelector('.counter')
let totalMoney = document.querySelector('.money')
let paymentButton = document.querySelector('.payment')
let cartIcon = document.querySelector('.cart')

let uniqueId = 0

let totalPrice = 0

let totalItem = 0
if (totalItem === 0) {
    totalMoney.style.display = 'none'
    paymentButton.innerText = 'No item in cart'
}




function addToCart(item) {

    // making the cart icon visible

 



    uniqueId++
    totalItem++
    totalMoney.style.display = 'block'
    paymentButton.innerText = 'Order Now'

    let contentDiv = document.querySelector(`#${item.id}`)


    let cartBody = document.createElement('div')
    cartBody.classList.add('item')
    cartBody.setAttribute('id', `${uniqueId}`)



    let title = document.createElement('p')
    title.classList.add('cartPara')
    title.innerText = contentDiv.children[0].children[0].children[0].innerText
    cartBody.append(title)


    let img = document.createElement('img')

    img.setAttribute('src', `${contentDiv.children[1].children[0].children[0].children[0].src}`)
    img.setAttribute('id', 'cart-img')
    cartBody.append(img)

    let closeImg = document.createElement('img')

    closeImg.src = './images/close.png'
    closeImg.setAttribute('id', 'close')
    cartBody.append(closeImg)
    cart.append(cartBody)

    counter.innerText = `- ${totalItem}`
 
    let TotalPriceDisplay = contentDiv.children[1].children[0].children[1].children[0].innerText

    totalPrice  = totalPrice +  parseInt(TotalPriceDisplay)


    totalMoney.innerText = `Total Amount = ₹${totalPrice}`

    closeImg.setAttribute('onclick', `remove(${uniqueId},${TotalPriceDisplay})`)

}



function remove(item,TotalPriceDisplay) {

  document.getElementById(item).remove();


//   substracting the price logic
    totalPrice = totalPrice-TotalPriceDisplay
    totalMoney.innerText = `Total Amount = ₹${totalPrice}`

    // decreasing total number of item present in cart value 
    totalItem--
    counter.innerText = `- ${totalItem}`
    
    
    
    if (totalItem === 0) {
        counter.innerHTML = ''
        totalMoney.style.display = 'none'
        paymentButton.innerText = 'No item in cart'
    }
}
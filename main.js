const menuEmail = document.querySelector('.navbar-email');
const menuBurgerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail'); 
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu () { 
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () { 
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () { 
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Amanecer',
    price: 100,
    Image: 'https://images.pexels.com/photos/165754/pexels-photo-165754.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: 'Amanecer 2',
    price: 150,
    Image: 'https://images.pexels.com/photos/165754/pexels-photo-165754.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: 'Amanecer 3',
    price: 300,
    Image: 'https://images.pexels.com/photos/165754/pexels-photo-165754.jpeg?auto=compress&cs=tinysrgb&w=400',
});

function renderProcuts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.Image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoText = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoText.appendChild(productPrice);
        productInfoText.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('Img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard)
    
        productInfo.appendChild(productInfoText);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProcuts (productList);
const menuEmail = document.querySelector('.navbar-email');
const menuBurgerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer'); 
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu () { 
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () { 
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () { 
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Reloj Antiguo',
    price: 200,
    Image: 'https://images.pexels.com/photos/359989/pexels-photo-359989.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Reloj de Arena',
    price: 300,
    Image: 'https://images.pexels.com/photos/6825574/pexels-photo-6825574.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Reloj de Bolsillo',
    price: 150,
    Image: 'https://images.pexels.com/photos/277290/pexels-photo-277290.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Reloj Digital',
    price: 250,
    Image: 'https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Reloj de Pulsera',
    price: 180,
    Image: 'https://images.pexels.com/photos/1034425/pexels-photo-1034425.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Notebook 1',
    price: 1000,
    Image: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Notebook 2',
    price: 900,
    Image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Notebook 3',
    price: 1500,
    Image: 'https://images.pexels.com/photos/42408/pexels-photo-42408.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Notebook 4',
    price: 850,
    Image: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Notebook 5',
    price: 980,
    Image: 'https://images.pexels.com/photos/1477284/pexels-photo-1477284.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Electronic 1',
    price: 100,
    Image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Electronic 2',
    price: 2500,
    Image: 'https://images.pexels.com/photos/1108512/pexels-photo-1108512.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Electronic 3',
    price: 500,
    Image: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Electronic 4',
    price: 850,
    Image: 'https://images.pexels.com/photos/844874/pexels-photo-844874.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Electronic 5',
    price: 980,
    Image: 'https://images.pexels.com/photos/116905/pexels-photo-116905.jpeg?auto=compress&cs=tinysrgb&w=600',
});

function renderProcuts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.Image);
        productImg.addEventListener('click', openProductDetailAside);
    
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


//DropDown
var settingTriggers = document.querySelectorAll('.ht-setting-trigger, .ht-currency-trigger, .ht-language-trigger, .hm-minicart-trigger, .cw-sub-menu');

settingTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        
        this.classList.toggle('is-active');
        
        var siblings = Array.from(this.parentNode.children).filter(function(child) {
            return child.classList.contains('ht-setting') || child.classList.contains('ht-currency') || child.classList.contains('ht-language') || child.classList.contains('minicart') || child.classList.contains('cw-sub-menu');
        });
        
        siblings.forEach(function(sibling) {
            if (window.getComputedStyle(sibling).display === 'none') {
                sibling.style.display = 'block';
            } else {
                sibling.style.display = 'none';
            }
        });
    });
});

var activeTriggers = document.querySelectorAll('.ht-setting-trigger.is-active');

activeTriggers.forEach(function(activeTrigger) {
    var sibling = activeTrigger.nextElementSibling;
    
    while (sibling) {
        if (sibling.classList.contains('catmenu-body')) {
            sibling.style.display = 'block';
            break;
        }
        
        sibling = sibling.nextElementSibling;
    }
});


// Drop down function end here



// Changing Icon before click ad after click
function changeIcon(anchor) {
    var icon = anchor.querySelector('i');
    icon.classList.toggle('fa-chevron-up');
    icon.classList.toggle('fa-chevron-down');

};

// Enddss here

// cart icon redirected to checkout.html page
document.addEventListener('DOMContentLoaded', function(){
    var minicartTrigger = document.querySelector('.hm-minicart-trigger');
    minicartTrigger.addEventListener('click', function(){
        window.location.href = 'shopping-cart.html';
    });

});



var products = [
    {
      id: 1,
      productImage: 'images/product/large-size/1.jpg',
      productName: 'Accusantium dolorem1',
      rating: 0,
      purchasedCount: 5,
      currentPrice: '$46.80',
      oldPrice: '',
      sticker: 'New',
      catagory: "Watch",
    }, {
      id:2,
        productImage: 'images/product/large-size/2.jpg',
        productName: 'Accusantium dolorem1',
        rating: 0,
        price: '$46.80',
        sticker: 'New',
        purchasedCount: 5,
        catagory: "Watch",
      }, {
        id: 3,
        productImage: 'images/product/large-size/3.jpg',
        productName: 'Accusantium dolorem1',
        rating: 0,
        price: '$46.80',
        sticker: 'New',
        purchasedCount: 5,
        catagory: "Watch",
      }, {
        id: 4,
        productImage: 'images/product/large-size/4.jpg',
        productName: 'Accusantium dolorem1',
        rating: 0,
        price: '$46.80',
        sticker: 'New',
        purchasedCount: 15,
        catagory: "Watch",
      }, {
        id: 5,
        productImage: 'images/product/large-size/5.jpg',
        productName: 'Accusantium dolorem1',
        rating: 0,
        price: '$46.80',
        sticker: 'New',
        purchasedCount: 5,
        catagory: "Watch",
      }, {
        id: 6,
        productImage: 'images/product/large-size/6.jpg',
        productName: 'Accusantium dolorem1',
        rating: 0,
        price: '$46.80',
        sticker: 'New',
        purchasedCount: 1,
        catagory: "Watch",
      }
    // Add more product objects here...
  ];


  
  
  var productList = '';
  
  products.forEach(function(product) {
    productList += `

      <div class="single-product-wrap">
        <div class="product-image">
          <a href="single-product.html?id=${product.id}">
            <img src="${product.productImage}" alt="Li's Product Image">
          </a>
          <span class="sticker">${product.sticker}</span>
        </div>
        <div class="product_desc">
          <div class="product_desc_info">
            <div class="product-review">
              <div class="rating-box">
                <ul class="rating">
                  ${generateRatingStars(product.rating)}
                </ul>
              </div>
            </div>
            <h4><a class="product_name" href="single-product.html">${product.productName}</a></h4>
            <div class="price-box">
              <span class="new-price">${product.price}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  
  // Display the product list in the HTML
  var productContainer = document.getElementById('productContainer');
productContainer.innerHTML = productList;
  
  // Function to generate rating stars based on the rating value
  function generateRatingStars(rating) {
    var ratingHtml = '';
    for (var i = 0; i < 5; i++) {
      if (i < rating) {
        ratingHtml += '<li><i class="fa fa-star"></i></li>';
      } else {
        ratingHtml += '<li><i class="fa fa-star-o"></i></li>';
      }
    }
    return ratingHtml;
  }
  // PRODUCT MAPPING END HERE






  // Retrieve the selected products from localStorage
var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Get the checkout container element
var checkoutContainer = document.getElementById('checkoutContainer');

// Iterate over the selected products and display them on the checkout page
cartItems.forEach(function(product) {
  // Create the HTML structure using template literals
  var productHTML = `
    <tr>
      <td class="li-product-remove"><a href="#"><i class="fa fa-times"></i></a></td>
      <td class="li-product-thumbnail"><a href="#"><img src="${product.productImage}" alt="${product.productName}"></a></td>
      <td class="li-product-name"><a href="#">${product.productName}</a></td>
      <td class="li-product-price"><span class="amount">${product.price}</span></td>
      <td class="quantity">
          <label>Quantity</label>
          <div class="cart-plus-minus">
              <input class="cart-plus-minus-box" value="1" type="text">
              <div class="dec qtybutton"><i class="fa fa-angle-down"></i></div>
              <div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>
          </div>
      </td>
      <td class="product-subtotal"><span class="amount">$70.00</span></td>
    </tr>
  `;

  // Append the product HTML to the checkout container
  var checkoutContainer = document.getElementById('checkoutContainer');
  checkoutContainer.innerHTML = productList;
 
});





// BEST SELLING PRODUCT ARRAY

var bestSellerProductList = '';

bestSellerProducts.forEach(function(product) {
  bestSellerProductList += `
  <div class="single-product-wrap">
  <div class="product-image">
      <a href="single-product.html">
          <img src="${bestSellerProductList.productImage}" alt="Li's Product Image">
      </a>
      <span class="sticker">${bestSellerProductList.sticker}</span>
  </div>
  <div class="product_desc">
      <div class="product_desc_info">
          <div class="product-review">
              <div class="rating-box">
              <ul class="rating">
              ${generateRatingStars(bestSellerProductList.rating)}
            </ul>
              </div>
          </div>
          <h4><a class="product_name" href="single-product.html">${bestSellerProductList.productName}</a></h4>
          <div class="price-box">
              <span class="new-price new-price-2">${bestSellerProductList.currentPrice}</span>
              <span class="old-price">${bestSellerProductList.oldPrice}</span>
              <span class="discount-percentage">-7%</span>
          </div>
      </div>
     
  </div>
</div>
  `;
});

// Display the best-selling products on the screen
var bestSellerContainer = document.getElementById('bestSellerContainer');
bestSellerContainer.innerHTML = bestSellerProductList;



















const lgImage = document.getElementById('lgImage');
const smImages = document.querySelectorAll('.sm-image img');

// Set the initial image sources
lgImage.src = products.productImages[0];
smImages.forEach((img, index) => {
  img.src = products.productImages[index];
});

// Handle click event on thumbnail images
smImages.forEach((img, index) => {
  img.addEventListener('click', () => {
      lgImage.src = products.productImages[index];
  });
});



                // CAROUSEL FUNCTINALITY                 



// Select the carousel container element
const carousel = document.querySelector('.sp-carousel-active');

// Select the carousel items
const carouselItems = carousel.querySelectorAll('.carousel-item');

// Calculate the number of visible items based on the window width
let visibleItems = 4;
const updateVisibleItems = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1200) {
    visibleItems = 4;
  } else if (windowWidth >= 992) {
    visibleItems = 3;
  } else if (windowWidth >= 768) {
    visibleItems = 2;
  } else if (windowWidth >= 480) {
    visibleItems = 2;
  } else {
    visibleItems = 1;
  }
};

// Set the initial visible items
updateVisibleItems();

// Create a variable to store the current position
let currentPosition = 0;

// Calculate the number of total items
const totalItems = carouselItems.length;

// Function to update the carousel position
const updateCarouselPosition = () => {
  const itemWidth = carouselItems[0].offsetWidth;
  const translateX = -currentPosition * itemWidth;
  carousel.style.transform = `translateX(${translateX}px)`;
};

// Function to move the carousel to the next position
const moveNext = () => {
  if (currentPosition < totalItems - visibleItems) {
    currentPosition++;
    updateCarouselPosition();
  }
};

// Function to move the carousel to the previous position
const movePrev = () => {
  if (currentPosition > 0) {
    currentPosition--;
    updateCarouselPosition();
  }
};

// Add event listeners to the next and previous buttons
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

nextButton.addEventListener('click', moveNext);
prevButton.addEventListener('click', movePrev);

// Update the carousel position when the window is resized
window.addEventListener('resize', () => {
  updateVisibleItems();
  updateCarouselPosition();
});

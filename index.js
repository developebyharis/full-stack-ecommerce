// let previewContainer = document.querySelector(".products-preview");
// let previewBox = previewContainer.querySelector(".preview");

// document.querySelectorAll(".products-container .product").forEach(product => {
//     product.onclick = () =>{
//         let name = product.getAttribute("data-name");
//         previewBox.forEach(preview => {
//         let target = preview.getAttribute("data-target");
//         if(name == target) {
//             preview.classList.add("active")
//         }
//         })

//     };

// });



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
        window.location.href = 'checkout.html';
    });

});

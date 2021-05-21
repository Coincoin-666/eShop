     jQuery(document).ready(function()
     {
     jQuery('.boxpc1').hide();
     jQuery('a.pcportable').click(function()
     {
     jQuery('.boxpc1').toggle(700);
     return false;
     });
     });


     jQuery(document).ready(function()
     {
     jQuery('.boxpc2').hide();
     jQuery('a.ranger2').click(function()
     {
     jQuery('.boxpc2').toggle(700);
     return false;
     });
     });


     jQuery(document).ready(function()
     {
     jQuery('.boxpc3').hide();
     jQuery('a.ranger3').click(function()
     {
     jQuery('.boxpc3').toggle(700);
     return false;
     });
     });
const computers = [{
    "brand": "asus",
    "model": "XDF43",
    "price": 239
},
{
    "brand": "hp",
    "model": "655JH",
    "price": 654
},
{
    "brand": "huawei",
    "model": "chiQon",
    "price": 458
}
];

const smartphones = [{
    "brand": "samsung",
    "model": "s9",
    "price": 656
},
{
    "brand": "apple",
    "model": "iphone8",
    "price": 767
},
{
    "brand": "nokia",
    "model": "3310",
    "price": 3310
}
];

const tablets = [{
    "brand": "apple",
    "model": "ipadPro",
    "price": 999
},
{
    "brand": "samsung",
    "model": "notepad",
    "price": 678
},
{
    "brand": "asus",
    "model": "XDS",
    "price": 770
}
];

const products = [computers, smartphones, tablets];

console.log(computers[1]);
console.log(products[0]);
console.log(smartphones[2]);

$("#cgv_btn").click(function() {
    $("#cgv").toggle();
});
$("#cgv").hide();

$("#legal_btn").click(function() {
    $("#legal").toggle();
});
$("#legal").hide();

$("#chiQon").on('shown.bs.modal', function () {});

// $("#chiQonModal").modal({ show: true })

// SCROLLING MENU START
$('a[href^=".apropos"]').click(function(){
    var the_id = $(this).attr("href");
    if (the_id === '#') {
    return;
    }
    $('html, body').animate({
    scrollTop:$(the_id).offset().top
    }, 'slow');
    return false;
    });


$('a[href^=".produits"]').click(function(){
    var the_id = $(this).attr("href");
    if (the_id === '#') {
    return;
    }
    $('html, body').animate({
    scrollTop:$(the_id).offset().top
    }, 'slow');
    return false;
    });


$('a[href^=".contact"]').click(function(){
    var the_id = $(this).attr("href");
    if (the_id === '#') {
    return;
    }
    $('html, body').animate({
    scrollTop:$(the_id).offset().top
    }, 'slow');
    return false;
    });
    // SCROLLING MENU END







    $(function () {
      
        var goToCartIcon = function($addTocartBtn){
          var $cartIcon = $(".bi-cart-fill");
          // var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
          $addTocartBtn.prepend($image);
          var position = $cartIcon.position();
          $image.animate({
            top: position.top,
            left: position.left
          }, 500 , "linear", function() {
            $image.remove();
          });
        }
    
        $('.my-cart-btn').myCart({
          currencySymbol: '$',
          classCartIcon: 'my-cart-icon',
          classCartBadge: 'my-cart-badge',
          classProductQuantity: 'my-product-quantity',
          classProductRemove: 'my-product-remove',
          classCheckoutCart: 'my-cart-checkout',
          affixCartIcon: true,
          showCheckoutModal: true,
          numberOfDecimals: 2,
          cartItems: [
            {id: 1, name: 'product 1', summary: 'summary 1', price: 10, quantity: 1, image: 'assets/img/img_1.png'},
            {id: 2, name: 'product 2', summary: 'summary 2', price: 20, quantity: 2, image: 'assets/img/img_2.png'},
            {id: 3, name: 'product 3', summary: 'summary 3', price: 30, quantity: 1, image: 'assets/img/img_3.png'}
          ],
          clickOnAddToCart: function($addTocart){
            goToCartIcon($addTocart);
          },
          afterAddOnCart: function(products, totalPrice, totalQuantity) {
            console.log("afterAddOnCart", products, totalPrice, totalQuantity);
          },
          clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
            console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
          },
          checkoutCart: function(products, totalPrice, totalQuantity) {
            var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
            checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
            $.each(products, function(){
              checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
            });
            alert(checkoutString)
            console.log("checking out", products, totalPrice, totalQuantity);
          },
          getDiscountPrice: function(products, totalPrice, totalQuantity) {
            console.log("calculating discount", products, totalPrice, totalQuantity);
            return totalPrice * 0.5;
          }
        });
    
        $("#addNewProduct").click(function(event) {
          var currentElementNo = $(".row").children().length + 1;
          $(".row").append('<div class="col-md-3 text-center"><img src="images/img_empty.png" width="150px" height="150px"><br>product ' + currentElementNo + ' - <strong>$' + currentElementNo + '</strong><br><button class="btn btn-danger my-cart-btn" data-id="' + currentElementNo + '" data-name="product ' + currentElementNo + '" data-summary="summary ' + currentElementNo + '" data-price="' + currentElementNo + '" data-quantity="1" data-image="images/img_empty.png">Add to Cart</button><a href="#" class="btn btn-info">Details</a></div>')
        });
      });

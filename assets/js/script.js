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

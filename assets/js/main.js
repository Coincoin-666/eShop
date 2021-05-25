// Products Catalog

var add_S21 = $("#add_S21");
var add_Huawei = $("#add_Huawei");
var add_Lenovo = $("#add_Lenovo");
var add_iPhone = $("#add_iPhone");
var add_samsung = $("#add_samsung");
var add_acer = $("#add_acer");
var add_S20 = $("#add_S20");
var add_ipad = $("#add_ipad");
var add_asus = $("#add_asus");



// Add to Cart Interaction
(function(){
  var cart = document.getElementsByClassName('js-cd-cart');
  if(cart.length > 0) {
  	var cartAddBtns = document.getElementsByClassName('js-cd-add-to-cart'),
  		cartBody = cart[0].getElementsByClassName('cd-cart__body')[0],
  		cartList = cartBody.getElementsByTagName('ul')[0],
  		cartListItems = cartList.getElementsByClassName('cd-cart__product'),
  		cartTotal = cart[0].getElementsByClassName('cd-cart__checkout')[0].getElementsByTagName('span')[0],
  		cartCount = cart[0].getElementsByClassName('cd-cart__count')[0],
  		cartCountItems = cartCount.getElementsByTagName('li'),
  		cartUndo = cart[0].getElementsByClassName('cd-cart__undo')[0],
  		add_S21 = 0, //this is a placeholder -> use your real product ids instead
  		cartTimeoutId = false,
  		animatingQuantity = false;
		initCartEvents();


		function initCartEvents() {
			// add products to cart
			for(var i = 0; i < cartAddBtns.length; i++) {(function(i){
				cartAddBtns[i].addEventListener('click', addToCart);
			})(i);}

			// open/close cart
			cart[0].getElementsByClassName('cd-cart__trigger')[0].addEventListener('click', function(event){
				event.preventDefault();
				toggleCart();
			});
			
			cart[0].addEventListener('click', function(event) {
				if(event.target == cart[0]) { // close cart when clicking on bg layer
					toggleCart(true);
				} else if (event.target.closest('.cd-cart__delete-item')) { // remove product from cart
					event.preventDefault();
					removeProduct(event.target.closest('.cd-cart__product'));
				}
			});

			// update product quantity inside cart
			cart[0].addEventListener('change', function(event) {
				if(event.target.tagName.toLowerCase() == 'select') quickUpdateCart();
			});

			//reinsert product deleted from the cart
			cartUndo.addEventListener('click', function(event) {
				if(event.target.tagName.toLowerCase() == 'a') {
					event.preventDefault();
					if(cartTimeoutId) clearInterval(cartTimeoutId);
					// reinsert deleted product
					var deletedProduct = cartList.getElementsByClassName('cd-cart__product--deleted')[0];
					Util.addClass(deletedProduct, 'cd-cart__product--undo');
					deletedProduct.addEventListener('animationend', function cb(){
						deletedProduct.removeEventListener('animationend', cb);
						Util.removeClass(deletedProduct, 'cd-cart__product--deleted cd-cart__product--undo');
						deletedProduct.removeAttribute('style');
						quickUpdateCart();
					});
					Util.removeClass(cartUndo, 'cd-cart__undo--visible');
				}
			});
		};

		function addToCart(event) {
			event.preventDefault();
			if(animatingQuantity) return;
			var cartIsEmpty = Util.hasClass(cart[0], 'cd-cart--empty');
			//update cart product list
			addProduct(this);
			//update number of items 
			updateCartCount(cartIsEmpty);
			//update total price
			updateCartTotal(this.getAttribute('data-price'), true);
			//show cart
			Util.removeClass(cart[0], 'cd-cart--empty');
		};

		function toggleCart(bool) { // toggle cart visibility
			var cartIsOpen = ( typeof bool === 'undefined' ) ? Util.hasClass(cart[0], 'cd-cart--open') : bool;
		
			if( cartIsOpen ) {
				Util.removeClass(cart[0], 'cd-cart--open');
				//reset undo
				if(cartTimeoutId) clearInterval(cartTimeoutId);
				Util.removeClass(cartUndo, 'cd-cart__undo--visible');
				removePreviousProduct(); // if a product was deleted, remove it definitively from the cart

				setTimeout(function(){
					cartBody.scrollTop = 0;
					//check if cart empty to hide it
					if( Number(cartCountItems[0].innerText) == 0) Util.addClass(cart[0], 'cd-cart--empty');
				}, 500);
			} else {
				Util.addClass(cart[0], 'cd-cart--open');
			}
		};


		// ADD TO CART FUNCTIONS

		function addProduct(add_S21) {
			// this is just a product placeholder
			// you should insert an item with the selected product info
			// replace productId, productName, price and url with your real product info
			// you should also check if the product was already in the cart -> if it is, just update the quantity
			add_S21 = add_S21 + 1;
			var productAdded = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#8"><img src="assets/img/s21.png" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">Samsung</a></h3><span class="cd-cart__price"></span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Supprimer</a><div class="cd-cart__quantity"><label for="cd-product-'+ add_S21 +'">Qté</label><span class="cd-cart__select"><select class="reset" id="cd-product-'+ add_S21 +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
			cartList.insertAdjacentHTML('beforeend', productAdded);
		};

		function addProduct(add_Huawei) {
			add_Huawei = add_Huawei + 1;
			var productAdded = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#7"><img src="assets/img/huawei.jpg" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">Huawei</a></h3><span class="cd-cart__price"></span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Supprimer</a><div class="cd-cart__quantity"><label for="cd-product-'+ add_Huawei +'">Qté</label><span class="cd-cart__select"><select class="reset" id="cd-product-'+ add_Huawei +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
			cartList.insertAdjacentHTML('beforeend', productAdded);
		};

		function addProduct(add_Lenovo) {
			add_Lenovo = add_Lenovo + 1;
			var productAdded = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#6"><img src="assets/img/lenovo.jpg" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">Lenovo</a></h3><span class="cd-cart__price"></span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Supprimer</a><div class="cd-cart__quantity"><label for="cd-product-'+ add_Lenovo +'">Qté</label><span class="cd-cart__select"><select class="reset" id="cd-product-'+ add_Lenovo +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
			cartList.insertAdjacentHTML('beforeend', productAdded);
		};

		function addProduct(add_iPhone) {
			add_iPhone = add_iPhone + 1;
			var productAdded = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#5"><img src="assets/img/iphone13.jpg" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">iPhone 13</a></h3><span class="cd-cart__price"></span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Supprimer</a><div class="cd-cart__quantity"><label for="cd-product-'+ add_iPhone +'">Qté</label><span class="cd-cart__select"><select class="reset" id="cd-product-'+ add_iPhone +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
			cartList.insertAdjacentHTML('beforeend', productAdded);
		};

		function addProduct(add_samsung) {
			add_samsung = add_samsung + 1;
			var productAdded = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#4"><img src="assets/img/samsung.jpg" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">Tablette Samsung</a></h3><span class="cd-cart__price"></span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Supprimer</a><div class="cd-cart__quantity"><label for="cd-product-'+ add_samsung +'">Qté</label><span class="cd-cart__select"><select class="reset" id="cd-product-'+ add_samsung +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
			cartList.insertAdjacentHTML('beforeend', productAdded);
		};

		function addProduct(add_acer) {
			add_acer = add_acer + 1;
			var productAdded = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#3"><img src="assets/img/acer.png" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">PC Acer</a></h3><span class="cd-cart__price"></span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Supprimer</a><div class="cd-cart__quantity"><label for="cd-product-'+ add_acer +'">Qté</label><span class="cd-cart__select"><select class="reset" id="cd-product-'+ add_acer+'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
			cartList.insertAdjacentHTML('beforeend', productAdded);
		};

		function addProduct(add_S20) {
			add_S20 = add_S20 + 1;
			var productAdded = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#2"><img src="assets/img/s20ultra.jpg" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">Samsung</a></h3><span class="cd-cart__price"></span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Supprimer</a><div class="cd-cart__quantity"><label for="cd-product-'+ add_S20 +'">Qté</label><span class="cd-cart__select"><select class="reset" id="cd-product-'+ add_S20 +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
			cartList.insertAdjacentHTML('beforeend', productAdded);
		};

		function addProduct(add_ipad) {
			add_ipad = add_ipad + 1;
			var productAdded = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#1"><img src="assets/img/ipadpro.jpg" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">iPad</a></h3><span class="cd-cart__price"></span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Supprimer</a><div class="cd-cart__quantity"><label for="cd-product-'+ add_S20 +'">Qté</label><span class="cd-cart__select"><select class="reset" id="cd-product-'+ add_S20 +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
			cartList.insertAdjacentHTML('beforeend', productAdded);
		};

		function addProduct(add_asus) {
			add_asus = add_asus + 1;
			var productAdded = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#0"><img src="assets/img/asus.jpg" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">Asus</a></h3><span class="cd-cart__price"></span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Supprimer</a><div class="cd-cart__quantity"><label for="cd-product-'+ add_asus +'">Qté</label><span class="cd-cart__select"><select class="reset" id="cd-product-'+ add_asus +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
			cartList.insertAdjacentHTML('beforeend', productAdded);
		};

		


		function removeProduct(product) {
			if(cartTimeoutId) clearInterval(cartTimeoutId);
			removePreviousProduct(); // prduct previously deleted -> definitively remove it from the cart
			
			var topPosition = product.offsetTop,
				productQuantity = Number(product.getElementsByTagName('select')[0].value),
				productTotPrice = Number((product.getElementsByClassName('cd-cart__price')[0].innerText).replace('€', '')) * productQuantity;

			product.style.top = topPosition+'px';
			Util.addClass(product, 'cd-cart__product--deleted');

			//update items count + total price
			updateCartTotal(productTotPrice, false);
			updateCartCount(true, -productQuantity);
			Util.addClass(cartUndo, 'cd-cart__undo--visible');

			//wait 8sec before completely remove the item
			cartTimeoutId = setTimeout(function(){
				Util.removeClass(cartUndo, 'cd-cart__undo--visible');
				removePreviousProduct();
			}, 8000);
		};

		function removePreviousProduct() { // definitively removed a product from the cart (undo not possible anymore)
			var deletedProduct = cartList.getElementsByClassName('cd-cart__product--deleted');
			if(deletedProduct.length > 0 ) deletedProduct[0].remove();
		};

		function updateCartCount(emptyCart, quantity) {
			if( typeof quantity === 'undefined' ) {
				var actual = Number(cartCountItems[0].innerText) + 1;
				var next = actual + 1;
				
				if( emptyCart ) {
					cartCountItems[0].innerText = actual;
					cartCountItems[1].innerText = next;
					animatingQuantity = false;
				} else {
					Util.addClass(cartCount, 'cd-cart__count--update');

					setTimeout(function() {
						cartCountItems[0].innerText = actual;
					}, 150);

					setTimeout(function() {
						Util.removeClass(cartCount, 'cd-cart__count--update');
					}, 200);

					setTimeout(function() {
						cartCountItems[1].innerText = next;
						animatingQuantity = false;
					}, 230);
				}
			} else {
				var actual = Number(cartCountItems[0].innerText) + quantity;
				var next = actual + 1;
				
				cartCountItems[0].innerText = actual;
				cartCountItems[1].innerText = next;
				animatingQuantity = false;
			}
		};

		function updateCartTotal(price, bool) {
			cartTotal.innerText = bool ? (Number(cartTotal.innerText) + Number(price)).toFixed(2) : (Number(cartTotal.innerText) - Number(price)).toFixed(2);
		};

		function quickUpdateCart() {
			var quantity = 0;
			var price = 0;

			for(var i = 0; i < cartListItems.length; i++) {
				if( !Util.hasClass(cartListItems[i], 'cd-cart__product--deleted') ) {
					var singleQuantity = Number(cartListItems[i].getElementsByTagName('select')[0].value);
					quantity = quantity + singleQuantity;
					price = price + singleQuantity*Number((cartListItems[i].getElementsByClassName('cd-cart__price')[0].innerText).replace('€', ''));
				}
			}

			cartTotal.innerText = price.toFixed(2);
			cartCountItems[0].innerText = quantity;
			cartCountItems[1].innerText = quantity+1;
		};
  }
})();
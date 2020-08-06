function addToCart(){
    var img=document.getElementById('img');
    var shoe=document.getElementById('shoe');
    var rupee=document.getElementById('rupee');
    var cart_img=document.getElementById('cart-img');
    var cart_name=document.getElementById('cart-name');
    var cart_price=document.getElementById('cart-price');
    cart_name.innerHTML=shoe.innerHTML;
    cart_price.innerHTML=rupee.innerHTML;
    cart_img.src=img.src;
}
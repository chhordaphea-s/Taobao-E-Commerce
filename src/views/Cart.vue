<template>
    <div class="cart">



    <div class="Leftside">
        <div class="routes-to-payment">
        <a class="on"> Cart </a> > 
        <a class="router"> Customer Service </a> >
        <a class="router">Shipping Information</a> >
        <a class="router">Payment Method</a>        
    </div>
    
        <div class="schema-container">
            <p class="schema-item">Item</p>
            <p class="schema-price">Price</p>
            <p class="schema-quantity">Quantity</p>
        </div>

        <div class="product-container">
            <div class="product">
                <img class="prd-img" src="../assets/images/cart/skirt.png" alt="">

                <div class="prd-titleandsize">
                    <p class="prd-title">Flared Skirts Street</p>
                    <div class="prd-size">
                        <p class="size">Size : </p>
                        <p class="size">Small</p>
                    </div>
                </div>

                
                <p class="price">$52</p>

                <div class="prd-quantity">
                    <input class="numberQuantity" value="1" type="number" name="" id="">
                </div>

            </div>

            
        </div>

        <div class="subtotal-container">
                <p class="sub">Subtotal  :</p>
                <p class="sub-price">52$</p>
        </div>
        
    </div>

    <div class="Rightside">
        <div class="rightSideContent">
            <div class="summaryItem">
                <p class="sum">Summary </p>
                <p class="item"> ( 1 Item )</p>
            </div>
    
            <hr class="line">
    
            <div class="summary-subtotal-container">
                <p class="sum-sub">Subtotal </p>
                <p class="sum-sub">52$</p>
            </div>
            
            <div class="summary-subtotal-container">
                <p class="sum-sub">Shipping </p>
                <p class="sum-sub">-</p>
            </div>
    
            <div class="summary-subtotal-container">
                <p class="sum-sub">Estimate Tax </p>
                <p class="sum-sub">-</p>
            </div>
    
            <hr class="line">
    
            <div class="total-container">
                <p class="total">Total </p>
                <p class="total">52$</p>
            </div>
    
            <div class="checkout-container">
    
    
                <button class="checkout-btn">
                    Check Out
                </button>
            </div>
        </div>
    </div>


</div>
</template>

<style src="./../assets/css/cart.css"></style>
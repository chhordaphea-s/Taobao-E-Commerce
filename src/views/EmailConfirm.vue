<template> 
    <div class="emailconfirm">

        <div class="emaildate-container">
            <div class="email-container">
                <p class="email">hello@taobao.com</p>
                <p class="email">to me</p>
            </div>

            <div class="date-container">
                <p class="date">31/01/23</p>
                <img class="share" src="../assets/images/svg/share.svg" alt="">
            </div>
        </div>

        <div class="summary-container">

            <div class="brand">
                <img src="../assets/images/svg/logotaobao.svg" alt="">
                <p class="logoname">Taobao</p>
            </div>

            <p class="thankyou">Thank you for your purchasing!</p>
            <p class="alert-text">Hi Kenny, we’re getting your order ready to be shipped. We will notify you when it has been sent.</p>

            <div class="review-and-link">
                <button class="viewCart">View your cart</button>
                <p class="linktoStore">
                    Or 
                    <a class="link" href="">Visit our store</a>
                </p>
            </div>

            <p class="main-title">Order Summary</p>

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
            </div>

            <div class="total-summary-container">
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
            </div>
            
            <p class="main-title">Customer Information</p>
            <div class="allInfo-container">
                <div class="info-container">
                    <p class="header">Shipping Address</p>
                    <p class="subhead">Kenny Bostick</p>
                    <p class="address">12 Waldo Point Road Mishauken, NY 11200 United States</p>
                </div>
                <div class="info-container">
                    <p class="header">Billing Address</p>
                    <p class="subhead">Kenny Bostick</p>
                    <p class="address">12 Waldo Point Road Mishauken, NY 11200 United States</p>
                </div>
            </div>

            <div class="allInfo-container">
                <div class="info-container">
                    <p class="header">Shipping Method</p>
                    <p class="subhead">UPS Ground (Estimated ship time of 3-6 days)</p>
                </div>
                <div class="info-container">
                    <p class="header">Payment Method</p>
                    <img src="../assets/images/svg/visa.svg" alt="">
                    <p class="subhead">Ending in 3217 - $23.60</p>
                </div>
            </div>

            
        </div>

        </div>


    

    </div>

</template>

<style src="../assets/css/emailConfirm.css"></style>
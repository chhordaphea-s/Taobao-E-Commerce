<template>
    <div class="order">

        <div class="allContent">


            <div class="status-container">
                <button id="status-active" class="status">Pending</button>
                <button class="status">Success</button>
                <button class="status">Fail</button>
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

                        <div class="btn-container">
                            <button class="arrow-btn">
                                <img src="../assets/images/svg/arrowdown.svg" alt="">
                            </button>

                            <p class="price">$52</p>

                            <button class="cancel-btn">
                                Cancel
                            </button>
                        </div>
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
            </div>

        </div>


    </div>


</template>

<style src="../assets/css/order.css"></style>
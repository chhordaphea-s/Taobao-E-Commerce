<script>

export default {
    data() {
        return {
            apiURL: "http://localhost:30002",
            cartItems: [],
        }
    }, mounted() {
        fetch(`${this.apiURL}/cart`,{
            method: "GET",
        credentials: "include",
        origin: "http://localhost:5173/",
        headers: {
                    "Content-Type": "application/json",
                },
        }).then( async (response) => {
            const result = await response.json()

            console.log("Server Responsed: ", result)

            if (!result.success) {
                alert(`Invalid: ${result.message}`)
            }

            this.cartItems = result.data
        })
    }
}

</script>

<template>

    <div class="popup-container">
        <div class="popaddtocart">

            <div class="cart-info">
                <p class="title">Item added to cart</p>
                <hr class="line">
                
                <div class="allItem" >
                    <div class="info" v-for="item in cartItems">
                        <p class="item-name">{{ item.productId.title }} ({{ item.size }}) </p>
                        <p class="item-name"> Qty: {{item.quantity}} | ${{ item.quantity * item.productId.price }} </p>
                    </div>
                </div>               
                
                <div class="btn-container">
                    <a href="/cart"><button class="viewcart">View Cart</button></a>
                    <button class="checkoutButton">Check Out</button>
                </div>
                
            </div>



        </div>
        <div class="triangle-container">
            <div class="triangle"></div>
            <div class="small-triangle"></div>
        </div>



    </div>




</template>

<style src="./popAddToCart.css"></style>
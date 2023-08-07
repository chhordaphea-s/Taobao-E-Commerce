<script>
export default {
    data() {
        return {
            apiURL: "http://localhost:30002",
            orderID: "",
            order: {},
        }
    }, created() {
        this.orderID = this.$route.params.id
        this.fetchDatFromAPI()
        this.removeCartItems()
    }, methods: {

        fetchDatFromAPI() {
            fetch(`${this.apiURL}/order/${this.orderID}`, {
                method: "GET",
                credentials: "include",
                origin: "http://localhost:5173/",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(async (response) => {
                const result = await response.json()

                console.log("Server Respose: (Order)", result);

                if (!result.success) {
                    alert("Invalid: ", result.message)
                    if (result.error) {
                        this.$router.push({ name: "login" })
                    }
                }
                this.order = result.data;

            })
        },

        getCreditCardType(cardNumber) {
            // Remove any spaces or non-digit characters from the card number
            cardNumber = cardNumber.replace(/\D/g, '');

            // Define regular expressions for different card types
            const cardPatterns = {
                visa: /^4\d{12}(\d{3})?$/,
                mastercard: /^5[1-5]\d{14}$/,
                amex: /^3[47]\d{13}$/,
                discover: /^6(?:011|5\d{2})\d{12}$/,
            };

            // Check the card number against each pattern and return the card type
            if (cardPatterns.visa.test(cardNumber)) {
                return 'Visa';
            } else if (cardPatterns.mastercard.test(cardNumber)) {
                return 'Mastercard';
            } else if (cardPatterns.amex.test(cardNumber)) {
                return 'American Express (AMEX)';
            } else if (cardPatterns.discover.test(cardNumber)) {
                return 'Discover';
            } else {
                return 'Unknown';
            }
        }, 

        getEndOfCard(str) {
            return str.substring(str.length - 4)
        },

        removeCartItems() {
            fetch(`${this.apiURL}/cart/reset`, {
                method: "DELETE",
                credentials: "include",
                origin: "http://localhost:5173/",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(async (response) => {
                const result = await response.json()

                console.log("Server Respose: (Order)", result);

                if (!result.success) {
                    alert("Invalid: ", result.message)
                    return
                }
            })
        }

    }
}


</script>
<template>
    <div class="success">

        <div class="Leftside">

            <div class="thankyou-container">
                <img src="../assets/images/svg/verify.svg" alt="">
                <div class="order-text">
                    <div class="order-container">
                        <p class="order">Order </p>
                        <p class="order">{{ this.order._id }}</p>
                    </div>
                    <p class="thankyou-text">Thank You, {{ this.order.shipping.shipingAddress.lastName}}!</p>
                </div>
            </div>

            <div class="confirm-container">
                <p class="confirm-text">Your order is confirmed.</p>
                <p class="confirm-text">We’ve accepted your order and we’re getting it ready.</p>
            </div>

            <p class="customer-info">Customer Information</p>

            <div class="allInfo-container">
                <div class="info-container">
                    <p class="header">Shipping Address</p>
                    <p class="subhead">{{ this.order.shipping.shipingAddress.firstName}} {{ this.order.shipping.shipingAddress.lastName}}</p>
                    <p class="address">{{ this.order.shipping.shipingAddress.address }}, {{
                        this.order.shipping.shipingAddress.state }}, {{ this.order.shipping.shipingAddress.country }}
                        {{ this.order.shipping.shipingAddress.zip }}</p>
                </div>
                <div class="info-container">
                    <p class="header">Billing Address</p>
                    <p class="subhead">Kenny Bostick</p>
                    <p class="address">{{ this.order.billingaddress.address }}, {{
                        this.order.billingaddress.state }}, {{ this.order.billingaddress.country }}
                        {{ this.order.billingaddress.zip }}</p>
                </div>
            </div>

            <div class="allInfo-container">
                <div class="info-container">
                    <p class="header">Shipping Method</p>
                    <p class="subhead">{{ this.order.shipping.shipppingMethode.title }} (Estimated ship time of 3-6 days)</p>
                </div>
                <div class="info-container">
                    <p class="header">Payment Method</p>
                    <img src="../assets/images/svg/visa.svg" alt="">
                    <p class="subhead">Ending in {{ getEndOfCard(this.order.paymentmethod.cardNumber) }} - $23.60</p>
                </div>
            </div>

        </div>

        <div class="Rightside">
            <div class="rightSideContent">
                <div class="summaryItem">
                    <p class="sum">Summary </p>
                    <p class="item"> ( {{ this.order.products.length }} Item )</p>
                </div>

                <hr class="line">

                <div class="summary-subtotal-container">
                    <p class="sum-sub">Subtotal </p>
                    <p class="sum-sub">$ {{ this.order.subTotal }}</p>
                </div>

                <div class="summary-subtotal-container">
                    <p class="sum-sub">Shipping </p>
                    <p class="sum-sub">$ {{ this.order.shipping.shipppingMethode.price }}</p>
                </div>

                <div class="summary-subtotal-container">
                    <p class="sum-sub">Estimate Tax </p>
                    <p class="sum-sub">$ {{ this.order.tax }}</p>
                </div>

                <hr class="line">

                <div class="total-container">
                    <p class="total">Total </p>
                    <p class="total">$ {{ this.order.totalAmount }}</p>
                </div>


            </div>

        </div>


    </div>
</template>

<style src="../assets/css/success.css"></style>
<script>

export default {
    data() {
        return {
            apiURL: "http://localhost:30002",
            orderID: "",
            order: {},
            paymentmethod: {
                cardNumber: "",
                cardHolderName: "",
                expirationDate: "",
                cvv: 0,
            },
            sameAsShipping: true
            
        }
    },
    created() {
        this.orderID = this.$route.params.id

        this.fetchDatFromAPI()
    },
    methods: {
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
        updateOrderFunction() {

            if (!this.isValidCreditCardNumber(this.paymentmethod.cardNumber)) {
                alert("Your card number invalid!!")
                return
            }
            this.order.paymentmethod = this.paymentmethod;

            if (this.sameAsShipping) this.order.billingaddress = this.order.shipping.shipingAddress

            this.order.status = "completed"

            console.log(("order: ", this.order));

            fetch(`${this.apiURL}/order/update/${this.orderID}`, {
                method: "PUT",
                credentials: "include",
                origin: "http://localhost:5173/",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.order)
            }).then(async (response) => {
                const result = await response.json()

                console.log("Server Response: (Update) ", result)

                if (!result.success) {
                    alert('Invalid: ', result.error)
                    return;
                }

                this.$router.push({ name: `success`, params: { id: this.orderID } })
            })
        },

        isValidCreditCardNumber(cardNumber) {
            cardNumber = cardNumber.replace(/\D/g, '');

            if (cardNumber.length !== 16) {
                return false;
            }

            let sum = 0;
            let shouldDouble = false;

            for (let i = cardNumber.length - 1; i >= 0; i--) {
                let digit = parseInt(cardNumber.charAt(i));

                if (shouldDouble) {
                    digit *= 2;
                    if (digit > 9) {
                        digit -= 9;
                    }
                }

                sum += digit;
                shouldDouble = !shouldDouble;
            }

            return sum % 10 === 0;
        },

    }
}
</script>

<template>
    <div class="paymentMethod">
        <div class="Leftside">

            <div class="routes-to-payment">
                <a class="router"> Cart </a> >
                <a class="router"> Customer Service </a> >
                <a class="router">Shipping Information</a> >
                <a class="on">Payment Method</a>
            </div>

            <div class="shippingaddress-container">
                <div class="shipping-address">
                    <p class="shipping">Shipping Address</p>
                    <p class="address">{{ this.order.shipping.shipingAddress.address }}, {{
                        this.order.shipping.shipingAddress.state }}, {{ this.order.shipping.shipingAddress.country }}
                        {{ this.order.shipping.shipingAddress.zip }}</p>

                </div>
                <p class="edit">Edit</p>

            </div>

            <div class="shippingaddress-container">
                <div class="shipping-address">
                    <p class="shipping">Shipping Method</p>
                    <p class="address">{{ this.order.shipping.shipppingMethode.title }}, $ {{
                        this.order.shipping.shipppingMethode.price }}</p>
                </div>
                <p class="edit">Edit</p>

            </div>
            <form>

                <div class="title-payment-container">
                    <p class="title-payment">Payment Method</p>
                    <div class="samplecard">
                        <img src="../assets/images/svg/visa.svg" alt="">
                        <img src="../assets/images/svg/mastercard.svg" alt="">
                        <img src="../assets/images/svg/bank.svg" alt="">
                    </div>
                </div>

                <input class="cardname" type="text" placeholder="Name on Card" required v-model="paymentmethod.cardHolderName">
                <div class="cardinfo">
                    <input class="cardnum" type="text" placeholder="Card Number" required v-model="paymentmethod.cardNumber">
                    <input class="cardnum" type="month" placeholder="MM/YY" required v-model="paymentmethod.expirationDate">
                    <input class="cardnum" type="password" placeholder="CVV" required v-model="paymentmethod.cvv">
                </div>

                <p class="title-billing">Billing Address</p>

                <div class="method-selection">
                    <div class="method-price">
                        <input class="radio" type="radio" v-model="this.sameAsShipping">
                        <p class="method">Same as shipping address</p>
                    </div>
                </div>
                <div class="method-selection">
                    <div class="method-price">
                        <input class="radio" type="radio">
                        <p class="method">Use a different billing address</p>
                    </div>
                </div>

                <!-- <p class="title-remember">Remember Me</p>

                <div class="method-selection">
                    <div class="method-price">
                        <input class="checkbox" type="checkbox">
                        <p class="method">Save my information for a faster checkout</p>
                    </div>
                </div> -->

            </form>

            <div class="buttonReturnContinue-container">
                <div class="to-return">
                    <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.109 2.061C10.109 2.291 10.0783 2.51333 10.017 2.728C9.95567 2.94267 9.84833 3.13433 9.695 3.303C9.63367 3.395 9.52633 3.51767 9.373 3.671C9.21967 3.809 9.01267 4.00833 8.752 4.269C8.108 4.80567 7.49467 5.373 6.912 5.971C6.34467 6.569 5.79267 7.19767 5.256 7.857C5.072 8.07167 4.888 8.294 4.704 8.524C4.52 8.754 4.37433 8.99167 4.267 9.237C4.15967 9.48233 4.106 9.743 4.106 10.019C4.12133 10.295 4.23633 10.5787 4.451 10.87C4.83433 11.4067 5.24067 11.9203 5.67 12.411C6.09933 12.9017 6.55933 13.3847 7.05 13.86C7.34133 14.1667 7.63267 14.4657 7.924 14.757C8.23067 15.0483 8.522 15.3397 8.798 15.631C9.166 15.999 9.38833 16.39 9.465 16.804C9.54167 17.2027 9.50333 17.5553 9.35 17.862C9.19667 18.1687 8.94367 18.391 8.591 18.529C8.25367 18.667 7.84733 18.644 7.372 18.46C7.12667 18.3527 6.889 18.207 6.659 18.023C6.429 17.8543 6.20667 17.6627 5.992 17.448C5.77733 17.218 5.57033 16.988 5.371 16.758C5.17167 16.528 4.98767 16.3133 4.819 16.114C1.93633 12.94 0.495 10.8393 0.495 9.812C0.495 9.03 1.05467 7.89533 2.174 6.408C2.60333 5.87133 3.07867 5.31167 3.6 4.729C4.12133 4.131 4.704 3.54067 5.348 2.958C5.74667 2.55933 6.153 2.16833 6.567 1.785C6.99633 1.38633 7.464 1.049 7.97 0.773C8.18467 0.665666 8.41467 0.619666 8.66 0.634999C8.92067 0.634999 9.15833 0.696332 9.373 0.818999C9.58767 0.926333 9.764 1.08733 9.902 1.302C10.04 1.51667 10.109 1.76967 10.109 2.061Z"
                            fill="black" />
                    </svg>
                    <a class="return"> Return to cart</a>
                </div>
                <button class="continue" @click="updateOrderFunction">Complete Order</button>
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

                <div class="discount-container">
                    <p class="discount-title">Gift card or discount code</p>
                    <div class="action-on-code">
                        <input class="input-code" type="text">
                        <button class="btn-apply">Apply</button>
                    </div>
                </div>

                <div class="total-container">
                    <p class="total">Total </p>
                    <p class="total">$ {{ this.order.totalAmount }}</p>
                </div>


            </div>

        </div>

    </div>
</template>

<style src="../assets/css/paymentMethod.css"></style>
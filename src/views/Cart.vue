<script>

export default {
    data() {
        return {
            apiURL: "http://localhost:30002",
            cartItems: [],
            productImage: "",
            subTotal: 0,
            total: 0,
            tax: 0,
            shipping: 0,

        }
    }, mounted() {
        fetch(`${this.apiURL}/cart`, {
            method: "GET",
            credentials: "include",
            origin: "http://localhost:5173/",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(async (response) => {
            const result = await response.json()

            console.log("Server Responsed: ", result)

            if (!result.success) {
                alert(`Invalid: ${result.error}`)
                if (result.error === "You must sign In") this.$router.push({ name: "login" })
            }

            this.cartItems = result.data


            this.cartItems.forEach(item => {
                this.subTotal += (item.quantity * item.productId.price)
            });

            this.total = this.subTotal + this.tax + this.shipping
        })

    },
    methods: {
        getFirstImage(images) {
            return this.productImage = images[0];
        },
        calculatesubTotal() {
            this.cartItems.forEach(item => {
                this.subTotal += (item.quantity * item.productId.price)
            });
        },
        async checkoutOrderFunction() {
            if (this.cartItems.length <= 0) {
                alert("Please add any product to card.")
                return;
            }

            const order = {
                user: {},
                products: this.cartItems,
                subTotal: this.subTotal,
                totalAmount: this.total,
                status: "failed"
            }

            // console.log("orrder: ", order)

            fetch(`${this.apiURL}/order/create`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-type": "application/json",
                    Origin: "http://localhost:5173",
                },
                body: JSON.stringify(order)
            }).then(async (response) => {
                const result = await response.json()

                console.log("Server Response: createOrder ", result)

                if (!result.success) {
                    alert(`Error: ${result.message}`)
                    return
                }

                this.$router.push({ path: `customerservice/${result.data._id}` })

                // this.$router.push({ name: "shippinginformation"})
            })
        }

    },
    computed: {

    }
}

</script>

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
                <div class="product" v-for="item in cartItems">
                    <img class="prd-img" :src="this.apiURL + '/' + item.productId.images[0]" alt="">

                    <div class="prd-titleandsize">
                        <p class="prd-title">{{ item.productId.title }}</p>
                        <div class="prd-size">
                            <p class="size">Size : </p>
                            <p class="size">{{ item.size }}</p>
                        </div>
                    </div>


                    <p class="price">$ {{ item.productId.price }}</p>

                    <div class="prd-quantity">
                        <input class="numberQuantity" type="number" name="" id="" :value="item.quantity">
                    </div>

                </div>


            </div>

            <div class="subtotal-container">
                <p class="sub">Subtotal :</p>
                <p class="sub-price">$ {{ this.subTotal }}</p>
            </div>

        </div>

        <div class="Rightside">
            <div class="rightSideContent">
                <div class="summaryItem">
                    <p class="sum">Summary </p>
                    <p class="item"> ( {{ cartItems.length }} Item )</p>
                </div>

                <hr class="line">

                <div class="summary-subtotal-container">
                    <p class="sum-sub">Subtotal </p>
                    <p class="sum-sub">$ {{ this.subTotal }}</p>
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
                    <p class="total">$ {{ this.subTotal }}</p>
                </div>

                <div class="checkout-container">


                    <button class="checkout-btn" @click="checkoutOrderFunction()">
                        Check Out
                    </button>
                </div>
            </div>
        </div>


    </div>
</template>

<style src="./../assets/css/cart.css"></style>
<script>
export default {
    data() {
        return {
            orderList: [],
        }
    },
    created() {

        // this.orderList = [false, false, false, false, false, false, false, false, false]
        this.fetchOrderData()
    },
    methods: {
        showTotalSammaryFunc(index) {
            console.log("index: ", index)
            this.orderList[index] = !this.orderList[index]
        },
        fetchOrderData() {
            fetch("http://localhost:30002/order", {
                method: "GET",
                credentials: "include",
                origin: "http://localhost:5173/",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(async (response) => {
                const result = await response.json()

                console.log("Server Response: ", result)

                if (!result.success) {
                    alert(`Invalid: ${result.message}`)
                    return
                }

                this.orderList = result.data
            })

        },

    }
}

</script>

<template>
    <div class="order">

        <div class="allContent">
            <div class="status-container">
                <button id="status-active" class="status">Pending</button>
                <button class="status">Success</button>
                <button class="status">Fail</button>
            </div>

            <div v-for="item in orderList" class="product-container">
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
                        <button class="arrow-btn" @click="item = !item">
                            <img src="../assets/images/svg/arrowdown.svg" alt="">
                        </button>

                        <p class="price">$ {{ item.totalAmount }}</p>

                        <button class="cancel-btn">
                            Cancel
                        </button>
                    </div>
                </div>

                <div class="total-summary-container" v-if="item">
                    <div class="summary-subtotal-container">
                        <p class="sum-sub">Subtotal </p>
                        <p class="sum-sub">$ {{ item.subTotal }}</p>
                    </div>

                    <div class="summary-subtotal-container">
                        <p class="sum-sub">shipping </p>
                        <p class="sum-sub">$ {{ item.shipping.shipppingMethode.price }}</p>
                    </div>

                    <div class="summary-subtotal-container">
                        <p class="sum-sub">Estimate Tax </p>
                        <p class="sum-sub">$ {{ item.tax }}</p>
                    </div>

                    <hr class="line">

                    <div class="total-container">
                        <p class="total">Total </p>
                        <p class="total">$ {{ item.totalAmount }}</p>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>

<style src="../assets/css/order.css"></style>
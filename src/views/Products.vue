<script>
import popAddToCart from "./Component/popupAddToCart/PopAddToCart.vue"

export default {
  data() {
    return {
      apiURL: "http://localhost:30002",
      isDisplayCartPopUp: false,
      product: {},
      moreProducts: [],
      selectedImage: "",
      quantity: 1,
    }
  },
  components: {
    popAddToCart,
  },
  methods: {
    async addToCartFunction(qunt, size) {

      if (size == undefined) {
        alert("Size can't be empty")
        return
      }

      const product = {
        product: this.product,
        quantity: qunt,
        size: size
      }

      console.log("product: ", product)

      fetch(`${this.apiURL}/cart/addtocart`, {
        method: "POST",
        credentials: "include",
        origin: "http://localhost:5173/",
        headers: {
                    "Content-Type": "application/json",
                },
        body: JSON.stringify(product)
      }).then( async (response) => {
        const result = await response.json()

        console.log("Server Reponse: ", result);

        if (!result.success) {
          if (result.error == "You must sign In") this.$router.push({ name: "login"})
        } else {
          this.isDisplayCartPopUp = true
        }
      })
    }

  },
  mounted() {
    const id = this.$route.params.id
    console.log("id: ", id);

    fetch(`${this.apiURL}/product/${id}`).then(async (response) => {
      const result = await response.json()

      console.log("Server Response: ", result)

      if (!result.success) {
        alert(`Invalid: ${result.message}`)
        return
      }

      this.product = result.data
      this.selectedImage = `${this.apiURL}/${this.product.images[0]}`
    })


    fetch(`${this.apiURL}/product`).then(async (response) => {
      const result = await response.json()

      console.log("Server Response: ", result)

      if (!result.success) {
        alert(`Invalid: ${result.message}`)
        return
      }

      this.moreProducts = result.data
    })
  }
}
</script>


<template>
  <popAddToCart class="cartPopUp" v-if="this.isDisplayCartPopUp"></popAddToCart>

  <div class="product">

    <div class="routes-to-product">
      <a class="router"> Home </a> >
      <a class="router"> Product </a> >
      <a class="product-name">Skirt</a>
    </div>

    <div class="productWithDetailInfo">
      <div class="LeftRightInfoContainer">
        <div class="left-side">
          <div class="mainPicture">
            <img :src="selectedImage" alt="">
          </div>
          <div class="availablePictureContainer">

            <img v-for="image in product.images" :src="apiURL + '/' + image"
              @click="this.selectedImage = apiURL + '/' + image" alt="">

          </div>

        </div>

        <div class="right-side">
          <div class="name-and-price">
            <div class="nameProduct">
              {{ product.title }}
            </div>
            <div class="price">$ {{ product.price }}</div>
          </div>

          <div class="category">
            | {{ product.category }}
          </div>

          <div class="description-container">
            <p class="description">
              {{ product.description }}
            </p>
          </div>


          <form >
            <div class="size-and-quantity">

              <div class="size-container">
                <p class="size"> Size </p>
                <select class="size-selection" name="choose size" id="" v-model="selectedSize" required>
                  <option value="" disabled selected>Choose Size</option>
                  <option :value="s" v-for="s in product.size">Size {{ s }}</option>

                </select>
              </div>

              <div class="quantity-container">
                <p class="quantity">Quantity</p>
                <input class="numberQuantity" v-model="quantity" type="number" name="quantity" id="quantity" required>
              </div>
            </div>

            <div class="purchase-addCart">
              <button class="purchase" type="submit">
                <img src="./../assets/images/svg/CreditCard.svg" alt="">
                Buy Now
              </button>

              <button type="submit" @click.prevent="addToCartFunction(quantity, selectedSize)">
                <img src="./../assets/images/svg/cart.svg" alt="">
                Add to cart
              </button>
            </div>
          </form>
        </div>
      </div>



      <div class="related-product">
        <div class="relatedproduct-title">
          <p class="title">Related Products</p>
        </div>
      </div>

      <div class="product-display-container">


        <a class="product-cell" v-for="productm in moreProducts" :href="'/products/' + productm._id">
          <div class="productImage">
            <img :src="'http://localhost:30002/' + productm.images[0]" alt="">
          </div>

          <div class="product-info">
            <p id="product-name">{{ productm.title }}</p>
            <p id="product-price">{{ productm.price }}$</p>
          </div>
        </a>

      </div>


    </div>


  </div>
</template>

<style src="./../assets/css/productdetailstyles.css"></style>
<script>
export default {
    data() {
        return {
            products: [],
        }
    },
    mounted() {
      fetch("http://localhost:30002/product").then(async (response) => {
      const result = await response.json()

      console.log("Server Response: ", result)

      if (!result.success) {
        alert(`Invalid: ${result.message}`)
        return
      }

      this.products = result.data
      })
    }
}

</script>

<template>
  <div class="home" >
    
    <img class="img" src="../assets/images/home/homeCover.png" alt="">

    <div class="product-section">

        <a class="product-cell" v-for="product in products" :href="'/products/' + product._id" >
          <div class="productImage">
            <img :src="'http://localhost:30002/' + product.images[0]" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">{{product.title}}</p>
                <p id="product-price">{{product.price}}$</p>
          </div>
        </a>

        <!-- <div class="product-cell">
          <div class="productImage">
            <img src="./../assets/images/home_products/product1icon.svg" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">ins air cushion comb women's black massage</p>
                <p id="product-price">$ 1.7</p>
          </div>
        </div>
        <div class="product-cell">
          <div class="productImage">
            <img src="./../assets/images/home_products/product1icon.svg" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">ins air cushion comb women's black massage</p>
                <p id="product-price">$ 1.7</p>
          </div>
        </div>
        <div class="product-cell">
          <div class="productImage">
            <img src="./../assets/images/home_products/product1icon.svg" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">ins air cushion comb women's black massage</p>
                <p id="product-price">$ 1.7</p>
          </div>
        </div>
        <div class="product-cell">
          <div class="productImage">
            <img src="./../assets/images/home_products/product1icon.svg" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">ins air cushion comb women's black massage</p>
                <p id="product-price">$ 1.7</p>
          </div>
        </div>
        <div class="product-cell">
          <div class="productImage">
            <img src="./../assets/images/home_products/product1icon.svg" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">ins air cushion comb women's black massage</p>
                <p id="product-price">$ 1.7</p>
          </div>
        </div>
        <div class="product-cell">
          <div class="productImage">
            <img src="./../assets/images/home_products/product1icon.svg" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">ins air cushion comb women's black massage</p>
                <p id="product-price">$ 1.7</p>
          </div>
        </div>
        <div class="product-cell">
          <div class="productImage">
            <img src="./../assets/images/home_products/product1icon.svg" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">ins air cushion comb women's black massage</p>
                <p id="product-price">$ 1.7</p>
          </div>
        </div>

        <div class="product-cell">
          <div class="productImage">
            <img src="./../assets/images/home_products/product2icon.svg" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">The counter shopping mall withdraws the international</p>
                <p id="product-price">$ 11.5</p>
          </div>
        </div>
        <div class="product-cell">
          <div class="productImage">
            <img src="./../assets/images/home_products/product3icon.svg" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">Brown smudged ink painting is suitable for Apple</p>
                <p id="product-price">$ 1.5</p>
          </div>
        </div>
        <div class="product-cell">
          <div class="productImage">
            <img src="./../assets/images/home_products/product4icon.svg" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">ins air cushion comb women's black massage</p>
                <p id="product-price">$ 5.5</p>
          </div>
        </div>

        <div class="product-cell">
          <div class="productImage">
            <img src="./../assets/images/home_products/product1icon.svg" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">ins air cushion comb women's black massage</p>
                <p id="product-price">$ 1.7</p>
          </div>
        </div>
        <div class="product-cell">
          <div class="productImage">
            <img src="./../assets/images/home_products/product2icon.svg" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">The counter shopping mall withdraws the international</p>
                <p id="product-price">$ 11.5</p>
          </div>
        </div>
        <div class="product-cell">
          <div class="productImage">
            <img src="./../assets/images/home_products/product3icon.svg" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">Brown smudged ink painting is suitable for Apple</p>
                <p id="product-price">$ 1.5</p>
          </div>
        </div>
        <div class="product-cell">
          <div class="productImage">
            <img src="./../assets/images/home_products/product4icon.svg" alt="">
          </div>

          <div class="product-info">
              <p id="product-name">ins air cushion comb women's black massage</p>
                <p id="product-price">$ 5.5</p>
          </div>
        </div> -->
    </div>      
  </div>




  
</template>


<style src="./../assets/css/homePageStyles.css"></style>
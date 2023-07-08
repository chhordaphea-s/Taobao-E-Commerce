<template>
  <div class="product">

    <div class="routes-to-product">
        <a class="router"> Home </a> > 
        <a class="router"> Product </a> >
        <a class="product-name">Skirt</a>
    </div>

    <div class="productWithDetailInfo">
      <div class="left-side">
        <div class="mainPicture">
            <img src="./../assets/images/productDetail/main-picture.png" alt="">
        </div>
        <div class="availablePictureContainer">

            <img src="./../assets/images/productDetail/main-picture.png" alt="">
            <img src="./../assets/images/productDetail/main-picture.png" alt="">
            <img src="./../assets/images/productDetail/main-picture.png" alt="">
        </div>

      </div>

      <div class="right-side">
        <div class="name-and-price">
          <div class="nameProduct">
            Christian Dior 2018-19FW Flared Skirts Street Style Other Animal Patterns Cotton Long
          </div>
          <div class="price"> 52$</div>
        </div>

        <div class="category">
            | Print Skirt Street Style
        </div>

        <div class="size-and-chart">
            <a class="size"> Size </a>
            <a class="chart"> Sizing Chart </a>
        </div>

        <div class="btn-container">
            <button> 
              <img src="./../assets/images/svg/women.svg" alt="">
              Women 
            </button>

            <button> 
              <img src="./../assets/images/svg/men.svg" alt="">
              Men
            </button>
        </div>

        <div class="choose-size">
          <select class="select" name="choose size" id="" >
            <option value="" disabled selected>Choose Size</option>
            <option value="S">Size S</option>
            <option value="M">Size M</option>
            <option value="L">Size L</option>
          </select>
        </div>

        <div class="quantity-and-num">
            <p class="quantity">Quantity</p>
            <input class="numberQuantity" value="1" type="number" name="" id="">
        </div>

        <div class="purchase-addCart">
          <button class="purchase">
            <img src="./../assets/images/svg/CreditCard.svg" alt="">
              Buy Now
          </button>

          <button>
            <img src="./../assets/images/svg/cart.svg" alt="">
              Add to cart
          </button>
        </div>
        

      </div>

    </div>


  </div>
</template>

<style src="./../assets/css/productdetailstyles.css"></style>
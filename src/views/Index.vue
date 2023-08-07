<script>
import { RouterLink } from 'vue-router';
import ProfilePopUp from './ProfilePopUp.vue';

export default {
  data() {
    return {
      isDisplayProfilePopup: false,

    }
  },
  components: {
    ProfilePopUp,
    RouterLink
},
  methods() {
    const showProFilrPopup = (e) => {
      this.isDisplayProfilePopup = !isDisplayProfilePopup;
    }
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="logo" to="/">
          <img src="./../assets/images/logo.png" alt="">
          <h1 class="sideNameNavigation">Taobao</h1>
        </RouterLink>

        
        <div class="category-wrapper">
          <RouterLink class="category" to="/">Home</RouterLink>
          <a href="" class="category-separator">|</a>
          <RouterLink class="category" to="/search">Products</RouterLink>
          <a href="" class="category-separator">|</a>
          <RouterLink class="category" to="/landingpage">About us</RouterLink>

          <!-- <button @click="$emit('checkout')">Go to checkout</button> -->
        </div>

        <div class="right-Wrapper">

          <RouterLink id="search" to="/search">
            <input type="text" placeholder="Search">
            <button>
              <svg width="30" height="30" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35.0473 30.2617L27.1164 22.3307C28.4972 20.0947 29.3321 17.4864 29.3321 14.666C29.3321 6.56587 22.7662 0 14.666 0C6.56587 0 0 6.56587 0 14.666C0 22.7662 6.56587 29.3321 14.666 29.3321C17.4864 29.3321 20.0947 28.4972 22.3285 27.1186L30.2617 35.0496C30.9001 35.6669 31.7556 36.0086 32.6436 36.001C33.5317 35.9935 34.3812 35.6372 35.0091 35.0091C35.6369 34.381 35.9927 33.5313 35.9999 32.6432C36.007 31.7551 35.6649 30.8998 35.0473 30.2617ZM14.666 24.8194C9.05909 24.8194 4.51262 20.273 4.51262 14.666C4.51262 9.05909 9.05909 4.51262 14.666 4.51262C20.273 4.51262 24.8194 9.05909 24.8194 14.666C24.8194 20.273 20.273 24.8194 14.666 24.8194Z" fill="#F16573"/>
              </svg>
            </button>
          </RouterLink>
          
          <RouterLink class="cardButton" to="/cart">
              <img src="./../assets/images/carticon.svg" alt="">
          </RouterLink>

            <button href="" class="profileButtonAndContainer" @click="this.isDisplayProfilePopup = !isDisplayProfilePopup">
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.5 4.40625C19.7236 4.40625 16.032 5.52608 12.8921 7.62413C9.75214 9.72218 7.30484 12.7042 5.85968 16.1931C4.41452 19.6821 4.0364 23.5212 4.77314 27.225C5.50988 30.9288 7.32838 34.331 9.99869 37.0013C12.669 39.6716 16.0712 41.4901 19.775 42.2269C23.4788 42.9636 27.3179 42.5855 30.8069 41.1403C34.2958 39.6952 37.2778 37.2479 39.3759 34.1079C41.4739 30.968 42.5938 27.2764 42.5938 23.5C42.5884 18.4377 40.575 13.5842 36.9954 10.0046C33.4158 6.42497 28.5623 4.4116 23.5 4.40625ZM13.6006 36.2598C14.6632 34.598 16.1269 33.2305 17.8569 32.2832C19.587 31.336 21.5276 30.8394 23.5 30.8394C25.4724 30.8394 27.4131 31.336 29.1431 32.2832C30.8731 33.2305 32.3369 34.598 33.3994 36.2598C30.569 38.461 27.0856 39.6561 23.5 39.6561C19.9144 39.6561 16.431 38.461 13.6006 36.2598ZM17.625 22.0312C17.625 20.8693 17.9696 19.7334 18.6151 18.7673C19.2607 17.8011 20.1782 17.0481 21.2517 16.6035C22.3253 16.1588 23.5065 16.0424 24.6462 16.2691C25.7858 16.4958 26.8326 17.0554 27.6543 17.877C28.4759 18.6986 29.0354 19.7455 29.2621 20.8851C29.4888 22.0247 29.3725 23.206 28.9278 24.2795C28.4831 25.353 27.7301 26.2706 26.764 26.9161C25.7978 27.5617 24.662 27.9062 23.5 27.9062C21.9419 27.9062 20.4475 27.2873 19.3458 26.1855C18.244 25.0837 17.625 23.5894 17.625 22.0312ZM35.5731 34.2237C33.9351 31.85 31.6317 30.0136 28.9527 28.9454C30.3918 27.812 31.4419 26.2583 31.9569 24.5004C32.472 22.7425 32.4265 20.8678 31.8267 19.137C31.227 17.4062 30.1027 15.9053 28.6104 14.843C27.1181 13.7807 25.3318 13.2099 23.5 13.2099C21.6682 13.2099 19.8819 13.7807 18.3896 14.843C16.8973 15.9053 15.773 17.4062 15.1733 19.137C14.5735 20.8678 14.528 22.7425 15.0431 24.5004C15.5582 26.2583 16.6082 27.812 18.0473 28.9454C15.3683 30.0136 13.065 31.85 11.4269 34.2237C9.35699 31.896 8.00409 29.0196 7.53111 25.9409C7.05812 22.8621 7.48521 19.7123 8.76095 16.8706C10.0367 14.029 12.1067 11.6167 14.7217 9.92423C17.3366 8.23179 20.3851 7.33135 23.5 7.33135C26.6149 7.33135 29.6634 8.23179 32.2784 9.92423C34.8933 11.6167 36.9633 14.029 38.2391 16.8706C39.5148 19.7123 39.9419 22.8621 39.4689 25.9409C38.9959 29.0196 37.643 31.896 35.5731 34.2237Z" fill="black"/>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M18.3614 8.73641L11.4864 15.6114C11.4225 15.6753 11.3467 15.726 11.2633 15.7606C11.1798 15.7952 11.0903 15.813 11 15.813C10.9096 15.813 10.8202 15.7952 10.7367 15.7606C10.6533 15.726 10.5774 15.6753 10.5136 15.6114L3.63859 8.73641C3.54233 8.64026 3.47676 8.51771 3.45019 8.38427C3.42362 8.25084 3.43723 8.11252 3.48931 7.98683C3.54139 7.86114 3.6296 7.75373 3.74275 7.67819C3.85591 7.60266 3.98894 7.56239 4.12499 7.5625H17.875C18.011 7.56239 18.1441 7.60266 18.2572 7.67819C18.3704 7.75373 18.4586 7.86114 18.5107 7.98683C18.5627 8.11252 18.5764 8.25084 18.5498 8.38427C18.5232 8.51771 18.4577 8.64026 18.3614 8.73641Z" fill="#D06325"/>
              </svg>

            </button>
          
        </div>
      </nav>
    </div>
    <ProfilePopUp class="profilePopUpContainer" v-if="isDisplayProfilePopup"></ProfilePopUp>
  </header>

  <RouterView />

  <div class="footer">
    <div>
      <RouterLink class="logo-footer" to="/">
        <h1 class="sideName">Taobao</h1>
      </RouterLink>
    
      <div class="category-wrapper">
          <RouterLink class="category" to="/landingpage">Trending</RouterLink>
          <a href="" class="category-separator">|</a>
          <RouterLink class="category" to="/search">Products</RouterLink>
          <a href="" class="category-separator">|</a>
          <RouterLink class="category" to="/about">More</RouterLink>

          <!-- <button @click="$emit('checkout')">Go to checkout</button> -->
        </div>

      <div class="creditCard-container">
        <img src="./../assets/images/visaIcon.svg" alt="">
        <img src="./../assets/images/mastercard.svg" alt="">
        <img src="./../assets/images/card3icon.svg" alt="">
      </div>

    </div>

    <div class="rightSide">
      <p><p style="color: #D06325; display: inline;">Stay in touch!</p> Join our Newsletter.</p>
      <div class="relative">
        <input type="text" class="w-[460px] h-[45px] rounded-full text-stone-900 pl-[20px]" placeholder="Email">
        <button class="absolute h-[45px] rounded-full w-[130px] text-white font-Jua bg-[#D06325] right-0">Subscribe</button>
      </div>
    </div>

  </div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

  nav {
    position: static;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 100px;
    
    display: flex;
    font-family: 'Jua', sans-serif;
    background-color: #FFD7CB;

    padding: 20px;
    padding-left: 50px;
    padding-right: 50px;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
  }
  
.logo {
  display: flex;

}
  .logo img {
    display: inline-block;
  }

  .logo .sideNameNavigation {
    display: inline-block;
    font-size: 40px;
    font-family: 'Inter', sans-serif;

    font-weight: 700;
    color: #D06325;

    margin-left: 20px;
  }

  .category-wrapper {
    display: inline-block;

    margin-left: 50px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;

    font-size: 25px;
  }

  .category-wrapper .category-separator {
    margin-left: 15px;
    margin-right: 15px;
    color: #D06325;
  }
  .category-wrapper a {
    color: black;
  }

  .right-Wrapper {
    display: inline-flex;
    align-self: center;
    width: 50%;
    
    margin-top: 7px;
    margin-left: auto;
    justify-content: right;
    gap: 10px;
    
  }

  .right-Wrapper img {
    display: inline-block;
  }

  #search {
    position: relative;
    width: 85%;
    margin-right: 20px;
  }

  #search input {
    width: 100%;
    height: 45px;
    font-size: large;
    
    padding-left: 20px;
    padding-right: 60px;

    border-radius: 28px;
    border-width: 3px;
    border-color: #33345D;
  }

  #search button {
    position: absolute;
    top: 3px;
    height: 40px;
    right: 20px;

    display: flex;
    align-items: center;
  }

  .right-Wrapper .cardbutton {
    height: 55px;
  }

  .right-Wrapper .profileButtonAndContainer {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }


  .profilePopUpContainer {
    position: absolute;
    
    top: 50px;
    right: 55px
  
  }




  .footer {
    /* position: relative; */
    background-color: #FFD7CB;
    height: 150px;
    font-family: 'Inter', sans-serif;
    width: 100%;

    padding: 30px;
    padding-left: 64px;
    padding-right: 64px;

    display: flex;
    justify-content: space-between;

    filter: drop-shadow(0px -10px 10px rgba(0, 0, 0, 0.3));
}

.footer .sideName {
    display: inline-block;
    font-size: 40px;
    font-family: 'Inter', sans-serif;
    text-align: left;

    font-weight: 700;
    color: #D06325;

  }

  .footer .category-wrapper {
    display: inline-block;

    font-family: 'Jua', sans-serif;

    margin-left: 250px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;

    font-size: x-large;
    }

.category-wrapper .category-separator {
    margin-left: 15px;
    margin-right: 15px;
    color: #D06325;
}
.category-wrapper a {
    color: black;
}


.creditCard-container {
    /* margin-top: 15px; */
}

.creditCard-container img {
    display: inline-block;
    margin-right: 20px;

}

.rightSide {
    align-self: center;
}

.rightSide p {
    align-self: center;
    font-weight: 400;
    font-size: large;

    margin-bottom: 10px;
}

.registernbtn {
    color: #D06325;
    font-size: large;

    width: 140px;
    height: 43px;

    
    background: #FFFFFF;
    border: 1px solid #D06325;
    border-radius: 10px;

    margin-right: 20px;

} 

.loginbtn {
    font-size: large;
    color: white;

    width: 140px;
    height: 43px;

    background: #D06325;
    border-radius: 10px;
}

</style>
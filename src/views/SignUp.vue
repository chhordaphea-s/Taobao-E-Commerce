<template>
    <div class="signup"> 
        <img class="img" src="../assets/images/login/login.png" alt="">

        <form class="signup-container" action="">

            <div class="logo-name">
                <img class="logo" src="../assets/images/svg/logotaobao.svg" alt="">
                <p class="name">Tao Bao</p>
            </div>

            <p class="title-signup">Sign Up</p>


            <div class="input-container">
                <input class="input" type="text" placeholder="First name" >
                <input class="input" type="text" placeholder="Last name" >
                <input class="input" type="text" placeholder="Username" >
                <input class="input" type="text" placeholder="Email" >
                <div class="inputPhoneNumber">
                    <select class="country" name="Country" id="" placeholder="State ">
                        <option class="option" value="" disabled selected>+855</option>
                        <option value="S">+84</option>
                        <option value="M">+66</option>
                    </select>
                    <input class="number" type="text" placeholder="Phone number" >
                </div>
                <input class="input" type="password" placeholder="Password" >
                <input class="input" type="password" placeholder="Confirm password" >
            </div>
 
            <div class="forSignUp-container">
                <input class="checkbox" type="checkbox">
                <p class="question">I agree to 
                    <a class="signup" href="">Terms & Conditions and Privacy policy and Agreement.</a> 
                </p>
                
            </div>

            <button class="signup-btn" action="submit">Sign Up</button>

        </form>

    </div>


 </template>

 <style src="../assets/css/signup.css"></style>0
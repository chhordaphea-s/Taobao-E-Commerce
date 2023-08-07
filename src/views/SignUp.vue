<script>
export default {
    data() {
        return {
            firstname: "",
            lastname: "",
            username: "",
            countrycode: "",
            phonenumber: "",
            email: "",
            password1: "",
            password2: "",
        }
    },
    methods: {
        async onsubmit(event) {
            event.preventDefault();
            if (this.password1 != this.password2) {
                alert("Passwords do not match.");
                return;
            }
            let phone = this.phonenumber
                if (this.phonenumber[0] === "0") {
                    phone = this.phonenumber.slice(1)
                }

            const fullPhoneNumber = `${this.countrycode}${phone}`

            const user = {
                username: this.username,
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                phone: fullPhoneNumber,
                password: this.password1
            }
   

            console.log(user)

            try {
                const response = await fetch("http://localhost:30002/auth/register", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                });

                const result = await response.json();
                console.log("Server Response:", result);

                if (result.success) {
                    this.$router.push({name: "home"});
                } else {
                    alert(`Invalid: ${result.error.details[0].message}`)
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Failed to submit form. Please try again later.");
            }
        }
    }
}
</script>

<template>
    <div class="signup"> 
        <img class="img" src="../assets/images/login/login.png" alt="">

        <form class="signup-container" @submit="onsubmit">

            <div class="logo-name">
                <img class="logo" src="../assets/images/svg/logotaobao.svg" alt="">
                <p class="name">Tao Bao</p>
            </div>

            <p class="title-signup">Sign Up</p>


            <div class="input-container">
                <input class="input" type="text" placeholder="First name" id="firstname" required v-model="firstname">
                <input class="input" type="text" placeholder="Last name" id="lastname" required v-model="lastname">
                <input class="input" type="text" placeholder="Username" id="username" required v-model="username">
                <input class="input" type="text" placeholder="Email" id="email" required v-model="email">
                <div class="inputPhoneNumber">
                    <select class="country" name="Country" placeholder="State " id="countrycode" required v-model="countrycode">
                        <option class="option" value="" disabled selected>+855</option>
                        <option value="855">+855</option>
                        <option value="84">+84</option>
                        <option value="66">+66</option>
                    </select>
                    <input class="number" type="text" placeholder="Phone number" id="phonenumber" required v-model="phonenumber">
                </div>
                <input class="input" type="password" placeholder="Password" id="password1" required v-model="password1">
                <input class="input" type="password" placeholder="Confirm password" id="password2" required v-model="password2">
            </div>
 
            <div class="forSignUp-container">
                <input class="checkbox" type="checkbox">
                <p class="question">I agree to 
                    <a class="terms" href="">Terms & Conditions and Privacy policy and Agreement.</a> 
                </p>
                
            </div>

            <button class="signup-btn" type="submit">Sign Up</button>

        </form>

    </div>


 </template>

 <style src="../assets/css/signup.css"></style>0
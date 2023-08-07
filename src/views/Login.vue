<script>
export default {
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        async onsubmit(event) {
            event.preventDefault();
            
            

            const user = {
                email: this.email,
                password: this.password 
            }

            console.log(user)

            try {
                const response = await fetch("http://localhost:30002/auth/login", {
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
    <div class="login"> 
        <img class="img" src="../assets/images/login/Login.png" alt="">

        <form class="login-container" @submit="onsubmit">

            <div class="logo-name">
                <img class="logo" src="../assets/images/svg/logotaobao.svg" alt="">
                <p class="name">Tao Bao</p>
            </div>

            <p class="title-login">Login Form</p>


            <div class="input-container">
                <input class="input" type="text" placeholder=" Enter email" id="email" required v-model="email">
                <input class="input" type="password" placeholder=" Enter password" id="password" required v-model="password">
            </div>

            <button class="login-btn" type="submit">Log In</button>

            <div class="forSignUp-container">
                <p class="question">Don't have an account?</p>
                <a class="signup" href="/signup">Sign Up</a>
            </div>

        </form>

    </div>


 </template>

 <style src="../assets/css/login.css"></style>0
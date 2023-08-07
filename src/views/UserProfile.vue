<script>

export default {
    data() {
        return {
            user: {
                firstname: "",
                lastname: "",
                username: "",
                email: "",
                phone: "",
            }
        }
    },
    mounted() {
        try {
            fetch("http://localhost:30002/auth/me", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-type": "application/json",
                    Origin: "http://localhost:5173",
                },
            })
                .then(async (response) => {
                    const result = await response.json()

                    console.log("Server Response: ", result)

                    if (!result.success) {
                        alert(`Invalid: ${result.error}`)
                        this.$router.push({ name: "login" })
                    }
                    this.user = result.data;
                })
        } catch (error) {
            this.$router.push({ name: "login" })
        }
    }
}
</script>


<template>
    <div class="UserProfile">

        <div class="allContent">

            <div class="myprofile-container">
                <p class="header-profile">MY PROFILE</p>
                <div class="fill-container">
                    <input class="fill" type="text" v-model="user.firstname">
                    <input class="fill" type="text" v-model="user.lastname">
                    <input class="fill" type="text" v-model="user.username">
                    <input class="fill" type="number" v-model="user.phone">
                </div>
                <button class="save-btn">Save</button>
            </div> 

            <div class="myprofile-container">
                <p class="header-profile">EMAIL</p>
                <div class="fill-container">
                    <input class="fill" type="text" v-model="user.email">
                </div>
            </div> 

            <div class="myprofile-container">
                <p class="header-profile">PASSWORD</p>
                <div class="fill-container">
                    <input class="fill" type="number" placeholder="Current Password">
                    <input class="fill" type="number" placeholder="Confirm Password">
                </div>
                <button class="save-btn">Save</button>
            </div>   




        </div>



    </div>


</template>
 
<style src="../assets/css/userProfile.css"></style>
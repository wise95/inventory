<template>
<section class="hero is-primary is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                    <form action="" class="box">
                        <div class="field">
                            <label for="" class="label">Email</label>
                            <div class="control has-icons-left">
                                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" v-model="email">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label for="" class="label">Password</label>
                            <div class="control has-icons-left">
                                <input type="password" placeholder="*******" class="input" v-model="password">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label for="" class="checkbox">
                                <input type="checkbox">
                                Remember me
                            </label>
                        </div>
                        <div class="field">
                            <button class="button is-success" @click="login">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios'

export default {
    name: "userprofilemenu",
    data() {
        return {
            email: '',
            password: ''

        }
    },

    mounted() {
      
    },
    methods: {

        login: function () {

            axios.post('oauth/token', {
                    username: this.email,
                    password: this.password,
                    grant_type : 'password',
                    client_id : 3, // Replace with Client ID
                    client_secret : '2zrX1VbnTnHd6M1rjGbe4VzcUAt8CtLWqpTEoCAc',
                }, {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                })
                .then(response => {
                    //const base64Url token.split('.')[1]
                    console.log(response)
                    const token = response.data.access_token
                    localStorage.setItem("access_token", token)
                    //axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                    //this.$router.push("/products")
                    this.$store.commit('setToken',token)
                    this.$router.push("/products")
                })
                .catch(function (error) {
                    console.log(error);
                });

        },

    }

}
</script>

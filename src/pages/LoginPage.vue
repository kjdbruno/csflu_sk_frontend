<template>
    <q-page class="page">
        <div class="wrapper">
            <div :class="$q.dark.isActive ? 'wrapper-container-dark' : 'wrapper-container-light'">
                <div class="wrapper-login">
                    <div class="wrapper-pic js-tilt" data-tilt>
                        <!-- <img class="logo" src="~assets/logo.png" alt="IMG"> -->
                        logo here
                    </div>
                    <div class="wrapper-form">

                        <!--input username-->
                        <q-input outlined v-model="username" label="Username" color="dark" class="full-width q-mb-xs" autofocus>
                            <template v-slot:prepend>
                                <q-icon name="account_circle" style="font-size: 1rem;" />
                            </template>
                        </q-input>

                        <!--input password-->
                        <q-input outlined v-model="password" :type="isPwd ? 'password' : 'text'" label="Password" color="dark" class="full-width q-mb-xs">
                            <template v-slot:prepend>
                                <q-icon name="lock" style="font-size: 1rem;" />
                            </template>
                            <template v-slot:append>
                                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" style="font-size: 1.2rem;" />
                            </template>
                        </q-input>

                        <!--button-->
                        <div class="q-mt-sm full-width">
                            <q-btn v-ripple unelevated color="dark" size="lg" label="sign in" class="full-width" @click="login"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script setup>
/**
 * import vueJS ref, reactive, watch
 */
import { ref, reactive, watch } from 'vue'
/**
 * import quasar
 */
import { useQuasar } from 'quasar'
const $q = useQuasar()
/**
 * declare inputs
 */
const username = ref('')
const password = ref('')
/**
 * declare if password is visible or not
 */
const isPwd = ref(true)
/**
 * login function
 */
const login = async () => {

    /**
     * validate form
     */
    const isError = validation()
    if (isError) return false

    /**
     * perform loading
     */

    /**
     * perform try catch function
     */
    try {

        /**
         * send request to backend
         * -> use POST method
         */

        /**
         * retrieve response
         */

        /**
         * set token
         */

        /**
         * set authenticated user
         */

        /**
         * navigate to home route
         */

    } catch (error) {

        /**
         * catch error
         */

    }
}
</script>

<style lang="scss" scoped>

$light: #ffffff;
$dark: #000000;

.page
{
    background: url('assets/bg.jpg') no-repeat bottom center / cover;
    height: 100vh;
    .wrapper
    {
        width: 100%;
        margin: 0 auto;
        //light
        .wrapper-container-light
        {
            width: 100%;
            min-height: 100vh;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 15px;
            .wrapper-login
            {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(3px);
                -webkit-backdrop-filter: blur(3px);
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 10px;
                overflow: hidden;
                display: -webkit-box;
                display: -webkit-flex;
                display: -moz-box;
                display: -ms-flexbox;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                padding: 50px;
                z-index: 3;
                .wrapper-pic 
                {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    width: 316px;
                    .logo
                    {
                        max-width: 80%;
                    }
                }
                .wrapper-form
                {
                    width: 290px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                }
            }
        }
        //dark
        .wrapper-container-dark
        {
            width: 100%;
            min-height: 100vh;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 15px;
            .wrapper-login
            {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(3px);
                -webkit-backdrop-filter: blur(3px);
                border: 1px solid rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
                display: -webkit-box;
                display: -webkit-flex;
                display: -moz-box;
                display: -ms-flexbox;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                padding: 50px;
                z-index: 3;
                .wrapper-pic 
                {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    width: 316px;
                    .logo
                    {
                        max-width: 80%;
                    }
                }
                .wrapper-form
                {
                    width: 290px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                }
            }
        }
    }
}
</style>
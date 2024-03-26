<template>
    <q-page class="page">
        <div class="wrapper">
            <div :class="$q.dark.isActive ? 'wrapper-container-dark' : 'wrapper-container-light'">
                <div class="wrapper-login">
                    <div class="wrapper-pic js-tilt" data-tilt>
                        <img class="logo" src="~assets/logo.png" alt="IMG">
                    </div>
                    <div class="wrapper-form">

                        <!--input username-->
                        <q-input outlined v-model="username" label="Username" :color="$q.dark.isActive ? 'white' : 'primary'" class="full-width q-mb-xs" :error="errors.username.type" :error-message="errors.username.msg" autofocus>
                            <template v-slot:prepend>
                                <q-icon name="account_circle" style="font-size: 1rem;" />
                            </template>
                        </q-input>
                        <!--error: username-->
                        <div class="q-mb-xs q-pa-xs bg-red full-width radius-xs text-white" v-if="errors.username.type">
                            <q-icon name="error" size="1.2em" color="white"/>
                            <span class="text-caption q-ml-sm">{{ errors.username.msg }}</span>
                        </div>

                        <!--input password-->
                        <q-input outlined v-model="password" :type="isPwd ? 'password' : 'text'" label="Password" :color="$q.dark.isActive ? 'white' : 'primary'" class="full-width q-mb-xs" :error="errors.password.type" :error-message="errors.password.msg">
                            <template v-slot:prepend>
                                <q-icon name="lock" style="font-size: 1rem;" />
                            </template>
                            <template v-slot:append>
                                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" style="font-size: 1.2rem;" />
                            </template>
                        </q-input>
                        <!--error: password-->
                        <div class="q-mb-xs q-pa-xs bg-red full-width radius-xs text-white" v-if="errors.password.type">
                            <q-icon name="error" size="1.2em" color="white"/>
                            <span class="text-caption q-ml-sm">{{ errors.password.msg }}</span>
                        </div>

                        <!--button-->
                        <div class="q-mt-sm full-width">
                            <q-btn v-ripple unelevated color="primary" size="lg" label="sign in" text-color="white" class="text-capitalize full-width" :loading="loading" @click="login">
                                <template v-slot:loading>
                                <q-spinner-puff color="white" />&nbsp;Signing in...
                                </template>
                            </q-btn>
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
 * declare loading
 */
const loading = ref(false)
/**
 * declare error
 */
const errors = reactive({
    username: { msg: null, type: null },
    password: { msg: null, type: null },
})
/**
 * validate input
 */
 const validation = () => {
    let isError = false
    //username
    if (username.value.length < 1) {
        //
        errors.username.msg = 'Please enter username'
        errors.username.type = true
        isError = true
    } else {
        errors.username.msg = null
        errors.username.type = null
    }
    //password
    if (password.value.length < 1) {
        //
        errors.password.msg = 'Please enter your password'
        errors.password.type = true
        isError = true
    } else if (password.value.length > 0 && password.value.length < 4) {
        //
        errors.password.msg = 'Minimum password length is 4'
        errors.password.type = true
        isError = true
    } else {
        errors.password.msg = null
        errors.password.type = null
    }

    return isError
}
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
     * set loading to TRUE
     */
    loading.value = true

    /**
     * perform try catch
     */
    try {

    } catch (error) {

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
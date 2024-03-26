<template>
    <q-layout view="lHh LpR lFf" class="layout">
        <!--header-->
        <q-header elevated reveal class="header q-pt-md q-pb-md">
            <q-toolbar>
                <!--left panel-->
                <q-btn flat round dense icon="menu" class="q-mr-sm" @click="left = !left" />
                <q-toolbar-title class="title">System Name</q-toolbar-title>
                <q-space />
                <!--help button: display either modal or new page-->
                <q-btn class="q-ma-xs" flat unelevated round dense>
                    <q-avatar>
                        <q-icon name="help" />
                    </q-avatar>
                </q-btn>
                <!--my account button: display either modal or new page-->
                <q-btn class="q-ma-xs" flat unelevated round dense>
                    <q-avatar>
                        <q-icon name="account_circle" />
                    </q-avatar>
                </q-btn>
            </q-toolbar>
        </q-header>
        <!--drawer-->
        <q-drawer class="left-navigation" show-if-above v-model="left" side="left" elevated >
            <div class="full-height drawer-wrapper">
                <div class="full-height drawer">
                    <div class="full-height wrapper-inner">
                        <div>
                            <q-list>
                                <q-item class="q-ma-xs navigation-item" v-ripple clickable to="/home">
                                    <q-item-section avatar>
                                        <q-icon name="dashboard" />
                                    </q-item-section>
                                    <q-item-section class="text-capitalize">Dashboard</q-item-section>
                                </q-item>
                                <q-item class="q-ma-xs navigation-item" v-ripple clickable to="/preference" >
                                    <q-item-section avatar>
                                        <q-icon name="settings" />
                                    </q-item-section>
                                    <q-item-section class="text-capitalize">Preference</q-item-section>
                                </q-item>
                            </q-list>
                        </div>
                        <div class="footer">
                            <q-item>
                                <q-item-section avatar>
                                    <q-avatar>
                                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                                    </q-avatar>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label class="text-bold">User's Name</q-item-label>
                                    <q-item-label class="text-white" caption>User's Office</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-btn size="sm" color="white" round flat unelevated icon="power_settings_new" to="/">
                                        <q-tooltip anchor="top middle" self="top middle" class="text-capitalize">sign out</q-tooltip>
                                    </q-btn>
                                </q-item-section>
                            </q-item>
                        </div>
                    </div>
                </div>
            </div>
        </q-drawer>
        <!--page container-->
        <q-page-container class="bg-accent">
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup>
/**
 * declare vue
 */
import { ref, reactive } from 'vue'
import { onMounted, onBeforeUnmount  } from 'vue-demi'
/**
 * import quasar
 */
import { useQuasar } from 'quasar'
const $q = useQuasar()
/**
 * import vue-router
 */
import { useRouter } from 'vue-router';
const router = useRouter()
/**
 * declare left sidebar
 */
const left = ref(true)

</script>

<style lang="scss" scoped>
$primary-color: #09203F;
$secondary-color: #537895;

$white-color: #ffffff;
$black-color: #000000;

$dark-color: #1d1d1d;
.layout
{
    .header
    {
        z-index: 9 !important;
        background: linear-gradient(90deg, $primary-color 35%, $primary-color 50%, $secondary-color 100%);
    }
    .drawer-wrapper
    {
        background-image: url("assets/sidebar.jpg") !important;
        background-size: cover !important;
        background-position: center;
        .drawer
        {
            background-color: rgba($color: $dark-color, $alpha: .4);
            color: $white-color;
            .wrapper-inner
            {
                height: calc(100% - 117px);
                padding:10px;
                backdrop-filter: blur(3px);
                transition: backdrop-filter 2.5s;
                .footer
                {
                    position: absolute;
                    bottom: 10px;
                    margin-left: auto;
                    margin-right: auto;
                    left:0;
                    right:0;
                }
            }
            .wrapper-inner:hover
            {
                backdrop-filter: blur(0px);
                transition: backdrop-filter 2.5s;
            }
        }
        .navigation-item
        {
            border-radius: 5px;
            padding-top: 15px;
            padding-bottom: 15px;
        }
        .q-router-link--exact-active
        {
            background-color: $primary-color;
            color: $white-color;
        }
    }

}
</style>
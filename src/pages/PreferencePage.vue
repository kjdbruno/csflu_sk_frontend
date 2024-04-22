<template>
    <q-page class="q-pa-md wrapper-preference">
        <!--page header-->
        <div class="page-header">
            <div class="text-h4 text-uppercase text-grey-8">preference</div>
            <header class="header q-mt-sm q-pl-lg">
                <div class="tabs">
                    <div @click="navigationStore.preferenceComponent = 'UserPage'" class="tab text-uppercase cursor-pointer" :class="navigationStore.preferenceComponent == 'UserPage' ? 'active' : null" href="#">user</div>
                    <div @click="navigationStore.preferenceComponent = 'OfficePage'" class="tab text-uppercase cursor-pointer" :class="navigationStore.preferenceComponent == 'OfficePage' ? 'active' : null" href="#">office</div>
                    <!--as many-->
                </div>
            </header>
        </div>
        <!--page body-->
        <div class="page-body">
            <div class="q-pt-sm component-wrapper bg-white">
                <component :is="components[navigationStore.preferenceComponent]" :key="navigationStore.preferenceComponent" />
            </div>
        </div>
    </q-page>
</template>

<script setup>
/**
 * import vue
 */
import { ref, reactive } from 'vue'
import { onMounted } from 'vue-demi'
/**
 * import navigation store
 */
import { useNavigationStore } from 'src/stores/nav-store'
const navigationStore = useNavigationStore()
/**
 * import pages, location -> src/components/preference
 */
import UserPage from 'src/components/Preference/UserPage.vue'
import OfficePage from 'src/components/Preference/OfficePage.vue'
/**
 * declare components
 */
const components = {
    UserPage,
    OfficePage
}
/**
 * function on mounted
 */
onMounted(() => {
    // if else if
    if (navigationStore.preferenceComponent == null) {
        navigationStore.preferenceComponent = 'UserPage'
    }
})
</script>

<style lang="scss" scoped>
$primary-color: #57606F;
$secondary-color: #D3D3D3;

$white-color: #ffffff;
$black-color: #000000;

$dark-color: #1d1d1d;
.wrapper-preference
{
    .header
    {
        .tabs {
            .tab
            {
                text-decoration: none;
                background: $white-color;
                display: inline-block;
                padding: 0.5rem 1.5rem;
                border-radius: 1em 1em 0 0;
                color: $black-color;
                margin: 0 2px;
                position: relative;
                font-size: .80em;
                
                &:hover 
                {
                    opacity: 0.8;
                }
                
                &::after, &:before 
                    {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        height: 10px;
                        width: 10px;
                    }
                    &::after 
                    {
                        left: 100%;
                        background-image: radial-gradient(
                            circle at top right,
                            transparent,
                            transparent 10px,
                            $white-color 10px,
                            $white-color 50px
                        );
                    }
                    &:before 
                    {
                        right: 100%;
                        background-image: radial-gradient(
                            circle at top left,
                            transparent,
                            transparent 10px,
                            $white-color 10px,
                            $white-color 50px
                        );
                    }
                
                &.active 
                {
                    background: $primary-color;
                    color: $white-color;
                    z-index: 1;
                    pointer-events: none;
                    &::after 
                    {
                        background-image: radial-gradient(
                            circle at top right,
                            transparent,
                            transparent 10px,
                            $primary-color 10px,
                            $primary-color 50px
                        );
                    }
                    &:before 
                    {
                        background-image: radial-gradient(
                            circle at top left,
                            transparent,
                            transparent 10px,
                            $primary-color 10px,
                            $primary-color 50px
                        );
                    }
                }
            }
        }
    }
    .component-wrapper
    {
        border-top: 2px solid $primary-color;
        border-radius: 5px;
    }
}
</style>
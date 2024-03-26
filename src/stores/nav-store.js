import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {

    state: () => ({
        preferenceComponent: null
    }),

    getters: {

        getPreferenceComponent: (state) => {
            return state.preferenceComponent
        }

    },

    actions: {



    },

    persist: true

})
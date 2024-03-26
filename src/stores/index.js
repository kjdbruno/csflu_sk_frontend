import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default store((/* { ssrContext } */) => {
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)
    // You can add Pinia plugins here
    // pinia.use(SomePiniaPlugin)
  
    return pinia
})
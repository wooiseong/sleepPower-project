import { computed } from 'vue'
import { useHead } from '@vueuse/head'

const vueMetaInput = (title) => {
 useHead({
  title: computed(() => title),
  meta: [
    {
      name: `description`,
      content: computed(() => '寐 . 力的臥具迎合東方人睡眠需要，混合泡沫棉和直筒棉的優點，外層包覆意大利進口的石墨烯，直送只要5天，給您舒適的體驗！')
    },
    {
      name: `keywords`,
      content: computed(() => '台灣臥具, 床褥，枕頭，沙發')
    }
  ]
})
}

export { vueMetaInput }
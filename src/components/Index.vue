<template>
  <div id="vuePort">
    <NavBar />
    <main>
      <div>
        <div>
          <a
            href="https://www.amazon.com/Release-Design-Deploy-Production-Ready-Software-ebook-dp-B079YWMY2V/dp/B079YWMY2V"
            target="_blank">
            <img
              src="/public/computer.png"
              height="300"
              alt=""></a>
        </div>
        <strong>DON'T SOLVE PROBLEMS YOU DON'T HAVE</strong>
      </div>
    </main>
    <footer>
      <div>
        Renegade Otter [{{ year }}]
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import NavBar from './NavBar.vue'

import { onMounted, defineComponent } from 'vue'
export default defineComponent({
  name: 'Index',
  components: {
    NavBar
  },
  setup: () => {
    const d = new Date()
    const year = d.getFullYear()

    onMounted(() => {
      console.log('Index mounted')
    })

    return { year }
  }
})
</script>

<style>
main {
  display: grid;
  place-items: center;
  height: calc(100vh - 4.1em);
}

footer {
  background: #333;
  color: #fff;
  bottom: 0;
  display: grid;
  align-items: center;
  padding-left: 1em;
}

#vuePort {
  display: grid;
  grid-template-rows: [header]  2em
                      [content] 1fr
                      [footer]  2em;
  min-height: 100vh;
}
</style>





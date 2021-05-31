<template>
  <div>
    <nav>
      <div class="brand">
        <a href="/">Vue 3 / Vite</a>
      </div>
      <div class="menu">
        <i class="fas fa-user-astronaut">&nbsp;<a href="">&nbsp;Admin</a></i>
      </div>
      <div class="menu">
        <i class="fas fa-user">&nbsp;<a href="">&nbsp;User</a></i>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'NavBar',
    setup: () => {
      return {  }
    }
  })
</script>

<style>
  nav {
    display: grid;
    grid-template-columns: 1fr repeat(2, 1fr);
    grid-column-gap: 10px;
    background: #333;
    color: #fff;
    align-items: center;
    box-shadow: rgba(255, 255, 255, 0.07) 0 1px 0;
    border-bottom: 2px solid #272727;
    text-shadow: rgba(0,0,0,0.75) 0 1px;
  }
  nav span, nav a {
    color: #FFF;
    text-decoration: none;
    font-size: .8em;
    font-family: var(--font);
    text-transform: uppercase;
  }
  nav .brand a {
    letter-spacing: .15em;
    text-transform: uppercase;
    text-decoration: none;
    color: #979393;
    font-weight: bold;
    font-size: 1.3em;
  }
  nav div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav .menu {
    letter-spacing: .10em;
    color: #9399b4;
    cursor: pointer;
  }
  nav .menu.import {
    letter-spacing: .09em;
    color: #6ef13c;
  }
  nav input {
    border-radius: .4em;
    color: white;
    border: 2px groove #5a5855;
    padding: .3em;
    background-color: #666562;
    width: 100%;
    width: -moz-available;
  }
  nav input::placeholder {
    color: #a5a2a2;
  }
</style>

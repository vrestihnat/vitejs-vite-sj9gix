<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
export default {
  data: () => ({
    items: [
      { title: 'Item 1', content: 'Content 1', icon: 'wi-check-circle' },
      { title: 'Item 2', content: 'Content 2', icon: 'wi-cross-circle' },
      { title: 'Item 3', content: 'Content 3', icon: 'wi-warning-circle' },
      { title: 'Item 4', content: 'Content 4', icon: 'wi-info-circle' },
    ],
  }),
};
</script>

<template>
  <w-app>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>

    <w-button class="ma1" bg-color="success">success</w-button>
    <w-button class="ma1" bg-color="error">error</w-button>
    <w-button class="ma1" bg-color="warning">warning</w-button>
    <w-button class="ma1" bg-color="info">info</w-button>
    <w-button class="ma1" bg-color="primary">primary</w-button>
    <w-button class="ma1" bg-color="secondary">secondary</w-button>
    <w-button class="ma1" bg-color="purple-light4">purple-light4</w-button>
    <w-timeline :items="items" color="primary"></w-timeline>

    <w-rating class="my2" color="green"> </w-rating>

    <br />

    <w-rating class="my2" bg-color="light-green" color="yellow"> </w-rating>

    <HelloWorld msg="Hello Vue 3 + Vite" />
  </w-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

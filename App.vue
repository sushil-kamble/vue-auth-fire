<template>
  <v-app>
    <Navbar />
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
#app {
  background-color: lightgray;
}
</style>

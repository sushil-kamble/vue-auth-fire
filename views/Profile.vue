<template>
  <!-- USER WILL ALWAYS BE DEFINED IN THIS PAGE -->
  <div class="pa-2">
    <h1 class="text-center">PROFILE PAGE</h1>
    <hr />
    <div class="mt-3">
      <h2>This Page is Route Protected</h2>
      <p>user will always be defined on this page. Unlike Home Page</p>
    </div>
    <v-card>
      <v-card-title primary-title>
        Welcome, {{ user.displayName }}
      </v-card-title>
      <v-card-subtitle> Email : {{ user.email }} </v-card-subtitle>
      <!-- <v-card-subtitle> Uid : {{ user.id }} </v-card-subtitle> -->
      <v-card-actions>
        <v-btn color="success" class="ml-1" :to="{ name: 'Home' }">
          Home Page
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
    // Add your computed properties here
  }
};
</script>

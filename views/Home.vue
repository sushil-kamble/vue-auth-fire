<template>
  <div class="home">
    <h1 class="text-center">HOME PAGE</h1>
    <hr />
    <!-- LOGGED IN -->
    <v-card v-if="user" class="pa-1 mt-3">
      <v-card-title primary-title>
        You are logged In
      </v-card-title>
      <v-card-actions>
        <v-btn color="primary" class="ml-1" :to="{ name: 'Profile' }" dark>
          Visit Profile
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- LOGGED IN -->

    <!-- LOGGED OUT -->
    <v-card v-else class="pa-1" color="error" dark>
      <v-card-title primary-title>
        You are logged Out
      </v-card-title>
      <v-card-actions>
        <v-btn color="primary" class="ml-1" :to="{ name: 'Auth' }" dark>
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- LOGGED OUT -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
    // Add your computed properties here
  }
};
</script>

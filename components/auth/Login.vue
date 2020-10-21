<template>
  <v-card class="pa-4 mt-10">
    <h1 class="text-center">Login</h1>
    <v-form @submit.prevent="login" autocomplete="off">
      <v-text-field
        label="Email address"
        v-model="email"
        :suffix="emailPostfixTemplate ? '@gmail.com' : ''"
      ></v-text-field>
      <v-text-field
        class="mb-2"
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        @click:append="show1 = !show1"
      ></v-text-field>
      <h4 class="text-center mb-3">
        Register Account: <v-btn text @click="registerView">Register</v-btn>
      </h4>
      <h4 v-if="feedback" class="red--text text-center my-2">
        {{ feedback }}
      </h4>
      <v-btn
        type="submit"
        color="secondary"
        class="rounded-b-pill"
        :loading="loading"
        block
      >
        Submit
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import { auth } from "@/firebase/init.js";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",

      loading: false,
      show1: false,

      feedback: ""
    };
  },
  computed: {
    emailPostfixTemplate() {
      if (this.email.search("@") !== -1) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    emailPostfix() {
      if (this.email.search("@") !== -1) {
        // Pass
      } else if (this.email.slice(-10) !== "@gmail.com") {
        this.email = this.email + "@gmail.com";
      }
    },
    login() {
      if (this.email && this.password) {
        this.loading = true;
        this.emailPostfix();
        auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.feedback = "";
            this.loading = false;
            this.$router.replace({ name: "Home" });
          })
          .catch(err => {
            console.log(err);
            this.feedback = err.message;
            this.loading = false;
          });
      } else {
        this.feedback = "Please Enter Email / Password";
      }
    },
    registerView() {
      this.$emit("registerView");
    }
  }
};
</script>

<style></style>

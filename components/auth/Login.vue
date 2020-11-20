<template>
  <div class="d-flex justify-center align-center" style="height: 80vh;">
    <v-card class="pa-3" width="600">
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
          label="Password"
          @click:append="show1 = !show1"
        ></v-text-field>
        <div class="d-sm-flex justify-sm-space-between mb-4">
          <ForgotPass class="mt-2" />
          <v-btn @click="registerView" class="mt-2" dark>
            <v-icon left>mdi-file-edit</v-icon>
            Register
          </v-btn>
        </div>
        <h4 v-if="feedback" class="red--text text-center my-2">
          {{ feedback }}
        </h4>
        <v-btn type="submit" color="secondary" :loading="loading" block>
          <v-icon left>mdi-login</v-icon>
          LOGIN
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { auth } from "@/firebase/init.js";
import ForgotPass from "@/components/auth/ForgotPass";

export default {
  name: "Login",
  components: {
    ForgotPass
  },
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
      return this.email.search("@") === -1;
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

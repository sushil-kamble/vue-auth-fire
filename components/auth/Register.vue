<template>
  <div class="d-flex justify-center align-center" style="height: 80vh;">
    <v-card class="pa-3" width="600">
      <h1 class="text-center">Register</h1>
      <v-form @submit.prevent="registed" autocomplete="off">
        <v-text-field
          label="Enter Name"
          :rules="[rules.required]"
          v-model="name"
          append-icon="mdi-account"
        ></v-text-field>
        <v-text-field
          label="Email address"
          :rules="[rules.required, rules.email]"
          v-model="email"
          append-icon="mdi-email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="showPass ? 'text' : 'password'"
          label="Password"
          hint="At least 6 characters"
          counter
          @click:append="showPass = !showPass"
        ></v-text-field>
        <v-text-field
          class="mb-2"
          append-icon="mdi-lock"
          :counter="password.length"
          :rules="[rules.required, rules.passwordConfirmation]"
          type="password"
          v-model="confirmPassword"
          label="Confirm Password"
        ></v-text-field>
        <div class="d-sm-flex justify-end mb-4">
          <v-btn @click="loginView" class="mt-2" dark>
            <v-icon left>mdi-login</v-icon>
            Login
          </v-btn>
        </div>
        <h4 v-if="feedback" class="red--text text-center my-2">
          {{ feedback }}
        </h4>
        <v-btn type="submit" color="secondary" :loading="loading" block>
          <v-icon left>mdi-file-edit</v-icon>
          Register
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { auth } from "@/firebase/init.js";

export default {
  name: "Register",
  data() {
    return {
      name: null,
      password: "",
      confirmPassword: "",
      email: "",

      showPass: false,
      feedback: null,

      loading: false,

      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 6 || "Min 6 characters",
        email: v => this.validateEmail(v) || "Should be a valid email address.",
        passwordConfirmation: () =>
          this.validateConfirmPassword() || "Password does not match"
      }
    };
  },
  methods: {
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    validateConfirmPassword() {
      return this.password === this.confirmPassword;
    },
    registed() {
      if (
        this.validateEmail(this.email) &&
        this.validateConfirmPassword() &&
        this.name
      ) {
        this.loading = true;
        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(data => {
            data.user
              .updateProfile({
                displayName: this.name
              })
              .then(() => {
                this.$store.dispatch("fetchUser", data.user);
                this.feedback = "";
                this.loading = false;
              });
            this.$router.replace({ name: "Home" });
          })
          .catch(err => {
            this.feedback = err.message;
            this.loading = false;
          });
      } else {
        this.feedback = "All fields are required & validated";
      }
    },
    loginView() {
      this.$emit("loginView");
    }
  }
};
</script>

<style></style>

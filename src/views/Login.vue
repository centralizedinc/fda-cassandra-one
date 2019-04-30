<template>
  <div>
    <v-container grid-list-md text-xs-left>
      <v-layout align-center justify-center>
        <v-flex xs12 md6 mr-5 pa-1>
          <v-card class="tCard elevation-10">
            <v-img :src="require('@/assets/logo.png')" aspect-ratio="2.75"></v-img>
            <v-card-text
              class="subheading black--text"
            >Cassandra 1.0 is a centralized Docket Management System and serves as the official repository for the administrative proceedings for the Food and Drug Administration (FDA) Philippines. The system allows the Legal Services Support Team to access FDA's administrative proceedings and rule-making documents more readily, including Federal Registers Petitions, supporting documents and comments.</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 ml-5 mr-5 pa-2>
          <v-card class="elevation-15">
            <v-toolbar dark color="primary">
              <span class="font-weight-light title">Login</span>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <v-form class="mt-4 login" @submit.prevent="login">
              <v-card-text>
                <v-text-field
                  outline
                  name="name"
                  label="Username"
                  @keypress.enter="login"
                  id="username"
                  autocomplete="username"
                  v-model="credentials.username"
                  color="primary"
                ></v-text-field>
                <v-text-field
                  outline
                  name="name"
                  label="Enter your password"
                  min="8"
                  autocomplete="current-password"
                  @keypress.enter="login"
                  :append-icon="value ? 'visibility' : 'visibility_off'"
                  @click:append="() => (value = !value)"
                  :type="value ? 'password' : 'text'"
                  v-model="credentials.password"
                  color="primary"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  outline
                  color="secondary"
                  class="caption font-weight-light"
                  @click="signup()"
                >Sign-up</v-btn>
                <v-btn
                  color="primary"
                  :loading="loading"
                  type="submit"
                  class="caption font-weight-light"
                >Login</v-btn>
              </v-card-actions>
              <v-divider></v-divider>
              <v-btn
                flat
                block
                color="primary"
                class="caption font-weight-light"
                @click.native="dialog =true"
              >Forgot Password?</v-btn>
            </v-form>
          </v-card>
        </v-flex>
        <v-dialog v-model="dialog" persistent max-width="300px" transition="dialog-transition">
          <v-card>
            <v-toolbar dark color="primary">
              <span class="title font-weight-light">Forgot Password</span>
              <v-spacer></v-spacer>
              <v-btn flat icon @click.native="dialog=false">
                <v-icon>close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span
                class="subheading font-weight-thin"
              >Enter your email address to recover your account.</span>
              <v-text-field
                class="font-weight-thin"
                outline
                v-model="email"
                name="name"
                label="Email Address"
                id="email"
              ></v-text-field>
              <v-divider></v-divider>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                outline
                color="secondary"
                class="caption font-weight-light"
                @click.native="dialog =false"
              >Cancel</v-btn>
              <v-btn
                color="primary"
                class="caption font-weight-light"
                :loading="loading2"
                @click="forgot_password"
              >Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      credentials: {},
      loading: false,
      loading2: false,
      dialog: false,
      email: ""
    };
  },
  methods: {
    login() {
      this.loading = true;
      // this.$router.push("/app");
      this.$store
        .dispatch("LOGIN", this.credentials)
        .then(res => {
          this.loading = false;
          if (res.isMatch) {
            this.$router.push("/app");
          } else {
            this.credentials.password = "";
            this.$notify({
              message: "Invalid User Credentials",
              color: "warning",
              icon: "error_outline"
            });
          }
        })
        .catch(err => {
          this.loading = false;
          this.$notify({
            message: "Oops! Something went wrong. Please try again.",
            color: "error",
            icon: "error_outline"
          });
        });
    },
    signup() {
      this.$router.push("/signup");
    },
    forgot_password() {
      this.loading2 = true;
      this.$store
        .dispatch("FORGOT_PASSWORD", this.email)
        .then(res => {
          this.loading2 = false;
          this.dialog = false;
          this.$notify({
            message:
              "We have received your request for account recovery. Please check your email (" +
              this.email +
              ") in order to proceed.",
            color: "success"
          });
        })
        .catch(err => {
          this.loading2 = false;
          this.dialog = false;
          this.$notify({
            message:
              "Could not associate your email (" +
              this.email +
              ") to any user account.",
            color: "error"
          });
        });
    }
  }
};
</script>

<style>
.tCard {
  background-color: transparent !important;
  box-shadow: none !important;
}

.cardButton {
  -webkit-box-reflect: below 6px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(10%, transparent), to(rgba(250, 250, 250, 0.1))) !important;
  border-radius: 8px !important;
  height: calc(100% - 30px) !important;
  border: none;
  position: relative;
  margin: 10px 1px;
  line-height: 1.42857;
  text-transform: uppercase;
  letter-spacing: 0;
  will-change: box-shadow, transform;
}
</style>

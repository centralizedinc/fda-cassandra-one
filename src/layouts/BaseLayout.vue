<template>
    <v-layout row wrap>
        <notification></notification>
        <v-toolbar dark app color="primary">
            <span class="headline font-weight-light">Cassandra One</span>
            <v-spacer></v-spacer>
            <v-btn flat>ABOUT</v-btn>
            <v-btn outline>help</v-btn>
        </v-toolbar>
        <v-container fluid class="bg">
            <router-view></router-view>
        </v-container>
        <v-footer app dark color="primary" class="pa-1">
            <span class="caption">FDA Cassandra One</span>
            <v-spacer></v-spacer>
            <span class="caption">All rights reserved 2019</span>
        </v-footer> 
    </v-layout>

       
</template>

<script>
import notification from "@/components/Notification";
export default {
    components: { notification },

}
</script>

<style>
.bg {
  /* The image used */
  background-image: url("https://i.postimg.cc/c4L0Zg5x/bg.png");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
</s
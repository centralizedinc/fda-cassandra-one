<template>
    <v-layout column class="fab-container-bottom">
        <v-tooltip top>
          <v-btn v-if="!hideDefault" small dark slot="activator" fab color="secondary" @click="home">
            <v-icon>dashboard</v-icon>
          </v-btn>Home
        </v-tooltip>
        <v-tooltip top v-for="button in buttons" :key="button.label">
          <v-btn :loading="button.loading" slot="activator" fab color="primary" @click="submit(button.action)" style="background-image: linear-gradient(45deg, #0288d1, #26c6da)">
            <v-icon>{{button.icon}}</v-icon>
          </v-btn>{{button.label}}
        </v-tooltip>
      </v-layout>
</template>

<script>
export default {
    props:['buttons', 'hideDefault'],
    methods:{
        submit(action){
            this.$emit(action)
        },
        home(){
            this.$router.push('/app')
        }
    }
}
</script>

<style>
.fab-container-bottom {
    position: fixed;
    bottom: 10%;
    right: 1%;
  }
</style>


<template>
    <v-card class="mt-2">
        <v-sheet class="v-sheet--offset ml-3"
                :color="color"
                elevation="12"
                max-width="calc(25%)"
                height="70">
                <v-layout align-center justify-center>
                    <v-flex xs12 pa-3>
                    <!-- <span class="headline font-weight-bold white--text">10</span> -->
                    <v-icon dark x-large>{{icon}}</v-icon>
                    </v-flex>
                </v-layout>
        </v-sheet>
        <v-card-text> 
            <v-layout row wrap>
                <v-flex xs10>
                    <span class="title font-weight-bold">{{title}} </span>
                </v-flex>
                <v-flex xs2 pr-2>
                    <span class="title">{{count}}</span>
                </v-flex>
            </v-layout>
            
            
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-icon v-if="subtitle" small class="pa-1" color="warning">warning</v-icon>
            <span class="caption"> {{subtitle}}</span>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props:['color', 'icon', 'title', 'count','subtitle', 'details']

}
</script>

<style>
.v-sheet--offset {
    top: -20px;
    position: relative;
  }
</style>

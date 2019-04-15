
<template>
    <v-card class="mt-2" :style="gradient_color">
        <!-- <v-sheet class="v-sheet--offset ml-3"
                :color="color"
                elevation="12"
                max-width="calc(25%)"
                height="70">
                <v-layout align-center justify-center>
                    <v-flex xs12 pa-3>                   
                    <v-icon dark x-large>{{icon}}</v-icon>
                    </v-flex>
                </v-layout>
        </v-sheet> -->
        <v-card-text> 
            <v-layout row wrap>
                <v-flex xs10>
                    
                    <span class="title font-weight-bold white--text pa-2 "><v-icon x-large class="white--text">{{icon}}</v-icon> {{title}} </span>
                </v-flex>
                <v-flex xs2 pa-2>
                    <span class="headline white--text">{{count}}</span>
                </v-flex>
            </v-layout>
            
            
        </v-card-text>
        <v-divider></v-divider>
        <!-- <v-card-actions>
            <v-icon v-if="subtitle" small class="pa-1" color="warning">warning</v-icon>
            <span class="caption white--text"> {{subtitle}}</span>
        </v-card-actions> -->
    </v-card>
</template>

<script>
export default {
    props:['color', 'icon', 'title', 'count','subtitle', 'details'],
    computed:{
        gradient_color(){
            if(this.color === 'success'){
                return 'background-image: linear-gradient(45deg, #43a047, #1de9b6)'
            }else if(this.color === 'warning'){
                return 'background-image: linear-gradient(45deg, #ff6f00, #ffca28)'
            }else if(this.color === 'error'){
                return 'background-image: linear-gradient(45deg, #ff5252, #f48fb1)'
            }else{
                return 'background-image: linear-gradient(45deg, #0288d1, #26c6da)'
            }
        }
    }

}
</script>

<style>
.v-sheet--offset {
    top: -20px;
    position: relative;
  }
</style>

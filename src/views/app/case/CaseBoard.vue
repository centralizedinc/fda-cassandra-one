<template>
    <v-layout row wrap>
        <v-flex xs12 md3 pa-2>
            <v-card>
                <v-toolbar dark color="primary">
                    <span class="title font-weight-light">New</span>
                    <v-spacer></v-spacer>
                    <v-btn flat icon>
                        <v-icon>more_horiz</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <draggable v-model="new_cases" :move="moveNew" :options="{group:'cases'}">
                        <transition-group>
                            <v-card v-for="element in new_cases" :key="element.name" class="ma-1">
                                <v-card-title primary-title>
                                     <v-icon color="success" class="ma-1">error_outline</v-icon>
                                    <span class="font-weight-light"> Case #: {{element.name}}</span>                                                                      
                                    <div class="caption grey--text font-weight-light">created by: abalita</div>                                    
                                </v-card-title>
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card-text>
            </v-card>            
        </v-flex>
        <v-flex xs12 md3 pa-2>
            <v-card>
                <v-toolbar dark color="primary">
                    <span class="title font-weight-light">For Evaluation</span>
                    <v-spacer></v-spacer>
                    <v-btn flat icon>
                        <v-icon>more_horiz</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <draggable v-model="eval_cases" :move="move" :options="{group:'cases'}">
                        <transition-group>
                            <v-card v-for="element in eval_cases" :key="element.name" class="ma-1">
                                <v-card-title primary-title>
                                     <v-icon color="success" class="ma-1">error_outline</v-icon>
                                    <span class="font-weight-light"> Case #: {{element.name}}</span>                                                                      
                                    <div class="caption grey--text font-weight-light">created by: abalita</div>                                    
                                </v-card-title>
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card-text>
            </v-card>            
        </v-flex>
        <v-flex xs12 md3 pa-2>
            <v-card>
                <v-toolbar dark color="primary">
                    <span class="title font-weight-light">For Review</span>
                    <v-spacer></v-spacer>
                    <v-btn flat icon>
                        <v-icon>more_horiz</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <draggable v-model="review_cases" :move="move" :options="{group:'cases'}">
                        <transition-group>
                            <v-card v-for="element in review_cases" :key="element.name" class="ma-1">
                                <v-card-title primary-title>
                                     <v-icon color="success" class="ma-1">error_outline</v-icon>
                                    <span class="font-weight-light"> Case #: {{element.name}}</span>                                                                      
                                    <div class="caption grey--text font-weight-light">created by: abalita</div> 
                                    <v-progress-linear ></v-progress-linear>                                   
                                </v-card-title>
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card-text>
            </v-card>            
        </v-flex>
    </v-layout>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    components: {
            draggable,
        },
    data(){
        return {
            new_cases:[{name:"1234567890"}, {name:"00001231313"}],
            eval_cases:[{name:"Test2"}, {name:"Test3"}],
            review_cases:[{name:Math.random()}, {name:Math.random()}]
        }
    },
    methods:{
        move(evt, originalEvent){
            
            console.log(evt);
            alert('move other...');
            return true;
        },
        moveNew(evt, originalEvent){
            
            console.log(evt);
            alert('move new...');
            return true;
        }
    }
}
</script>

<style>

</style>

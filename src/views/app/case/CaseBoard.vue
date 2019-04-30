<template>
    <scrolly class="foo" :style="{ width: '100%', height:'450px'}">
  <scrolly-viewport>
    <!-- Your contents here -->
        <v-layout row>                    
            <v-card class="ma-1" style="width: 350px">
                <v-toolbar dark color="primary">
                    <span class="title font-weight-light">Evaluation</span>
                    <v-spacer></v-spacer>
                    <v-btn flat icon>
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <draggable v-model="eval_cases" :move="move" :options="{group:'cases'}">
                        <transition-group>
                            <v-card v-for="element in eval_cases" :key="element.name" class="ma-1">                                
                                <v-list-tile avatar>
                                    <v-list-tile-avatar>                                        
                                        <v-avatar size="40" color="teal">
                                            <span class="white--text">AB</span>
                                        </v-avatar>
                                    </v-list-tile-avatar>
                                    <v-list-tile-content class="pa-1">
                                        <v-list-tile-title class="font-weight-light">Docket #: 2019 - 2000</v-list-tile-title>
                                        <v-list-tile-sub-title class="caption">assigned to: abalita</v-list-tile-sub-title>                                       
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-icon color="warning">gavel</v-icon>
                                    </v-list-tile-action>                                           
                                </v-list-tile>                                
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card-text>
            </v-card>

            <v-card class="ma-1" style="width: 350px">
                <v-toolbar dark color="primary">
                    <span class="title font-weight-light">Review</span>
                    <v-spacer></v-spacer>
                    <v-btn flat icon>
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <draggable v-model="eval_cases" :move="move" :options="{group:'cases'}">
                        <transition-group>
                            <v-card v-for="element in eval_cases" :key="element.name" class="ma-1">                                
                                <v-list-tile avatar>
                                    <v-list-tile-avatar>                                        
                                        <v-avatar size="40" color="teal">
                                            <span class="white--text">AB</span>
                                        </v-avatar>
                                    </v-list-tile-avatar>
                                    <v-list-tile-content class="pa-1">
                                        <v-list-tile-title class="font-weight-light">Docket #: 2019 - 2000</v-list-tile-title>
                                        <v-list-tile-sub-title class="caption">assigned to: abalita</v-list-tile-sub-title>                                       
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-icon color="warning">gavel</v-icon>
                                    </v-list-tile-action>                                           
                                </v-list-tile>                                
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card-text>
            </v-card> 

            <v-card class="ma-1" style="width: 350px">
                <v-toolbar dark color="primary">
                    <span class="title font-weight-light">Evaluation</span>
                    <v-spacer></v-spacer>
                    <v-btn flat icon>
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <draggable v-model="eval_cases" :move="move" :options="{group:'cases'}">
                        <transition-group>
                            <v-card v-for="element in eval_cases" :key="element.name" class="ma-1">                                
                                <v-list-tile avatar>
                                    <v-list-tile-avatar>                                        
                                        <v-avatar size="40" color="teal">
                                            <span class="white--text">AB</span>
                                        </v-avatar>
                                    </v-list-tile-avatar>
                                    <v-list-tile-content class="pa-1">
                                        <v-list-tile-title class="font-weight-light">Docket #: 2019 - 2000</v-list-tile-title>
                                        <v-list-tile-sub-title class="caption">assigned to: abalita</v-list-tile-sub-title>                                       
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-icon color="warning">gavel</v-icon>
                                    </v-list-tile-action>                                           
                                </v-list-tile>                                
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card-text>
            </v-card>

            <v-card class="ma-1" style="width: 350px">
                <v-toolbar dark color="primary">
                    <span class="title font-weight-light">Evaluation</span>
                    <v-spacer></v-spacer>
                    <v-btn flat icon>
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <draggable v-model="eval_cases" :move="move" :options="{group:'cases'}">
                        <transition-group>
                            <v-card v-for="element in eval_cases" :key="element.name" class="ma-1">                                
                                <v-list-tile avatar>
                                    <v-list-tile-avatar>                                        
                                        <v-avatar size="40" color="teal">
                                            <span class="white--text">AB</span>
                                        </v-avatar>
                                    </v-list-tile-avatar>
                                    <v-list-tile-content class="pa-1">
                                        <v-list-tile-title class="font-weight-light">Docket #: 2019 - 2000</v-list-tile-title>
                                        <v-list-tile-sub-title class="caption">assigned to: abalita</v-list-tile-sub-title>                                       
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-icon color="warning">gavel</v-icon>
                                    </v-list-tile-action>                                           
                                </v-list-tile>                                
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card-text>
            </v-card>

            <v-card class="ma-1" style="width: 350px">
                <v-toolbar dark color="primary">
                    <span class="title font-weight-light">Evaluation</span>
                    <v-spacer></v-spacer>
                    <v-btn flat icon>
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <draggable v-model="eval_cases" :move="move" :options="{group:'cases'}">
                        <transition-group>
                            <v-card v-for="element in eval_cases" :key="element.name" class="ma-1">                                
                                <v-list-tile avatar>
                                    <v-list-tile-avatar>                                        
                                        <v-avatar size="40" color="teal">
                                            <span class="white--text">AB</span>
                                        </v-avatar>
                                    </v-list-tile-avatar>
                                    <v-list-tile-content class="pa-1">
                                        <v-list-tile-title class="font-weight-light">Docket #: 2019 - 2000</v-list-tile-title>
                                        <v-list-tile-sub-title class="caption">assigned to: abalita</v-list-tile-sub-title>                                       
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-icon color="warning">gavel</v-icon>
                                    </v-list-tile-action>                                           
                                </v-list-tile>                                
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card-text>
            </v-card>
        </v-layout>
  </scrolly-viewport>
  <scrolly-bar axis="x"></scrolly-bar>
</scrolly>
</template>

<script>
import draggable from 'vuedraggable'
import { Scrolly, ScrollyViewport, ScrollyBar } from 'vue-scrolly';

export default {
    components: {
            draggable,
            Scrolly,
            ScrollyViewport,
            ScrollyBar
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

<template>
    <scrolly class="foo" :style="{ width: '100%', height:'450px'}">
  <scrolly-viewport>
    <!-- Your contents here -->
        <v-layout row>                    
            <v-card class="ma-1" style="width: 350px">
                <v-toolbar dark style="background: linear-gradient(to bottom, #2c3e50, #4ca1af);">
                    <span class="title font-weight-light">Evaluation</span>                    
                    <v-spacer></v-spacer>
                    <v-chip  outline color="white" text-color="white">
                        <span >{{evaluation_list.length}}</span>
                    </v-chip>
                </v-toolbar>
                <v-card-text>
                    <draggable v-model="evaluation_list" :options="{group:'cases'}">
                        <transition-group>
                            <v-card v-for="element in evaluation_list" :key="element._id" class="ma-1" style="cursor:pointer" @click="preview(element)">                                
                                <v-list-tile avatar>
                                    <v-list-tile-avatar>                                        
                                        <v-avatar size="40" color="teal">
                                            <span class="white--text">AB</span>
                                        </v-avatar>
                                    </v-list-tile-avatar>
                                    <v-list-tile-content class="pa-1">
                                        <v-list-tile-title class="font-weight-light">Docket #: 2019 - 00{{element.dtn}}</v-list-tile-title>
                                        <v-list-tile-sub-title class="caption">assigned to: abalita</v-list-tile-sub-title>                                       
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-tooltip top v-if="element.stage == 1">
                                            <v-icon slot="activator" color="warning">gavel</v-icon>
                                            Case
                                        </v-tooltip>
                                        <v-tooltip top v-else>
                                            <v-icon slot="activator" color="success">folder_open</v-icon>
                                            Doket
                                        </v-tooltip>
                                    </v-list-tile-action>                                           
                                </v-list-tile>                                
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card-text>
            </v-card>

            <v-card class="ma-1" style="width: 350px">
                <v-toolbar dark style="background: linear-gradient(to bottom, #2c3e50, #4ca1af);">
                    <span class="title font-weight-light">Review</span>
                    <v-spacer></v-spacer>
                    <v-chip  outline color="white" text-color="white">
                        <span >{{review_list.length}}</span>
                    </v-chip>
                </v-toolbar>
                <v-card-text>
                    <draggable v-model="review_list" :options="{group:'cases'}">
                        <transition-group>
                            <v-card v-for="element in review_list" :key="element._id" class="ma-1" style="cursor:pointer" @click="preview(element)">                                
                                <v-list-tile avatar>
                                    <v-list-tile-avatar>                                        
                                        <v-avatar size="40" color="teal">
                                            <span class="white--text">AB</span>
                                        </v-avatar>
                                    </v-list-tile-avatar>
                                    <v-list-tile-content class="pa-1">
                                        <v-list-tile-title class="font-weight-light">Docket #: 2019-00{{element.dtn}}</v-list-tile-title>
                                        <v-list-tile-sub-title class="caption">assigned to: abalita</v-list-tile-sub-title>                                       
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-tooltip top v-if="element.stage == 1">
                                            <v-icon slot="activator" color="warning">gavel</v-icon>
                                            Case
                                        </v-tooltip>
                                        <v-tooltip top v-else>
                                            <v-icon slot="activator" color="success">folder_open</v-icon>
                                            Doket
                                        </v-tooltip>
                                    </v-list-tile-action>                                           
                                </v-list-tile>                                
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card-text>
            </v-card> 

            <v-card class="ma-1" style="width: 350px">
                <v-toolbar dark style="background: linear-gradient(to bottom, #2c3e50, #4ca1af);">
                    <span class="title font-weight-light">Approval</span>
                    <v-spacer></v-spacer>
                    <v-chip  outline color="white" text-color="white">
                        <span >{{approval_list.length}}</span>
                    </v-chip>
                </v-toolbar>
                <v-card-text>
                    <draggable v-model="approval_list" :move="move" :options="{group:'cases'}">
                        <transition-group>
                            <v-card v-for="element in approval_list" :key="element._id" class="ma-1" style="cursor:pointer" @click="preview(element)">                                
                                <v-list-tile avatar>
                                    <v-list-tile-avatar>                                        
                                        <v-avatar size="40" color="teal">
                                            <span class="white--text">AB</span>
                                        </v-avatar>
                                    </v-list-tile-avatar>
                                    <v-list-tile-content class="pa-1">
                                        <v-list-tile-title class="font-weight-light">Docket #: 2019 - 00{{element.dtn}}</v-list-tile-title>
                                        <v-list-tile-sub-title class="caption">assigned to: abalita</v-list-tile-sub-title>                                       
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-tooltip top v-if="element.stage == 1">
                                            <v-icon slot="activator" color="warning">gavel</v-icon>
                                            Case
                                        </v-tooltip>
                                        <v-tooltip top v-else>
                                            <v-icon slot="activator" color="success">folder_open</v-icon>
                                            Doket
                                        </v-tooltip>
                                    </v-list-tile-action>                                           
                                </v-list-tile>                                
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card-text>
            </v-card>

            <v-card class="ma-1" style="width: 350px">
                <v-toolbar dark style="background: linear-gradient(to bottom, #2c3e50, #4ca1af);">
                    <span class="title font-weight-light">Finalization</span>
                    <v-spacer></v-spacer>
                    <v-chip  outline color="white" text-color="white">
                        <span >{{final_list.length}}</span>
                    </v-chip>
                </v-toolbar>
                <v-card-text>
                    <draggable v-model="final_list" :move="move" :options="{group:'cases'}">
                        <transition-group>
                            <v-card v-for="element in final_list" :key="element._id" class="ma-1" style="cursor:pointer" @click="preview(element)">                                
                                <v-list-tile avatar>
                                    <v-list-tile-avatar>                                        
                                        <v-avatar size="40" color="teal">
                                            <span class="white--text">AB</span>
                                        </v-avatar>
                                    </v-list-tile-avatar>
                                    <v-list-tile-content class="pa-1">
                                        <v-list-tile-title class="font-weight-light">Docket #: 2019 - 00{{element.dtn}}</v-list-tile-title>
                                        <v-list-tile-sub-title class="caption">assigned to: abalita</v-list-tile-sub-title>                                       
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-tooltip top v-if="element.stage == 1">
                                            <v-icon slot="activator" color="warning">gavel</v-icon>
                                            Case
                                        </v-tooltip>
                                        <v-tooltip top v-else>
                                            <v-icon slot="activator" color="success">folder_open</v-icon>
                                            Doket
                                        </v-tooltip>
                                    </v-list-tile-action>                                           
                                </v-list-tile>                                
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card-text>
            </v-card>

            <v-card class="ma-1" style="width: 350px">
                <v-toolbar dark style="background: linear-gradient(to bottom, #2c3e50, #4ca1af);">
                    <span class="title font-weight-light">Execution</span>
                    <v-spacer></v-spacer>
                    <v-chip  outline color="white" text-color="white">
                        <span >{{execution_list.length}}</span>
                    </v-chip>
                </v-toolbar>
                <v-card-text>
                    <draggable v-model="execution_list" :move="move" :options="{group:'cases'}">
                        <transition-group>
                            <v-card v-for="element in execution_list" :key="element._id" class="ma-1" style="cursor:pointer" @click="preview(element)">                                
                                <v-list-tile avatar>
                                    <v-list-tile-avatar>                                        
                                        <v-avatar size="40" color="teal">
                                            <span class="white--text">AB</span>
                                        </v-avatar>
                                    </v-list-tile-avatar>
                                    <v-list-tile-content class="pa-1">
                                        <v-list-tile-title class="font-weight-light">Docket #: 2019 - 00{{element.dtn}}</v-list-tile-title>
                                        <v-list-tile-sub-title class="caption">assigned to: abalita</v-list-tile-sub-title>                                       
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-tooltip top v-if="element.stage == 1">
                                            <v-icon slot="activator" color="warning">gavel</v-icon>
                                            Case
                                        </v-tooltip>
                                        <v-tooltip top v-else>
                                            <v-icon slot="activator" color="success">folder_open</v-icon>
                                            Doket
                                        </v-tooltip>
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
  <scrolly-bar axis="y"></scrolly-bar>
  <v-navigation-drawer right app temporary v-model="previewNav">
      <v-card>
        <v-toolbar dark style="background: linear-gradient(to bottom, #2c3e50, #4ca1af);">
          <span class="title font-weight-light">Preview</span>
          <v-spacer></v-spacer>
          <v-btn flat icon @click="view">
            <v-icon>launch</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            class="right-input input"
            label="Docket Number"
            readonly
            :value="selected_item.dtn"
          ></v-text-field>
          <v-text-field
            class="right-input input"
            label="Date Docketed"
            readonly
            :value="formatDate(selected_item.date_docketed)"
          ></v-text-field>
          <v-text-field
            class="right-input input"
            label="Establishment Name"
            readonly
            :value="selected_item.establishment_name"
          ></v-text-field>
          <v-text-field
            class="right-input input"
            label="Establishment Owner"
            readonly
            :value="selected_item.establishment_owner"
          ></v-text-field>
          <v-text-field
            class="right-input input"
            label="Product Involved"
            readonly
            :value="selected_item.product_involved"
          ></v-text-field>
          <v-text-field
            class="right-input input"
            label="Complainant"
            readonly
            :value="selected_item.complainant_name"
          ></v-text-field>
          <v-textarea
            rows="2"
            label="Cause of Complaint"
            readonly
            :value="selected_item.complaint_cause"
          ></v-textarea>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <!-- <v-spacer></v-spacer> -->
          <v-btn color="primary" block @click="view">Review</v-btn>
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
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
            previewNav:false,
            selected_item:{},
            evaluation_list:[],
            review_list:[],
            approval_list:[],
            final_list:[],
            execution_list:[],
            new_cases:[{name:"1234567890"}, {name:"00001231313"}],
            eval_cases:[{name:"Test2"}, {name:"Test3"}],
            review_cases:[{name:Math.random()}, {name:Math.random()}]
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            this.$store.dispatch('GET_DOCKETS_EVALUATION', true)
            .then(res=>{
                this.evaluation_list = res;
                return this.$store.dispatch('GET_DOCKETS_REVIEW', true)
            })
            .then(res2=>{
                this.review_list = res2;
                return this.$store.dispatch('GET_DOCKETS_APPROVAL', true)
            })
            .then(res3=>{
                this.approval_list = res3;
                return this.$store.dispatch('GET_DOCKETS_FINALIZE', true)
            })
            .then(res4=>{
                this.final_list = res4;
                return this.$store.dispatch('GET_DOCKETS_EXECUTE', true)
            })
            .then(res5=>{
                this.execution_list = res5;
            })
        },
        move(evt, originalEvent){            
            return true;
        },
        moveNew(evt, originalEvent){
            return true;
        },
        preview(item){
            this.selected_item = item;
            this.previewNav = true;
        }
    }
}
</script>

<style>

</style>

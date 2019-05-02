<template>
    <v-layout row wrap>
        <v-flex xs12 pa-1>
            <v-card>
                <v-toolbar dark color="primary">
                    <span class="title font-weight-light">Roles</span>
                </v-toolbar>
                <v-card-text>
                    <v-data-table :headers="headers" :items="items" :search="search">
                        <template v-slot:items="props">
                            <tr @click="view(props.item)" style="cursor:pointer">
                            <td>{{ props.item.name }}</td>
                            <td>{{ props.item.description }}</td>
                            <td>{{ props.item.status }}</td>     
                            <td>{{ props.item.permissions }}</td>
                           
                        </tr>
                    </template>
                    <v-alert
                        slot="no-results"
                        :value="true"
                        color="error"
                        icon="warning"
                    >Your search for "{{ search }}" found no results.</v-alert>
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-flex>
         <fab-button
            :hide-default="true" 
            :buttons="[{label:'New Role', action:'add', icon:'add'}]"
            @add="add">   
        </fab-button> 

        <v-dialog
            v-model="add_dialog"
            scrollable persistent=""
            max-width="800px"
            transition="dialog-transition"
        >
            <v-card>
                <v-toolbar dark color="primary">
                    <span class="title font-weight-thin">New Role</span>
                </v-toolbar>               
                    <v-card-text>
                         <v-form ref="user_form">
                             <v-text-field :disabled="isEdit"
                                name="code"
                                label="Code"
                                id="code"
                                v-model="role.code"
                            ></v-text-field>
                            <v-text-field
                                name="col_name"
                                label="name"
                                id="col_name"
                                v-model="role.name"
                            ></v-text-field>
                            <v-textarea rows="3"
                                name="code"
                                label="Description"
                                id="code"
                                v-model="role.description"
                            ></v-textarea>
                            <span class="body-2 font-weight-light primary--text">Permissions</span>
                            <v-divider></v-divider>
                            <v-layout row wrap>
                                <v-flex xs5 pa-1 d-flex>
                                    <v-card>
                                        <v-card-title primary-title>
                                            Selection List
                                        </v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <draggable v-model="selection_list" :options="{group:'selections'}">
                                                <transition-group>
                                                    <v-card v-for="element in selection_list" :key="element.name" class="ma-1">
                                                        <v-card-title primary-title>
                                                            <span class="font-weight-light">{{element.name}}</span>                                         
                                                        </v-card-title>
                                                    </v-card>
                                                </transition-group>
                                            </draggable>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs1 pa-1 justify-center align-center d-flex>
                                    <v-layout row wrap>
                                        <v-flex xs12>
                                             <v-btn large flat icon color="primary">
                                                <v-icon large>last_page</v-icon>
                                            </v-btn>
                                        </v-flex>
                                        <v-flex xs12>
                                             <v-btn large flat icon color="primary">
                                                <v-icon large>first_page</v-icon>
                                            </v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs5 pa-1 d-flex>
                                    <v-card>
                                        <v-card-title primary-title>
                                            Active Permissions
                                        </v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <draggable v-model="role.permissions" :options="{group:'selections'}">
                                                <transition-group>
                                                    <v-card v-for="element in role.permissions" :key="element.name" class="ma-1">
                                                        

                                                        <v-card-text>
                                                            <span class="font-weight-light">  {{element.name}}</span>
                                                            <!-- <v-list-tile avatar> -->
                                                                <!-- <v-list-tile-action>
                                                                    <v-icon color="success">error_outline</v-icon>
                                                                </v-list-tile-action> -->
                                                                <!-- <v-list-tile-content>
                                                                    <v-list-tile-title><span class="font-weight-light">  {{element.name}}</span></v-list-tile-title>
                                                                </v-list-tile-content> -->
                                                                <!-- <v-list-tile-action>
                                                                    <v-btn small flat icon color="error">
                                                                        <v-icon small>close</v-icon>
                                                                    </v-btn>
                                                                </v-list-tile-action> -->
                                                            <!-- </v-list-tile> -->
                                                             
                                                        </v-card-text>
                                                    </v-card>
                                                </transition-group>
                                            </draggable>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                         </v-form>
                    </v-card-text>
               
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn outline color="secondary" dark @click="add_dialog=false">Cancel</v-btn>
                    <v-btn v-if="!isEdit" color="primary" @click="save" :loading="isLoading">Save</v-btn>
                    <v-btn v-else color="primary" @click="edit" :loading="isLoading">Edit</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog> 
    </v-layout>
    
</template>

<script>
import fabButton from '@/components/FabButton'
import draggable from 'vuedraggable'

export default {
    components:{fabButton,draggable},
    data(){
        return{
            isEdit:false,
            isLoading: false,
            selection_list:[],
            init_selection_list:[
                {name:'Docket Creation', value:'DOCKET_CREATE'},
                {name:'Docket Evaluation', value:'DOCKET_EVAL'},
                {name:'Docket Review', value:'DOCKET_REVIEW'},
                {name:'Docket Approval', value:'DOCKET_APPROVAL'},
                {name:'Docket Finalization', value:'DOCKET_FINALIZATION'},
                {name:'Docket Execution', value:'DOCKET_EXECUTION'},
                {name:'Docket Appeal', value:'DOCKET_APPEAL'},
                {name:'Case Search', value:'CASE_SEARCH'},
                {name:'Case Board', value:'CASE_BOARD'},
                {name:'System Admin - Users', value:'USERS'},
                {name:'System Admin - Roles', value:'ROLES'},
                {name:'System Admin - Tables', value:'TABLES'},

            ],
            role:{
                permissions:[
                    {name:'Add Items', value:''}
                ]
            },
            add_dialog: false,
            search:'',
            items:[],
            headers:[
                    { text: "Name", value: "name" },
                    { text: "Description", value: "description" },
                    { text: "Status", value: "status" },
                    { text: "Permissions", value: "firstname" }
            ]
        }
    },
    created(){
        this.init()
    },
    watch:{
        selection_list(){
            if(this.role.permissions.length > 1){
                //remove placeholder
                console.log(this.role.permissions.filter(elem => elem.name !== 'Add Items'))
                this.role.permissions = this.role.permissions.filter(elem => elem.name !== 'Add Items')
            }
        }
        
    },
    methods:{
        init(){
            this.$store.dispatch('GET_ROLES')
            .then(results => {
                this.items = results.data.model
            })
            .catch(error=>{
                console.log(error)
                this.$notifyError(error)
            })
        },
        save(){
            this.isLoading = true
            this.$store.dispatch('ADD_ROLE', this.role)
            .then(results=>{
                this.$notify({message: 'New Role created.', color:'success'})
                this.add_dialog = false;
                this.isLoading = false
                this.init()
            })
            .catch(error =>{
                console.error(error)
                this.add_dialog = false;
                this.isLoading = false
                this.$notifyError(error)
            })
        },
        edit(){
            this.isLoading = true
            this.$store.dispatch('EDIT_ROLE', this.role)
            .then(results=>{
                this.$notify({message: 'Role edited.', color:'success'})
                this.add_dialog = false;
                this.isLoading = false
                this.init()
            })
            .catch(error =>{
                console.error(error)
                this.add_dialog = false;
                this.$notifyError(error)
            })
        },
        view(item){
            this.isEdit = true;
            this.role=JSON.parse(JSON.stringify(item));            
            this.add_dialog = true;
            this.selection_list = this.init_selection_list
            this.selection_list = this.selection_list.filter(({ value: id1 }) => !this.role.permissions.some(({ value: id2 }) => id2 === id1));
            
        },
        add(){
            this.isEdit = false;
            this.role={
                permissions:[
                    {name:'Add Items', value:''}
                ]
            };
            this.add_dialog = true;
            this.selection_list = this.init_selection_list
        }
    }

}
</script>

<style>

</style>

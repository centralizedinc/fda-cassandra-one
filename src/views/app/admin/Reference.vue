<template>
    <v-layout row wrap>
        <v-flex xs12 pa-1>
            <v-card>
                <v-toolbar dark color="primary">
                    <span class="title font-weight-light">References</span>
                </v-toolbar>
                <v-card-text>
                    <v-data-table :headers="headers" :items="items" :search="search">
                        <template v-slot:items="props">
                            <tr @click="view(props.item)" style="cursor:pointer">
                            <td>{{ props.item.collection_name }}</td>
                            <td>{{ props.item.code }}</td>
                            <td>{{ props.item.description }}</td>
                            <td>{{ props.item.parent }}</td>                            
                            <td>{{ formatDate(props.item.created_date) }}</td>
                            <td>{{ props.item.status }}</td>
                           
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
            :buttons="[{label:'Add', action:'add', icon:'add'}]"
            @add="add_dialog = true">   
        </fab-button> 

        <v-dialog
            v-model="add_dialog"
            scrollable persistent=""
            max-width="500px"
            transition="dialog-transition"
        >
            <v-card>
                <v-toolbar dark color="primary">
                    <span class="title font-weight-thin">Reference Data</span>
                </v-toolbar>               
                    <v-card-text>
                         <v-form ref="user_form">
                            <v-text-field
                                name="col_name"
                                label="Collection Name"
                                id="col_name"
                                v-model="ref_data.collection_name"
                            ></v-text-field>
                            <v-text-field
                                name="code"
                                label="Code"
                                id="code"
                                v-model="ref_data.code"
                            ></v-text-field>
                            <v-text-field
                                name="desc"
                                label="Description"
                                id="desc"
                                v-model="ref_data.description"
                            ></v-text-field>
                            <v-text-field
                                name="desc"
                                label="Parent"
                                id="desc"
                                v-model="ref_data.parent"
                            ></v-text-field>
                            <v-select
                                :items="[{code:'A', value:'Active'}, {code:'I', value:'Inactive'}]"
                                v-model="value"
                                label="Status"
                                item-text="value"
                                item-value="code"
                            ></v-select>
                         </v-form>
                    </v-card-text>
               
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn outline color="secondary" dark @click="add_dialog=false">Cancel</v-btn>
                    <v-btn color="primary" @click="save" :loading="isLoading">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog> 
    </v-layout>
    
</template>

<script>
import fabButton from '@/components/FabButton'
export default {
    components:{fabButton},
    data(){
        return{
            ref_data:{},
            add_dialog: false,
            search:'',
            items:[],
            headers:[
                    { text: "Collection", value: "username" },
                    { text: "Code", value: "email" },
                    { text: "Value", value: "lastname" },
                    { text: "Parent", value: "firstname" },
                    { text: "Date Created", value: "date_created" },
                    { text: "Active", value: "active" },
            ]
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            this.$store.dispatch('GET_REFERENCE_TABLE')
            .then(results => {
                this.items = results.data.model
            })
            .catch(error=>{
                console.log(error)
                this.$notifyError(error)
            })
        },
        save(){
            this.$store.dispatch('ADD_REFERENCE_ITEM')
            .then(results=>{
                this.$notify({message: 'New Reference Item created.', color:'success'})
                this.add_dialog = false;
                this.init()
            })
            .catch(error =>{
                console.error(error)
                this.$notifyError(error)
            })
        }
    }

}
</script>

<style>

</style>

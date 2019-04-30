<template>
    <v-layout row wrap>
        <v-flex xs12 pa-1>
            <v-card>
                <v-toolbar dark color="primary">
                    <span class="title font-weight-light">Users</span>
                </v-toolbar>
                <v-card-text>
                    <v-data-table :headers="headers" :items="items" :search="search">
                        <template v-slot:items="props">
                            <tr @click="view(props.item)" style="cursor:pointer">
                            <td>{{ props.item.username }}</td>
                            <td>{{ props.item.email }}</td>
                            <td>{{ props.item.name.last }}</td>
                            <td>{{ props.item.name.first }}</td>
                            <td>{{ props.item.role }}</td>
                            <td>{{ formatDate(props.item.date_created) }}</td>
                           
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
            :buttons="[{label:'New User', action:'add', icon:'add'}]"
            @add="add">   
        </fab-button> 

        <v-dialog
            v-model="add_dialog"
            scrollable persistent=""
            max-width="500px"
            transition="dialog-transition"
        >
            <v-card>
                <v-toolbar dark color="primary">
                    <span class="title font-weight-thin">User</span>
                </v-toolbar>               
                    <v-card-text>
                         <v-form ref="user_form">
                            <v-text-field
                                name="name"
                                label="Username"
                                id="name"
                                v-model="account.username"
                            ></v-text-field>
                            <v-text-field v-if="!isEdit"
                            type="password"
                                name="password"
                                label="Password"
                                id="password"
                                v-model="account.password"
                            ></v-text-field>
                            <v-text-field
                                name="name"
                                label="Email"
                                id="id"
                                v-model="account.email"
                            ></v-text-field>
                            <v-text-field
                                label="Last Name"
                                v-model="account.name.last"
                            ></v-text-field>
                            <v-text-field
                                label="First Name"
                                v-model="account.name.first"
                            ></v-text-field>
                            <v-text-field
                                label="Middle Name"
                                v-model="account.name.middle"
                            ></v-text-field>
                            <v-select
                                :items="roles"
                                label="Role"
                                v-model="account.role"
                                item-text="name"
                                item-value="code"
                            ></v-select>
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
export default {
    components:{fabButton},
    data(){
        return{
            isEdit:false,
            isLoading: false,
            add_dialog:false,
            roles:[],
            headers:[
                { text: "Username", value: "username" },
                { text: "Email", value: "email" },
                { text: "Last name", value: "lastname" },
                { text: "First name", value: "firstname" },
                { text: "Role", value: "role" },
                { text: "Date Created", value: "date_created" },

            ],
            items:[],
            account:{
                name:{}
            }
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            this.$store.dispatch('FETCH_ACCOUNTS')
            .then(results=>{
                console.log('FETCH_ACCOUNTS:' + JSON.stringify(results.data))
                this.items = results.data.model
                return this.$store.dispatch('GET_ROLES')
            })
            .then(roles=>{
                this.roles = roles.data.model
            })
        },
        view(item){
            this.isEdit = true;
            this.account = JSON.parse(JSON.stringify(item));
            this.add_dialog = true;
        },
        add(){
            this.isEdit = false;
            this.account = {};
            this.add_dialog = true;
        },
        save(){
            this.isLoading = true
            this.$store.dispatch('ADD_ACCOUNT', this.account)
            .then(results=>{
                console.log('ADDING ACCOUNT: '+JSON.stringify(results.data))
                this.isLoading=false;
                if(results.data.success){                    
                    this.$notify({message:'New User created.'})
                    this.add_dialog=false;
                    this.init()
                }else{
                    this.$notifyError(this.data.errors)
                }
            })
            .catch(error=>{
                console.error(error)
                this.isLoading = false;
                this.$notifyError(error)
            })
        },
        edit(){
            this.isLoading = true
            this.$store.dispatch('EDIT_ACCOUNT', this.account)
            .then(results=>{
                console.log('EDIT ACCOUNT: '+JSON.stringify(results.data))
                this.isLoading=false;
                if(results.data.success){                    
                    this.$notify({message:'Modified User.'})
                    this.add_dialog=false;
                    this.init()
                }else{
                    this.$notifyError(this.data.errors)
                }
            })
            .catch(error=>{
                console.error(error)
                this.isLoading = false;
                this.$notifyError(error)
            })
        }
        

    }
}
</script>

<style>

</style>

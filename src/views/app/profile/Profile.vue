<template>

<v-layout align-center justify-center>
    
    <v-flex xs12 md8 pa-2 mt-4>
    <input name="avatar"
            type="file"
            style="display: none"
            ref="image"
            @change="onFilePicked"
            accept="image/*">
        <a @click="$refs.image.click()">
            <v-avatar size="150" style="left:40%; z-index:1">
                <img src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg" alt="alt">
            </v-avatar>
        </a>
    <v-card dark style="top:-80px;background: linear-gradient(45deg, #0288d1, #26c6da) !important">            
        <v-card-text>
            <v-form class="pa-5">
                <v-text-field
                    name="last_name"
                    label="Last Name"
                    id="last_name"
                    v-model="user.name.last"
                ></v-text-field>
                <v-text-field
                    name="first_name"
                    label="First Name"
                    id="first_name"
                    v-model="user.name.first"
                ></v-text-field>
                <v-text-field
                    name="middle_name"
                    label="Middle Name"
                    id="middle_name"
                    v-model="user.name.middle"
                ></v-text-field>
                <v-text-field
                    name="email"
                    label="Email"
                    id="email"
                    v-model="user.email"
                ></v-text-field>
                <v-text-field
                    name="contact_no"
                    label="Role"
                    id="contact_no"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outline @click="save">Save</v-btn>
        </v-card-actions>
    </v-card>
    </v-flex>
    <fab-buttons 
      :hide-default="true" 
      :buttons="[{label:'Save Changes', action:'save', icon:'save'}]"
      @add="create">
    </fab-buttons> 
</v-layout>
</template>

<script>
import FabButtons from '@/components/FabButton'

export default {
    components:{FabButtons},
    data(){
        return{
            user:null,
            isLoading:false
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            this.user = JSON.parse(JSON.stringify(this.$store.state.user_session.user))
        },
        save(){
            this.isLoading = true
            this.$store.dispatch('UPDATE_ACCOUNT', this.user)
            .then(result=>{
                console.log(JSON.stringify(result))
                this.isLoading = false
                this.$notify({message:'Updated Profile!', color:'success'})
            })
            .catch(error=>{
                console.error(error)
                this.isLoading = false
                this.$notifyError(error)
            })
        }
    }
    
}
</script>

<style>

</style>

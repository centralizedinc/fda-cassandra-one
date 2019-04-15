<template>

<v-layout align-center justify-center>
    
    <v-flex xs12 md8 pa-2 mt-4>
    <v-avatar size="150" style="left:40%; z-index:1">
        <img src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg" alt="alt">
    </v-avatar>
    <v-card dark style="top:-80px;background: linear-gradient(45deg, #0288d1, #26c6da) !important">            
        <v-card-text>
            <v-form class="pa-5">
                <v-text-field
                    name="old_password"
                    label="Old Password"
                    id="old_password"
                ></v-text-field>
                <v-text-field
                    name="new_password"
                    label="New Password"
                    id="new_password"
                ></v-text-field>
                <v-text-field
                    name="confirm_password"
                    label="Confirm Name"
                    id="confirm_password"
                ></v-text-field>                
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outline >Save</v-btn>
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
    components:{FabButtons}
}
</script>

<style>

</style>

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
    </v-layout>
</template>

<script>
export default {
    data(){
        return{
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
        }
    }

}
</script>

<style>

</style>

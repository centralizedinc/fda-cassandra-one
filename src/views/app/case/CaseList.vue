<template>
    <v-layout row wrap>
        <v-flex xs12 pa-2 >
            <v-card>
                <v-card-title>
                
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="items"
                :search="search"
                >
                <template v-slot:items="props" >
                    <tr @click="view(props.item)">
                    <td>{{ props.item.dtn }}</td>
                    <td>{{ props.item.cluster }}</td>
                    <td>{{ props.item.region }}</td>
                    <td>{{ props.item.area }}</td>
                    <td>{{ props.item.center }}</td>
                    <td>{{ props.item.establishment }}</td>
                    <td>{{ props.item.status }}</td>
                    <td>
                        <v-tooltip top>
                             <v-progress-linear slot="activator" :value="compute_age(props.item.age)" :color="compute_age(props.item.age)>=100?'error':compute_age(props.item.age)>50?'warning':'success'"></v-progress-linear>
                             {{props.item.age}} days
                        </v-tooltip>
                       
                    </td>
                    </tr>
                </template>
                </v-data-table>
            </v-card>
        </v-flex> 
        <fab-buttons 
      :hide-default="true" 
      :buttons="[{label:'New Docket', action:'add', icon:'add'}]"
      @add="create"></fab-buttons>       
    </v-layout>
</template>

<script>
import FabButtons from '@/components/FabButton'
export default {
    components:{FabButtons},
    data(){
        return{
            search:'',
            headers:[
                {text: 'Case Number', value:'dtn'},
                {text: 'Docket Number', value:'cluster'},
                {text: 'Region', value:'region'},
                {text: 'Area', value:'area'},
                {text: 'Center', value:'center'},
                {text: 'Establishment', value:'establishment'},
                {text: 'Status', value:'status'},
                {text: 'Age', value:'age'}                
                ],
            items:[
                {
                    dtn:'20171113103604',
                    cluster:'Mindanao East',
                    region:'Region XI',
                    area:'Davao City',
                    center:'CDRR',
                    establishment:'Choice Worth Pharmacy',
                    status:'Evaluation',
                    age:12
                },
                {
                    dtn:'20171110011403',
                    cluster:'South Luzon',
                    region:'Region V',
                    area:'Albay',
                    center:'CDRR',
                    establishment:'South star drug',
                    status:'Review',
                    age:90
                },
                {
                    dtn:'20151013083435',
                    cluster:'South Luzon',
                    region:'Region IV-B',
                    area:'Palawan',
                    center:'CDRR',
                    establishment:'Aborlan Drughouse',
                    status:'Execution of REU',
                    age:170
                }
            ]
        }
    },
    methods:{
        compute_age(age){
            return (age/150)*100
        },
        view(docket){
            this.$router.push('/app/dockets/view')
        },
        create(){
            this.$router.push('/app/dockets/new')
        }
    }

}
</script>

<style>

</style>

<template>
    <v-layout row wrap>
        <v-flex xs12 md4 pa-3>
            <dashboard-card color="success" icon="folder_open" title="Open" count="100"
            subtitle="As of March 21, 2019 1:33 PM"></dashboard-card>            
        </v-flex>
        <v-flex xs12 md4 pa-3>
            <dashboard-card color="warning" icon="sync" title="Pending" count="100"
            subtitle="As of March 21, 2019 1:33 PM"></dashboard-card>            
        </v-flex>
         <v-flex xs12 md4 pa-3>
            <dashboard-card color="error" icon="not_interested" title="Closed" count="100"
            subtitle="As of March 21, 2019 1:33 PM"></dashboard-card>            
        </v-flex>
        <v-flex xs3 pa-2>
            <v-card>
                <v-toolbar dark color="primary">
                    <span class='title font-weight-light'>Case Dockets</span>                    
                </v-toolbar>
                <pie-chart :chartdata="chartdata" ></pie-chart>
            </v-card>
        </v-flex>
        <v-flex xs3 pa-2>
            <v-card>
                <v-toolbar dark color="primary">
                    <span class='title font-weight-light'>Case Dockets</span>                    
                </v-toolbar>
                <pie-chart :chartdata="chartdata" ></pie-chart>
            </v-card>
        </v-flex>
         <v-flex xs3 pa-2>
            <v-card>
                <v-toolbar dark color="primary">
                    <span class='title font-weight-light'>Case Dockets</span>                    
                </v-toolbar>
                <bar-chart :chartdata="chartdata" ></bar-chart>
            </v-card>
        </v-flex>
        <v-flex xs3 pa-2>
            <v-card>
                <v-toolbar dark color="primary">
                    <span class='title font-weight-light'>Case Dockets</span>                    
                </v-toolbar>
                <line-chart :chartdata="chartdata" ></line-chart>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

import PieChart from '@/components/PieChart'
import BarChart from '@/components/BarChart'
import LineChart from '@/components/LineChart'
import DashboardCard from '@/components/DashboardCard'

export default {
    components:{PieChart, BarChart, LineChart, DashboardCard},
    data(){
        return{
            chartdata:{
                labels: ['Closed','Open','Evaluation','Review', 'Execution' ],
                datasets: [
                    {
                    label: 'Case',
                    data: [1, 5, 10, 20, 30]
                    }
                ]
            }
        }
    }
}
</script>

<style>
.v-sheet--offset {
    top: -10px;
    position: relative;
  }
</style>

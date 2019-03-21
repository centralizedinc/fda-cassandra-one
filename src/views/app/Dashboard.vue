<template>
    <v-layout row wrap>
        <v-flex xs4 pa-2>
            <dashboard-card color="success" icon="folder_open" title="Open Cases" count="100"
            subtitle="As of March 21, 2019 1:33 PM"></dashboard-card>            
        </v-flex>
        <v-flex xs4 pa-2>
            <dashboard-card color="warning" icon="sync" title="Pending Cases" count="100"
            subtitle="As of March 21, 2019 1:33 PM"></dashboard-card>            
        </v-flex>
         <v-flex xs4 pa-2>
            <dashboard-card color="error" icon="not_interested" title="Closed Cases" count="100"
            subtitle="As of March 21, 2019 1:33 PM"></dashboard-card>            
        </v-flex>
        <v-flex xs3 pa-2>
            <v-card>
                <v-card-title primary-title>
                    Cases
                </v-card-title>
                <pie-chart :chartdata="chartdata" ></pie-chart>
            </v-card>
        </v-flex>
        <v-flex xs3 pa-2>
            <v-card>
                <v-card-title primary-title>
                    Dokets
                </v-card-title>
                <pie-chart :chartdata="chartdata" ></pie-chart>
            </v-card>
        </v-flex>
         <v-flex xs3 pa-2>
            <v-card>
                <v-card-title primary-title>
                    Dokets
                </v-card-title>
                <bar-chart :chartdata="chartdata" ></bar-chart>
            </v-card>
        </v-flex>
        <v-flex xs3 pa-2>
            <v-card>
                <v-card-title primary-title>
                    Dokets
                </v-card-title>
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
                labels: ['Closed','Open','Inprogress'],
                datasets: [
                    {
                    label: 'Data One',
                    backgroundColor: ['success'],
                    data: [7, 1, 3]
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

<template>
    <v-layout row wrap>
        <v-flex xs12 md8>
            <v-layout row wrap>
                <!-- total case card -->
                <v-flex xs12 md6 pa-2>
                    <v-card style="background:linear-gradient(360deg, #297373 0%, #5FA391 100%); box-shadow: 0 6px 20px rgba(101, 198, 187, 1);">          
                        <v-card-text>
                            <v-layout row wrap>
                                <v-flex xs9>
                                    <span class="display-2 white--text font-weight-bold">10</span>
                                    <p class="title  white--text font-weight-bold mt-2">Total Cases</p>
                                </v-flex>
                                <v-flex xs3 align-center justify-center d-flex>
                                    <v-icon style="font-size:60px; color:rgba(0,0,0,.15)">gavel</v-icon>
                                </v-flex>                        
                                <v-flex xs12 >
                                    <v-layout row wrap>
                                        <v-flex xs3>
                                            <span class="caption white--text">Open</span>
                                        </v-flex>
                                        <v-flex xs9 align-center justify-center d-flex>
                                            <v-progress-linear color="success" height="3" :value="30"></v-progress-linear>
                                        </v-flex>
                                        <v-flex xs3>
                                            <span class="caption white--text">In Progress</span>
                                        </v-flex>
                                        <v-flex xs9 align-center justify-center d-flex>
                                            <v-progress-linear color="warning" height="3" :value="60"></v-progress-linear>
                                        </v-flex>
                                        <v-flex xs3>
                                            <span class="caption white--text">Close</span>
                                        </v-flex>
                                        <v-flex xs9 align-center justify-center d-flex>
                                            <v-progress-linear color="error" height="3" :value="10"></v-progress-linear>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-layout>                            
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions style="background:rgba(0,0,0,.1)">
                            <v-spacer></v-spacer>
                            <p class="caption white--text" style="cursor:pointer" @click="$router.push('/app/certificates')">More info <v-icon color="white" small>launch</v-icon></p>
                            <v-spacer></v-spacer>
                        </v-card-actions>          
                    </v-card>            
                </v-flex>
                <!-- total docket card -->
                <v-flex xs12 md6 pa-2>
                    <v-card style="background: linear-gradient(to right, #02aab0, #00cdac); box-shadow: 0 6px 20px rgba(101, 198, 187, 1);">          
                        <v-card-text>
                            <v-layout row wrap>
                                <v-flex xs9>
                                    <span class="display-2 white--text font-weight-bold">20</span>
                                    <p class="title  white--text font-weight-bold mt-2">Total Dockets</p>
                                </v-flex>
                                <v-flex xs3 align-center justify-center d-flex>
                                    <v-icon style="font-size:60px; color:rgba(0,0,0,.15)">folder_open</v-icon>
                                </v-flex>                        
                                <v-flex xs12 >
                                    <v-layout row wrap>
                                        <v-flex xs4>
                                            <span class="caption white--text">New</span>
                                        </v-flex>
                                        <v-flex xs8 align-center justify-center d-flex>
                                            <v-progress-linear color="success" height="3" :value="30"></v-progress-linear>
                                        </v-flex>
                                        <v-flex xs4>
                                            <span class="caption white--text">For Evaluation</span>
                                        </v-flex>
                                        <v-flex xs8 align-center justify-center d-flex>
                                            <v-progress-linear color="warning" height="3" :value="60"></v-progress-linear>
                                        </v-flex>
                                        <v-flex xs4>
                                            <span class="caption white--text">For Review</span>
                                        </v-flex>
                                        <v-flex xs8 align-center justify-center d-flex>
                                            <v-progress-linear color="error" height="3" :value="10"></v-progress-linear>
                                        </v-flex>
                                        <v-flex xs4>
                                            <span class="caption white--text">For Approval</span>
                                        </v-flex>
                                        <v-flex xs8 align-center justify-center d-flex>
                                            <v-progress-linear color="error" height="3" :value="10"></v-progress-linear>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-layout>                            
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions style="background:rgba(0,0,0,.1)">
                            <v-spacer></v-spacer>
                            <p class="caption white--text" style="cursor:pointer" @click="$router.push('/app/certificates')">More info <v-icon color="white" small>launch</v-icon></p>
                            <v-spacer></v-spacer>
                        </v-card-actions>          
                    </v-card>            
                </v-flex>
                
                <v-flex xs12 pa-1 mt-5>
                    <!-- <span class="title primary--text">Trends</span> -->
                    <v-divider></v-divider>                    
                </v-flex>
                <v-flex xs12 md6 pa-1>
                    <v-card style="background-color: #00a65a!important; box-shadow: 0 6px 20px rgba(101, 198, 187, 1);">
                        <v-card-title primary-title>
                            <span class="title font-weight-light white--text">New Cases</span>
                            <v-spacer></v-spacer>
                            <v-btn flat icon color="white">
                                <v-icon>launch</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-sparkline
                                :value="trend_cases"
                                :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']"
                                color="white"
                                line-width="2"
                                padding="16"
                                smooth="4"
                            ></v-sparkline>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12 md6 pa-1>
                    <v-card style="background: linear-gradient(360deg, #F1961D 0%, #F58555  100%); box-shadow: 0 6px 20px 0 rgba(228, 120, 51, 1)">
                        <v-card-title primary-title>
                            <span class="title font-weight-light white--text">Closed Cases</span>
                            <v-spacer></v-spacer>
                            <v-btn flat icon color="white">
                                <v-icon>launch</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-sparkline
                                :value="trend_cases"
                                :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']"
                                color="white"
                                line-width="2"
                                padding="16"
                                smooth="4"
                            ></v-sparkline>
                        </v-card-text>
                    </v-card>
                </v-flex>
                

                <!-- <v-flex xs12 md6 pa-1>
                    <v-card style="background:linear-gradient(360deg, #297373 0%, #5FA391 100%); box-shadow: 0 6px 20px rgba(101, 198, 187, 1);">
                        <v-card-title primary-title>
                            <span class="title font-weight-light white--text">Closed Cases</span>
                            <v-spacer></v-spacer>
                            <v-btn flat icon color="white">
                                <v-icon>launch</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-sparkline
                                :value="trend_cases"
                                :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']"
                                color="white"
                                line-width="2"
                                padding="16"
                                smooth="4"
                            ></v-sparkline>
                        </v-card-text>
                    </v-card>
                </v-flex> -->
            </v-layout>            
        </v-flex>
        
        <!-- recent activities card -->
         <v-flex xs12 md4 pt-2>
            <v-card style="background: linear-gradient(to right, #16222a, #3a6073);">
                <v-card-title  primary-title>
                    <span class="title white--text">Recent Activities</span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-timeline align-top dense>
                        <v-timeline-item v-for="n in 4" :key="n"
                        color="success"
                            small
                            >
                        <template v-slot:icon>
                            <v-avatar size="40">
                            <img :src="'http://i.pravatar.cc/6'+n">                                
                            </v-avatar>
                        </template>
                        <v-alert
                            :value="true"
                            color="new_releases"
                            icon="check"
                            >
                            <!-- <div class="caption font-weight-thin">{{new Date()}}</div> -->
                                <div class="caption font-weight-light">New Case Docket Created</div>
                                <div class="caption font-weight-thin">Docket Number: 2019-12346</div> 
                        </v-alert>
                        <!-- <v-card>
                            <v-card-text>
                                <div class="caption font-weight-thin">{{new Date()}}</div>
                                <div class="caption font-weight-thin">New Case Docket Created</div>
                                <div class="caption font-weight-thin">Docket Number: 2019-12346</div>                                
                            </v-card-text>
                        </v-card> -->
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
                <v-card-actions style="background:rgba(0,0,0,.1)">
                    <v-spacer></v-spacer>
                    <p class="caption white--text" style="cursor:pointer" @click="$router.push('/app/certificates')">More info <v-icon color="white" small>launch</v-icon></p>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>           
            
        </v-flex>
        <v-flex xs12 pa-1>
            <bar-chart :chartdata="chartdata" ></bar-chart>
        </v-flex>
        <!-- <v-flex xs3 pa-2>
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
        </v-flex> -->
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
        }
    },
    computed:{
        trend_cases(){
            return [
                Math.random() * (+30 - +0) + +0,
                Math.random() * (+30 - +0) + +0,
                Math.random() * (+30 - +0) + +0,
                Math.random() * (+30 - +0) + +0,
                Math.random() * (+30 - +0) + +0,
                Math.random() * (+30 - +0) + +0,
                Math.random() * (+30 - +0) + +0,
                Math.random() * (+30 - +0) + +0,
                Math.random() * (+30 - +0) + +0,
                Math.random() * (+30 - +0) + +0,
                Math.random() * (+30 - +0) + +0,
                Math.random() * (+30 - +0) + +0,
            ]
        },
        random(){
            return Math.random() * (+30 - +0) + +0;
        },
        chartdata(){
            return {
                labels: ['Jan','Feb','Mar','Apr', 'May', 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec'  ],                
                datasets: [
                    {
                    label: 'New Case',
                    data: this.trend_cases,
                    backgroundColor:'#297373'
                    },
                    {
                    label: 'Inprogress',
                    data: this.trend_cases,
                    backgroundColor:'#F1961D'
                    },
                    {
                    label: 'Closed Case',
                    data:  this.trend_cases,
                    backgroundColor:'#3a6073'
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

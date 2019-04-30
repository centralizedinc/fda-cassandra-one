<template>
    <v-layout row wrap>
        <v-flex xs12 pa-1 mb-2>
            <span class="display-2 font-weight-light grey--text lighten-4--text" >Cassandra 1.0</span>
            <v-divider></v-divider>
        </v-flex>
        <v-flex xs12 md3 pa-1>
            <v-card style="background:linear-gradient(360deg, #297373 0%, #5FA391 100%); box-shadow: 0 6px 20px rgba(101, 198, 187, 1);">          
                <v-card-text>
                    <v-layout row wrap>
                        <v-flex xs9>
                            <p class="title  white--text font-weight-bold mt-2">Create Case</p>
                            <p class="body-2  white--text font-weight-light mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </v-flex>
                        <v-flex xs3 align-center justify-center d-flex>
                            <v-icon style="font-size:60px; color:rgba(0,0,0,.15)">add_circle</v-icon>
                        </v-flex>                        
                        
                    </v-layout>                            
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions style="background:rgba(0,0,0,.1)">
                    <v-spacer></v-spacer>
                    <span class="caption white--text" style="cursor:pointer" @click="$router.push('/app/dockets/new')">Start</span><v-icon color="white" small>send</v-icon>
                    <v-spacer></v-spacer>
                </v-card-actions>          
            </v-card>            
        </v-flex>
        <!-- total case card -->
        <v-flex xs12 md3 pa-1>
            <v-card style="background:linear-gradient(360deg, #297373 0%, #5FA391 100%); box-shadow: 0 6px 20px rgba(101, 198, 187, 1);">          
                <v-card-text>
                    <v-layout row wrap>
                        <v-flex xs9>
                            <span class="display-2 white--text font-weight-bold">{{dockets_analytics.total}}</span>
                            <p class="title  white--text font-weight-bold mt-2">For Dockets</p>
                        </v-flex>
                        <v-flex xs3 align-center justify-center d-flex>
                            <v-icon style="font-size:60px; color:rgba(0,0,0,.15)">gavel</v-icon>
                        </v-flex>                        
                        <v-flex xs12 >
                            <v-layout row wrap>
                                <template v-for="(item, index) in dockets_analytics.data">
                                    <v-flex xs5 :key="`a${index}`">
                                        <v-tooltip bottom>
                                            <span slot="activator" class="caption white--text">{{getCaseStatus(item.current_status)}}</span>
                                            {{item.count}}
                                        </v-tooltip>
                                    </v-flex>
                                    <v-flex xs7 align-center justify-center d-flex :key="`b${index}`">
                                        <v-tooltip bottom>
                                            <v-progress-linear slot="activator" color="success" height="3" :value="item.count"></v-progress-linear>
                                            {{item.count}}
                                        </v-tooltip>
                                    </v-flex>
                                </template>
                            </v-layout>
                        </v-flex>
                    </v-layout>                            
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions style="background:rgba(0,0,0,.1)">
                    <v-spacer></v-spacer>
                    <span class="caption white--text" style="cursor:pointer" @click="$router.push('/app/certificates')">More info </span><v-icon color="white" small>launch</v-icon>
                    <v-spacer></v-spacer>
                </v-card-actions>          
            </v-card>            
        </v-flex>
        <!-- total docket card -->
        <v-flex xs12 md3 pa-1>
            <v-card style="background: linear-gradient(to right, #02aab0, #00cdac); box-shadow: 0 6px 20px rgba(101, 198, 187, 1);">          
                <v-card-text>
                    <v-layout row wrap>
                        <v-flex xs9>
                            <span class="display-2 white--text font-weight-bold">{{cases_analytics.total}}</span>
                            <p class="title  white--text font-weight-bold mt-2">For Cases</p>
                        </v-flex>
                        <v-flex xs3 align-center justify-center d-flex>
                            <v-icon style="font-size:60px; color:rgba(0,0,0,.15)">folder_open</v-icon>
                        </v-flex>                        
                        <v-flex xs12 >
                            <v-layout row wrap>
                                <template v-for="(item, index) in cases_analytics.data">
                                    <v-flex xs5 :key="`a${index}`">
                                        <v-tooltip bottom>
                                            <span slot="activator" class="caption white--text">{{getCaseStatus(item.current_status)}}</span>
                                            {{item.count}}
                                        </v-tooltip>
                                    </v-flex>
                                    <v-flex xs7 align-center justify-center d-flex :key="`b${index}`">
                                        <v-tooltip bottom>
                                            <v-progress-linear slot="activator" color="success" height="3" :value="item.count"></v-progress-linear>
                                            {{item.count}}
                                        </v-tooltip>
                                    </v-flex>
                                </template>
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
        <v-flex xs12 md3 pa-1>
            <v-card style="background: linear-gradient(to right, #02aab0, #00cdac); box-shadow: 0 6px 20px rgba(101, 198, 187, 1);">          
                <v-card-text>
                    <v-layout row wrap>
                        <v-flex xs9>
                            <span class="display-2 white--text font-weight-bold">{{appeals_analytics.total}}</span>
                            <p class="title  white--text font-weight-bold mt-2">For Appeals</p>
                        </v-flex>
                        <v-flex xs3 align-center justify-center d-flex>
                            <v-icon style="font-size:60px; color:rgba(0,0,0,.15)">folder_open</v-icon>
                        </v-flex>                        
                        <v-flex xs12 >
                            <v-layout row wrap>
                                <template v-for="(item, index) in appeals_analytics.data">
                                    <v-flex xs5 :key="`a${index}`">
                                        <v-tooltip bottom>
                                            <span slot="activator" class="caption white--text">{{getCaseStatus(item.current_status)}}</span>
                                            {{item.count}}
                                        </v-tooltip>
                                    </v-flex>
                                    <v-flex xs7 align-center justify-center d-flex :key="`b${index}`">
                                        <v-tooltip bottom>
                                            <v-progress-linear slot="activator" color="success" height="3" :value="item.count"></v-progress-linear>
                                            {{item.count}}
                                        </v-tooltip>
                                    </v-flex>
                                </template>
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
        <v-flex xs12 pa-1 mt-3>
            <v-divider></v-divider>                    
        </v-flex>
        <v-flex xs12 md8>
            <v-layout row wrap>
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
                <v-flex xs12 pa-1>
                    <bar-chart :chartdata="chartdata" ></bar-chart>
                </v-flex>

                
            </v-layout>            
        </v-flex>
        
        <!-- recent activities card -->
         <v-flex xs12 md4 pa-1>
            <v-card style="background: linear-gradient(to right, #16222a, #3a6073);">
                <v-card-title  primary-title>
                    <span class="title white--text">Recent Activities</span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-timeline align-top dense>
                        <v-timeline-item v-for="n in 7" :key="n"
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
        
    </v-layout>

</template>

<script>
import PieChart from "@/components/PieChart";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import DashboardCard from "@/components/DashboardCard";

export default {
  components: { PieChart, BarChart, LineChart, DashboardCard },
  data() {
    return {};
  },
  created() {
    this.init();
  },
  computed: {
    trend_cases() {
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
        Math.random() * (+30 - +0) + +0
      ];
    },
    random() {
      return Math.random() * (+30 - +0) + +0;
    },
    chartdata() {
      return {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "New Case",
            data: this.trend_cases,
            backgroundColor: "#c3f2a7"
          },
          {
            label: "Inprogress",
            data: this.trend_cases,
            backgroundColor: "#efe1a7"
          },
          {
            label: "Closed Case",
            data: this.trend_cases,
            backgroundColor: "#efb3a7"
          }
        ]
      };
    },
    dockets_analytics() {
      return this.$store.state.analytics.dockets;
    },
    cases_analytics() {
      return this.$store.state.analytics.cases;
    },
    appeals_analytics() {
      return this.$store.state.analytics.appeals;
    }
  },
  methods: {
    init(refresh) {
      this.$store
        .dispatch("GET_DOCKETS_ANALYTICS", refresh)
        .then(result => {
          return this.$store.dispatch("GET_CASES_ANALYTICS", refresh);
        })
        .then(result => {
          return this.$store.dispatch("GET_APPEALS_ANALYTICS", refresh);
        })
        .catch(err => {
          this.$notifyError(err);
        });
    }
  }
};
</script>

<style>
.v-sheet--offset {
  top: -10px;
  position: relative;
}
</style>

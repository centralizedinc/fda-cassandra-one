<template>
  <v-card flat>
    <v-card-text>
      <span class="title">Sample Case Name</span>
          <v-tabs
            class="elevation-1 mt-2"
            v-model="tabs"
            color="primary"
            dark
            height="60px"
            slider-color="info"
            fixed-tabs
          >
            <!-- case information -->
            <v-tab ripple>Case Information</v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-container grid-list-xl>
                  <v-layout row wrap>
                 <v-flex xs6>
                    <span class="font-weight-bold">Case Number</span>
                    <br>
                    <span>{{docket.case_number}}</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Ref/DTN #</span>
                    <br>
                    <span>{{docket.dtn}} </span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Date Received</span>
                    <br>
                    <span>{{ formatDate(docket.inspection_date) }}</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Date Docketed</span>
                    <br>
                    <span>{{  formatDate(docket.date_docketed) }}</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Complainant</span>
                    <br>
                    <span>{{docket.complainant_name}}</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Cause of Complaint</span>
                    <br>
                    <span>{{docket.complaint_cause}}</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Respondent</span>
                    <br>
                    <span>{{docket.establishment_owner}}</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Respondent Address</span>
                    <br>
                    <span>{{docket.establishment_address}}</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Laws Violated</span>
                    <br>
                    <span>{{docket.laws_violated}}</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Product/s Involved (if any)</span>
                    <br>
                    <span>{{docket_product_involved}}</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Action Taken</span>
                    <br>
                    <span>{{docket.action_taken}}</span>
                  </v-flex>
                  <br>
                   <v-flex xs6>
                    <span class="font-weight-bold">Legal Order</span>
                    <br>
                    <span>{{docket.if_legal_order}}</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Comment</span>
                    <br>
                    <span>{{docket.comment}}</span>
                  </v-flex>
                  <br>
                </v-layout>
                  </v-container>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn  block  color="primary">Close Case</v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
            <!--documents  -->
            <v-tab ripple>Case Documents Uploaded</v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>oioioioioio</v-card-text>
              </v-card>
            </v-tab-item>
            <!--recent activity  -->
            <v-tab ripple>Recent Activity</v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-list three-line>
                    <template v-for="(item, index) in items.slice(0, 8)">
                      <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                      <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
                      <v-list-tile v-else :key="item.title" avatar>
                        <v-list-tile-avatar>
                          <img :src="item.avatar">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                          <v-list-tile-title v-html="item.title"></v-list-tile-title>
                          <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </template>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>   

        <!-- Nav to finalize -->
        <v-navigation-drawer permanent right app width="300px" class="elevation-1">
          <v-toolbar flat>
            <span class="title font-weight-light primary--text" style="text-transform: uppercase">Finalization</span>
          </v-toolbar>
          <v-card flat>
            <v-card-text>              
              <v-text-field
                outline
                label="Notes"
                name="name"
                textarea
                multi-line
                counter
              ></v-text-field>
              <span class="subheading font-weight-light primary--text">Add Supporting Documents</span>
              <v-divider class="mb-3"></v-divider>
              <uploader class="caption"></uploader>
              <!-- fab button save -->
              <v-tooltip top>
                <v-btn
                  class="elevation-10"
                  small
                  absolute
                  right
                  dark
                  slot="activator"
                  fab
                  color="success"
                >
                  <v-icon>save</v-icon>
                </v-btn>save
              </v-tooltip>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn block color="primary" @click="execute()">Print</v-btn>
            </v-card-actions>
          </v-card>
        </v-navigation-drawer>
    </v-card-text>
  </v-card>
</template>

<script>
import Uploader from "@/components/Uploader";
import FabButtons from "@/components/FabButton";
export default {
  components: {
    Uploader,
    FabButtons
  },
  data() {
    return {
      tabs: null,
      finalAction: ["Legal Order", "Remand"],
      docket: {},
     items: [
        // {
        //   header: "Today"
        // },
        // {
        //   avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        //   title: "Joel C. Ubalde, Special Investigator IV",
        //   subtitle:
        //     "<span class='text--primary'>about 21 hours ago</span> &mdash; Evaluated this case and Submit for Review"
        // },
        // {
        //   divider: true,
        //   inset: true
        // },
        // {
        //   avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        //   title: "Friane Gaitan, Special Investigator II",
        //   subtitle:
        //     "<span class='text--primary'>about 18 hours ago</span> &mdash; Updated this case and Evaluate Action/Status "
        // },
        // {
        //   divider: true,
        //   inset: true
        // },
        // {
        //   avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        //   title: "Taciana Daisy E. Pascual,  Admin Aide VI, LSSC",
        //   subtitle:
        //     "<span class='text--primary'>about 15 hours ago</span> &mdash;  Uploaded a new case document "
        // },
        // {
        //   divider: true,
        //   inset: true
        // },
        // {
        //   avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        //   title: "Taciana Daisy E. Pascual,  Admin Aide VI, LSSC",
        //   subtitle:
        //     "<span class='text--primary'>about 15 hours ago</span> &mdash;  Received and Docketed "
        // }
      ]
    };
  },
  created() {
    this.init();
  },
  methods: {
    init(){
      this.$miniNavbar();
      this.docket = this.$store.state.dockets.active
      console.log("this is docket of finalize: " + JSON.stringify(this.docket))
      // this.$notify({message:'Evaluating Case No: ', color:'success'})
    },
    execute(){
      this.docket.activities.push({
        stage: 0,
        status: 4,
      })
      this.docket.current_status=4;
      this.$store.dispatch('UPDATE_DOCKET', this.docket)
      .then(result=>{
        console.log("review update docket result: " + JSON.stringify(result))
      })
      .catch(error=>{
        console.error(error)
        this.$notifyError(error)
      })
    }
  }
};
</script>

<style>

</style>

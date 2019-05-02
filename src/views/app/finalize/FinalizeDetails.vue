<template>
  <v-card flat>
    <v-card-text>
      <span class="title">Docket Number {{docket.dtn}}</span>
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
                    <span>{{docket.dtn}}</span>
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
                    <span>{{ formatDate(docket.date_docketed) }}</span>
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
                    <span>{{docket.product_involved}}</span>
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
              <v-btn block color="primary">Close Case</v-btn>
            </v-card-actions>
          </v-card>
        </v-tab-item>
        <!--documents  -->
        <v-tab ripple>Case Documents Uploaded</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-layout row wrap>
                <v-flex
                  v-for="item in docket.documents"
                  :key="item.originalname"
                  xs12
                  md4
                  pa-2
                  d-flex
                >
                  <v-card @click="viewFile(item.location)" style="cursor:zoom-in">
                    <v-toolbar dark>{{prettify(item.originalname)}}</v-toolbar>
                    <v-card-text>
                      <v-layout row wrap align-center justify-center ma-0>
                        <v-img
                          v-if="item.mimetype != 'application/pdf'"
                          :src="item.location"
                          class="grey lighten-2"
                          max-height="200"
                          max-width="100"
                          contain
                        >
                          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-layout>
                        </v-img>
                        <div v-else>
                          <pdf :src="'https://cors-anywhere.herokuapp.com/'+item.location"></pdf>
                          <!-- <v-progress-circular  v-show="!loaded" indeterminate color="primary"></v-progress-circular> -->
                        </div>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!--recent activity  -->

       <v-tab ripple>Recent Activity</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-list three-line>
                <template v-for="(item, index) in docket.activities">
                  <v-list-tile :key="`a${index}`" avatar>
                  <v-list-tile-avatar>
                            <v-avatar size="40" color="teal">
                                <span
                                class="subheading white--text "
                                >{{item.user.first_name.substring(0,1) + item.user.last_name.substring(0,1)}}</span>
                            </v-avatar>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                          <v-list-tile-title>
                                <span class="body-2">{{getCaseStatus(item.user.status)}}</span>
                            </v-list-tile-title>
                            <v-list-tile-title>
                                <span class="body-2">{{item.user.username}}</span> - <i class="body-1">{{formatDate(item.date_created)}}</i>
                            </v-list-tile-title>
                            <v-list-tile-sub-title>{{item.user.comment}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                  </v-list-tile>
                  <v-divider inset :key="index"></v-divider>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
</v-tab-item>
        <v-tab ripple>
          Comments
        </v-tab>
        <v-tab-item>
          <comments></comments>
        </v-tab-item>
      </v-tabs>

      <!-- Nav to finalize -->
      <v-navigation-drawer permanent right app width="300px" class="elevation-1">
        <v-toolbar flat>
          <span
            class="title font-weight-light primary--text"
            style="text-transform: uppercase"
          >Finalization</span>
        </v-toolbar>
        <v-card flat>
          <v-card-text>
            <v-text-field
              outline
              label="Notes"
              name="name"
              v-model="remarks"
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
            <v-btn block color="primary" @click="printSummon()">Print</v-btn>
          </v-card-actions>
        </v-card>
      </v-navigation-drawer>
    </v-card-text>
  </v-card>
</template>

<script>
import pdf from 'vue-pdf'
import Uploader from "@/components/Uploader";
import FabButtons from "@/components/FabButton";
import Comments from '../comment/Comment'
export default {
  components: {
    Uploader,
    FabButtons,
    pdf,
    Comments
  },
  data() {
    return {
      tabs: null,
      finalAction: ["Legal Order", "Remand"],
      user_data: {},
      docket: {},
      remarks: "",
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
    init() {
      this.$miniNavbar();
      this.docket = this.$store.state.dockets.active;
      console.log("this is docket of finalize: " + JSON.stringify(this.docket));
      this.user_data = this.$store.state.user_session.user;
      // this.$notify({message:'Evaluating Case No: ', color:'success'})
    },
    prettify(name) {
      if (name.length > 15) {
        return (
          name.substring(0, 15) +
          " ..." +
          name.substring(name.length - 3, name.length)
        );
      } else {
        return name;
      }
    },
    // createActivityDesc(item) {
    //   return (
    //     "<span class='primary--text'>" +
    //     this.formatDate(item.date_created) +
    //     "</span> &mdash;  Created Case Docket (Docket Number: " +
    //     this.docket.dtn +
    //     ")"
    //   );
    // },
    viewFile(url) {
      window.open(url, "_blank");
    },
    printSummon() {
      var stage_case = 0;
      this.docket.activities.forEach(element => {
        if (element.status === 4) stage_case = 1;
      });
      this.docket.activities.push({
        stage: stage_case,
        status: 3,
        comment: this.remarks,
        user: {
          username: this.user_data.username,
          first_name: this.user_data.name.first,
          last_name: this.user_data.name.last,
          middle_name: this.user_data.name.middle,
          email: this.user_data.email
        }  
      })
      // this.docket.current_status=4;
      this.$store.dispatch('UPDATE_DOCKET', this.docket)
      .then(result=>{
         var details ={};
         console.log("review update docket result: " + JSON.stringify(result))
         this.$print(this.docket, "SUMMON");
         this.$notify({ message: "Summon for this case has been printed" });
          this.$router.push("/app/cases/finalize");
      //  this.$download(this.docket, "RCPT", "fda-receipt.pdf");
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

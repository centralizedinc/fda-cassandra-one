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
            <!-- <v-divider></v-divider>
                <v-card-actions>
                  <v-btn  block  color="primary">Close Case</v-btn>
            </v-card-actions>-->
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
        <v-tab ripple>
          Proceedings
        </v-tab>
        <v-tab-item>
          <comments></comments>
        </v-tab-item>
      </v-tabs>

      <!-- <v-tab ripple>Recent Activity</v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-list three-line>
                    <template v-for="(item, index) in items.slice(0, 8)">
                      <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                      <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
                      <v-list-tile v-else :key="item.title" avatar>
                        <v-list-tile-avatar size="40" color="teal">
                      <v-img :src="item.user + item.user"></v-img>
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
      </v-tabs> -->

      <!-- Nav to Approve -->
      <v-navigation-drawer permanent right app width="300px" class="elevation-1">
        <v-toolbar flat>
          <span
            class="title font-weight-light primary--text"
            style="text-transform: uppercase"
          >Approval</span>
        </v-toolbar>
        <v-card flat>
          <v-card-text>
            <v-select
              label="1. Final Action"
              :items="finalAction"
              v-model="selected_action"
              autocomplete
            ></v-select>
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
            <uploader class="caption" @upload="upload"></uploader>
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
            <v-layout row wrap>
              <v-flex xs12 mb-2>
                <v-btn block color="primary" @click="final()" mb-2>Submit for Finalization</v-btn>
              </v-flex>
              <v-flex xs12>
                <v-btn block color="success" @click="comment()">Add to Comment</v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-navigation-drawer>
    </v-card-text>
  </v-card>
</template>

<script>
import Uploader from "@/components/Uploader";
import FabButtons from "@/components/FabButton";
import Comments from "../comment/Comment";
export default {
  components: {
    Uploader,
    FabButtons,
    Comments
  },
  data() {
    return {
      tabs: null,
      finalAction: ["Legal Order", "Remand"],
      docket: {},
      user_data: {},
      selected_action: "",
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
      ],
      formData: null
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$miniNavbar();
      this.docket = this.$store.state.dockets.active;
      this.user_data = this.$store.state.user_session.user;
      console.log("this is docket of approver: " + JSON.stringify(this.docket));
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
    final() {
      var stage_case = 0;

      this.docket.activities.forEach(element => {
        if (element.status === 4) stage_case = 1;
      });
      this.docket.activities.push({
        stage: stage_case,
        status: 2,
        action_taken: this.selected_action,
        comment: this.remarks,
        user: {
          username: this.user_data.username,
          first_name: this.user_data.name.first,
          last_name: this.user_data.name.last,
          middle_name: this.user_data.name.middle,
          email: this.user_data.email
        }
        // decision:
      });
      this.docket.current_status = 3;
      console.log(
        "review update docket result: " + JSON.stringify(this.docket)
      );
      this.$store
        .dispatch("UPDATE_DOCKET", this.docket)
        .then(result => {
          console.log("review update docket result: " + JSON.stringify(result));
          this.$notify({ message: "Success to Finalize!" });
          this.$router.push("/app/cases/approve");
        })
        .catch(error => {
          console.error(error);
          this.$notifyError(error);
        });
    },
    upload(data) {
      this.formData = data.formData;
    },
    comment() {
      var stage_case = 0;

      this.docket.activities.forEach(element => {
        if (element.status === 4) stage_case = 1;
      });
      var activity = {
        stage: stage_case,
        status: 2,
        action_taken: this.selected_action,
        comment: this.remarks,
        user: {
          username: this.user_data.username,
          first_name: this.user_data.name.first,
          last_name: this.user_data.name.last,
          middle_name: this.user_data.name.middle,
          email: this.user_data.email
        }
        // decision:
      };
      this.$store
        .dispatch("ADD_COMMENT", {
          docket: this.docket,
          activity,
          formData: this.formData
        })
        .then(result => {
          console.log("comment docket result: " + JSON.stringify(result));
          this.$notify({ message: "Success to Added a comment!" });
          this.$router.push("/app/cases/approve");
        })
        .catch(error => {
          console.error(error);
          this.$notifyError(error);
        });
    }
  }
};
</script>

<style>
</style>

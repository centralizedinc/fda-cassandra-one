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
        slider-color="yellow"
      >
        <!-- case information -->
        <v-tab ripple>Details</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <!-- <v-flex xs12 md6 class="font-weight-bold">Docket Number</v-flex>
              <v-flex xs12 md12>{{docket_pick.dtn}}</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Ref/DTN #</v-flex>
              <v-flex xs12 md12>{{docket_pick.dtn}}</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Date Received</v-flex>
              <v-flex xs12 md12>{{docket_pick.inspection_date}}</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Date Docketed</v-flex>
              <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Complainant</v-flex>
              <v-flex xs12 md12>{{docket_pick.complainant_name}}</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Complainant Address</v-flex>
              <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Respondent</v-flex>
              <v-flex xs12 md12>{{docket_pick.establishment_owner}}</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Respondent Address</v-flex>
              <v-flex xs12 md12>{{docket_pick.establishment_addres}}</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Cause of Complaint</v-flex>
              <v-flex xs12 md12>{{docket_pick.complaint_cause}}</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Product/s Involved (if any)</v-flex>
              <v-flex xs12 md12>{{docket_pick.product_classification}}</v-flex>-->
              <v-container grid-list-xl>
                <v-layout row wrap>
                  <v-flex xs6>
                    <span class="font-weight-bold">Docket Number</span>
                    <br>
                    <span>{{docket.dtn}}</span>
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
                </v-layout>
              </v-container>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn block color="primary" @click="edit()">Edit Case</v-btn>
            </v-card-actions>
          </v-card>
        </v-tab-item>
        <!--documents  -->
        <v-tab ripple>Documents</v-tab>
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
        

        <v-tab ripple>
          Proceedings
        </v-tab>
        <v-tab-item>
          <comments></comments>
        </v-tab-item>
      </v-tabs>

      <!-- Nav to Evaluate -->
      <v-navigation-drawer permanent right app width="400" class="elevation-1">
        <v-toolbar flat>
          <span
            class="title font-weight-light primary--text"
            style="text-transform: uppercase"
          >Evaluate</span>
        </v-toolbar>
        <v-card flat>
          <v-card-text>
            <!-- <v-text-field outline label="1. Laws Violated" name="name" textarea multi-line counter></v-text-field>
            <v-select
              label="2. Nature of Violation "
              :items="natureViolation"
              v-model="selected_item"
              autocomplete
            ></v-select>
            <v-select
              v-show="selected_item"
              :label="`For ${selected_item}:`"
              :items="violation_details"
              v-model="value"
              autocomplete
            ></v-select>-->
            <!-- <v-text-field outline label="Remarks" name="name" textarea multi-line counter></v-text-field> -->
            <v-select
              label="Action Taken"
              :items="actionTaken"
              v-model="selected_action"
              autocomplete
            ></v-select>
            <v-select
              v-show="selected_action"
              :label="`For ${selected_action}:`"
              :items="action_details"
              v-model="value"
              autocomplete
            ></v-select>
            <v-textarea outline label="Remarks" name="name" v-model="remarks"></v-textarea>
            <span class="subheading font-weight-light primary--text">Add Supporting Documents</span>
            <v-divider class="mb-3"></v-divider>
            <uploader class="caption" @upload="upload"></uploader>
            <!-- fab button save -->
            <!-- <v-tooltip top>
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
            </v-tooltip>-->
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-layout row wrap>
              <v-flex xs12 mb-2>
                <v-btn block color="primary" @click="evaluate()">Submit for Review</v-btn>
              </v-flex>
              <v-flex xs12>
                <v-btn block color="success" @click="comment()">Add to Comment</v-btn>
              </v-flex>
            </v-layout>
            <!-- <v-btn block color="primary" @click="decline()">Decline</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-navigation-drawer>
    </v-card-text>
  </v-card>
</template>

<script>
import Uploader from "@/components/Uploader";
import pdf from "vue-pdf";
import Comments from "../comment/Comment";

export default {
  props: {
    docket_pick: {
      type: Object
    }
  },
  components: {
    Uploader,
    pdf,
    Comments
  },
  data() {
    return {
      docket: {},
      tabs: null,
      natureViolation: [
        "Violative Products",
        "Qualified Personnel Requirement",
        "Others"
      ],
      violation_details: [],
      selected_item: "",
      actionTaken: ["Legal Order", "Remand"],
      action_details: [],
      selected_action: "",
      value: "",
      items: [],
      remarks: "",
      user_data: {},
      formData: null
    };
  },
  created() {
    this.init();
  },
  watch: {
    selected_item(val) {
      if (val === "Violative Products") {
        this.violation_details = [
          "Unregistered",
          "Adulterated",
          "Mislabeled",
          "Expired Product",
          "Counterfeit"
        ];
      } else if (val === "Qualified Personnel Requirement") {
        this.violation_details = ["APH", "NPH", "Unlicensed"];
      } else {
        this.violation_details = ["Remarks below"];
      }
    },
    selected_action(val) {
      if (val === "Legal Order") {
        this.action_details = [
          "Summons with Padlocking",
          "Summons with seizure of Products",
          "N/A"
        ];
      } else {
        this.action_details = [
          "Incomplete Papers",
          "Lack of Product Verification Report"
        ];
      }
    }
  },
  methods: {
    init() {
      this.$miniNavbar();
      this.docket = this.$store.state.dockets.active;
      console.log(
        "this is docket of evaluator: " + JSON.stringify(this.docket)
      );
      console.log(
        "this is user data: " +
          JSON.stringify(this.$store.state.user_session.user)
      );
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
    // createActivityDesc(item){
    //   return "<span class='primary--text'>"+this.formatDate(item.date_created)+"</span> &mdash; "+this.docket.user+" Created Case Docket (Docket Number: "+this.docket.dtn+")"
    // },
    viewFile(url) {
      window.open(url, "_blank");
    },
    evaluate() {
      console.info("evaluate data: " + JSON.stringify(this.docket.activities));
      var stage_case = 0;
      this.docket.activities.forEach(element => {
        if (element.status === 4) stage_case = 1;
      });
      this.docket.activities.push({
        stage: stage_case,
        status: 0,
        action_taken: this.selected_action,
        if_legal_order: this.value,
        comment: this.remarks,
        user: {
          username: this.user_data.username,
          first_name: this.user_data.name.first,
          last_name: this.user_data.name.last,
          middle_name: this.user_data.name.middle,
          email: this.user_data.email
        }
      });

      this.docket.current_status = 1;
      this.$store
        .dispatch("UPDATE_DOCKET", this.docket)
        .then(result => {
          console.log(
            "evaluate update docket result: " + JSON.stringify(result)
          );
          this.$notify({ message: "Success to Review!" });
          this.$router.push("/app/cases/evaluate");
        })
        .catch(error => {
          console.error(error);
          this.$notifyError(error);
        });
    },
    decline() {
      var stage_case = 0;
      this.docket.activities.forEach(element => {
        if (element.status === 4) stage_case = 1;
      });
      console.info("evaluate data: " + JSON.stringify(this.docket));
      this.docket.activities.push({
        stage: 0,
        status: 0,
        action_taken: this.selected_action,
        if_legal_order: this.value,
        comment: this.remarks,
        user: {
          username: this.ser_data.username,
          first_name: this.user_data.name.first,
          last_name: this.user_data.name.last,
          middle_name: this.user_data.name.middle,
          email: this.user_data.email
        }
      });
      this.docket.current_status = 0;
      this.$store
        .dispatch("UPDATE_DOCKET", this.docket)
        .then(result => {
          console.log(
            "evaluate update docket result: " + JSON.stringify(result)
          );
          this.$router.push("/app/cases/evaluate");
        })
        .catch(error => {
          console.error(error);
          this.$notifyError(error);
        });
    },
    edit() {
      this.docket.edit = true;
      this.$store
        .dispatch("UPDATE_DOCKET", this.docket)
        .then(result => {
          console.log(
            "evaluate update docket result: " + JSON.stringify(result)
          );
          this.$router.push("/app/dockets/new");
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
      console.info("evaluate data: " + JSON.stringify(this.docket.activities));
      var stage_case = 0;
      this.docket.activities.forEach(element => {
        if (element.status === 4) stage_case = 1;
      });
      var activity = {
        stage: stage_case,
        status: 0,
        action_taken: this.selected_action,
        if_legal_order: this.value,
        comment: this.remarks,
        user: {
          username: this.user_data.username,
          first_name: this.user_data.name.first,
          last_name: this.user_data.name.last,
          middle_name: this.user_data.name.middle,
          email: this.user_data.email
        }
      };

      this.$store
        .dispatch("ADD_COMMENT", {
          docket: this.docket,
          activity,
          formData: this.formData
        })
        .then(result => {
          console.log(
            "comment update docket result: " + JSON.stringify(result)
          );
          this.$notify({ message: "Success to Added a comment!!" });
          this.$router.push("/app/cases/evaluate");
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

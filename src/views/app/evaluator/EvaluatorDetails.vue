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
                    <span>cmp-apm-2013-130</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Ref/DTN #</span>
                    <br>
                    <span>cmp-apm-2013-130</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Date Received</span>
                    <br>
                    <span>cmp-apm-2013-130</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Date Docketed</span>
                    <br>
                    <span>cmp-apm-2013-130</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Complainant</span>
                    <br>
                    <span>cmp-apm-2013-130</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Complainant Address</span>
                    <br>
                    <span>cmp-apm-2013-130</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Respondent</span>
                    <br>
                    <span>cmp-apm-2013-130</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Respondent</span>
                    <br>
                    <span>cmp-apm-2013-130</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Cause of Complaint</span>
                    <br>
                    <span>cmp-apm-2013-130</span>
                  </v-flex>
                  <br>
                  <v-flex xs6>
                    <span class="font-weight-bold">Product/s Involved (if any)</span>
                    <br>
                    <span>cmp-apm-2013-130</span>
                  </v-flex>
                  <br>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn block color="primary">Edit Case</v-btn>
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

      <!-- Nav to Evaluate -->
      <v-navigation-drawer permanent right app width="300px" class="elevation-1">
        <v-toolbar flat>
          <span
            class="title font-weight-light primary--text"
            style="text-transform: uppercase"
          >Evaluate</span>
        </v-toolbar>
        <v-card flat>
          <v-card-text>
            <v-text-field outline label="1. Laws Violated" name="name" textarea multi-line counter></v-text-field>
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
            ></v-select>
            <v-text-field outline label="Remarks" name="name" textarea multi-line counter></v-text-field>
            <v-select
              label="3. Action Taken"
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
            <v-text-field outline label="Remarks" name="name" textarea multi-line counter></v-text-field>
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
            <v-btn block color="primary">Submit for Review</v-btn>
          </v-card-actions>
        </v-card>
      </v-navigation-drawer>
    </v-card-text>
  </v-card>
</template>

<script>
import Uploader from "@/components/Uploader";
export default {
  props: {
    docket_pick: {
      type: Object
    }
  },
  components: {
    Uploader
  },
  data() {
    return {
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
      items: [
        {
          header: "Today"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Joel C. Ubalde, Special Investigator IV",
          subtitle:
            "<span class='text--primary'>about 21 hours ago</span> &mdash; Evaluated this case and Submit for Review"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Friane Gaitan, Special Investigator II",
          subtitle:
            "<span class='text--primary'>about 18 hours ago</span> &mdash; Updated this case and Evaluate Action/Status "
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Taciana Daisy E. Pascual,  Admin Aide VI, LSSC",
          subtitle:
            "<span class='text--primary'>about 15 hours ago</span> &mdash;  Uploaded a new case document "
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Taciana Daisy E. Pascual,  Admin Aide VI, LSSC",
          subtitle:
            "<span class='text--primary'>about 15 hours ago</span> &mdash;  Received and Docketed "
        }
      ]
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
    // init() {
    //   this.$store
    //     .dispatch("GET_DOCKET_DETAILS")
    //     .then(results => {
    //       this.dockets = results;
    //       console.log(JSON.stringify(results));
    //     })
    //     .catch(error => {
    //       // this.$notifyError(error)
    //       console.error(error);
    //     });
    // }
  }
};
</script>

<style>
</style>

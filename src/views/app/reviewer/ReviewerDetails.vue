<template>
  <v-card flat>
    <v-card-text>
      <span class="title">Sample Case Name</span>
      <v-layout row wrap>
        <v-flex xs12 md12 d-flex>
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
                <v-card-text class="ml-3 mt-3">
                  <!-- <v-btn class="mr-3" absolute right dark outline color="primary"> Edit -->
                <!-- </v-btn> -->
                  <v-flex xs12 md6 class="font-weight-bold">Docket Number</v-flex>
                  <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
                  <br>
                  <v-flex xs12 md6 class="font-weight-bold">Ref/DTN #</v-flex>
                  <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
                  <br>
                  <v-flex xs12 md6 class="font-weight-bold">Date Received</v-flex>
                  <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
                  <br>
                  <v-flex xs12 md6 class="font-weight-bold">Date Docketed</v-flex>
                  <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
                  <br>
                  <v-flex xs12 md6 class="font-weight-bold">Complainant</v-flex>
                  <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
                  <br>
                  <v-flex xs12 md6 class="font-weight-bold">Complainant Address</v-flex>
                  <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
                  <br>
                  <v-flex xs12 md6 class="font-weight-bold">Respondent</v-flex>
                  <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
                  <br>
                  <v-flex xs12 md6 class="font-weight-bold">Respondent Address</v-flex>
                  <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
                  <br>
                  <v-flex xs12 md6 class="font-weight-bold">Cause of Complaint</v-flex>
                  <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
                  <br>
                  <v-flex xs12 md6 class="font-weight-bold">Product/s Involved (if any)</v-flex>
                  <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn  block  color="primary">Edit Case</v-btn>
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
        </v-flex>   

        <!-- Nav to Evaluate -->
        <v-navigation-drawer permanent right app width="300px" class="elevation-1">
          <v-toolbar flat>
            <span class="title font-weight-light primary--text" style="text-transform: uppercase">Review</span>
          </v-toolbar>
          <v-card flat>
            <v-card-text>
              <v-text-field
                outline
                label="1. Laws Violated"
                name="name"
                textarea
                multi-line
                counter
              ></v-text-field>
              <!-- <span class="subheading font-weight-light primary--text">Nature of Violation</span>
              <v-divider class="mb-3"></v-divider> -->
               <v-select
                label="2. Nature of Violation"
                :items="natureViolation"
                v-model="value"
                autocomplete
              ></v-select>
              <!-- <v-select
                label="Violative Products"
                :items="violativeProds"
                v-model="value"
                autocomplete
              ></v-select> -->
              <v-text-field
                outline
                label="Remarks"
                name="name"
                textarea
                multi-line
                counter
              ></v-text-field>
               <v-select
                label="3. Action Taken"
                :items="actionTaken"
                v-model="value"
                autocomplete
              ></v-select>
               <!-- <v-select
                label="If Legal Order"
                :items="legalOrder"
                v-model="value"
                autocomplete
              ></v-select> -->
               <v-text-field
                outline
                label="Remarks"
                name="name"
                textarea
                multi-line
                counter
              ></v-text-field>
              <v-select
                label="4. Reason for Remanding"
                :items="remanding"
                v-model="value"
                autocomplete
              ></v-select>
               <v-text-field
                outline
                label="Remarks"
                name="name"
                textarea
                multi-line
                counter
              ></v-text-field>
              <!-- <v-text-field
                outline
                label="3. Decision Category"
                name="name"
                textarea
                multi-line
                counter
              ></v-text-field>
              <v-text-field
                outline
                label="4. Penalty Impose"
                name="name"
                textarea
                multi-line
                counter
              ></v-text-field>
              <v-text-field
                outline
                label="5. Execution Details / Remarks"
                name="name"
                textarea
                multi-line
                counter
              ></v-text-field> -->
              <span class="subheading font-weight-light primary--text">Add Supporting Documents</span>
              <v-divider class="mb-3"></v-divider>
              <uploader class="caption"></uploader>
              <!-- <v-select
                label="6. Directive to REU"
                :items="itemsDirectives"
                v-model="value"
                autocomplete
              ></v-select>-->

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
              <v-btn block color="primary">Submit for Approval</v-btn>
            </v-card-actions>
          </v-card>
        </v-navigation-drawer>
      </v-layout>
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
      natureViolation: ["Violative Products", "Qualified Personnel Requirement", "Others"],
      violativeProds: ["Unregistered", "Adulterated", "Mislabeled", "Expired Product", "Counterfeit"],
      actionTaken: ["Legal Order", "Remand"],
      remanding: ["Incomplete Papers", "Lack of Product Verification Report"],
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
  }
};
</script>

<style>

</style>

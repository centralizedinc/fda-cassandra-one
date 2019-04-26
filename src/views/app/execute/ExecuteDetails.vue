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
                    <span class="font-weight-bold">Respondent Address</span>
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
              <v-btn block color="primary">Close Case</v-btn>
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

      <!-- Nav to execute -->
      <v-navigation-drawer permanent right app width="300px" class="elevation-1">
        <v-toolbar flat>
          <span
            class="title font-weight-light primary--text"
            style="text-transform: uppercase"
          >Execution</span>
        </v-toolbar>
        <v-card flat>
          <v-card-text>
            <v-select
              label="1. Execution Details"
              :items="execute"
              v-model="selected_execute"
              autocomplete
            ></v-select>
            <v-select
              v-show="selected_execute"
              :label="`If ${selected_execute}:`"
              :items="execute_details"
              v-model="value"
              autocomplete
            ></v-select>
            <v-text-field outline label="Notes" name="name" textarea multi-line counter></v-text-field>
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
            <v-btn block color="primary">Save</v-btn>
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
      execute: ["Served", "Not Served"],
      execute_details: [],
      selected_execute: "",
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
  watch: {
    selected_execute(val) {
      if (val === "Served") {
        this.execute_details = [
          "Service only",
          "Padlocking",
          "Seizure",
          "Sealing"
        ];
      } else {
        this.execute_details = [
          "Moved out",
          "Unknown Address",
          "No longer existing"
        ];
      }
    }
  }
};
</script>

<style>
</style>

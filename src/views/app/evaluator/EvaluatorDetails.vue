<template>
  <v-card flat>
    <v-card-text>
      <span class="title">Sample Case Name</span>
      <v-layout row wrap>
        <v-flex xs12 md12>
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
                  <v-flex xs12 md6 class="font-weight-bold">Case Number</v-flex>
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
              </v-card>
            </v-tab-item>
            <!--documents  -->
            <v-tab ripple>Case Documents</v-tab>
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
            <span class="title font-weight-light">Evaluate</span>
          </v-toolbar>
          <v-card flat>
            <v-card-text>
              <v-text-field
                outline
                label="1. Nature of Violation"
                name="name"
                textarea
                multi-line
                counter
              ></v-text-field>
              <v-text-field
                outline
                label="2. Action / Status"
                name="name"
                textarea
                multi-line
                counter
              ></v-text-field>
              <v-text-field
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
              ></v-text-field>
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
                  style="background-image: linear-gradient(45deg, #0288d1, #26c6da)"
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
      itemsDirectives: ["Service Only", "Padlocking", "Seizure", "Sealing"],
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

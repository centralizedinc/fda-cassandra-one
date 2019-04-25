<template>
  <v-card>
    <v-card-title class="title">Sample Case Name</v-card-title>
    <span class="subheading ml-3">Case Number</span>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 md7 pa-1 d-flex>
          <v-card flat>
            <!-- <v-toolbar dark color="primary">
              <span class="font-weight-light">Case Information</span>
            </v-toolbar>-->
            <v-card-text>
              <v-tabs
                class="elevation-1"
                v-model="tabs"
                color="primary"
                dark
                height="60px"
                slider-color="info"
                fixed-tabs
              >
                <!-- recent activity -->
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
                <!--case details  -->
                <v-tab ripple>Recent Activity</v-tab>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>oioioioioio</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md5 mt-3 pa-1 d-flex>
          <v-card>
            <v-toolbar dark color="primary">
              <span class="font-weight-bold">EVALUATE & REVIEW</span>
            </v-toolbar>
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
              <v-select
                label="6. Directive to REU"
                :items="itemsDirectives"
                v-model="value"
                autocomplete
              ></v-select>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary">Submit & Finalize</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tabs: null,
      itemsDirectives: ["Service Only", "Padlocking", "Seizure", "Sealing"]
    };
  }
};
</script>

<style>
</style>

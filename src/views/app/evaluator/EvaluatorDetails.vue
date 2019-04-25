<template>
  <v-card>
    <v-card-title class="title">Sample Case Name</v-card-title>
    <span class="subheading ml-3">Case Number</span>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 md3 pa-1>
          <v-card>
            <v-toolbar dark color="primary">
              <span class="font-weight-light">Details</span>
              <!-- <v-spacer></v-spacer>
              <v-btn small color="info">Edit</v-btn>-->
            </v-toolbar>
            <v-card-text>
              <v-flex xs12 md6 class="font-weight-bold">Case Number</v-flex>
              <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Date Docketed</v-flex>
              <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Complainant</v-flex>
              <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Respondent</v-flex>
              <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Product/s Involved (if any)</v-flex>
              <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Date Received</v-flex>
              <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
              <br>
              <v-flex xs12 md6 class="font-weight-bold">Case Number</v-flex>
              <v-flex xs12 md12>cmp-apm-2013-130</v-flex>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outline color="error">Close Case</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex pa-1 d-flex>
          <v-card>
            <v-tabs v-model="value" color="primary" dark slider-color="info" align-with-title>
              <v-tab ripple>Recent Activity</v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>oioioioioioio</v-card-text>
                </v-card>
              </v-tab-item>

              <v-tab ripple>Case Information</v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <!-- <v-container grid-list-xs text-xs-justified>
                    <v-layout row wrap>-->
                    <v-flex xs6 md4>
                      <v-text-field
                        readonly
                        name="name"
                        label="Case Number"
                        value="cmp-apm-2013-13"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 md4>
                      <v-text-field
                        readonly
                        name="name"
                        label="Ref/DTN #"
                        value="Lorem ipsum dolor"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 md4>
                      <v-text-field
                        readonly
                        name="name"
                        label="Date Received"
                        value="Lorem ipsum dolor"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 md4>
                      <v-text-field
                        readonly
                        name="name"
                        label="Date Docketed"
                        value="Lorem ipsum dolor"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 md4>
                      <v-text-field
                        readonly
                        name="name"
                        label="Complainant"
                        value="Lorem ipsum dolor"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 md4>
                      <v-text-field
                        readonly
                        name="name"
                        label="Complainant Address"
                        value="Lorem ipsum dolor"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 md4>
                      <v-text-field
                        readonly
                        name="name"
                        label="Respondent"
                        value="Lorem ipsum dolor"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 md4>
                      <v-text-field
                        readonly
                        name="name"
                        label="Respondent Address"
                        value="Lorem ipsum dolor"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 md4>
                      <v-text-field
                        readonly
                        name="name"
                        label="Cause of Complaint"
                        value="Lorem ipsum dolor"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 md4>
                      <v-text-field
                        readonly
                        name="name"
                        label="Product involved (if any)"
                        value="Lorem ipsum dolor"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 md4>
                      <v-text-field
                        readonly
                        name="name"
                        label="Product involved (if any)"
                        value="Lorem ipsum dolor"
                      ></v-text-field>
                    </v-flex>
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <v-tab ripple>Evaluate</v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>oioioioioioio</v-card-text>
                </v-card>
              </v-tab-item>

              <v-tab ripple>Review</v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>oioioioioioio</v-card-text>
                </v-card>
              </v-tab-item>

              <v-tab ripple>Finalize</v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>oioioioioioio</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
            <v-card-text></v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn outline color="secondary">Cancel</v-btn>
      <v-btn color="primary">Finalize</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null
    };
  }
};
</script>

<style>
</style>

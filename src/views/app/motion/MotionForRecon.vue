<template>
  <v-card>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 md4 pa-2 d-flex>
          <v-card>
            <v-toolbar dark color="primary">
              <span class="font-weight-light">Motion for Reconsideration</span>
            </v-toolbar>
            <v-card-text>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date of M.R. Filed"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date decking of M.R."
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-text-field name="drafter" label="Name of drafter" id="drafter"></v-text-field>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date given to drafter"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date Submitted to Reviewer(1st Review)"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-select :items="items" v-model="value" label="Action Taken"></v-select>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date signed by 1st reviewer"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 pa-2 d-flex>
          <v-card>
            <v-toolbar dark color="primary">
              <span class="font-weight-light">Review of OIC,LSSC</span>
            </v-toolbar>
            <v-card-text>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date Submitted to OIC, LSSC"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-select :items="items" v-model="value" label="Action Taken"></v-select>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date Forwarded to ODG"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date Signed from ODG"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-select :items="items" v-model="value" label="Action Taken from ODG"></v-select>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date of Final copy of Resolution"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 pa-2 d-flex>
          <v-card>
            <v-toolbar dark color="primary">
              <span class="font-weight-light">Execution of REU</span>
            </v-toolbar>
            <v-card-text>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date forwarded to REU"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date receive and released by REU"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date Receive PER"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date Served / Executed REU"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-select :items="items" v-model="value" label="PER Status"></v-select>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date when MR was Granted"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date when MR was Denied"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-select :items="items" v-model="value" label="If Unserved"></v-select>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 pa-2 d-flex>
          <v-card>
            <v-toolbar dark color="primary">
              <span class="font-weight-light">Unserved</span>
            </v-toolbar>
            <v-card-text>
              <v-text-field name="name" label="If Moved Out" id="name"></v-text-field>
              <v-text-field name="owner" label="If no longer existing" id="owner"></v-text-field>
              <v-select :items="items" v-model="value" label="Status"></v-select>
              <v-text-field
                name="FeedBack"
                label="With Feedback (Date to REU to serve in new Address)"
                id="FeedBack"
              ></v-text-field>
              <v-text-field
                name="FeedBack"
                label="Without Feedback (Closed out order)"
                id="FeedBack"
              ></v-text-field>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 pa-2 d-flex>
          <v-card>
            <v-toolbar dark color="primary">
              <span class="font-weight-light">Served</span>
            </v-toolbar>
            <v-card-text>
              <v-select :items="items" v-model="value" label="Payment Status"></v-select>
              <v-text-field name="OR" label="OR Number" id="OR"></v-text-field>
              <v-text-field name="datePaid" label="Date Paid" id="datePaid"></v-text-field>
              <v-text-field name="processOwner" label="Process Owner" id="processOwner"></v-text-field>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md4 pa-2 d-flex>
          <v-card>
            <v-toolbar dark color="primary">
              <span class="font-weight-light">release</span>
            </v-toolbar>
            <v-card-text>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date Released"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-select :items="items" v-model="value" label="Appeal"></v-select>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date of Filed Notice of Appeal in FDA"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-dialog
                ref="dialogRef"
                persistent
                v-model="dialogValue"
                lazy
                full-width
                width="290px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label="Date of Complete Records Turn-Over to DOH"
                  v-model="dateValue"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="dateValue" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-text-field name="fileLoc" label="File Location" id="fileLoc"></v-text-field>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn outline color="secondary">Cancel</v-btn>
      <v-btn color="primary">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dialogValue: false,
      date: null,
      dateValue: null,
      value: null
    };
  }
};
</script>

<style>
</style>

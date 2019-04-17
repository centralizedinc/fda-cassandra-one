<template>
  <v-card>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 md4 pa-2 d-flex>
          <v-card>
            <v-toolbar dark color="primary">
              <span class="font-weight-light">Decking</span>
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
                  label="Date decking of answer"
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
              <v-text-field name="inspector" label="Name of drafter" id="inspector"></v-text-field>
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
                  label="Date assigned to drafter"
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
              <span class="font-weight-light">Reviewer Details</span>
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
                  label="Date Submitted to Reviewer"
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
              <v-textarea v-model="value" label="Action Taken"></v-textarea>
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
              <v-textarea v-model="value" label="Action Taken"></v-textarea>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 pa-2 d-flex>
          <v-card>
            <v-toolbar dark color="primary">
              <span class="font-weight-light">Type of Desicion</span>
            </v-toolbar>
            <v-card-text>
              <v-text-field name="inspector" label="Admin Fine Amount" id="inspector"></v-text-field>
              <v-text-field
                name="inspector"
                label="Length of Suspension/Cancellation"
                id="inspector"
              ></v-text-field>
              <!-- <v-select :items="items" v-model="value" label="Center Involved"></v-select> -->
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 pa-2 d-flex>
          <v-card>
            <v-toolbar dark color="primary">
              <span class="font-weight-light">Decision Details</span>
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
                  label="Date forwarded to ODG"
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
                  label="Date of Final Copy of desicion"
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
                  label="Date Received PER"
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
                  label="Date Served/Execute REU"
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
              <v-text-field name="inspector" label="PER Status" id="inspector"></v-text-field>
              <v-text-field name="inspector" label="If Unserved" id="inspector"></v-text-field>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 pa-2 d-flex>
          <v-card>
            <v-toolbar dark color="primary">
              <span class="font-weight-light">Unserved</span>
            </v-toolbar>
            <v-card-text>
              <v-text-field name="inspector" label="If Moved out" id="inspector"></v-text-field>
              <v-text-field name="inspector" label="If no longer existing" id="inspector"></v-text-field>
              <v-text-field name="inspector" label="Status" id="inspector"></v-text-field>
              <v-text-field name="inspector" label="Action Taken by Cluster/Center" id="inspector"></v-text-field>
              <v-text-field
                name="inspector"
                label="With Feedback from Center/Cluster"
                id="inspector"
              ></v-text-field>
              <v-text-field
                name="inspector"
                label="Without feedback (Closed out order)"
                id="inspector"
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
              <v-text-field name="inspector" label="Payment Status" id="inspector"></v-text-field>
              <v-text-field name="inspector" label="OR number" id="inspector"></v-text-field>
              <v-text-field name="inspector" label="Date Paid" id="inspector"></v-text-field>
              <v-text-field name="inspector" label="Process Owner" id="inspector"></v-text-field>
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
import SiteMap from "@/components/SiteMap";
import Uploader from "@/components/Uploader";
export default {
  components: { SiteMap, Uploader },
  data() {
    return {
      dialogValue: false,
      date: null,
      dateValue: null
    };
  }
};
</script>

<style>
</style>

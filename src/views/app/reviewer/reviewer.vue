<template>
  <v-card>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-toolbar dark color="primary">
              <span class="font-weight-light">Review of Supervising Lawyer</span>
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
                  label="Date forwarded to SL for review"
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
              <v-select :items="items" v-model="value" label="Action Taken by SL"></v-select>
              <v-text-field name="name" label="Comment" id="name"></v-text-field>
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
                  label="Date returned to Evaluator"
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
              <v-select :items="items" v-model="value" label="Action Taken by SL"></v-select>
              <v-text-field name="name" label="Comment" id="name"></v-text-field>
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
                  label="Date of Submission of Edited Draft to SL"
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
              <v-select :items="items" v-model="value" label="Action Taken by SL"></v-select>
              <v-text-field name="name" label="Comment" id="name"></v-text-field>
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
                  label="Date Submitted OIC, LSSC Review"
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

              <v-text-field name="name" label="Comment" id="name"></v-text-field>
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
                  label="Date Forwarded to LSSC releasing for DG/DDG Signature"
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
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outline color="secondary">Cancel</v-btn>
              <v-btn color="primary">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  })
};
</script>

<style>
</style>

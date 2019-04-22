<template>
  <v-card>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-toolbar dark color="primary">
              <span class="font-weight-light">Approval</span>
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
                  label="Date forwarded for signature of SL"
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
                  label="Date submitted OIC, LSSC for signature"
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
                  label="Date signed by OIC, LSSC"
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
              <v-card-actions>
                <v-btn color="secondary">Approve</v-btn>
                <v-btn outline color="secondary">Disapprove</v-btn>
              </v-card-actions>
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
export default {};
</script>

<style>
</style>

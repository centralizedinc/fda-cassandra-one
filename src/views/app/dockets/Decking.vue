<template>
    <v-card>
        <v-card-text>
            <v-layout row wrap >
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
                                    label="Date Decked"
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
                            <v-text-field
                                name="inspector"
                                v-model="decking.ISevaluator"
                                label="IS Evaluator"
                                id="evaluator"
                            ></v-text-field>
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
                                    label="Date Evaluated"
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
                            <v-text-field
                                name="inspector"
                                v-model="decking.actionTakenBySL"
                                label="Action taken by SL"
                                id="inspector"
                            ></v-text-field>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12 md4 pa-2 d-flex>
                    <v-card>
                        <v-toolbar dark color="primary">
                            <span class="font-weight-light">Docketing</span>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field
                                name="inspector"
                                v-model="docket.docketNumber"
                                label="Docket Number"
                                id="inspector"
                            ></v-text-field>
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
                                    label="Date Docketed"
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
                                    label="Date Issued"
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
                            <v-text-field
                                name="inspector"
                                v-model="docket.productInvolve"
                                label="Products Involve"
                                id="inspector"
                            ></v-text-field>
                            <v-textarea
                                v-model="docket.lawsViolated"
                                label="Laws Violated"
                            ></v-textarea>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12 md4 pa-2 d-flex>
                    <v-card>
                        <v-toolbar dark color="primary">
                            <span class="font-weight-light">LTO</span>
                        </v-toolbar>
                        <v-card-text>
                           <v-select
                                :items="items"
                                v-model="lto.lto"
                                label="LTO"
                            ></v-select>
                            <v-text-field
                                name="ltoNumber"
                                v-model="lto.number"
                                label="LTO number"
                                id="inspector"
                            ></v-text-field>
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
                                    label="Validity of LTO"
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
                            <v-select
                                :items="items"
                                v-model="lto.centerInvolve"
                                label="Center Involved"
                            ></v-select>
                        </v-card-text>
                    </v-card>
                </v-flex>

                 <v-flex xs12 md4 pa-2 d-flex>
                    <v-card>
                        <v-toolbar dark color="primary">
                            <span class="font-weight-light">Nature of violation</span>
                        </v-toolbar>
                        <v-card-text>
                            <v-select
                                :items="items"
                                v-model="violation.product"
                                label="Violative Products"
                            ></v-select>
                            <v-select
                                :items="items"
                                v-model="violation.qualifiedPersonnel"
                                label="Qualified Personnel"
                            ></v-select>
                            <v-text-field
                                name="others"
                                v-model="violation.others"
                                label="Others"
                                id="inspector"
                            ></v-text-field>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <!-- <v-flex xs12 md4 pa-2 d-flex>
                    <v-card>
                        <v-toolbar dark color="primary">
                            <span class="font-weight-light">Evaluation</span>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field
                                name="name"
                                label="Decking"
                                id="name"
                            ></v-text-field>
                            <v-text-field
                                name="name"
                                label="IS Evaluator"
                                id="name"
                            ></v-text-field>
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
                                    label="Date evaluated"
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
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Action Taken"
                            ></v-select>
                            <v-select
                                :items="items"
                                v-model="value"
                                label="If Legar Order"
                            ></v-select>
                            <v-textarea
                                v-model="value"
                                label="Reason/s for remanding"
                            ></v-textarea>
                        </v-card-text>
                    </v-card>
                </v-flex> -->

                <!-- <v-flex xs12 md4 pa-2 d-flex>
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
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Action Taken by SL"
                            ></v-select>
                            <v-text-field
                                name="name"
                                label="Comment"
                                id="name"
                            ></v-text-field>
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
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Action Taken by SL"
                            ></v-select>
                            <v-text-field
                                name="name"
                                label="Comment"
                                id="name"
                            ></v-text-field>
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
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Action Taken by SL"
                            ></v-select>
                            <v-text-field
                                name="name"
                                label="Comment"
                                id="name"
                            ></v-text-field>
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
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Action Taken"
                            ></v-select>

                            <v-text-field
                                name="name"
                                label="Comment"
                                id="name"
                            ></v-text-field>
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
                    </v-card>
                </v-flex> -->

<!-- <v-flex xs12 md4 pa-2 d-flex>
                    <v-card>
                        <v-toolbar dark color="primary">
                            <span class="font-weight-light">Forward to DDGIM</span>
                        </v-toolbar>
                        <v-card-text>
                             <v-dialogF
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
                                    label="Date Submitted to DG/DDG for signature"
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
                                    label="Date Returned to LSSC"
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
                                    label="Date order issued"
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
                </v-flex> -->


                <!-- Execution of REU -->
                <!-- <v-flex xs12 md4 pa-2 d-flex>
                    <v-card>
                        <v-toolbar dark color="primary">
                            <span class="font-weight-light">Execution of REU</span>
                        </v-toolbar>
                        <v-card-text>
                             <v-text-field
                                name="name"
                                label="Order Issued - Act"
                                id="name"
                            ></v-text-field>
                            <v-text-field
                                name="name"
                                label="Order Issued - Violated Law"
                                id="name"
                            ></v-text-field>
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Directive to REU"
                            ></v-select>
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
                                    label="Date released and received by REU"
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
                                    label="Date served or Executed"
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
                                    label="Date PER received"
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
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Execution Details - If Served"
                            ></v-select>
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Execution Details - If Not Served"
                            ></v-select>
                        </v-card-text>
                    </v-card>
                </v-flex> -->
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
    data(){
        return {
            dialogValue:false,
            date:null,
            dateValue:null,
            decking:{dateDecked: Date, ISevaluator:"", dateEvaluated: Date, dateFrwrdToSL: Date, actionTakenBySL: ""},
            docket:{docketNumber: 0, dateDocketed: Date, dateIssued: Date, productsInvolve: "", lawsViolated:""},
            lto:{lto: "",number: 0, validity: Date, centerInvolved: ""},
            violation: {product: "", qualifiedPersonnel: "", others: ""}

        }
    }

}
</script>

<style>
</style>

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
                                v-model="docket.IS_evaluator"
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
                                v-model="docket.action_taken_by_SL"
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
                                name="docket no"
                                v-model="docket.docket_number"
                                label="Docket Number"
                                id="docket no"
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
                                name="product involve"
                                v-model="docket.products_involve"
                                label="Products Involve"
                                id="product"
                            ></v-text-field>
                            <v-textarea
                                v-model="docket.laws_violated"
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
                                v-model="docket.lto"
                                label="LTO"
                            ></v-select>
                            <v-text-field
                                name="ltoNumber"
                                v-model="docket.lto_number"
                                label="LTO number"
                                id="ltoNo"
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
                                v-model="docket.center_involved"
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
                                v-model="docket.violation_product"
                                label="Violative Products"
                            ></v-select>
                            <v-select
                                :items="items"
                                v-model="docket.violation_qualified_personnel"
                                label="Qualified Personnel"
                            ></v-select>
                            <v-text-field
                                name="others"
                                v-model="docket.violation_others"
                                label="Others"
                                id="inspector"
                            ></v-text-field>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outline color="secondary">Cancel</v-btn>
          <v-btn color="primary">Submit</v-btn>
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
            docket:{
                date_decked: Date,
                IS_evaluator: "",
                date_evaluated: Date,
                date_forwarded_to_SL: Date,
                action_taken_by_SL: "",
                docket_number: 0,
                date_docketed: Date,
                date_issued: Date,
                products_involved: "",
                laws_violated: "",
                lto: "",
                lto_number: "",
                lto_validity: Date,
                center_involved: "",
                violation_product: "",
                violation_qualified_personnel: "",
                violation_others: ""
            }
            // decking:{dateDecked: Date, ISevaluator:"", dateEvaluated: Date, dateFrwrdToSL: Date, actionTakenBySL: ""},
            // docket:{docketNumber: 0, dateDocketed: Date, dateIssued: Date, productsInvolve: "", lawsViolated:""},
            // lto:{lto: "",number: 0, validity: Date, centerInvolved: ""},
            // violation: {product: "", qualifiedPersonnel: "", others: ""}

        }
    }

}
</script>

<style>
</style>

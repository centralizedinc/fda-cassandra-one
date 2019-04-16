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
                            <v-select
                                :items="items"
                                v-model="value"
                                label="IS Evaluator"
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
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Action taken by SL"
                            ></v-select>
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
                                label="Products Involve"
                                id="inspector"
                            ></v-text-field>
                            <v-textarea
                                v-model="value"
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
                            <v-text-field
                                name="inspector"
                                label="LTO"
                                id="inspector"
                            ></v-text-field>
                            <v-text-field
                                name="inspector"
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
                            <!-- <v-dialog
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
                                    label="ROV Date of Received"
                                    v-model="dateValue"
                                    append-icon="event"
                                    readonly
                                ></v-text-field>
                                <v-date-picker v-model="dateValue" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="dialogValue = false">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="$refs.dialogRef.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-dialog> -->
                            <v-select
                                :items="items"
                                v-model="value"
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
                            <v-text-field
                                name="name"
                                label="Violative Products"
                                id="name"
                            ></v-text-field>
                            <v-text-field
                                name="owner"
                                label="Qualified Personnel"
                                id="owner"
                            ></v-text-field>
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Others"
                            ></v-select>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12 md4 pa-2 d-flex>
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
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Reason for Remanding"
                            ></v-select>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <!-- <v-flex xs12 md4 d-flex>
                    <v-card>
                       <v-toolbar dark color="primary">
                            <span class="font-weight-light">Site Location</span>
                        </v-toolbar> 
                        <v-card-text>
                            <site-map></site-map>
                        </v-card-text>
                    </v-card>
                    
                </v-flex> -->
            </v-layout>
            <!-- <v-layout row wrap>
                <v-flex 12>
                    <v-card>
                        <v-toolbar dark color="primary">
                            <span class="font-weight-light">Documents</span>
                        </v-toolbar>
                        <v-card-text>
                            <uploader></uploader>
                        </v-card-text>  
                    </v-card>
                </v-flex>                                
            </v-layout> -->
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
// import SiteMap from '@/components/SiteMap'
// import Uploader from '@/components/Uploader'
export default {
    // components:{SiteMap, Uploader},
    data(){
        return {
            dialogValue:false,
            date:null,
            dateValue:null
        }
    }

}
</script>

<style>

</style>

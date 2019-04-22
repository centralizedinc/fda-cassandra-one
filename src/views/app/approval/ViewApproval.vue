<template>
    <v-card>
        <v-card-text>
            <v-layout row wrap >
                <v-flex xs12 md4 pa-2 d-flex>
                    <v-card>
                        <v-toolbar dark color="primary">
                            <span class="font-weight-light">Origin</span>
                        </v-toolbar>
                        <v-card-text>
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Cluster"
                            ></v-select>
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Region"
                            ></v-select>
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Area"
                            ></v-select>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12 md4 pa-2 d-flex>
                    <v-card>
                        <v-toolbar dark color="primary">
                            <span class="font-weight-light">Inspection Details</span>
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
                                    label="Date of Inspection"
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
                                label="Name of Inspector"
                                id="inspector"
                            ></v-text-field>
                            <v-textarea
                                v-model="value"
                                label="Purpose of Inspection"
                            ></v-textarea>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12 md4 pa-2 d-flex>
                    <v-card>
                        <v-toolbar dark color="primary">
                            <span class="font-weight-light">Report of Violation</span>
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
                                    label="Date of ROV"
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
                            </v-dialog>
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
                            <span class="font-weight-light">Establishment Details</span>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field
                                name="name"
                                label="Name of Establishment"
                                id="name"
                            ></v-text-field>
                            <v-text-field
                                name="owner"
                                label="Owner of Establishment"
                                id="owner"
                            ></v-text-field>
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Classification of Establishment"
                            ></v-select>
                            <v-text-field
                                name="pharma"
                                label="Pharmacist/Radiologist"
                                id="pharma"
                            ></v-text-field>
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Classification of Products"
                            ></v-select>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12 md4 pa-2 d-flex>
                    <v-card>
                        <v-toolbar dark color="primary">
                            <span class="font-weight-light">Establishment Address</span>
                        </v-toolbar>
                        <v-card-text>
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Region"
                            ></v-select>
                            <v-select
                                :items="items"
                                v-model="value"
                                label="Province"
                            ></v-select>
                            <v-select
                                :items="items"
                                v-model="value"
                                label="City/Municipality"
                            ></v-select>
                            <v-textarea label="Addess"></v-textarea>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12 md4 d-flex>
                    <v-card>
                       <v-toolbar dark color="primary">
                            <span class="font-weight-light">Site Location</span>
                        </v-toolbar> 
                        <v-card-text>
                            <site-map></site-map>
                        </v-card-text>
                    </v-card>
                    
                </v-flex>
            </v-layout>
            <v-layout row wrap>
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
import SiteMap from '@/components/SiteMap'
import Uploader from '@/components/Uploader'
export default {
    components:{SiteMap, Uploader},
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

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
                            <v-text-field
                                name="DTN"
                                v-model=" newDocket.dtn"
                                label="Docket Tracking Number"
                                id="inspector"
                            ></v-text-field>
                            <v-select
                                :items="items"
                                v-model="newDocket.origin.cluster"
                                label="Cluster"
                            ></v-select>
                            <v-select
                                :items="items"
                                v-model="newDocket.origin.region"
                                label="Region"
                            ></v-select>
                            <v-select
                                :items="items"
                                v-model="newDocket.origin.area"
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
                                v-model="newDocket.inspectionDetails.inspector"
                                label="Name of Inspector"
                                id="inspector"
                            ></v-text-field>
                            <v-textarea
                                v-model="newDocket.inspectionDetails.purpose"
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
                                v-model="newDocket.rov.centerInvolved"
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
                                v-model="newDocket.establishmentDetails.compliant"
                                label="Name of Compliant"
                                id="name"
                            ></v-text-field>
                            <v-text-field
                                name="name"
                                v-model="newDocket.establishmentDetails.nameOfEstablishment"
                                label="Name of Establishment"
                                id="name"
                            ></v-text-field>
                            <v-text-field
                                name="owner"
                                v-model="newDocket.establishmentDetails.owner"
                                label="Owner of Establishment"
                                id="owner"
                            ></v-text-field>
                            <v-select
                                :items="items"
                                v-model="newDocket.establishmentDetails.classificationOfStablishment"
                                label="Classification of Establishment"
                            ></v-select>
                            <v-text-field
                                name="pharma"
                                v-model="newDocket.establishmentDetails.pharmacistRadiologist"
                                label="Pharmacist/Radiologist"
                                id="pharma"
                            ></v-text-field>
                            <v-select
                                :items="items"
                                v-model="newDocket.establishmentDetails.classificationOfProduct"
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
                                v-model="newDocket.establishmentAddress.region"
                                label="Region"
                            ></v-select>
                            <v-select
                                :items="items"
                                v-model="newDocket.establishmentAddress.province"
                                label="Province"
                            ></v-select>
                            <v-select
                                :items="items"
                                v-model="newDocket.establishmentAddress.cityMunicipality"
                                label="City/Municipality"
                            ></v-select>
                            <v-textarea v-model="newDocket.establishmentAddress.address" label="Address"></v-textarea>
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
                            <span class="font-weight-light">Digitalization of Documents</span>
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
            <v-btn @click="next()" color="primary">Next</v-btn>
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
            dateValue:null,
            newDocket:{
                dtn : 0,
                origin: {cluster:"", region:"", area: ""},
                inspectionDetails: {dateOfInspection: Date, inspector: "", purpose: ""},
                rov:{dateOfRov: Date, rovDateReceived: Date, centerInvolved: ""},
                establishmentDetails:{compliant:"", nameOfEstablishment:"", owner:"", classificationOfStablishment:"", pharmacistRadiologist:"", classificationOfProduct: ""},
                establishmentAddress:{region:"",province:"",cityMunicipality:"",address:""},
                documents:""
            }
        }
    },
    methods:{
        next(){
            this.$router.push('/app/dockets/decking')
        }
    }

}
</script>

<style>

</style>

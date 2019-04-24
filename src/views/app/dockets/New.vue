<template>
    <v-layout row wrap align-center justify-center>
        <v-flex xs1>
            <v-btn flat icon color="primary">
                <v-icon large>chevron_left</v-icon>
            </v-btn>
        </v-flex>
        <v-flex xs10>
            <v-card>
                <v-toolbar dark color="primary">
                    General Information
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
        <v-flex xs1>
            <v-btn flat icon color="primary">
                <v-icon large>chevron_right</v-icon>
            </v-btn>
        </v-flex>       
    </v-layout>
</template>

<script>
export default {
    data(){
        return {
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
    }
}
</script>

<style>

</style>

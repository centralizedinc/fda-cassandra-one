<template>
    <v-layout row wrap align-center justify-center>
        <v-flex xs12 pa-1>
            <v-card>
                <v-toolbar dark color="primary">
                    <span class="headline font-weight-light">Case Docket</span>
                </v-toolbar>
                <v-card-text class="pa-5">
                    <span class="title font-weight-light primary--text">Origin</span>
                    <v-divider class="mb-3"></v-divider>
                    <!-- <v-text-field
                        name="DTN"
                        v-model=" docket.dtn"
                        label="Docket Tracking Number"
                        id="inspector"
                    ></v-text-field> -->
                    <v-layout row wrap>
                        <v-flex xs12 md4 pa-1>
                            <v-select outline
                                :items="references.clusters"
                                v-model="docket.cluster"
                                label="Cluster"
                                item-text="description"
                                item-value="code"
                            ></v-select>
                        </v-flex>
                        <v-flex xs12 md4 pa-1>
                            <v-select outline
                                :items="references.regions"
                                v-model="docket.region"
                                label="Region"
                                item-text="description"
                                item-value="code"
                            ></v-select>
                        </v-flex>
                        <v-flex xs12 md4 pa-1>
                            <v-select outline
                                :items="references.areas"
                                v-model="docket.area"
                                label="Area"
                                item-text="description"
                                item-value="code"
                            ></v-select>
                        </v-flex>
                    </v-layout>
                    
                    <span class="title font-weight-light primary--text">Inspection Details</span>
                    <v-divider class="mb-3"></v-divider>
                    
                    <v-layout row wrap>
                        <v-flex xs12 md6 pa-1>
                            <v-menu
                                v-model="date_dialogs[0]"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px">
                                <template v-slot:activator="{ on }">
                                <v-text-field outline
                                    v-model="docket.inspection_date"
                                    label="Date of Inspection"
                                    append-icon="event"
                                    readonly
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker v-model="docket.inspection_date" @input="date_dialogs[0] = false"></v-date-picker>
                            </v-menu>                            
                        </v-flex>
                        <v-flex xs12 md6 pa-1>
                            <v-text-field outline
                                name="inspector"
                                v-model="docket.inspector"
                                label="Name of Inspector"
                                id="inspector"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 pa-1>
                            <v-textarea outline rows="2"
                                v-model="docket.inspection_purpose"
                                label="Purpose of Inspection"
                            ></v-textarea>
                        </v-flex>
                    </v-layout>

                    <span class="title font-weight-light primary--text">Report of Violation</span>
                    <v-divider class="mb-3"></v-divider>

                    <v-layout row wrap>
                        <v-flex xs12>
                             <v-select outline
                                :items="references.centers"
                                v-model="docket.rov_center_involved"
                                label="Center Involved"
                                item-text="description"
                                item-value="code"
                            ></v-select>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field outline
                                    name="inspector"
                                    v-model="docket.product_involved"
                                    label="Products Involve"
                                    id="inspector"
                                ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-textarea outline rows="2"
                                v-model="docket.laws_violated"
                                label="Laws Violated"
                            ></v-textarea>
                        </v-flex>
                    </v-layout>
                    <span class="title font-weight-light primary--text">Compliant Details</span>
                    <v-divider class="mb-3"></v-divider>

                    <v-layout row wrap>
                         <v-flex xs12>
                             <v-text-field outline
                                 name="complainant_name"
                                 label="Complainant"
                                 id="complainant_name"
                                 v-model="docket.complainant_name"
                             ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                             <v-textarea outline rows="2"
                                label="Cause of Complaint"
                                v-model="docket.complaint_cause"
                            ></v-textarea>
                        </v-flex>
                    </v-layout>

                    <span class="title font-weight-light primary--text">Respondent Details</span>
                    <v-divider class="mb-3"></v-divider>

                    <v-layout row wrap>
                         <v-flex xs12 md6 pa-1>
                             <v-text-field outline
                                 name="license_no"
                                 label="License Number"
                                 id="license_no"
                                 v-model="docket.license_no"
                             ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6 pa-1>
                            <v-menu
                                v-model="date_dialogs[1]"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px">
                                <template v-slot:activator="{ on }">
                                <v-text-field outline
                                    v-model="docket.license_validity"
                                    label="License Validity"
                                    append-icon="event"
                                    readonly
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker v-model="docket.license_validity" @input="date_dialogs[1] = false"></v-date-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 pa-1>
                            <v-text-field outline
                                name="name"
                                v-model="docket.establishment_name"
                                label="Name of Establishment"
                                id="name"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6 pa-1>
                            <v-text-field outline
                                name="name"
                                v-model="docket.establishment_owner"
                                label="Name of Owner"
                                id="name"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6 pa-1>
                            <v-text-field outline
                                name="name"
                                v-model="docket.pharmacist"
                                label="Pharmacist/Radiologist"
                                id="name"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6 pa-1>
                            <v-select outline
                                :items="references.est_class"
                                v-model="docket.establishment_classification"
                                label="Classification of Establishment"
                                item-text="description"
                                item-value="code"
                            ></v-select>
                        </v-flex>
                        <v-flex xs12 md6 pa-1>
                            <v-select outline
                                :items="items"
                                v-model="docket.product_classification"
                                label="Classification of Products"
                            ></v-select>
                        </v-flex>
                        <v-flex xs12 md6 pa-1>
                            <v-select outline
                                :items="items"
                                v-model="docket.establishment_region"
                                label="Region"
                            ></v-select>
                            <v-select outline
                                :items="items"
                                v-model="docket.establishment_province"
                                label="Province"
                            ></v-select>
                            <v-select outline
                                :items="items"
                                v-model="docket.establishment_city"
                                label="City/Municipality"
                            ></v-select>
                            <v-textarea outline rows="2"
                                v-model="docket.establishment_address" 
                                label="Address">
                            </v-textarea>
                        </v-flex>
                        <v-flex xs12 md6 pa-1>
                            <site-map></site-map>
                        </v-flex>
                    </v-layout>

                    <span class="title font-weight-light primary--text">Supporting Documents</span>
                    <v-divider class="mb-3"></v-divider>
                    <uploader></uploader>
                    
                </v-card-text>
                <v-divider class="mb-3"></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn outline color="secondary">Cancel</v-btn>
                    <v-btn color="primary" @click="submit()">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex> 
        <fab-buttons 
            :hide-default="true" 
            :buttons="[{label:'Submit', action:'submit', icon:'send'},
                        {label:'Cancel', action:'back', icon:'undo'}]"
            @submit="submit"
            @back="$router.push('/app')">
        </fab-buttons>      
    </v-layout>
</template>

<script>
import SiteMap from '@/components/SiteMap'
import Uploader from '@/components/Uploader'
import FabButtons from '@/components/FabButton'

export default {
    components:{SiteMap, Uploader, FabButtons},
    data(){
        return {
            date_dialogs:[],
            docket:{},
            references:{}
            
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            this.$store.dispatch('GET_REFERENCE')
            .then(result =>{
                console.log(JSON.stringify(result))
                this.references = result
            })  
            .catch(error=>{
                console.error(error)
            })
        },
        submit(){
            this.$store.dispatch('NEW_DOCKET',this.docket)
            .then(results=>{                
                console.log('RESULTS: ' +JSON.stringify(results))
            })
            .catch(error=>{
                console.error(error)
            })
        }
    }
}
</script>

<style>

</style>

<template>
  <v-layout row wrap justify-center align-center>
      <v-flex xs12 pa-5>
    <v-card>
        <v-text-field class="pa-3 pb-2"
        box
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
      <v-card-title class="mt-3 title font-weight-light">
        Cases List
        <v-spacer></v-spacer>
      </v-card-title>
      <v-data-table :headers="headers" :items="items" :search="search">
        <template slot="items" slot-scope="props">
        <tr @click="preview(props.item)" style="cursor:pointer"> 
          <td>{{ props.item.caseNo }}</td>
          <td>{{ props.item.caseTitle }}</td>
          <td>{{ props.item.dateDocketed }}</td>
          <td>{{ props.item.caseStatus }}</td>
        </tr>
        </template>
        <v-alert
          slot="no-results"
          :value="true"
          color="error"
          icon="warning"
        >Your search for "{{ search }}" found no results.</v-alert>
      </v-data-table>
    </v-card>
    <v-dialog
        v-model="caseDialog"
        :overlay="false"
        max-width="500px"
        transition="dialog-transition"
    >
        <v-card>
            Case Details Overview
        </v-card>
    </v-dialog>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      caseDialog: false,
      search: "",
      headers: [
         { text: "Case Number", align: "left", sortable: true, value: "caseNo"},
         { text: "Case Title", align: "left", value: "caseTitle" },
         { text: "Date Docketed", align: "left", value: "dateDocketed" },
         { text: "Case Status", align: "left", value: "caseStatus" }

      ],
      items: [
          {
              caseNo: 'cmp-2018-0003',
              caseTitle: 'DMI MEDICAL SUPPLY CO., INC, Petitioner v. Shoppee',
              dateDocketed: '2018-12-07',
              caseStatus: 'For signature'
          },
          {
              caseNo: 'cmp-2018-0004',
              caseTitle: 'TAYLOR LOUISE LEZADA, Petitioner v. Belo Medical Clinic',
              dateDocketed: '2018-11-19',
              caseStatus: 'Dismissed'

          },
          {
              caseNo: 'cmp-2018-0005',
              caseTitle: 'RONALDO PENA, Petitioner v. Robert Todd ',
              dateDocketed: '2018-1-19',
              caseStatus: 'Dismissed'
          },

      ]
    };
  },
  methods: {
      preview() {
          this.caseDialog = true
      }
  }
};
</script>

<style>
.data-row:hover {
  cursor: pointer;
}
</style>

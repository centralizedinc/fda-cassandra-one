<template>
  <v-layout row wrap justify-center align-center>
    <v-flex xs12 pa-2>
      <v-card class="elevation-2">
        <v-toolbar dark color="primary">
          <span class="headline font-weight-light">Cases List for Approval</span>
        </v-toolbar>
          <v-card-title>
            <v-spacer></v-spacer>
          <v-text-field
            outline
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-model="search"
          ></v-text-field>
          </v-card-title>
        <v-data-table :headers="headers" :items="items" :search="search" class="pa-1">
          
          <template v-slot:items="props">
            <tr @click="view(props.item)" style="cursor:pointer">
              <td>{{ props.item.caseNo }}</td>
              <td>{{ props.item.caseTitle }}</td>
              <td>{{ props.item.dateDocketed }}</td>
              <td>{{ props.item.product }}</td>
              <td>{{ props.item.cause }}</td>
              <td>{{ props.item.status }}</td>
              <td>{{props.item.type}}</td>
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
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Case Number", value: "caseNo" },
        { text: "Case Title", value: "caseTitle" },
        { text: "Date Docketed", value: "dateDocketed" },
        { text: "Product Involved", value: "product" },
        { text: "Cause of Complaint", value: "cause" },
        { text: "Status", value: "status" },
        { text: "Type", value: "type" }
      ],
      items: [
        {
          caseNo: "cmp-apm-2014-004",
          caseTitle: "Colgate phils., inc. Petitioner v. Johnson & Johnson",
          dateDocketed: "2018-07-12",
          product: "Listerine",
          cause: "Adulterated; with petroleum based taste",
          status: "Referred CCRR for issuance of warning 2/13/14 (draft)",
          type: "Docket"
        },
        {
          caseNo: "cmp-apm-2013-130",
          caseTitle:
            "Ritemed Phils., Inc. Petitioner v. Pascual Consumer Healthcare Corp.",
          dateDocketed: "2018-07-12",
          product: "Ascof Lagundi ",
          cause: 'Misleading claim "tunaw ang plema',
          status: "Summons issued",
          type: "Case"

        },
        {
          caseNo: "cmp-dr-2013-131",
          caseTitle:
            "International Pharmaceuticals, Inc. Petitioner v. Greenstone Pharmaceuticals, H.K.  ",
          dateDocketed: "2018-07-12",
          product: "Katinko Ointment",
          cause: "Non-compliance w/ Generic Labeling Requirement",
          status: "Memo issued",
          type: "MR"

        },
        {
          caseNo: "cmp-fd-13-117",
          caseTitle:
            "Nestle Philippines, Inc. Petitioner v. Tridharma Marketing, Inc.  ",
          dateDocketed: "2018-07-12",
          product: "Kopiko L.A. Coffee",
          cause: "Mislabeled",
          status: "Memo to CFRR for the recall",
          type: "MR"

        }
      ]
    };
  },
  methods: {
    view(docket) {
      this.$router.push("/app/cases/details");
    },
    create() {
      this.$router.push("/app/dockets/new");
    }
  }
};
</script>

<style>
</style>

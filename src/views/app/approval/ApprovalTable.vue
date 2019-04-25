<template>
  <v-layout row wrap justify-center align-center>
    <v-flex xs12 pa-2>
      <v-card>
        <v-text-field
          class="pa-3 pb-2"
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
          <template v-slot:items="props">
            <tr @click="view(props.item)" style="cursor:pointer">
              <td>{{ props.item.caseNo }}</td>
              <td>{{ props.item.caseTitle }}</td>
              <td>{{ props.item.dateDocketed }}</td>
              <td>{{ props.item.product }}</td>
              <td>{{ props.item.cause }}</td>
              <td>{{ props.item.status }}</td>
              <td>
                <v-tooltip top>
                  <v-progress-linear
                    slot="activator"
                    :value="compute_age(props.item.age)"
                    :color="compute_age(props.item.age)>=100?'error':compute_age(props.item.age)>50?'warning':'success'"
                  ></v-progress-linear>
                  {{props.item.age}} days
                </v-tooltip>
              </td>
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
        { text: "Case Status", value: "status" }
      ],
      items: [
        {
          caseNo: "cmp-apm-2014-004",
          caseTitle: "Colgate phils., inc. Petitioner v. Johnson & Johnson",
          dateDocketed: "2018-07-12",
          product: "Listerine",
          cause: "adulterated; with petroleum based taste",
          status: "referred ccrr for issuance of warning 2/13/14 (draft)"
        },
        {
          caseNo: "cmp-apm-2013-130",
          caseTitle:
            "Ritemed phils., inc. Petitioner v. pascual consumer healthcare corp.",
          dateDocketed: "2018-07-12",
          product: "ascof lagundi ",
          cause: 'misleading claim "tunaw ang plema',
          status: "SUMMONS issued"
        },
        {
          caseNo: "cmp-dr-2013-131",
          caseTitle:
            "international pharmaceuticals, inc. Petitioner v. greenstone pharmaceuticals, h.k.  ",
          dateDocketed: "2018-07-12",
          product: "katinko ointment",
          cause: "non-compliance w/ generic labeling requirement",
          status: "MEMO issued"
        },
        {
          caseNo: "cmp-fd-13-117",
          caseTitle:
            "nestle philippines, inc. Petitioner v. tridharma marketing, inc.  ",
          dateDocketed: "2018-07-12",
          product: "kopiko l.a. coffee",
          cause: "mislabeled",
          status: "memo to cfrr for the recall"
        }
      ]
    };
  },
  methods: {
    compute_age(age) {
      return (age / 150) * 100;
    },
    view(docket) {
      this.$router.push("/app/approval");
    },
    create() {
      this.$router.push("/app/approval");
    }
  }
};
</script>

<style>
</style>

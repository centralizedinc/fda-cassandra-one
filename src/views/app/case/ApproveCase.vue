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
        <v-data-table :headers="headers" :items="items" :search="search" :loading="isLoading" class="pa-1">
          <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
          <template v-slot:items="props">
            <tr @click="preview(props.item)" style="cursor:pointer">
              <td>{{ '2019-00'+props.item.dtn }}</td>
              <td>{{ formatDate(props.item.date_docketed) }}</td>
              <td>{{ props.item.establishment_name }}</td>
              <td>{{ props.item.product_involved }}</td>
              <td>{{ props.item.complainant_name }}</td>
              <td>{{ props.item.complaint_cause }}</td>
              <td>{{ getCaseStatus(props.item.current_status) }}</td>
              <td>{{ getCaseType(props.item.stage)}}</td>
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
    <v-navigation-drawer right app temporary v-model="previewNav">
      <v-card>
        <v-toolbar dark color="primary">
          <span class="title font-weight-light">Approval Preview</span>
          <v-spacer></v-spacer>
          <v-btn flat icon @click="view">
            <v-icon>launch</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            class="right-input input"
            label="Docket Number"
            readonly
            :value="selected_item.dtn"
          ></v-text-field>
          <v-text-field
            class="right-input input"
            label="Date Docketed"
            readonly
            :value="formatDate(selected_item.date_docketed)"
          ></v-text-field>
          <v-text-field
            class="right-input input"
            label="Establishment Name"
            readonly
            :value="selected_item.establishment_name"
          ></v-text-field>
          <v-text-field
            class="right-input input"
            label="Establishment Owner"
            readonly
            :value="selected_item.establishment_owner"
          ></v-text-field>
          <v-text-field
            class="right-input input"
            label="Product Involved"
            readonly
            :value="selected_item.product_involved"
          ></v-text-field>
          <v-text-field
            class="right-input input"
            label="Complainant"
            readonly
            :value="selected_item.complainant_name"
          ></v-text-field>
          <v-textarea
            rows="2"
            label="Cause of Complaint"
            readonly
            :value="selected_item.complaint_cause"
          ></v-textarea>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <!-- <v-spacer></v-spacer> -->
          <v-layout row wrap>
            <v-flex xs12 mb-2>
              <v-btn color="primary" block @click="view">View Details</v-btn>
            </v-flex>
            <v-flex xs12>
              <v-btn color="success" block @click="show_assign=true">Assign to</v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
    <assign-dialog :show="show_assign" @close="show_assign=false"></assign-dialog>
  </v-layout>
</template>

<script>
import AssignDialog from "@/components/AssignDialog";

export default {
  components: {
    AssignDialog
  },
  data() {
    return {
      isLoading: false,
      previewNav: false,
      selected_item: {},
      search: "",
      // headers: [
      //   { text: "Docket Number", value: "docketNo" },
      //   { text: "Esablishment", value: "caseTitle" },
      //   { text: "Date Docketed", value: "dateDocketed" },
      //   { text: "Product Involved", value: "product" },
      //   { text: "Complainant", value: "complainant" },
      //   { text: "Cause of Complaint", value: "cause" },
      //   { text: "Status", value: "status" },
      //   { text: "Type", value: "type" }
      // ],
      headers: [
        {
          text: "Docket Number",
          align: "left",
          sortable: "true",
          value: "dtn"
        },
        {
          text: "Date Docketed",
          align: "left",
          sortable: "true",
          value: "date_docketed"
        },
        {
          text: "Esablishment",
          align: "left",
          sortable: "true",
          value: "establishment_name"
        },
        {
          text: "Product Involved",
          align: "left",
          sortable: "true",
          value: "product_involved"
        },
        {
          text: "Complainant",
          align: "left",
          sortable: "true",
          value: "complainant_name"
        },
        {
          text: "Cause of Complaint",
          align: "left",
          sortable: "true",
          value: "complaint_cause"
        },
        {
          text: "Status",
          align: "left",
          value: "current_status"
        },
        {
          text: "Type",
          align: "left",
          value: "stage"
        }
      ],
      items: [],
      show_assign: false
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.isLoading = true;
      this.$store
        .dispatch("GET_DOCKETS_APPROVAL", true)
        .then(results => {
          this.isLoading = false;
          this.items = results;
        })
        .catch(error => {
          this.isLoading = false;
        });
    },
    view() {
      this.$store.commit("SET_ACTIVE_DOCKET", this.selected_item);
      this.$router.push("/app/approval/details");
    },
    preview(docket) {
      this.selected_item = docket;
      this.previewNav = true;
    }
  }
};
</script>

<style>
</style>

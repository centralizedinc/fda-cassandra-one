<template>
  <v-layout row wrap>
    <v-flex xs12 pa-1>
      <v-card>
        <v-toolbar dark color="primary">
          <span class="title font-weight-thin">Docket List</span>
        </v-toolbar>
        <v-card-title>
          <v-layout row wrap>
            <v-flex xs4 pa-1>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-card-text>
          <v-data-table :headers="headers" :items="dockets" :search="search">
            <template v-slot:items="props">
              <tr @click="view(props.item)">
                <td>{{ props.item.dtn }}</td>
                <td>{{ props.item.cluster }}</td>
                <td>{{ props.item.region }}</td>
                <td>{{ props.item.area }}</td>
                <td>{{ props.item.center }}</td>
                <td>{{ props.item.establishment_name }}</td>
                <td>{{ props.item.status }}</td>
                <!-- <td>
                                <v-tooltip top>
                                    <v-progress-linear slot="activator" :value="compute_age(props.item.age)" :color="compute_age(props.item.age)>=100?'error':compute_age(props.item.age)>50?'warning':'success'"></v-progress-linear>
                                    {{props.item.age}} days
                                </v-tooltip>
                            
                </td>-->
              </tr>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      serach: "",
      dockets: [],
      headers: [
        { text: "Docket Number", value: "dtn" },
        { text: "Cluster", value: "cluster" },
        { text: "Region", value: "region" },
        { text: "Area", value: "area" },
        { text: "Center", value: "center" },
        { text: "Establishment", value: "establishment" },
        { text: "Status", value: "status" },
        { text: "Age", value: "age" }
      ]
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$store
        .dispatch("GET_DOCKETS")
        .then(results => {
          this.dockets = results;
          console.log(JSON.stringify(results));
        })
        .catch(error => {
          // this.$notifyError(error)
          console.error(error);
        });
    }
  }
};
</script>

<style>
</style>

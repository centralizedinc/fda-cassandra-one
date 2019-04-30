<template>
    <v-layout row wrap justify-center align-center>
    <v-flex xs12 pa-2>
      <v-card v-if="show_details">
        <docket :docket_pick="docket_pick" ></docket>
      </v-card>
      <v-card v-if="!show_details">
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
        <v-data-table :headers="headers" :items="dockets" :search="search">
          <template v-slot:items="props">
            <tr @click="view(props.item)" style="cursor:pointer">
              <td>{{ props.item.dtn }}</td>
              <td>{{ props.item.cluster }}</td>
              <td>{{ props.item.region }}</td>
              <td>{{ props.item.area }}</td>
              <td>{{ props.item.center }}</td>
              <td>{{ props.item.establishment_name }}</td>
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
export default {};
</script>

<style>
</style>

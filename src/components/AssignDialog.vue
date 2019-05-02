<template>
    <v-dialog
        v-model="show"
        max-width="300px"
        transition="dialog-transition">
        <v-card>
            <v-card-title class="primary headline">
                Assign to
            </v-card-title>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-autocomplete
                        v-model="assigned_user"
                        :disabled="isUpdating"
                        :items="users"
                        outline
                        color="blue-grey lighten-2"
                        label="Assign to">
                    </v-autocomplete>
                </v-flex>
            </v-layout>
            <v-card-actions>
                <v-btn block color="success" @click="assign">Assign</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    init(refresh) {},
    assign() {}
  }
};
</script>

<style>
</style>

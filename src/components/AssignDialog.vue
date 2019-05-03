<template>
    <v-dialog
        v-model="show" persistent
        max-width="300px"
        transition="dialog-transition">
        <v-card>
            <v-toolbar color="primary" class="headline white--text">
                Assign to
                <v-spacer></v-spacer>
                <v-btn icon dark @click="$emit('close')">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <v-autocomplete
                    v-model="assigned_user"
                    :disabled="isUpdating"
                    :items="users"
                    outline
                    color="blue-grey lighten-2"
                    label="Assign to">
                    <template v-slot:selection="data">
                        <v-chip :selected="data.selected" class="chip--select-multi">
                            <v-avatar>
                                <v-avatar size="20" color="teal">
                                    <span class="body-1 white--text">
                                        {{data.item.name.first.substring(0,1) + data.item.name.last.substring(0,1)}}
                                    </span>
                                </v-avatar>
                            </v-avatar>
                            {{data.item.name.first + ' ' + data.item.name.last}}
                        </v-chip>
                    </template>
                    <template v-slot:item="data">
                        <v-list-tile-avatar>
                            <v-avatar size="30" color="teal">
                                <span class="subheading white--text">
                                    {{data.item.name.first.substring(0,1) + data.item.name.last.substring(0,1)}}
                                </span>
                            </v-avatar>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>{{data.item.name.first + ' ' + data.item.name.last}}</v-list-tile-title>
                            <v-list-tile-sub-title v-html="data.item.email"></v-list-tile-sub-title>
                        </v-list-tile-content>
                    </template>
                </v-autocomplete>
            </v-card-text>
            <v-divider></v-divider>
            <v-btn block color="success" @click="assign">Assign</v-btn>
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
      assigned_user: {},
      isUpdating: false
    };
  },
  created() {
    this.init();
  },
  computed: {
    users() {
      var items = [];
      var users = this.deepCopy(this.$store.state.accounts.account_list);
      users.forEach(user => {
        if (user.username !== this.$store.state.user_session.user.username)
          items.push(user);
      });
      return items;
    }
  },
  methods: {
    init(refresh) {
      this.isUpdating = true;
      this.$store
        .dispatch("GET_ACCOUNTS", refresh)
        .then(result => (this.isUpdating = false))
        .catch(err => {
          this.isUpdating = false;
          this.$notifyError(err);
        });
    },
    assign() {
      var docket = this.deepCopy(this.$store.state.dockets.active);
      docket.user = {
        username: this.assigned_user.username,
        first_name: this.assigned_user.name.first,
        last_name: this.assigned_user.name.last,
        middle_name: this.assigned_user.name.middle,
        email: this.assigned_user.email
      };
      this.$store
        .dispatch("UPDATE_DOCKET", docket)
        .then(result => {
          console.log("assign to user: " + JSON.stringify(result));
          this.$notify({ message: "Success to Assign!" });
          this.$emit("close");
        })
        .catch(error => {
          console.error(error);
          this.$notifyError(error);
          this.$emit("close");
        });
    }
  }
};
</script>

<style>
</style>

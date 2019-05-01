<template>
    <v-card flat>
        <v-card-text>
            <v-list three-line v-if="comments && comments.length">
                <template v-for="(item, index) in comments">
                    <v-list-tile :key="`a${index}`" avatar>
                        <v-list-tile-avatar>
                            <v-avatar size="45" color="teal">
                                <span
                                class="subheading white--text "
                                >{{item.user.first_name.substring(0,1) + item.user.last_name.substring(0,1)}}</span>
                            </v-avatar>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                <span class="body-2">{{item.user.username}}</span> - <i class="body-1">{{formatDate(item.date_created)}}</i>
                            </v-list-tile-title>
                            <v-list-tile-sub-title>{{item.details.comment}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset :key="`b${index}`"></v-divider>
                </template>
            </v-list>
            <i class="subheading" v-else>No Comments</i>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
  computed: {
    comments() {
      return this.$store.state.comments.comments;
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$store
        .dispatch("GET_COMMENTS")
        .then(result => {
          console.log("result comments :", result);
        })
        .catch(err => {});
    }
  }
};
</script>

<style>
</style>

<template>
    <v-card flat>
        <v-card-text>
            <v-layout row wrap v-for="(item, index) in comments" v-if="comments && comments.length" :key="`a${index}`" mb-2>
                <v-flex xs1>
                    <v-avatar size="45" color="teal">
                        <span
                        class="subheading white--text "
                        >{{item.user.first_name.substring(0,1) + item.user.last_name.substring(0,1)}}</span>
                    </v-avatar>
                </v-flex>
                <v-flex xs11>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <span class="body-2">{{item.user.username}}</span> - <i class="body-1">{{formatDate(item.date_created)}}</i>
                        </v-flex>
                        <v-flex xs12 style="text-indent: 40px">
                            <p>{{item.details.comment}}</p>
                        </v-flex>
                        <v-flex xs12 v-if="item.details.files && item.details.files.length">
                            <v-layout row wrap>
                                <v-flex xs12 class="body-2">
                                    ATTACHMENTS:
                                </v-flex>
                                <v-flex xs2 v-for="(file, i) in item.details.files" :key="i">
                                    <v-card
                                        tile
                                        class="d-flex"
                                        @click="viewFile(file.location)"
                                        style="cursor:zoom-in">
                                        <pdf
                                            v-show="loaded"
                                            @loaded="loaded=true"
                                            :src="'https://cors-anywhere.herokuapp.com/'+file.location"
                                        ></pdf>
                                        <!-- <v-progress-linear v-show="!loaded" :indeterminate="true"></v-progress-linear> -->
                                        <v-progress-circular v-show="!loaded" indeterminate color="primary"></v-progress-circular>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex xs12 mt-2>
                    <v-divider></v-divider>
                </v-flex>
            </v-layout>
            <i class="subheading" v-else>No Comments</i>
        </v-card-text>
    </v-card>
</template>

<script>
import pdf from "vue-pdf";

export default {
  components: {
    pdf
  },
  data() {
    return {
      loaded: false
    };
  },
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
    },
    viewFile(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style>
</style>

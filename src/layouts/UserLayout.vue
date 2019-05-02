<template>
  <v-layout row wrap>
    <notification></notification>
    <v-toolbar height="80" dark app color="primary" style="background-image: url('https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/gallery/breadcrumb-bg.jpg');  background-size: cover">
      <v-layout row wrap>
        <v-flex xs12 mt-4>          
          <span class="headline font-weight-light pa-2">{{page_name}}</span>
        </v-flex>
        <v-flex xs12>
          <v-breadcrumbs divider=">" :items="breadcrumbs">
            <v-breadcrumbs-item v-for="(item, index) in breadcrumbs" :key="index" @click="goTo(item.href)">
              <span class="caption font-weight-regular white--text">{{item.name}}</span>
            </v-breadcrumbs-item>
          </v-breadcrumbs>
        </v-flex>
      </v-layout>
      <v-menu offset-y>
        <v-btn icon slot="activator">
          <v-avatar size="40" color="teal">
            <img v-if="user.avatar" :src="check_avatar(user.avatar.location)" alt="alt">
            <span v-else>{{user.name.first.substring(0,1) + user.name.last.substring(0,1)}}</span>
          </v-avatar>
        </v-btn>
        <v-list two-line subheader>
          <v-list-tile avatar @click="goTo('/app/profile')">
            <v-list-tile-content>
              <v-list-tile-title class="body-2 font-weight-light">My Profile</v-list-tile-title>
              <v-list-tile-sub-title class="caption font-weight-thin">Change your account details</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile avatar @click="goTo('/app/password')">
            <v-list-tile-content>
              <v-list-tile-title class="body-2 font-weight-light">Password Settings</v-list-tile-title>
              <v-list-tile-sub-title class="caption font-weight-thin">Change Password and Security Settings</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          <!-- LOGOUT in AVATAR-->
          <v-list-tile avatar @click="showLogout">
            <v-list-tile-content>
              <v-list-tile-title class="body-2 font-weight-light">Logout</v-list-tile-title>
              <v-list-tile-sub-title class="caption font-weight-thin">Sign out of FDA Portal</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat icon v-if="isMiniView" @click="showNav=!showNav">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer dark app :mini-variant="$store.state.navbar.mini" width="300" v-model="showNav">
      <!-- <v-toolbar dark color="primary" v-if="!mini">
                      <span class="title font-weight-light">Cassandra One</span>
                      <v-spacer></v-spacer>
                      <v-btn flat icon @click="mini=true">
                          <v-icon >chevron_left</v-icon>
                      </v-btn>
        </v-toolbar>-->
      <!-- <v-toolbar dark color="primary" v-else>
                      <v-btn flat icon @click="mini=false">
                          <v-icon >chevron_right</v-icon>
                      </v-btn>
        </v-toolbar>-->
      <v-toolbar dark style="height: 100px; background: linear-gradient(45deg, #38c73c 0%, #b5c25a 100%)">
        <v-list class="pa-0">
          <v-list-tile class="pa-1 bg" avatar style=" height: 100px;">
            <v-list-tile-avatar class="mt-4">
              <v-btn fab icon slot="activator" @click="$defaultNavbar()">
                <v-avatar v-if="!$store.state.navbar.mini" size="50px" color="teal">
                  <span class="white--text title">{{user.name.first.substring(0,1) + user.name.last.substring(0,1)}}</span>
                </v-avatar>
                <v-icon v-else>menu</v-icon>
              </v-btn>
            </v-list-tile-avatar>
            
            <v-spacer></v-spacer>
            <v-list-tile-content class="mt-4">
              <v-list-tile-title class="body-2">{{user.username}} <p>{{user_role}}</p></v-list-tile-title>              
              <v-list-tile-sub-title class="caption">{{user_role}}</v-list-tile-sub-title>
              <v-list-tile-sub-title class="caption">Last Logged in:</v-list-tile-sub-title>
              <v-list-tile-sub-title class="caption">{{formatDate(user.last_login)}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn v-if="!$store.state.navbar.mini" flat icon @click="$miniNavbar()">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <!-- Dashboard -->
      <v-list>
        <v-list-tile @click="goTo('/app')" :style="activeRoute(['Dashboard'])">
          <v-list-tile-action>
            <v-tooltip right>
              <v-btn slot="activator" icon>
            <v-icon>dashboard</v-icon>
              </v-btn> Dashboard
            </v-tooltip>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="goTo('/app')" :style="activeRoute(['Inbox'])">
          <v-list-tile-action>
            <v-tooltip right>
              <v-btn slot="activator" icon>
            <v-icon>archive</v-icon> </v-btn> Inbox </v-tooltip>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">Inbox</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Docket Management -->
        <v-tooltip right>
          <v-list-group prepend-icon="inbox" slot="activator" append-icon="expand_more">
            <v-list-tile slot="activator">
              <v-list-tile-title class="body-1 font-weight-light">Docket Management</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-if="allowed_access('DOCKET_CREATE')" class="ma-1" @click="goTo('/app/dockets/new')" :style="activeRoute(['New Docket'])">
              <v-list-tile-action>
                <v-tooltip right>
              <v-btn slot="activator" icon>
                <v-icon class="pl-4" small>add</v-icon></v-btn> New Docket </v-tooltip>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="body-1 font-weight-light">New Docket</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!-- Evaluate  -->
            <v-list-tile v-if="allowed_access('DOCKET_EVAL')" class="ma-1" @click="goTo('/app/cases/evaluate')" :style="activeRoute(['Evaluate Case'])">
              <v-list-tile-action>
                <v-tooltip right>
              <v-btn slot="activator" icon>
                <v-icon class="pl-4" small>description</v-icon> </v-btn> Evaluate Case </v-tooltip>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="body-1 font-weight-light">Evaluation</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!-- Review  -->
            <v-list-tile v-if="allowed_access('DOCKET_REVIEW')" class="ma-1" @click="goTo('/app/cases/review')" :style="activeRoute(['Review Case'])">
              <v-list-tile-action>
                <v-tooltip right>
              <v-btn slot="activator" icon>
                <v-icon class="pl-4" small>rate_review</v-icon> </v-btn> Review Case </v-tooltip>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="body-1 font-weight-light">Review</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!-- Approve  -->
            <v-list-tile v-if="allowed_access('DOCKET_APPROVAL')" class="ma-1" @click="goTo('/app/cases/approve')" :style="activeRoute(['Approve Case'])">
              <v-list-tile-action>
                <v-tooltip right>
              <v-btn slot="activator" icon>
                <v-icon class="pl-4" small>thumb_up</v-icon> </v-btn> Approve Case </v-tooltip>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="body-1 font-weight-light">Approval</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!-- Finalize  -->
            <v-list-tile v-if="allowed_access('DOCKET_FINALIZATION')" class="ma-1" @click="goTo('/app/cases/finalize')" :style="activeRoute(['Finalize Case'])">
              <v-list-tile-action>
                <v-tooltip right>
              <v-btn slot="activator" icon>
                <v-icon class="pl-4" small>check_circle</v-icon> </v-btn> Finalize Case </v-tooltip>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="body-1 font-weight-light">Finalization</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!-- Execute  -->
            <v-list-tile v-if="allowed_access('DOCKET_EXECUTION')" class="ma-1" @click="goTo('/app/cases/execute')" :style="activeRoute(['Execute Case'])">
              <v-list-tile-action>
                <v-tooltip right>
              <v-btn slot="activator" icon>
                <v-icon class="pl-4" small>playlist_add_check</v-icon> </v-btn> Execute Case </v-tooltip>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="body-1 font-weight-light">Execution</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile v-if="allowed_access('DOCKET_APPEAL')" class="ma-1" @click="goTo('/app/cases/appeal')" :style="activeRoute(['Cases on Appeal'])">
              <v-list-tile-action>
                 <v-tooltip right>
              <v-btn slot="activator" icon>
                <v-icon class="pl-4" small>gavel</v-icon> </v-btn> Cases on Appeal </v-tooltip>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="body-1 font-weight-light">Appeals</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!-- appeal case
              <v-list-tile
                @click="goTo('/app/cases/appeal')"
                class="ma-1"
                :style="activeRoute(['Cases on Appeal'])"
              >
                <v-list-tile-action>
                  <v-icon class="pl-4" small>gavel</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title class="body-1 font-weight-light">Cases on Appeal</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>-->
            <!-- Search case -->
            <!-- <v-list-tile
                @click="goTo('/app/cases/search')"
                class="ma-1"
                :style="activeRoute(['Search Case'])"
              >
                <v-list-tile-action>
                  <v-icon class="pl-4" small>search</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title class="body-1 font-weight-light">Search Case</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>-->
          </v-list-group>Docket Management
        </v-tooltip>
        <!-- Appeal -->
        <!-- <v-tooltip right>
          <v-list-group prepend-icon="move_to_inbox" slot="activator" append-icon="expand_more">
            <v-list-tile slot="activator">
              <v-list-tile-title class="body-1 font-weight-light">Cases on Appeal</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="goTo('/app/cases/appeal')" class="ma-1" :style="activeRoute(['Cases on Appeal'])">
              <v-list-tile-action>
                <v-tooltip right>
              <v-btn slot="activator" icon>
                <v-icon class="pl-4" small>gavel</v-icon> </v-btn> Appeal </v-tooltip>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="body-1 font-weight-light">Appeal</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="goTo('/app/cases/per')" class="ma-1" :style="activeRoute(['Post Execution Report'])">
              <v-list-tile-action>
                <v-tooltip right>
              <v-btn slot="activator" icon>
                <v-icon class="pl-4" small>playlist_add_check</v-icon> </v-btn> Post Execution Report </v-tooltip>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="body-1 font-weight-light">Post Execution Report</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>Cases on Appeal
        </v-tooltip> -->
        <!-- <v-divider></v-divider> -->
        <!-- Search case -->
        <v-list-tile v-if="allowed_access('CASE_SEARCH')" @click="searchDialog = true" :style="activeRoute(['Search Case'])">
          <v-list-tile-action>
            <v-tooltip right>
              <v-btn slot="activator" icon>
            <v-icon>search</v-icon> </v-btn> Search Case </v-tooltip>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">Search Case</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-dialog v-model="searchDialog" :overlay="false" max-width="500px" transition="dialog-transition">
          <v-card flat>
            <v-card-title primary-title></v-card-title>
            <v-card-text>
              <span class="body-2 font-weight-light">Search for a particular case using the Case Number, Case Name or DTN (Docket Transaction Number)</span>
              <v-text-field class="mt-4" outline append-icon="search" label="Search" single-line></v-text-field>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn :loading="isLoading" block flat color="primary" @click="search">Search</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- Case Board -->
        <v-list-tile v-if="allowed_access('CASE_BOARD')" @click="goTo('/app/cases/board')" :style="activeRoute(['Case Board'])">
          <v-list-tile-action>
            <v-tooltip right>
              <v-btn slot="activator" icon>
            <v-icon>view_column</v-icon> </v-btn> Case Board </v-tooltip>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">Case Board</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- <v-divider></v-divider> -->

        <v-tooltip right v-if="allowed_access('USERS') || allowed_access('ROLES') || allowed_access('TABLES')">
          <v-list-group prepend-icon="settings" slot="activator" append-icon="expand_more">
            <v-list-tile slot="activator">
              <v-list-tile-title class="body-1 font-weight-light">System Administration</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-if="allowed_access('USERS')"
              @click="goTo('/app/admin/users')"
              class="ma-1"
              :style="activeRoute(['User Administration'])"
            >
              <v-list-tile-action>
                <v-icon class="pl-4" small>account_circle</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="body-1 font-weight-light">Users</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!-- PER  -->
            <v-list-tile v-if="allowed_access('ROLES')"
              @click="goTo('/app/admin/roles')"
              class="ma-1"
              :style="activeRoute(['Role Administration'])"
            >
              <v-list-tile-action>
                <v-icon class="pl-4" small>supervisor_account</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="body-1 font-weight-light">Roles/Groups</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-if="allowed_access('TABLES')"
              @click="goTo('/app/admin/tables')"
              class="ma-1"
              :style="activeRoute(['Reference Tables'])"
            >
              <v-list-tile-action>
                <v-icon class="pl-4" small>dvr</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="body-1 font-weight-light">References</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>Settings
        </v-tooltip>

        


        <!-- My Profile -->
        <v-list-tile @click="goTo('/app/profile')" :style="activeRoute(['My Profile'])">
          <v-list-tile-action>
            <v-tooltip right>
              <v-btn slot="activator" icon>
            <v-icon>account_circle</v-icon> </v-btn>My Profile </v-tooltip>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">My Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Change Password -->
        <v-list-tile @click="goTo('/app/security')" :style="activeRoute(['Change Password'])">
          <v-list-tile-action>
            <v-tooltip right>
              <v-btn slot="activator" icon>
            <v-icon>vpn_key</v-icon> </v-btn> Change Password </v-tooltip>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">Change Password</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Logout SideNav -->
        <v-list-tile @click="showLogout()" class="ma-1" :style="activeRoute('Logout')">
          <v-list-tile-action>
            <v-tooltip right>
              <v-btn slot="activator" icon>
            <v-icon>exit_to_app</v-icon></v-btn> Logout </v-tooltip>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">Logout </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
    <!-- dialog logout -->
    <v-dialog v-model="show_logout" persistent max-width="300" transition="dialog-transition">
      <v-card>
      <v-card-title>
        <span class="title font-weight-light"></span>
        </v-card-title>
        <v-card-text>
          <span class="font-weight-light">Are you sure you want to logout?</span>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="font-weight-light" outline color="secondary" dark @click.native="show_logout = false">No</v-btn>
          <v-btn class="font-weight-light" color="primary" @click="confirmLogout()">Yes</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-list>
    </v-navigation-drawer>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
    <v-footer app dark color="primary" class="pa-1" style="background-image: url('https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/gallery/breadcrumb-bg.jpg');  background-size: cover">
      <span class="caption">FDA Cassandra One</span>
      <v-spacer></v-spacer>
      <span class="caption">All rights reserved 2019</span>
    </v-footer>
  </v-layout>
</template>

<script>
  import notification from "@/components/Notification";
  export default {
    components: {
      notification
    },
    data() {
      return {
        user_role:"",
        isLoading: false,
        searchDialog: false,
        miniNav: false,
        showNav: true,
        mini: false,
        user: {
          first_name: "Ariel",
          last_name: "Balita"
        },
        show_logout: false
      };
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        console.log("State User: " + JSON.stringify(this.$store.state))
        this.user = this.$store.state.user_session.user;
        //find access
        this.$store.dispatch('FIND_ROLE', this.user.role)
        .then(results=>{   
          this.user_role = results.data.model.name
          this.$store.commit('SET_USER_PERMISSIONS',results.data.model.permissions)
        })
      },
      activeRoute(route) {
        for (var i = 0; i < route.length; i++) {
          if (this.$route.name === route[i]) {
            return "background-image:linear-gradient(45deg, #0288d1, #26c6da); color:white";
          }
        }
        return;
      },
      goTo(path) {
        this.$router.push(path);
      },
      search() {
        this.isLoading = true;
        this.$router.push("/app/cases/search");
        this.isLoading = false;
        this.searchDialog = false;
      },
      showLogout() {
        this.show_logout = true;
      },
      confirmLogout() {
        this.$store.dispatch("LOGOUT");
        this.$router.push("/");
      },
    },
    computed: {
      page_name() {
        return this.$route.name;
      },
      breadcrumbs() {
        return [{
            name: "Dashboard"
          },
          {
            name: "Cases"
          }
        ];
      },
      isMiniView() {
        console.log("smAndDown: " + this.$vuetify.breakpoint.smAndDown);
        // this.showNav = false;
        return this.$vuetify.breakpoint.smAndDown;
      }
    }
  };
</script>

<style>
  .bg {
    /* The image used */
    background-image: url("https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/gallery/breadcrumb-bg.jpg");
    /* Full height */
    height: 100%;
    /* Center and scale the image nicely */
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

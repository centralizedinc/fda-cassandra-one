<template>
    <v-layout row wrap>
        <v-toolbar dark app color="primary">
            <span class="headline font-weight-light"></span>
            <v-spacer></v-spacer>
            <v-menu offset-y>
        <v-btn icon slot="activator">
          <v-avatar size="40" color="teal">
            <img v-if="user.avatar" :src="check_avatar(user.avatar.location)" alt="alt">
            <span v-else>{{user.first_name.substring(0,1) + user.last_name.substring(0,1)}}</span>
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
              <v-list-tile-sub-title
                class="caption font-weight-thin"
              >Change Password and Security Settings</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile avatar @click="showLogout">
            <v-list-tile-content>
              <v-list-tile-title class="body-2 font-weight-light">Logout</v-list-tile-title>
              <v-list-tile-sub-title class="caption font-weight-thin">Sign out of FDA Portal</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
        </v-toolbar>
        <v-navigation-drawer app :mini-variant="mini" width="250">
            <v-toolbar dark color="primary" v-if="!mini">
                <span class="title font-weight-light">Cassandra One</span>
                <v-spacer></v-spacer>
                <v-btn flat icon @click="mini=true">
                    <v-icon >chevron_left</v-icon>
                </v-btn>
            </v-toolbar>
            <v-toolbar dark color="primary" v-else>
                <v-btn flat icon @click="mini=false">
                    <v-icon >chevron_right</v-icon>
                </v-btn>
            </v-toolbar>

            <v-list >
                <v-list-tile class="ma-2" @click="goTo('/app')" :style="activeRoute(['Dashboard'])">
                    <v-list-tile-action>
                        <v-icon :style="activeRoute(['Dashboard'])">dashboard</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="body-1 font-weight-light">Dashboard</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="ma-2" @click="goTo('/app/cases')" :style="activeRoute(['Cases', 'Case Details', 'New Case'])">
                    <v-list-tile-action>
                        <v-icon :style="activeRoute(['Cases', 'Case Details', 'New Case'])">gavel</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="body-1 font-weight-light">Case Management</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="ma-2" @click="goTo('/app/dockets')" :style="activeRoute(['Dockets', 'Docket Details', 'New Docket'])">
                    <v-list-tile-action>
                        <v-icon :style="activeRoute(['Dockets', 'Docket Details', 'New Docket'])">inbox</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="body-1 font-weight-light">Docket Management</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider class="mt-5"></v-divider>
                <v-list-tile class="ma-2">
                    <v-list-tile-action>
                        <v-icon>account_circle</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="body-1 font-weight-light">My Profile</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile >
                <v-list-tile class="ma-2">
                    <v-list-tile-action>
                        <v-icon>vpn_key</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="body-1 font-weight-light">Change Password</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="ma-2">
                    <v-list-tile-action>
                        <v-icon>exit_to_app</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="body-1 font-weight-light">Logout</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

        </v-navigation-drawer>
        <v-container fluid>
            <v-sheet
                class="v-sheet--offset pa-2"
                elevation="10"
                width="calc(100% - 5px)"
                height="80"
            >
             <span class="title font-weight-light">{{page_name}}</span>
             <v-breadcrumbs divider="/" :items="breadcrumbs">
                <v-breadcrumbs-item
                    v-for="(item, index) in breadcrumbs"
                    :key="index"
                    @click="goTo(item.href)"
                >
                    <v-icon color="fdaGreen">{{item.icon}}</v-icon>
                    <span class="caption font-weight-light">{{item.name}}</span>
                </v-breadcrumbs-item>
            </v-breadcrumbs>
            </v-sheet>
            <router-view></router-view>
        </v-container>
        <v-footer app dark color="primary" class="pa-1">
            <span class="caption">FDA Cassandra One</span>
            <v-spacer></v-spacer>
            <span class="caption">All rights reserved 2019</span>
        </v-footer> 
    </v-layout>

       
</template>

<script>
export default {
    data(){
        return {
            mini: false,
            user:{
                first_name:"Ariel",
                last_name:"Balita",
            }
        }
    },
    methods:{
        activeRoute(route) {
            for(var i=0;i<route.length;i++){
                 if (this.$route.name === route[i]) {
                    return "background-color:#275FD4; color:white";
                } 
            }
            return;               
        },
        goTo(path){
            this.$router.push(path)
        }

    },
    computed:{
        page_name() {
            return this.$route.name;
        },
        breadcrumbs(){
            return[{name:'Dashboard'}, {name:'Cases'}]
        }
    }

}
</script>

<style>
.bg {
  /* The image used */
  background-image: url("https://i.pinimg.com/originals/01/67/e9/0167e9df8103435b37b166aea72d57b3.jpg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

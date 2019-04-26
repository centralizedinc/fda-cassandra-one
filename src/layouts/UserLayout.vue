<template>
    <v-layout row wrap>
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
                            <v-list-tile-sub-title class="caption font-weight-thin">Change Password and Security Settings</v-list-tile-sub-title>
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
            <v-btn flat icon v-if="isMiniView" @click="showNav=!showNav">
                <v-icon>menu</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer dark app :mini-variant="mini" width="300" v-model="showNav">
            <!-- <v-toolbar dark color="primary" v-if="!mini">
                    <span class="title font-weight-light">Cassandra One</span>
                    <v-spacer></v-spacer>
                    <v-btn flat icon @click="mini=true">
                        <v-icon >chevron_left</v-icon>
                    </v-btn>
                </v-toolbar> -->
            <!-- <v-toolbar dark color="primary" v-else>
                    <v-btn flat icon @click="mini=false">
                        <v-icon >chevron_right</v-icon>
                    </v-btn>
                </v-toolbar> -->
            <v-toolbar dark style="height: 100px; background: linear-gradient(45deg, #38c73c 0%, #b5c25a 100%)">
                <v-list class="pa-0">
                    <v-list-tile class="pa-1 bg" avatar style=" height: 100px;">
                        <v-list-tile-avatar class="mt-4">
                            <v-btn fab icon slot="activator" @click="mini=false">
                                <v-avatar size="50px" color="teal">
                                    <span class="white--text title">AB</span>
                                </v-avatar>
                            </v-btn>
                        </v-list-tile-avatar>
                        <v-spacer></v-spacer>
                        <v-list-tile-content class="mt-4">
                            <v-list-tile-title class="body-2">Ariel Balita</v-list-tile-title>
                            <v-list-tile-sub-title class="caption">Last Logged in:</v-list-tile-sub-title>
                            <v-list-tile-sub-title class="caption">{{formatDate(new Date())}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn v-if="!mini" flat icon @click="mini=true">
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
                        <v-icon>dashboard</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="body-1 font-weight-light">Dashboard</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <!-- Docket Management -->
                <v-tooltip right>
                    <v-list-group prepend-icon="inbox" slot="activator" append-icon="expand_more">
                        <v-list-tile slot="activator">
                            <v-list-tile-title class="body-1 font-weight-light">Docket Management</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile class="ma-1" @click="goTo('/app/dockets/new')" :style="activeRoute(['New Docket'])">
                            <v-list-tile-action>
                                <v-icon class="pl-4" small>add</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title class="body-1 font-weight-light">New Docket</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <!-- Evaluate  -->
                        <v-list-tile class="ma-1" @click="goTo('/app/cases/evaluate')" :style="activeRoute(['Evaluate Case'])">
                            <v-list-tile-action>
                                <v-icon class="pl-4" small>description</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title class="body-1 font-weight-light">Evaluation</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <!-- Review  -->
                        <v-list-tile class="ma-1" @click="goTo('/app/cases/review')" :style="activeRoute(['Review Case'])">
                            <v-list-tile-action>
                                <v-icon class="pl-4" small>rate_review</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title class="body-1 font-weight-light">Review</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <!-- Approve  -->
                        <v-list-tile class="ma-1" @click="goTo('/app/cases/approve')" :style="activeRoute(['Approve Case'])">
                            <v-list-tile-action>
                                <v-icon class="pl-4" small>thumb_up</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title class="body-1 font-weight-light">Approval</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <!-- Finalize  -->
                        <v-list-tile class="ma-1" @click="goTo('/app/cases/finalize')" :style="activeRoute(['Finalize Case'])">
                            <v-list-tile-action>
                                <v-icon class="pl-4" small>check_circle</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title class="body-1 font-weight-light">Finalization</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <!-- Execute  -->
                        <v-list-tile class="ma-1" @click="goTo('/app/cases/execute')" :style="activeRoute(['Execute Case'])">
                            <v-list-tile-action>
                                <v-icon class="pl-4" small>gavel</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title class="body-1 font-weight-light">Execution</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <!-- Search case -->
                        <v-list-tile @click="goTo('/app/cases/search')" class="ma-1" :style="activeRoute(['Search Case'])">
                            <v-list-tile-action>
                                <v-icon class="pl-4" small>search</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title class="body-1 font-weight-light">Search Case</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>
                    Case Management
                </v-tooltip>
                <!-- Case Board -->
                <v-list-tile @click="goTo('/app/profile')" :style="activeRoute(['Case Board'])">
                    <v-list-tile-action>
                        <v-icon>view_column</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="body-1 font-weight-light">Case Board</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <!-- My Profile -->
                <v-list-tile @click="goTo('/app/profile')" :style="activeRoute(['My Profile'])">
                    <v-list-tile-action>
                        <v-icon>account_circle</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="body-1 font-weight-light">My Profile</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <!-- Change Password -->
                <v-list-tile @click="goTo('/app/security')" :style="activeRoute(['Change Password'])">
                    <v-list-tile-action>
                        <v-icon>vpn_key</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="body-1 font-weight-light">Change Password</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
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
    export default {
        data() {
            return {
                miniNav: false,
                showNav: true,
                mini: false,
                user: {
                    first_name: "Ariel",
                    last_name: "Balita",
                }
            }
        },
        methods: {
            activeRoute(route) {
                for (var i = 0; i < route.length; i++) {
                    if (this.$route.name === route[i]) {
                        return "background-image:linear-gradient(45deg, #0288d1, #26c6da); color:white";
                    }
                }
                return;
            },
            goTo(path) {
                this.$router.push(path)
            }
        },
        computed: {
            page_name() {
                return this.$route.name;
            },
            breadcrumbs() {
                return [{
                    name: 'Dashboard'
                }, {
                    name: 'Cases'
                }]
            },
            isMiniView() {
                console.log("smAndDown: " + this.$vuetify.breakpoint.smAndDown)
                // this.showNav = false;
                return this.$vuetify.breakpoint.smAndDown
            }
        }
    }
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

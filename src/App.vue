<template>
    <v-app>
        <!-- Setting up Navigation Drawer -->
        <v-navigation-drawer  temporary v-model="sideNav" fixed>

            <v-list>

                <v-list-tile v-for="item in menuItems" :key:="item.title"  :to="item.link">

                    <v-list-tile-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        {{item.title}}
                    </v-list-tile-content>

                </v-list-tile>

            </v-list>

        </v-navigation-drawer>

        <!-- Setting up the toolbar -->
        <v-toolbar dark class="blue darken-1">

            <v-toolbar-side-icon @click.stop="sideNav = !sideNav"
                                 class="hidden-sm-and-up"></v-toolbar-side-icon>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">Dev Meetup</router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>  <!-- Spacer is used for the space b/w the title and toolbar items -->

            <v-toolbar-items wrap>
                <v-btn flat class="hidden-xs-only" v-for="item in menuItems" :key="item.title"  :to="item.link">
                    <v-icon left>{{item.icon}}</v-icon>
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>

        </v-toolbar>

        <main>
            <router-view></router-view>
        </main>

    </v-app>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                sideNav: false,
                menuItems: [
                    {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
                    {icon: 'room', title: 'Organize new Meetup', link: '/meetup/new'},
                    {icon: 'person', title: 'Profile', link: '/profile'},
                    {icon: 'face', title: 'Sign up', link: '/signup'},
                    {icon: 'lock_open', title: 'Sign in', link: 'signin'},
                ]
            }
        }
    }
</script>

<style>
</style>
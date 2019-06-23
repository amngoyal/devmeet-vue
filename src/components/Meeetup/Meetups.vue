<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 >
                <v-card class="grey lighten-2 mb-2" v-for="item in meetups" :key="item.id">
                    <v-container fluid>
                        <v-layout>
                            <v-flex xs5 sm4 md3>
                                <v-img
                                        :src="item.imageUrl"
                                        height="130px"
                                >
                                </v-img>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0">{{item.title}}</h3>
                                        <div> {{item.date}}</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn flat :to='"/meetup/"+ item.id'>
                                        <v-icon left>arrow_forward</v-icon>
                                        View Meetup
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        computed: {
            meetups(){
                return this.$store.getters.loadedMeetups
            }
        }
    }
</script>
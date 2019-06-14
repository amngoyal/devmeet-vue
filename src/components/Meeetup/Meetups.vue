<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 >
                <v-card class="grey lighten-2">
                    <v-container fluid>
                        <v-layout>
                            <v-flex xs5 sm4 md3>
                                <v-img
                                        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                        height="130px"
                                >
                                </v-img>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0">My Meetup</h3>
                                        <div> 17th june 2019</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn flat to="/meetup/1">
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
<template>
    <v-container>
        <v-card>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card-title class="primary--text">
                        <h2>{{meetup.title}}</h2>
                    </v-card-title>
                    <v-img
                            :src="meetup.imageUrl"
                            height="400px"
                    >
                    </v-img>

                    <v-card-text>
                        <div class="info--text">{{meetup.date}}-{{meetup.location}}</div>
                        <div>{{meetup.description}}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="red white--text">
                            Register
                        </v-btn>
                    </v-card-actions>
                </v-flex>
            </v-layout>


        </v-card>
    </v-container>
</template>

<script>
    export default {
        props:['id'],
        computed:{
            meetup(){
                return this.$store.getters.loadedMeetup(this.id)
            }
        }
    }
</script>
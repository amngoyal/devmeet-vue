<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-sm-right text-xs-center">
                <v-btn large router to="/meetups">Explore Meetup</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-sm-left text-xs-center">
                <v-btn large color="primary" router to="/meetup/new">Organize a meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item
                            v-for="item in meetups"
                            :key="item.id"
                            :src="item.imageUrl"
                    >
                        <div class="title">{{item.title}}</div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <p>Join our awesome meetups!</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                meetups: [{
                    imageUrl: 'https://static.toiimg.com/thumb/49450573/How-to-reach-Delhi.jpg?width=748&height=499',
                    id: 'meetupid_delhi',
                    title: 'Meetup in delhi'
                },
                    {
                        imageUrl: 'https://ramadalucknow.com/wp-content/uploads/2017/11/Exploring-Spiritual-Tourism-in-India-The-Uttar-Pradesh-Sojourn.jpg',
                        id: 'meetupid_delhi',
                        title: 'Meetup in UP'
                    },
                    {
                        imageUrl: 'http://www.track2realty.track2media.com/wp-content/uploads/2012/12/SARE-Homes-Ghaziabad.jpg',
                        id: 'meetupid_delhi',
                        title: 'Meetup in Ghaziabad'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .title{
        position: absolute;
        bottom: 50px;
        margin: auto;
        background-color: rgba(0,0,0,0.5);
        color: #fff;
        font-size: 2em;
        padding: 30px;
    }
</style>
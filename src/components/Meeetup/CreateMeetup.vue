<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="secondary--text">Create a new meetup</h1>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12>
                <v-form v-model="valid" @submit.prevent="onCreateMeetup">
                    <v-layout>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    label="Title"
                                    id="title"
                                    v-model="title"
                                    name="title"
                                    required
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    id="location"
                                    v-model="location"
                                    label="Location"
                                    name="location"
                                    required
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    id="image-url"
                                    v-model="imageUrl"
                                    name="imageUrl"
                                    label="Image Url"
                                    required
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageUrl" height="150">
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    id="description"
                                    v-model="description"
                                    name="description"
                                    label="Description"
                                    multi-line
                                    required
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 offset-sm3>
                            <h1>Choose Date and Time</h1>
                           </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 offset-sm3 class="mb-3">
                            <v-date-picker v-model="date" color="primary lighten-1"></v-date-picker>
                            <p>{{date}}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 offset-sm3>
                            <v-time-picker color="primary" v-model="time" format="24hr"></v-time-picker>
                            <p>{{time}}</p>

                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn :disabled="formIsValid" class="primary" type="submit">{{formIsValid}}</v-btn>
                        </v-flex>
                    </v-layout>

                </v-form>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    export default {
        data: () => {
            return{
                title: '',
                location: '',
                imageUrl: '',
                description: '',
                date: "",
                time: new Date()
            }
        },
        computed:{
            formIsValid(){
                return this.title === '' &&
                    this.location === '' &&
                    this.imageURL === '' &&
                    this.description === ''
            },
            submittableDateAndTime(){
                const date = new Date(this.date)

                if(typeof this.time === 'string'){
                    const hours = this.time.match(/^(\d+)/)[1]
                    const minutes = this.time.match(/:(\d+)/)[1]
                    date.setHours(hours)
                    date.setMinutes(minutes)

                }else{
                    date.setHours(this.time.getHours())
                    date.setMinutes(this.time.setMinutes())
                }

                return date
            }
        },
        methods:{
            onCreateMeetup(){
                if(this.formIsValid){
                    return
                }
                const meetupData = {
                    title: this.title,
                    location: this.location,
                    imageUrl: this.imageUrl,
                    description: this.description,
                    date: this.submittableDateAndTime
                }

                this.$store.dispatch("createMeetup",meetupData)
                this.$router.push("/meetups")
            }
        }
    }
</script>
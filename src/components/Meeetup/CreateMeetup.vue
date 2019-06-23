<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="secondary--text">Create a new meetup</h1>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12>
                <v-form v-model="valid" @submit.prevent="createMeetup">
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
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn :disabled="!formIsValid" type="submit" class="primary">Create Meetup</v-btn>
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
                description: ''
            }
        },
        computed:{
            formIsValid(){
                return this.title !== "" &&
                    this.location!== "" &&
                    this.imageURL !== "" &&
                    this.description !== ""
            }
        }
    }
</script>
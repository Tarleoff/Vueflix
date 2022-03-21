<template>
    <div v-if="$auth.isAuthenticated">
        <p>Welcome {{ $auth.email }}!</p>
        <router-link to="/logout">Logout</router-link>    
        <div class="movie">
            <h3>{{ movie.title }}</h3>
            <img :src="`https://apigerard.herokuapp.com/img/movies/thumbnailmk2/img${movie.id}.jpg`">
            <p>Actores</p>
            <ul>
                <li v-for="actor in movie.actores" :key="actor.id">
                    {{ actor.name }}
                </li>
            </ul>
            <p>Géneros</p>
            <ul>
                <li v-for="genero in movie.genero" :key="genero.id">
                    {{ genero.name }}
                </li>
            </ul>
        </div>
    </div>
    <div v-else>
        <p>Please login:</p>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
    </div>
</template>

<script>
export default {
    created(){
        if(this.$auth.isAuthenticated){
            this.fetchMovie();
        }
    },
    data() {
        return {
            movie: {},
        }
    },
    methods: {
        async fetchMovie() {
            const response = await fetch(`https://apigerard.herokuapp.com/api/pelicula/${this.$route.params.id}`, { headers: {Authorization: `Bearer ${this.$auth.access_token}`}});
            this.movie = (await (response.json())).data;
        },
    },
}
</script>
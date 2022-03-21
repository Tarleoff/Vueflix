<template>
    <div v-if="$auth.isAuthenticated">
        <p>Welcome {{ $auth.email }}!</p>
        <router-link to="/logout">Logout</router-link>    
        <div class="movie">
            <h3>{{ movie.title }}</h3>
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
            
        },
    },
}
</script>
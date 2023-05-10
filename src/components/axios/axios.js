import axios from "axios";

const axiosIns = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie",
    params:{
        'api_key':'bf86013c066ab4c5f8ff00b2549cde1f'
    }
})

import axiosClient from "./axiosClient";
// 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 this is the link to my first github commit

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming', // https://api.themoviedb.org/3/movie/upcoming?api_key=995349e2feef706072e377f33d7c8a69
    // here is what we actually calling from the api
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular', // https://api.themoviedb.org/3/tv/popular?api_key=995349e2feef706072e377f33d7c8a69
    // here is what we actually calling from the api
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
}

export default tmdbApi;
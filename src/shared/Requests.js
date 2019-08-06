import axiosApi from './AxiosApi'
import { stringifyQueryString } from '../helpers/FnUtils';

export const discoverFilmesLancamento = () => {
    return axiosApi.get(`/movie/now_playing?`)
}
export const discoverFilmesMaisPopulares = () => {
    return axiosApi.get(`/movie/popular?`)
}
export const discoverAtoresMaisPopulares = () => {
    return axiosApi.get(`/person/popular?`)
}
export const detalhesFilme = (movieId) => {
    return axiosApi.get(`/movie/${movieId}?`)
}
export const procurarFilme = (query) => {
    return axiosApi.get(`/search/movie/?${stringifyQueryString(query)}`)
}

export default {
    discoverFilmesLancamento,
    discoverFilmesMaisPopulares,
    discoverAtoresMaisPopulares,
    detalhesFilme,
    procurarFilme
}
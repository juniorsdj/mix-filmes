import axiosApi from './AxiosApi'
import { stringifyQueryString } from '../helpers/FnUtils';

export const discoverFilmesLancamento = () => {
    return axiosApi.get(`/lancamentos?`)
}
export const discoverFilmesMaisPopulares = () => {
    return axiosApi.get(`/populares?`)
}
export const discoverAtoresMaisPopulares = () => {
    return axiosApi.get(`/atores`)
}
export const detalhesFilme = (movieId) => {
    return axiosApi.get(`/${movieId}?`)
}
export const procurarFilmeByName = (query, page) => {
    return axiosApi.get(`/procurar-filme/?${stringifyQueryString({ page, query })}`)
}

export default {
    discoverFilmesLancamento,
    discoverFilmesMaisPopulares,
    discoverAtoresMaisPopulares,
    detalhesFilme,
    procurarFilmeByName
}
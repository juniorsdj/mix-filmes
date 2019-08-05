import axiosApi from './AxiosApi'
import { stringifyQueryString } from '../helpers/FnUtils';

export const discoverLancamentoThisMonth = () => {
    return axiosApi.get(`/discover/movie?${stringifyQueryString()}api_key=ba19a79e0aa6722b483fcf104b8e8b10&language=pt-BR&primary_release_date.gte=2019-08-01&primary_release_date.lte=2019-08-31&page=3`)
}

export default {
    discoverLancamentoThisMonth
}
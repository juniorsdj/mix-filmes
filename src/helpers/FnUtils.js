import queryString from 'query-string'

export const stringifyQueryString = (obj) => {
    const keys = Object.keys(obj).filter(key => obj[key] != '')
    const retorno = {}
    keys.forEach(key => retorno[key] = obj[key])
    return queryString.stringify(retorno);

}


export const mkUriImage = (img) => {
    return {uri: `https://image.tmdb.org/t/p/w500${img}`}
}
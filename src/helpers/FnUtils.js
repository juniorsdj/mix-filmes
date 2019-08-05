import queryString from 'query-string'

export const stringifyQueryString = (obj) => {
    const keys = Object.keys(obj).filter(key => obj[key] != '')
    const retorno = {}
    keys.forEach(key => retorno[key] = obj[key])
    return queryString.stringify(retorno);

}
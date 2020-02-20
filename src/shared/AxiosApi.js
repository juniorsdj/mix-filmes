import React from 'react'
import axios from 'axios'
import { navigate } from './../helpers/NavigationService'
import { AsyncStorage, Alert } from 'react-native'
import { API_URL, TOKEN_API } from './../constants'
// import console = require('console');



const AxiosApi = axios
AxiosApi.defaults.baseURL = API_URL;




const handleResponseSuccess = function (response) {
    if(response.data)
        return response.data
    // if (networkErrorToastId) {
    //     toast.dismiss(networkErrorToastId)
    //     networkErrorToastId = null;
    //     store.dispatch(verifyConnections());
    // }


    return response;
}





export const handleResponseError = async (error) => {
    console.log(error.message)

    if (error.response) {
        const {
            response: {
                status,
                data
            }
        } = error
        switch (status) {
            case 400:
                console.log(response)
                break;
            case 401:
                AsyncStorage.clear()
                navigate('Auth')
                break;
            case 403:
                Alert.alert(`[403] Sem permissão`)
                AsyncStorage.clear()
                navigate('Auth')
                break;
            case 503:
                // toast.info("Sistema em manutenção, tente novamente em instantes", { autoClose: false })
                break;
        }

    } else {
        if (error.message == 'Network Error') {
            // console.log(error.message)
            // Alert.alert('Problemas com a conexão', 'Por favor, verifique sua conexão e tente novamente.')
        }
    }
}


// AxiosApi.interceptors.request.use(function (config) {
//     // config.url += '&api_key=ba19a79e0aa6722b483fcf104b8e8b10&language=pt-BR'
//     return config
// }, function (error) {
//     console.log(error)
// })

AxiosApi.interceptors.response.use(handleResponseSuccess, handleResponseError)

export default AxiosApi;
import { Dimensions } from 'react-native'




const WIDTH_BASE = 370;

export const WIDTH_SCREEN = Dimensions.get('window').width
export const HEIGHT_SCREEN = Dimensions.get('window').height

export const WIDTH_SCREEN_PERCENT = (percent) => {
    return WIDTH_SCREEN * (percent / 100)
}
export const HEIGHT_SCREEN_PERCENT = (percent) => {
    return HEIGHT_SCREEN * (percent / 100)
}

export const normalizeWidPx = (size) => {
    return (size * WIDTH_SCREEN) / WIDTH_BASE
}

export const colors = {

    sutil: '#F5F5F5',
    white: "#ffffff",
    black: "#000000",
    transparent: "rgba(0,0,0,0)",

    warning10: "#FFF3E0",
    warning20: "#FB8C00",
    warning30: "#E65100",

    gold: "#febf00",

    danger10: "#FFEBEE",
    danger20: "#E53935",
    danger30: "#B71C1C",

    info10: "#E3F2FD",
    info20: "#1E88E5",
    info30: "#0D47A1",

    almostBlack: "#111111",

    default10: '',
    default20: '#444444',
    default30: '',


}

export const tipografy = {
    sizeMini: normalizeWidPx(11),
    sizeBody: normalizeWidPx(13),
    sizeSubTitle: normalizeWidPx(14),
    sizeTitle01: normalizeWidPx(16),
    sizeTitle02: normalizeWidPx(18),
    sizeBig: normalizeWidPx(22),
    sizeExtraBig: normalizeWidPx(26),

    sizeIcon: normalizeWidPx(30),

    weightLight: '300',
    weightNormal: '400',
    weightSemibd: '600',
    weightExtrabd: '800'
}

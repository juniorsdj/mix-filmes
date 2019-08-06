import { NavigationActions } from 'react-navigation';


let _navigator;

export const setTopLevelNavigator = (navigatorRef) => {
    _navigator = navigatorRef;

}

export const navigate = (routeName, params) => {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}


export const dispatch = (action) => {
    console.log(_navigator.dispatch(action))

}
// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
    dispatch
};
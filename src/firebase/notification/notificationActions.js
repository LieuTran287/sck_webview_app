import * as navigationStack from "../../navigation/navigationStack";


let Codes = {
  HOME: 'HOME',
};


export default (notification , navigation) => {
    const { json, code } = notification.data;

    if (!code ||
       notification.data ||
       JSON.parse(json)
    ) {
        return null;
    }
    switch (code) {
        case Codes.HOME:
            return navigation.replace(navigationStack.HOME_SCREEN);


        default:
            return null;
    }
};

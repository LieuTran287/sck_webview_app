import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import firebase from 'react-native-firebase';
import Actions from './notificationActions';

class NotificationController extends Component {
    removeNotificationListener;
    removeNotificationOpenedListener;

    componentDidMount = async () => {
        this.getPermission();
        this.logToken();
        // handle resetToken
        this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(token => {
           console.log('refreshToken', { token });
            this.pushTokenToSV();
        });
        // ============================================================================================================================================
        // handle noti
        this.removeNotificationListener = firebase.notifications().onNotification(notification => {
            // Process your notification as required
           console.log('>>>>>>>>>>> notificationListener...', { notification });
          Actions(notification,this.props.navigation);

        });
        // ============================================================================================================================================
        // handle noti tapped (foreground and background)
        this.removeNotificationOpenedListener = firebase
            .notifications()
            .onNotificationOpened(notificationOpened => {
                // Get the action triggered by the notification being opened
                const action = notificationOpened.action;
                // Get information about the notification that was opened
                const notification = notificationOpened.notification;
               console.log('>>>>>>>>>>> notificationOpenedListener...', { action, notification });

                Actions(notification,this.props.navigation);
            });
        // ============================================================================================================================================
        // appclose
        firebase
            .notifications()
            .getInitialNotification()
            .then(notificationOpen => {
                if (notificationOpen) {
                    // App was opened by a notification
                    // Get the action triggered by the notification being opened
                    const action = notificationOpen.action;
                    // Get information about the notification that was opened
                    const notification = notificationOpen.notification;
                    console.log('>>>>>>>>>>> notificationOpenedListener...(appclose)', {
                        action,
                        notification,
                    });

                    // store.dispatch({ type: types.initNotification, notification });
                }
            });
    };
    componentWillUnmount = () => {
        if (this.removeNotificationListener) {
            this.removeNotificationListener();
        }
        if (this.removeNotificationOpenedListener) {
            this.removeNotificationOpenedListener();
        }
    };

    render() {
        return <View style={{ height: 0, width: 0 }}></View>;
    }

    logToken = () => {
      firebase.messaging()
            .getToken()
            .then(fcmToken => {
                if (fcmToken) {
                    // user has a device token
                    console.log('token', { fcmToken });

                } else {
                    // user doesn't have a device token yet
                }
            });
    };

    pushTokenToSV = async () => {
        //     const params = await deviceInfo();
        //     if (params) {
        //         const { success, error, ...data } = await handleApi(pushToken(params));
        //         if (success) {
        //             //
        //         } else {
        //             showAlert(null, error);
        //         }
        //     }
    };
    getPermission = () => {
        // ios permission
      firebase.messaging()
            .requestPermission()
            .then(() => {
              console.log('User granted messaging permissions!');
            })
            .catch(error => {
              console.log('User declined messaging permissions :(');
            });
        //
    };
}

export default NotificationController;

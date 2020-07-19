import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources(){
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    React.useEffect(() => {
        async function loadResourcesAndDataAsync(){
            try {
                SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    ...Ionicons.font,
                    bold:require('../assets/fonts/Cereal-Bold.ttf'),
                    regular:require('../assets/fonts/Cereal-Book.ttf'),
                })
            } catch (e){
               console.warn(e)
            } finally {
                setLoadingComplete(true)
                SplashScreen.hideAsync()
            }
        } 
        loadResourcesAndDataAsync()
    },[])

    return isLoadingComplete;
}
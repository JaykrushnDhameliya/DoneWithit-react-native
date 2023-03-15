import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabsPagination from "./Components/tabPaginaion";
import MyDrawer from "./Components/navebar";

export default function App() {
    return (
        <>


            <NavigationContainer>
                <TabsPagination/>
            </NavigationContainer>
            </>
    );
}



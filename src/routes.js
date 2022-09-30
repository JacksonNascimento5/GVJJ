import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Login from "./pages/Login";
import Definicao from "./pages/Definicao";
import Cadastro from "./pages/Cadastro";
import HomeLojista from "./pages/HomeLojista";
import DefinineComparacao from "./pages/DefineComparacao";

const appStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <appStack.Navigator headerMode="none" screenOptions={{
                cardStyle:{backgroundColor:'#f0f0f5'}
            }}>
                <appStack.Screen name="DefineComparacao" component={DefinineComparacao}/>
                <appStack.Screen name="HomeLojista" component={HomeLojista}/>
                <appStack.Screen name="Definicao" component={Definicao}/>
                <appStack.Screen name="Login" component={Login}/>
                <appStack.Screen name="Cadastro" component={Cadastro}/>
                
                
               
            </appStack.Navigator>
        </NavigationContainer>
    );
}
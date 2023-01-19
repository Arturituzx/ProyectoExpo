import React, { useEffect, useState, useRef } from "react";
import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Image, Animated, Easing } from "react-native";
import { Colors } from "../styles/colors";
import {LinearGradient} from 'expo-linear-gradient';
import Spinner from "react-native-loading-spinner-overlay";

const SpinnerModal = ({ loading, text }) => {
    //loading&&console.log("modal:",text)

    const styl = { width: Dimensions.get("window").width, height: "100%", paddingVertical: 5, paddingHorizontal: 8, backgroundColor: "#C1BFFF", justifyContent: "center", alignItems: "center", borderRadius: 15 };

    let big = 100
    const LAnim = useRef(new Animated.Value(120)).current;
    const animatedBall = () => {

        Animated.loop(
            Animated.sequence([
                Animated.timing(LAnim, {
                    toValue: 180,
                    easing: Easing.ease,
                    duration: 500,
                    useNativeDriver: false,
                }),

                Animated.timing(LAnim, {
                    toValue: 120,
                    easing: Easing.ease,
                    duration: 500,
                    useNativeDriver: false,
                })
            ]
            )

        ).start();

    }
    useEffect(() => {
        animatedBall()
    }, []);
    useEffect(() => {
        big = LAnim;
    }, [LAnim]);

    const styl2 = { height: big, width: big }

    const LoadingComp = (
        <LinearGradient colors={["#C1BFFF", "#C1BFFF"]} style={styl}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                
                <Text style={{
                    color: "#fff", fontSize: 20, fontWeight: "bold", textAlign: "center",

                }}>{text}</Text>
                <View style={{marginTop: 60}}>
                
                <ActivityIndicator size="large" color="#fff" />
                </View>
                
            </View>
            
        </LinearGradient>
    );


    return (
        <Spinner
            visible={loading}
            // visible={true}      
            //textContent={'Logeando..'}
            textStyle={{ color: Colors.colorPrimary, fontSize: 30 }}
            color={Colors.colorPrimary}
            animation='fade'
            children={LoadingComp}
        />
    );
};

SpinnerModal.defaultProps = {
    text: "Cargando...",
    loading: false,
};

export default SpinnerModal;

const styles = StyleSheet.create({

});

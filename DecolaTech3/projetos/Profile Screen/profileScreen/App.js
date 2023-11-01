import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, Linking} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkGitHub = '#4F565E'

const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/70538729?v=4';

const urlMyGitHub = 'https://github.com/elainefs';

const App = () => {
    const handlePressGoToGitHub = async () => {
        console.log('Verificando Link')
        const res = await Linking.canOpenURL(urlMyGitHub);
        if(res){
            console.log('Link Aprovado')
            console.log('Abrindo Link')
            await Linking.openURL(urlMyGitHub)
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle='light-content' />
            <View style={style.content}>
                <Image
                    accessibilityLabel='Elaine de camisa azul e sorrindo' 
                    style={style.avatar} 
                    source={{uri: imageProfileGitHub}} />
                <Text 
                    accessibilityLabel='Nome: Elaine Ferreira'
                    style={[style.defaultText, style.name]}>
                    Elaine Ferreira
                </Text>
                <Text
                    accessibilityLabel='Nickname: elaine fs'
                    style={[style.defaultText, style.nickname]}>
                    elainefs
                </Text>
                <Text
                    accessibilityLabel='Passionate about technology, always looking for new knowledge.'
                    style={[style.defaultText, style.description]}>
                    Passionate about technology, always looking for new knowledge.
                </Text>
                <Pressable onPress={handlePressGoToGitHub}>
                    <View style={style.button}>
                        <Text
                            style={[style.defaultText, style.textButton]}>
                            Open in GitHub
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGitHub,
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGitHub,
    },
    name:{
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickname:{
        fontSize: 18,
        color: colorDarkGitHub,
    },
    description:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    button:{
        marginTop: 20,
        backgroundColor: colorDarkGitHub,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontSize: 16,
        fontWeight: 'bold',
    },
});
import React from "react";
import { StyleSheet, Text, View, FlatList, TextInput, KeyboardAvoidingView } from "react-native";
import ChatMessage from '../../shared/components/chat-message';

export default class Chat extends React.Component {

  render() {

    var messages = [
      {
        message: "Primeira mensagem",
        nickname: "Rodrigo",
        date: new Date().toISOString(),
        fromMe: true,
        id: 1
      },
      {
        message: "Segunda mensagem",
        nickname: "Rodrigo",
        date: new Date().toISOString(),
        fromMe: false,
        id: 2
      }
    ]

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled keyboardVerticalOffset={70}>
        <View style={{
          flex: 1,
          width: "100%"
        }} >
          <FlatList
            data={messages}
            renderItem={({item}) => <ChatMessage fromMe={item.fromMe} 
                                                 message={item.message}
                                                 nickname={item.nickname}/>}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View style={{
          height: 30,
          width: '100%'
        }} >
          <TextInput style={{
            height: 40, borderColor: 'black', borderWidth: 1
          }} 
            onChangeText = {(message) => this.setState({message})} >
            
          </TextInput>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

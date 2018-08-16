import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ChatMessage extends React.Component {
  render() {
    var messageFromMe = this.props.fromMe;

    return (
      <View
        style={[
          styles.messageContainer,
          messageFromMe ? styles.messageContainerFromMe : null
        ]}
      >
        <View>
          {/*Image*/}
          <View style={styles.chatImage} />
        </View>
        <View
          style={[
            styles.chatMessage,
            messageFromMe ? styles.chatMessageFromMe : null
          ]}
        >
          {/*Message*/}
          <View>
            {/* NickName */}
            <View />
                <Text>{this.props.nickname}</Text>
            {/* Message */}
            <View>
              <Text>
                    {this.props.message}
              </Text>
            </View>

            {/* Date */}
            <View />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  messageContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    marginBottom: 15
  },
  chatImage: {
    width: 60,
    height: 60,
    borderRadius: 500,
    backgroundColor: "red"
  },
  chatMessage: {
    width: "70%",
    backgroundColor: "lightgreen",
    borderRadius: 5,
    padding: 12,
    marginLeft: 15
  },
  chatMessageFromMe: {
    marginLeft: 0,
    marginRight: 15,
    backgroundColor: "lightblue"
  },
  messageContainerFromMe: {
    flexDirection: "row-reverse"
  }
});

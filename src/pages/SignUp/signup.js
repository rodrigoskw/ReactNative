import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { userService } from "../../services/user-service";
import Loading from "../../shared/components/loading";

export default class SignUp extends React.Component {
  static navigationOptions = navigation => {
    return {
      title: "Cadastro"
    };
  };

  state = {
    username: "",
    password: "",
    name: "",
    nickname: "",
    error: null,
    loading: false
  };

  signUp() {
    const usermodel = {
      email: this.state.username,
      password: this.state.password,
      name: this.state.name,
      nickname: this.state.nickname
    };
    userService
      .signUp(usermodel)
      .then(credential => {
        this.showHideLoading(false);
      })
      .catch(errorMessage => {
        this.showHideLoading(false);
        this.setState({
          error: errorMessage
        });
      });
  }

  showHideLoading(visible = true) {
    setTimeout(() => {
      this.setState({
        loading: visible
      });
    }, 1500);
  }

  render() {
    return (
      <Loading loading={this.state.loading}>
        <View style={styles.logoContainer}>
          <View style={styles.logo} />
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            autoCapitalize={"none"}
            placeholder={"Name"}
            onChangeText={name => {
              this.setState({ name });
            }}
            value={this.state.name}
          />

          <TextInput
            style={styles.textInput}
            autoCapitalize={"none"}
            placeholder={"NickName"}
            onChangeText={nickname => {
              this.setState({ nickname });
            }}
            value={this.state.nickname}
          />

          <TextInput
            style={styles.textInput}
            autoCapitalize={"none"}
            placeholder={"Username"}
            onChangeText={username => {
              this.setState({ username });
            }}
            value={this.state.username}
          />
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder={"Password"}
            onChangeText={password => {
              this.setState({ password });
            }}
            value={this.state.password}
          />

          {this.state.error ? (
            <View>
              <Text
                style={{
                  color: "red",
                  textAlign: "center"
                }}
              >
                {this.state.error}
              </Text>
            </View>
          ) : null}
          
          <Button
            title={"Login"}
            onPress={() => {
              this.setState(
                {
                  error: null,
                  loading: true
                },
                () => this.signUp()
              );
            }}
          />
        </View>
      </Loading>
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
  logoContainer: {},
  logo: {
    height: 100,
    width: 100,
    backgroundColor: "darkcyan",
    borderWidth: 1,
    borderRadius: 500,
    marginBottom: 30
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 250,
    marginBottom: 10,
    paddingLeft: 10
  }
});

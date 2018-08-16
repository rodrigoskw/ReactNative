import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { userService } from "../../services/user-service";
import Loading from "../../shared/components/loading";

export default class Login extends React.Component {
  static navigationOptions = navigation => {
    return {
      header: null
    };
  };

  state = {
    email: "",
    password: "",
    error: null,
    loading: false
  };

  login() {
    userService
      .login(this.state.email, this.state.password)
      .then(credentials => {
        console.log(credentials);
        this.showHideLoading(false);
        this.props.navigation.navigate("ChatStack");
      })
      .catch(error => {
        this.showHideLoading(false);
        alert(error.message);
        console.log(error.message);
      });
  }

  showHideLoading(visible = true) {
    this.setState({
      loading: visible
    });
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
            placeholder={"email"}
            onChangeText={email => {
              this.setState({ email });
            }}
            value={this.state.email}
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
                () => this.login()
              );
            }}
          />
          <Button
            title={"Cadastre-se"}
            onPress={() => {
              this.props.navigation.navigate("SignUpScreen");
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

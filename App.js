import { createStackNavigator, createSwitchNavigator} from 'react-navigation';
import SignUp from './src/pages/SignUp/signup';
import Login from './src/pages/Login/login';
import Chat from './src/pages/chat/chat'

var navegacaoInicial = createStackNavigator({
  LoginScreen: Login,
  SignUpScreen: SignUp
});

var navegacaoChat = createStackNavigator({
  ChatTela: Chat
})

var rotaNavegacao = createSwitchNavigator({
  ChatStack: navegacaoChat,
  NavegacaoInicial: navegacaoInicial
})

export default rotaNavegacao;
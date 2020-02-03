import React, {
    Component
} from 'react';
import KakaoLogin from 'react-kakao-login';
import GoogleLogin from 'react-google-login';
import NaverLogin from 'react-naver-login';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            provider: '',
        }
    }
    // Google Login
    responseGoogle = (res) =>
    {
        console.log(res);
        console.log(res.googleId);
        this.setState({
            id: res.googleId,
            provider: 'google'
        })
    }

    // Kakao Login
    responseKakao = (res) => {
        console.log(res.profile.id);
        this.setState({
            id: res.profile.id,
            provider: 'kakao'
        })
    }
    
    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }

    render(){
        return(
            <div>                
                <GoogleLogin
                    clientId="605769507433-205lj47uj46v02ucrpvbgpck6n2mmed6.apps.googleusercontent.com"
                    render={(props) => <div onClick={props.onClick}>Google Login</div>}
                    buttonText="Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                />


                <KakaoLogin
                    jsKey="d507ecdb10512afbd7bfbf2d5a9f788a"
                    render={(props) => <div onClick={props.onClick}>Kakao Login</div>}
                    onSuccess={this.responseKakao}
                    onFailure={this.responseFail}
                    getProfile="true"
                />
                
                <NaverLogin 
                    clientId="sRE5qhTibiGa_aKigxTN"
                    callbackUrl="http://127.0.0.1:3000"
                    render={(props) => <div onClick={props.onClick}>Naver Login</div>}
                    onSuccess={(naverUser) => console.log(naverUser)}
                    onFailure={this.responseFail}
                />
            </div>
        );
    }
}
export default Login;
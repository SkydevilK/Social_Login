import React, {
    Component
} from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            provider: '',
        }
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
            <Container>
                <KakaoButton
                    jsKey="d507ecdb10512afbd7bfbf2d5a9f788a"
                    buttonText="Kakao"
                    onSuccess={this.responseKakao}
                    onFailure={this.responseFail}
                    getProfile="true"
                />
            </Container>
        );
    }
}
const Container = styled.div`
    dispaly: flex;
    flex-flow: column wrap;
`

const KakaoButton = styled(KakaoLogin) `
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`

export default Login;
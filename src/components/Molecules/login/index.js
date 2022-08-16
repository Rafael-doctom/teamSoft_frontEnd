import * as S from './style.js';

const Login = () => {

    return (
        <>
            <S.Content>
                <S.ContentForm>
                    <form action='/'>
                        <S.InputContainer>
                            <S.Label>E-mail </S.Label>
                            <S.Input type="e-mail" name="uname" required placeholder='Digite seu e-mail...' />
                        </S.InputContainer>
                        <S.InputContainer >
                            <S.Label>Senha </S.Label>
                            <S.Input type="password" name="uname" required placeholder='Digite sua senha...' />
                        </S.InputContainer>
                        <S.ButtonContainer className="button-container">
                            <S.InputSubmit type="submit" value="Entrar" />
                        </S.ButtonContainer>
                    </form>
                </S.ContentForm>
            </S.Content>
        </>
    )
}


export default Login
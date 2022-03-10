import * as S from './style';

import { Logo, ImageProfile, ImageCar } from '../../Atoms/images';

const Navbar = () => {
    return (
        <>
            <S.Navbar>
                <S.Nav>
                    <S.Logo src={Logo} alt="Logo1" />
                    <S.Div>
                        <S.DeliveryInfos>
                            <S.Span>
                                Entrega:
                            </S.Span>
                            <S.Adress>
                                R. Antonio Braune, 222
                            </S.Adress>
                        </S.DeliveryInfos>
                        <S.SearchProducts>
                            <S.Input type="text" placeholder="Busque por estabelecimento ou produtos" />
                        </S.SearchProducts>
                        <S.Profile>
                            <S.ImageProfile src={ImageProfile} alt="Logo1" />
                            Entrar
                        </S.Profile>
                        <S.Cart>
                            <S.ImageCar src={ImageCar} alt="Logo1" />
                            Carrinho
                        </S.Cart>
                    </S.Div>
                </S.Nav>
            </S.Navbar>
        </>
    )
};

export default Navbar;



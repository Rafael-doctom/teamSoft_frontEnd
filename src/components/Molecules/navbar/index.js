import { useState, useEffect } from 'react';

import {
    Link
} from "react-router-dom";

import * as S from './style';

import { Logo, ImageProfile, ImageCar } from '../../Atoms/images';
import Login from '../login';

const Navbar = () => {


    const [dados, setDados] = useState();
    const [inputValue, setInputValue] = useState('')
    const [login, setLogin] = useState(false)

    useEffect(() => {
        fetch("./data.json")
            .then(response => response.json())
            .then(json => setDados(json))
    }, []);


    const teste = (event) => {
        event.preventDefault();
        setInputValue(event.target.value)
    };

    const SearchDatasInput = (event) => {
        event.preventDefault();

        let searchProducts = document.getElementsByClassName("searchProducts");
        let i = 0;
        for (i = 0; i < searchProducts.length; i++) {
            if (!searchProducts[i].innerHTML.includes(inputValue)) {
                searchProducts[i].style.display = "none";
            } else {
                searchProducts[i].style.display = "block";

            }
        }
    };

    const openLogin = () => {
        setLogin(!login)
    }

    return (
        <>
            <S.Container>
                <S.Navbar>
                    <S.Nav>
                        <Link to="/">
                            <S.Logo src={Logo} alt="Logo1" />
                        </Link>
                        <S.Div>
                            {/* <S.DeliveryInfos>
                                <S.Span>
                                    Entrega:
                                </S.Span>
                                <S.Adress>
                                    R. Antonio Braune, 222
                                </S.Adress>
                            </S.DeliveryInfos> */}
                            <S.SearchProducts>
                                <S.Input type="text" placeholder="Busque por estabelecimento ou produtos" onKeyUp={SearchDatasInput} onChange={teste} />
                            </S.SearchProducts>
                            {/* <S.Profile onClick={openLogin}>
                                <S.ImageProfile src={ImageProfile} alt="Logo1" />
                                Entrar
                            </S.Profile> */}
                            {/* {
                                login ? (
                                    <Login />
                                ) : null
                            }
                            <S.Cart>
                                <S.ImageCar src={ImageCar} alt="Logo1" />
                                Carrinho
                            </S.Cart> */}
                        </S.Div>
                    </S.Nav>
                </S.Navbar>
            </S.Container>
        </>
    )
};

export default Navbar;


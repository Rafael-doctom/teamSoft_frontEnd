import { useState } from 'react';

import {
    Link
} from "react-router-dom";

import * as S from './style';

import { Logo } from '../../Atoms/images';

const Navbar = () => {

    const [inputValue, setInputValue] = useState('')

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

    return (
        <>
            <S.Container>
                <S.Navbar>
                    <S.Nav>
                        <Link to="/">
                            <S.Logo src={Logo} alt="Logo1" />
                        </Link>
                        <S.Div>
                            <S.SearchProducts>
                                <S.Input type="text" placeholder="Pesquisar receitas..." onKeyUp={SearchDatasInput} onChange={teste} />
                            </S.SearchProducts>
                        </S.Div>
                    </S.Nav>
                </S.Navbar>
            </S.Container>
        </>
    )
};

export default Navbar;


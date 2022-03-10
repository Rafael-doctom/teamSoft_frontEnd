import { useEffect, useState } from "react";

import * as S from './style';

const Main = () => {

    const [produto, setProducts] = useState()

    useEffect(() => {
        fetch('./data.json', {
            headers: {
                Accept: "application/json"
            }
        }).then(response => response.json()).then(json => setProducts(json))
    }, [])


    return (
        <>

            <S.Posts>
                {produto &&
                    produto.map(item => (
                        <>
                            <>
                                <S.Products>
                                    <S.ImageProduct src={item.imageProduct} alt="imagem hamburger" />
                                    <S.TitleProduct>{item.titleProduct}</S.TitleProduct>
                                    {/* <S.Describe>{item.describe}</S.Describe> */}
                                    <h1>{item.value}</h1>
                                    <S.Button>Adicionar ao carrinho</S.Button>
                                </S.Products>
                            </>
                        </>
                    ))
                }
            </S.Posts>
        </>
    )
}

export default Main;
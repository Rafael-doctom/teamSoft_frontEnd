import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as S from './style';

const Produtos = () => {

    const [produto, setProducts] = useState();

    const { id } = useParams();

    useEffect(() => {
        fetch(`../../../../data.json`, {
            headers: {
                Accept: "application/json"
            }
        }).then(response => response.json()).then(json => setProducts(json))
    }, [])


    return (
        <>
            <S.Posts>

                {
                    id == id ? (
                        <>
                            <h2>AQUI É O ID DO PRODUTO: {id}</h2>
                            {produto &&
                                produto.map(item => (
                                    <>
                                        <S.Products className="searchProducts">
                                            <S.ImageProduct src={item.imageProduct} alt="imagem hamburger" />
                                            <S.TitleProduct>{item.titleProduct}</S.TitleProduct>
                                            <S.Describe>{item.describe}</S.Describe>
                                            <h1>{item.value}</h1>
                                            <h1>
                                                {item.id}
                                            </h1>
                                            <S.Button>Ver Produto</S.Button>

                                        </S.Products>
                                    </>
                                ))
                            }
                        </>
                    ) : <h1>erro</h1>
                }
            </S.Posts>
        </>
    )
}
export default Produtos
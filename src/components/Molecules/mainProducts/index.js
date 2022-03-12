import { useParams } from "react-router-dom";

import * as S from './style';

import DataJson from '../../data/dataProducts.json';

const MainProducts = () => {

    let { id } = useParams();

    var JSON = DataJson;
    var result = JSON.find(item => item.id == id);
    console.log('Error:', result);

    return (
        <>
            <S.Posts>
                <S.ResultProduct id="resultado">
                    <S.ImageProduct src={result.imageProduct} />
                    <S.TitleProduct>{result.titleProduct}</S.TitleProduct>
                    <S.Describe>{result.describe}</S.Describe>
                    <S.DivValues>
                        <S.Value>{result.value}</S.Value>
                        <S.BeforeValue>{result.beforeValue}</S.BeforeValue>
                    </S.DivValues>
                </S.ResultProduct>
                <S.Somar>
                    <S.Card>
                        <S.Infos>
                            <S.Ingredients>Adicionar Ingredientes</S.Ingredients>
                            <S.Span>Até 8 ingredientes.</S.Span>
                        </S.Infos>
                        <S.Teste>
                            <S.IngredientTitle>Queijo cheddar</S.IngredientTitle>
                            <S.FloatSum>
                                <S.Buttons>
                                    -
                                </S.Buttons>
                                <span>
                                    2
                                </span>
                                <S.Buttons>
                                    +
                                </S.Buttons>
                            </S.FloatSum>
                            <S.ValueIngredient>+ R$4,99</S.ValueIngredient>
                        </S.Teste>
                        <S.Teste>
                            <S.IngredientTitle>Cebola crispyr</S.IngredientTitle>
                            <S.FloatSum>
                                <S.Buttons>
                                    -
                                </S.Buttons>
                                <span>
                                    2
                                </span>
                                <S.Buttons>
                                    +
                                </S.Buttons>
                            </S.FloatSum>
                            <S.ValueIngredient>+ R$1,99</S.ValueIngredient>
                        </S.Teste>
                        <S.Teste>
                            <S.IngredientTitle>Molho cheddar</S.IngredientTitle>
                            <S.FloatSum>
                                <S.Buttons>
                                    -
                                </S.Buttons>
                                <span>
                                    2
                                </span>
                                <S.Buttons>
                                    +
                                </S.Buttons>
                            </S.FloatSum>
                            <S.ValueIngredient>+ R$2,50</S.ValueIngredient>
                        </S.Teste>
                        <S.Teste>
                            <S.IngredientTitle>Molho de picanha</S.IngredientTitle>
                            <S.FloatSum>
                                <S.Buttons>
                                    -
                                </S.Buttons>
                                <span>
                                    2
                                </span>
                                <S.Buttons>
                                    +
                                </S.Buttons>
                            </S.FloatSum>
                            <S.ValueIngredient>+ R$1,99</S.ValueIngredient>
                        </S.Teste>
                    </S.Card>
                </S.Somar>
            </S.Posts>
        </>
    )
}

export default MainProducts;
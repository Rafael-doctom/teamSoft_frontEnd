import { useParams } from "react-router-dom";

import * as S from './style';

import DataJson from '../../data/dataProducts.json';
import { useState } from "react";
import RadioButton from "./style";

const MainProducts = ({ checked, ...props }) => {

    var { idPage } = useParams();
    const [radioValue1, setRadio1] = useState(false);
    const [radioValue2, setRadio2] = useState(false);

    var ID = Number(idPage)
    var result = DataJson.find(item => item.id === ID);
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
                        <S.AsRequest>
                            <S.RequestedInfo>
                                <S.RequestQuestion>Precisa de talher?</S.RequestQuestion>
                            </S.RequestedInfo>
                            <S.DivCheck>
                                <S.Label>Sim</S.Label>
                                <RadioButton
                                    value={radioValue1}
                                    checked={radioValue1}
                                    onChange={({ radioValue1 }) => {
                                        console.log('ativado');
                                        setRadio1(radioValue1);
                                    }}
                                />
                            </S.DivCheck>
                            <S.DivCheck>
                                <S.Label>Não</S.Label>
                                <RadioButton
                                    value={radioValue2}
                                    checked={radioValue2}
                                    onChange={({ radioValue2 }) => {
                                        console.log('ativado');
                                        setRadio2(radioValue2);
                                    }}
                                />
                            </S.DivCheck>

                        </S.AsRequest>
                    </S.Card>

                </S.Somar>
            </S.Posts>
        </>
    )
}

export default MainProducts;
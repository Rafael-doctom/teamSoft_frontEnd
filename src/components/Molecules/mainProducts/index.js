import { useParams } from "react-router-dom";

import * as S from './style';

import DataJson from '../../data/dataProducts.json';
import { useState } from "react";
import RadioButton from "./style";

const MainProducts = ({ checked, ...props }) => {

    var { idPage } = useParams();
    const [radioValue1, setRadio1] = useState(false);
    const [radioValue2, setRadio2] = useState(false);
    const [modal, setModal] = useState(false);

    var ID = Number(idPage)
    var result = DataJson.find(item => item.id === ID);
    console.log('Error:', result);

    const handleClickProductsAdded = () => {
        setModal(!modal)
    }

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
            </S.Posts>
           
        </>
    )
}

export default MainProducts;
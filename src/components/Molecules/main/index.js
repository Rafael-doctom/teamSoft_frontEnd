import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from './style';

const Main = () => {
    const [produto, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productValue, setProductValue] = useState('');

    useEffect(() => {
        fetch('./dataProducts.json').then(response => response.json()).then(json => setProducts(json))
    }, []);

    const handleAddProduct = () => {
        if (
            productName.trim() === '' ||
            productDescription.trim() === '' ||
            productImage.trim() === '' ||
            productValue.trim() === ''
        ) {
            return;
        }

        const newProduct = {
            imageProduct: productImage,
            titleProduct: productName,
            describe: productDescription,
            value: productValue,
            id: produto.length + 1 // Gera um ID único (somente para exemplo)
        };

        setProducts([...produto, newProduct]);
        setProductName('');
        setProductDescription('');
        setProductImage('');
        setProductValue('');
    };

    const handleDeleteProduct = (productId) => {
        console.log('Deleting product with ID:', productId);
        const updatedProducts = produto.filter(item => item.id !== productId);
        console.log('Updated products:', updatedProducts);
        setProducts(updatedProducts);
    };
    
    

    return (
        <>
            <S.Container>
                {/* Formulário de criação de produtos */}
                <S.FormWrapper>
                    <S.Input
                        type="text"
                        placeholder="Nome da receita"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <S.Input
                        placeholder="Descrição"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />
                    <S.Input
                        type="text"
                        placeholder="URL da imagem"
                        value={productImage}
                        onChange={(e) => setProductImage(e.target.value)}
                    />
                    <S.Input
                        type="text"
                        placeholder="Valor"
                        value={productValue}
                        onChange={(e) => setProductValue(e.target.value)}
                    />
                    <S.Buttonadd onClick={handleAddProduct}>Adicionar Receita</S.Buttonadd>
                </S.FormWrapper>

                {/* Listagem de produtos */}
                <S.Posts>
                    {produto &&
                        produto.map(item => (
                            <S.Products key={item.id} className="searchProducts">
                                <S.ImageProduct src={item.imageProduct} alt="imagem hamburger" />
                                <S.TitleProduct>{item.titleProduct}</S.TitleProduct>
                                <S.Describe>{item.describe}</S.Describe>
                                <h1>{item.value}</h1>
                                {/* <Link to={`/produtos/${item.id}`}>
                                    <S.Button>Ver  {item.titleProduct}</S.Button>
                                </Link> */}
                                <S.ButtonExluir onClick={() => handleDeleteProduct(item.id)}>Excluir Receita</S.ButtonExluir>
                            </S.Products>
                        ))}
                </S.Posts>
            </S.Container>
        </>
    )
}

export default Main;

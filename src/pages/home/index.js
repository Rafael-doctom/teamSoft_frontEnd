import Main from "../../components/Molecules/main/index";
import Navbar from "../../components/Molecules/navbar/index";
import GlobalStyle from "../../globalStyle";

const Home = () => {
    return (
        <>
            <GlobalStyle />

            <Navbar />
            <Main />
        </>
    )
};

export default Home;
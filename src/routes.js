import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/home";
import Produtos from "./pages/produtos";


const MainRoutes = () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="produtos/:idPage" element={<Produtos />} />
            </Routes>
        </BrowserRouter>,
        document.getElementById("root")
    )
}

export default MainRoutes
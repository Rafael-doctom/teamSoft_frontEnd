import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Home from './pages/home';

import Routes from './routes'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
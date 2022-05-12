import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './styles/Global.Styled';
import { Container } from './styles/Container.Styled';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles/>
        <Container>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} /> 
          </Routes>
          <Footer/>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;

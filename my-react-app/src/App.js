import './App.css';
import { Aboutpage } from './about/about';
import { MainContainer } from './raffweb/raff';
import { Container } from './originals/originals';
import { Artbyraff } from './art/art';
import { Header } from './header/header';
// import { Scruptures } from "./scrupture/scrupture";
import { Banerpage } from './banner/banner';
import { Route, Routes } from 'react-router-dom';
import { Formpage } from './formpage/form';
// import { Customizedpage } from './customized/cutomized';
import { GlobalStyles } from './App.styled';
// import { Sculpture } from "./Sculptures/sculptures.styled";
import { Sculpturesdata } from './Sculptures/sculptures';
import { Whiteline } from './Scrollline/line';
import Customized from './customized/customized';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header/>
      <Formpage/> 
      <Customized/>
      {/* <Customizedpage/> */}
      {/* <Aboutpage /> */}
      {/* <Sculpturesdata/> */}
      <Whiteline />
      <div>
        <Routes>
          <Route path="/" element={<Banerpage />}></Route>

          <Route path="about" element={<Aboutpage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

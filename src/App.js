import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Routes, Route } from "react-router-dom";
import { Main } from './components/Main/Main';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={
          <div>
            <Header/>
            <Sidebar/>
            <Main/>
          </div>
        }>
          
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<div>About</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

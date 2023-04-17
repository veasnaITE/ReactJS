import './App.css';
import FooterApp from './components/FooterApp';
//using name export
// import {Gallery} from './components/Gallery';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
      <div>
        <Header/>
        <Main/>
        <FooterApp />
      </div>
  );
}

export default App;

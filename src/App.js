import './App.css';
import Header from '../src/pageSections/Header';
import Navigation from '../src/pageSelections/Navigation';
import Main from '../src/pageSelections/Main';
import Footer from '../src/pageSelections/Footer';

function App() {
  return (
    <div className="App">
      <Header>
        <Navigation>
        </Navigation>
      </Header>
      <Main>
      </Main>
      <Footer>
      </Footer>
    </div>
  );
}

export default App;

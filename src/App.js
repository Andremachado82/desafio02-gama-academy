
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header/Header'
// import Section from './components/Section'
// import {DataProvider} from './components/Context'

export default function App() {
  return (
    <div className="app">
    <Router>
      <Header />
      {/* <Section /> */}
    </Router>
  </div>
  );
}


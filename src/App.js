import CounDetailComp from './Components/CounDetailComp';
import CountriesComp from './Components/CountriesComp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContextComp from './Components/ContextComp';
function App() {
  return (
    <Router>
      <ContextComp>
        <Routes>
          <Route path='/' element={<CountriesComp />} />
          <Route path='/CountryDetails/:oneCon' element={<CounDetailComp />} />
        </Routes>
      </ContextComp>
    </Router>
  );
}

export default App;

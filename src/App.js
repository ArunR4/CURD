import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Student from './component/Student';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateData from './component/CreateData';
import UpdateData from './component/UpdateData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student/>}></Route>
          <Route path='/create' element={<CreateData/>}></Route>
          <Route path='/update/:id' element={<UpdateData/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

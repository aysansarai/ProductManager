import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import EditPerson from './components/EditPerson';
function App() {
  return (
    <div className="App">
      <h1> Product Manager</h1>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Detail />} path="/products/:id" />
        <Route element={<EditPerson />} path="/products/:id/edit" />
      </Routes>

    </div>
  );
}
export default App;


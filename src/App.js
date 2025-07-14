import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewTodo from './components/ViewTodo';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import DeleteTodo from './components/DeleteTodo';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewTodo/>} />
          <Route path="/Add" element={<AddTodo />} />
          <Route path="/Search" element={<SearchTodo />} />
          <Route path="/Delete" element={<DeleteTodo />} />
        </Routes>
      </BrowserRouter>
  );
}


export default App;

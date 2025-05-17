import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Course from './Components/Course';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}exact/>
        <Route path='/about' element={<About/>}exact/>
        <Route path='/course' element={<Course/>}exact/>
        <Route path='/blog' element={<Blog/>}exact/>
        <Route path='/contact' element={<Contact/>}exact/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import Header from './Component/Header/Header';
import { Routes, Route,} from "react-router-dom";
import Home from './Component/Pages/Home/Home';
import Account from './Component/Pages/Account/Account';
import Resume01 from './Component/Pages/Resume/Resume01';
import Form from './Component/Form/Form';
import Error from './Component/Pages/Error/Error';
import Footer from './Component/Footer/Footer';
import GetStarted from './Component/Pages/GetStarted/GetStarted';
import Download from './Component/Download/Download';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/resume01" element={<Resume01 />} />
      <Route path="/form01" element={<Form />} />
      <Route path="/getStarted" element={<GetStarted />} />
      <Route path="/download" element={<Download />} />
      <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

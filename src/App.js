import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css';

import UsersList from "./components/pages/user/UsersList";
import CreateUser from "./components/pages/user/CreateUser";
import RetrieveUser from "./components/pages/user/RetrieveUser";
import EditUser from "./components/pages/user/EditUser";
import RemoveUser from "./components/pages/user/RemoveUser";
import Contact from "./components/pages/static/Contact";
import AboutUs from "./components/pages/static/AboutUs";

/*const BlueText = styled.div`
  color: blue;
`;

const WhiteText = styled.div`
  color: #fff;
`;*/

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/:userId" element={<RetrieveUser />} />
          <Route path="/edit/:userId" element={<EditUser />} />
          <Route path="/remove/:userId" element={<RemoveUser />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
{/*import 'react-toastify/dist/ReactToastify.css';*/}
export default App;



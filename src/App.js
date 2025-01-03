import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css';

import UsersList from "./components/user/UsersList";
import CreateUser from "./components/user/CreateUser";
import RetrieveUser from "./components/user/RetrieveUser";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}
{/*import 'react-toastify/dist/ReactToastify.css';*/}
export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./component/UserList";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/" element={<UserList/>}></Route>
        <Route path="/add" element={<AddUser/>}></Route>
        <Route path="/edit/:id" element={<EditUser/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

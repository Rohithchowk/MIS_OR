import {BrowserRouter, Routes,Route} from "react-router-dom";
import ManageBlocksAndDepartments from "./components/ManageBlocksDepartments";
import AddDepartmentForm from "./components/DepartmentForm";
import AddBlockForm from "./components/BlockAdd";
import FilterSearch from "./components/FilterSearch";
import FilterSearchM from "./components/StaticFilter";
import StickyHeadTable from "./components/Tablepage";
import ExcelGenerator from "./components/XcelGenerator";
import ProperOR from "./components/ProperOR";
import FilterSearchOR from "./components/FilterSearchOR";

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path ='/' element={<FilterSearchOR/>}/>
            <Route path ='/Filter' element={<FilterSearchM/>}/>
            <Route path="/OR" element={<ProperOR/>}/>
         </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;

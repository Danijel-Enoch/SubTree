import { Home } from './pages/Home';
import Register from './pages/Register';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreatePlan from './components/CreatePlan';
import CreateSpecialPlan from './components/CreateSpecialPlan';
import GetPlanDetails from './components/GetPlanDetails';


function App() {
  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path={"/about"} element={<Home/>}/>
      <Route path={"/"} element={<Register/>}/>
      <Route path={"/create-plan"} element={<CreatePlan/>}/>
      <Route path={"/create-special-plan"} element={<CreateSpecialPlan/>}/>
      <Route path={"/get-plan-details"} element={<GetPlanDetails/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
    
  );
}

export default App;

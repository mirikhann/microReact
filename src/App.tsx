import {FC} from 'react'
import './App.css'
import './assets/main.css'
import {Route, Routes} from "react-router-dom";
import SearchCustomer from "./components/searchCustomer";
import Task from './components/task';
import RegistrationForm from "./components/registrationForm";
const App:FC = ()=> {
  return (
    <>
        <Routes>
            <Route path="/task/:id" element={<Task/>}/>
            <Route path="/task/:id/:customStage" element={<Task/>}/>
            <Route path="/searchCustomer" element={<SearchCustomer guarantor={false}/>}/>
            <Route path="/customerData" element={<RegistrationForm/>}/>
        </Routes>
    </>
  )
}

export default App

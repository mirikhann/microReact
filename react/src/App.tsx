import {FC} from 'react'
import './App.css'
import './assets/main.css'
import {Route, Routes} from "react-router-dom";
import SearchCustomer from "./components/searchCustomer";
import Task from './components/task';
const App:FC = ()=> {
  return (
    <>
        <Routes>
            <Route path="/task/:id" element={<Task/>}/>
            <Route path="/task/:id/:customStage" element={<Task/>}/>
            <Route path="/searchCustomer" element={<SearchCustomer guarantor={false}/>}/>
        </Routes>
    </>
  )
}

export default App

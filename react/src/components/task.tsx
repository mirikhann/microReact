import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getTaskById} from "../models/taskModel";
import {TaskEnum} from "../enum/taskEnum";
import AppForm from "./task/appForm";
import CreditForm from "./task/creditForm";
import Navbar from "./navbar";
import SearchCustomer from "./searchCustomer";

const Task:FC = () => {
    const {id,customStage} = useParams();
    const task = getTaskById(id);
    const [stageCond,setStageCond] = useState();
    const [content,setContent] = useState("");

    useEffect(()=>{
        let stage = Number(customStage)<=Number(task.stageId) ? Number(customStage) : Number(task.stageId);
        setStageCond(Number(stage))
    },[customStage])

    useEffect(()=>{
        let contentData;
        switch (stageCond) {
            case TaskEnum.AppForm :
                contentData = <AppForm taskData={task} setStageCond={setStageCond}/>;
                break;
            case TaskEnum.CreditForm:
                contentData = <CreditForm taskData={task} setStageCond={setStageCond} />;
                break;
            case TaskEnum.GuarantorAdd:
                contentData = <SearchCustomer taskData={task} setStageCond={setStageCond} guarantor={true} />;
                break;
            default:
                contentData = <div style={{marginTop:"10px"}}>Sizin bu səhifəyə icazəniz yoxdur</div>;
        }
        setContent(contentData)
    },[stageCond])

  return (<>
      <Navbar task={task} stageCond={stageCond}/>
      {content}
    </>);


}

export default Task;
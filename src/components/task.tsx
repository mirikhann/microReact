import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from "../models/taskModel";
import { TaskEnum } from "../enum/taskEnum";
import AppForm from "./task/appForm";
import CreditForm from "./task/creditForm";
import Navbar from "./navbar";
import SearchCustomer from "./searchCustomer";
import { TaskData } from "../models/taskModel";

interface RouteParams {
    id: string;
    customStage: string;
}

const Task: FC = () => {
    const { id, customStage } = useParams<RouteParams>();
    const task: TaskData = getTaskById(id);
    const [stageCond, setStageCond] = useState<number | undefined>();
    const [content, setContent] = useState<JSX.Element | null>(null);

    useEffect(() => {
        let stage = Number(customStage) <= Number(task.stageId) ? Number(customStage) : Number(task.stageId);
        setStageCond(stage);
    }, [customStage, task]);

    useEffect(() => {
        let contentData: JSX.Element;
        switch (stageCond) {
            case TaskEnum.AppForm:
                contentData = <AppForm taskData={task} setStageCond={setStageCond} />;
                break;
            case TaskEnum.CreditForm:
                contentData = <CreditForm taskData={task} setStageCond={setStageCond} />;
                break;
            case TaskEnum.GuarantorAdd:
                contentData = <SearchCustomer taskData={task} setStageCond={setStageCond} guarantor={true} />;
                break;
            default:
                contentData = <div style={{ marginTop: "10px" }}>Sizin bu səhifəyə icazəniz yoxdur</div>;
        }
        setContent(contentData);
    }, [stageCond, task]);

    return (
        <>
            <Navbar task={task} stageCond={stageCond} />
            {content}
        </>
    );
};

export default Task;

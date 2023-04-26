import { useCallback, useState } from "react";
import { SlPeople, SlArrowDownCircle } from "react-icons/sl";
import { Handle, Position, useReactFlow } from "reactflow";
import { transformUsersDataToReactFlowNodes } from "../../utils/sample-data";

import style from './CustomNode.module.css'

const CustomNodes = ({ data, isConnectable }) => {
    const [show, setShow] = useState(false)
    const reactFlowInstance = useReactFlow();
    const handleClick = useCallback(() => {
        if (!show){
            reactFlowInstance.addNodes(transformUsersDataToReactFlowNodes(data.mySuccessors));
        } else {
            reactFlowInstance.deleteElements({nodes: transformUsersDataToReactFlowNodes(data.mySuccessors)})
        }
        setShow(show=>!show)
    }, [show]);
    return (
        <div className={style.customNode}>
            <div className={style.customNode__content}>
                {data.id !==1 && <Handle
                    type="target"
                    position={Position.Top}
                    className={style.handle}
                    onConnect={(params) => console.log("handle onConnect", params)}
                    isConnectable={isConnectable}
                />}
                <div style={{paddingRight: '10px'}}>
                    {data.protect === 1 && <div className={style.protectOne}></div>}
                    {data.protect === 2 && <div className={style.protectTwo}></div>}
                    {data.protect === 3 && <div className={style.protectThree}></div>}
                    {data.protect === 4 && <div className={style.protectFour}></div>}
                    <img className={style.photo} src="https://placekitten.com/100/100" />
                </div>
                <div>
                    <div><b>{data.positionName}</b></div>
                    <div><i>{data.name}</i></div>
                    <div>{data.birthday}</div>
                    <div>{data.scientist}</div>
                </div>

                <Handle
                    type="source"
                    position={Position.Bottom}
                    id="b"
                    style={{ top: "auto", background: "#555" }}
                    isConnectable={isConnectable}
                />
            </div>
            <div className={style.customNode__toolbar}>
                {data.mySuccessors &&
                    <div style={{cursor:'pointer'}}>
                        <SlArrowDownCircle/>
                    </div>

                }
                {data.showButton &&
                    <div style={{cursor:'pointer'}}>
                        <SlPeople onClick={handleClick} />
                    </div>}
            </div>
        </div>
    );
};

export default CustomNodes;
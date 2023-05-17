import {useCallback, useEffect, useRef, useState} from "react";
import { SlPeople, SlArrowDownCircle, SlMenu } from "react-icons/sl";
import { Handle, Position, useReactFlow } from "reactflow";
import {transformUsersDataToReactFlowNodes, userData} from "../../utils/sample-data";

import UserInfo from "./userInfo/UserInfo";

import style from './CustomNode.module.css'

const CustomNodes = ({ data, isConnectable }) => {
    const [showInfo, setShowInfo] = useState(false);
    const [showSuccessors, setShowSuccessors] = useState(false);
    const [showChildren, setShowChildren] = useState(false);
    const [tbOpen,setTbOpen] = useState(false);
    const reactFlowInstance = useReactFlow();
    const [movePos, setMovePos] = useState(false)
    const handleShowInfoClick = useCallback(() => {
        setShowInfo(!showInfo)
    }, [showInfo])
    const handleSucceessorsClick = useCallback(() => {
        if (!showSuccessors){
            reactFlowInstance.addNodes(transformUsersDataToReactFlowNodes(data.mySuccessors));
            // reactFlowInstance.setNodes(transformUsersDataToReactFlowNodes(data,undefined, movePos))
        } else {
            reactFlowInstance.deleteElements({nodes: transformUsersDataToReactFlowNodes(data.mySuccessors,undefined, movePos)})
        }
        setMovePos(movePos=>!movePos)
        setShowSuccessors(showSuccessors=>!showSuccessors)
    }, [showSuccessors]);

    const handleSubordinatesClick = useCallback(() => {
        if (!showChildren){
            reactFlowInstance.addNodes(transformUsersDataToReactFlowNodes(data.mySubordinates));
        } else {
            reactFlowInstance.deleteElements({nodes: transformUsersDataToReactFlowNodes(data.mySubordinates)})
        }
        setShowChildren(showChildren=>!showChildren)
    }, [showChildren]);

    const handleTbClick = () => {
        setTbOpen(!tbOpen)
    }

    return (
        <>
            <div>
                {data.protect === 1 && <div className={style.protectOne}></div>}
                {data.protect === 2 && <div className={style.protectTwo}></div>}
                {data.protect === 3 && <div className={style.protectThree}></div>}
                {data.protect === 4 && <div className={style.protectFour}></div>}
            </div>
            <div>
                {!data.readyToWork && <div className={style.company}>Компания</div>}
                <div className={data.id !== 1 ? style.customNode:style.customNode__main} onClick={handleTbClick}>
                    <div className={style.customNode__content}>
                        {data.id !==1 && <Handle
                            type="target"
                            position={Position.Top}
                            className={style.handle}
                            onConnect={(params) => console.log("handle onConnect", params)}
                            isConnectable={isConnectable}
                        />}
                        <div className={style.photoBlock}>
                            <img className={style.photo} src="https://yakovgo.gosuslugi.ru/netcat_files/265/2549/headshot.jpg" />
                        </div>
                        <div style={{display:'flex',flexDirection:'column', justifyContent:'space-around'}}>
                            {data.readyToWork && <div style={{paddingBottom: '5px'}}>Готов через {data.readyToWork} лет </div>}
                            <div ><b>{data.positionName}</b></div>
                            <div ><i>{data.name}</i></div>
                            <div >{data.birthday}</div>
                            <div >{data.scientist}</div>
                            {data.ukr && <div >УКР "{data.ukr}"</div>}
                        </div>
                        <Handle
                            type="source"
                            position={Position.Bottom}
                            id="b"
                            className={style.handle}
                            isConnectable={isConnectable}
                        />
                    </div>
                    {tbOpen &&
                        <div className={style.customNode__toolbar}>
                            <ul>
                                    <li onClick={handleShowInfoClick}>
                                        <SlMenu/>
                                        <span style={{marginLeft:'10px'}}>Подробная информация</span>
                                    </li>
                                {data.mySuccessors &&
                                    <li onClick={handleSubordinatesClick}>
                                        <SlArrowDownCircle/>
                                        <span style={{marginLeft:'10px'}}>Показать подчиненных</span>
                                    </li>
                                }
                                {data.showButton &&
                                    <li onClick={handleSucceessorsClick}>
                                        <SlPeople />
                                        <span style={{marginLeft:'10px'}}>Показать преемников</span>
                                    </li>
                                }
                            </ul>
                        </div>
                    }
                    {showInfo && <UserInfo data={data} showInfo={showInfo}/>}
                </div>
            </div>
        </>
    );
};

export default CustomNodes;
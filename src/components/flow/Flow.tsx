import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import ReactFlow, {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Connection,
    Controls,
    Edge,
    EdgeChange,
    MiniMap,
    NodeChange,
    useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";

import CustomNodes from "../custom/CustomNode";

import style from './index.module.css'
import { successorsData, transformUsersDataToReactFlowNodes, userData } from "../../utils/sample-data";

const nodeTypes = {
    myNode: CustomNodes,
};

let nodeId = 0;

const Flow = () => {
    const items = transformUsersDataToReactFlowNodes(userData, successorsData);
    const [nodes, setNodes] = useState(items);
    const [edges, setEdges] = useState([]);
    const shouldRunEffect = useRef(nodes)

    const [isDraggable, setIsDraggable] = useState(false);

    const reactFlowInstance = useReactFlow();
    const onClick = useCallback(() => {
        const id = `${++nodeId}`;
        const newNode = {
            id,
            position: {
                x: Math.random() * 500,
                y: Math.random() * 500,
            },
            data: {
                label: `Node ${id}`,
            },
        };
        reactFlowInstance.addNodes(newNode);
    }, []);



    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const onConnect = useCallback(
        (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)),
        []
    );
    // const handleNodeClick = (e, node) => {
    //     const findChildren = nodes.filter((item)=>item?.data?.parentId === node.data.id)
    //     if (!findChildren.length){
    //         const itemChildren = [...node.data.children.map(( item, i)=>{
    //             return{
    //                 id: item.id,
    //                 type: nodeTypes,
    //                 data: {label: item.name, children: item.children, parent: item.parent},
    //                 position: { x: node.position.x+200, y:  i===0? node.position.y : node.position.y+i*100 },
    //                 sourcePosition: 'bottom',
    //                 targetPosition: 'top'
    //             }
    //         })]
    //         setEdges([
    //             ...edges,
    //             ...itemChildren.map((item)=>{
    //                 return {
    //                     id: String(parseInt(String(Math.random() ))),
    //                     source: item?.data?.parent,
    //                     target: item?.id,
    //
    //                 }
    //             })
    //         ])
    //         setNodes(nodes.concat(itemChildren))
    //     }else{
    //         setNodes([
    //             ...nodes.filter((item)=>item?.data?.parent!==node.id)
    //         ])
    //         setEdges([
    //             ...edges.filter((item)=>node.id!==item.source)
    //         ])
    //     }
    // }
    // const handleNodeClick = (event, node) => {
    //     event.preventDefault();
    //     setPopUpMenu({ x: event.clientX, y: event.clientY });
    //     setShowMenu(!showMenu)
    // };

    const latestNodes = useMemo(() => nodes, [nodes]);

    useLayoutEffect(() => {
        const newEdges = [...edges];
        latestNodes.forEach((node1) => {
            latestNodes.forEach((node2) => {
                if (node1.id !== node2.id) {
                    if (node1.id == node2.data.parentId) {
                        const newEdge = { id: uuidv4(), source: node1.id, target: node2.id, type: 'smoothstep', style:{stroke:'#003274'}};
                        newEdges.push(newEdge);
                    }
                }
            });
        });
        setEdges(newEdges);
    }, [shouldRunEffect]);
    return (
        <div className={style.mainWindow}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                nodesDraggable={isDraggable}
                zoomOnDoubleClick={false}
                fitView
            >

                <MiniMap/>
                <Background/>
                <Controls/>
            </ReactFlow>
            <div style={{
                    position: "absolute",
                    zIndex: "10",
                    top: "10px",
                    left: "10px",
                }}>
                    <div>
                        <label htmlFor="draggable">
                            <input
                                id="draggable"
                                type="checkbox"
                                checked={isDraggable}
                                onChange={(event) => setIsDraggable(event.target.checked)}
                                className="react-flow__draggable"
                            />
                            nodesDraggable
                        </label>
                    </div>
                    <button
                        onClick={onClick}
                        className="btn-add"
                    >
                        add node
                    </button>
            </div>
            
        </div>
    );
};

export default Flow;
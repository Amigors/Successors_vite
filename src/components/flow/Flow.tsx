import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { SlPlus } from "react-icons/sl";
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

import CustomNodes from "../custom/Node/CustomNode";
import ConnectionLine from "../custom/connectionLines/CustomLine"

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
    const [snapToGrid, setSnapToGrid] = useState(false);
    const shouldRunEffect = useRef(nodes)

    const [isDraggable, setIsDraggable] = useState(false);

    const reactFlowInstance = useReactFlow();
    const onClick = useCallback(() => {
        const id = `${++nodeId}`;
        const newNode = {
            id,
            type:'myNode',
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

    function renderHelperLines() {
        if (!isDraggable) {
            return null;
        }

        return (
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: '50%',
                    borderLeft: '2px dashed rgba(0, 0, 0, 0.2)',
                    pointerEvents: 'none',
                }}
            />
        );
    }

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

    const [helperLines, setHelperLines] = useState([]);
    const onNodeDrag = (event, node) => {
        const { x, y } = node.position;
        const nodesLine = nodes.filter(el => el.id !== node.id);
        const xLines = nodesLine.filter(el => Math.abs(el.position.x - x) < 10);
        const yLines = nodesLine.filter(el => Math.abs(el.position.y - y) < 10);
        setHelperLines([...xLines, ...yLines]);
        console.log(helperLines)
    };

    const onNodeDragStop = (event, node) =>{
        setHelperLines([])
    }


    return (
        <div className={style.mainWindow}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                connectionLineComponent={ConnectionLine}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                nodesDraggable={isDraggable}
                zoomOnDoubleClick={false}
                onNodeDrag={onNodeDrag}
                onNodeDragStop={onNodeDragStop}
                fitView
            >
                {helperLines.map(node => (
                    <div
                        key={node.id}
                        style={{
                            position: 'absolute',
                            left: node.position.x,
                            top: node.position.y,
                            width: '100vw',
                            height: '1px',
                            background: 'red',
                            pointerEvents: 'none',
                            zIndex: 10,
                        }}
                    />
                ))}
                <MiniMap/>
                <Background variant='lines'/>
                <Controls/>
            </ReactFlow>
            <div className={style.menubar}>
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

                    <div onClick={onClick} className="btn-add">
                        <SlPlus />
                    </div>
            </div>
            
        </div>
    );
};




export default Flow;
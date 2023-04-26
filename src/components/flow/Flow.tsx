import { useCallback, useEffect, useMemo, useState } from "react";
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
} from "react-flow-renderer";
import "react-flow-renderer/dist/style.css";

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

    const [isDraggable, setIsDraggable] = useState(true);

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

    const latestNodes = useMemo(() => nodes, [nodes]);

    useEffect(() => {
        const newEdges = [...edges];
        latestNodes.forEach((node1) => {
          latestNodes.forEach((node2) => {
            if (node1.id !== node2.id) {  
              if (node1.id == node2.data.parentId) {
                const newEdge = { id: uuidv4(), source: node1.id, target: node2.id, type: 'smoothstep' };
                newEdges.push(newEdge);
              }
            }
          });
        });
        setEdges(newEdges);
      }, [latestNodes]);

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
                fitView
            >
                <MiniMap/>
                <Background color="#ccc" variant='cross'/>
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
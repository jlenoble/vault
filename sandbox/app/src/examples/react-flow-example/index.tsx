/**
 * Basic example using React Flow
 *
 * Adapted from various examples from the [React Flow](https://reactflow.dev/) documentation
 *
 * [MIT License](https://opensource.org/license/mit/) Copyright (c) 2019-2023 webkid GmbH
 */

import { useState, useCallback, useMemo } from "react";
import type { ReactElement, ChangeEvent } from "react";
import ReactFlow, {
    ReactFlowProvider,
    useNodesState,
    useEdgesState,
    addEdge,
    Controls,
    MiniMap,
    Background,
    Panel,
    BackgroundVariant,
    Handle,
    Position,
} from "reactflow";
import type { Connection, Edge, XYPosition } from "reactflow";

import MockLayout from "../../MockLayout";

import "reactflow/dist/style.css";

interface NodeData {
    label?: string | ReactElement;
    value?: number;
}

interface NodeProps {
    id: string;
    type?: string;
    data: NodeData;
    targetPosition?: Position;
    position: XYPosition;
}

const initialNodes: Array<NodeProps> = [
    {
        id: "1",
        type: "input",
        data: { label: "Input Node" },
        position: { x: 250, y: 25 },
    },
    {
        id: "2",
        // you can also pass a React component as a label
        data: { label: <div>Default Node</div> },
        position: { x: 100, y: 125 },
    },
    {
        id: "3",
        type: "output",
        data: { label: "Output Node" },
        position: { x: 250, y: 250 },
    },
    {
        id: "node-1",
        type: "textUpdater",
        position: { x: 0, y: 0 },
        data: { value: 123 },
    },
    {
        id: "node-2",
        type: "output",
        targetPosition: Position.Top,
        position: { x: 0, y: 200 },
        data: { label: "node 2" },
    },
    {
        id: "node-3",
        type: "output",
        targetPosition: Position.Top,
        position: { x: 200, y: 200 },
        data: { label: "node 3" },
    },
];

const edgeLabel = "leads to";
const initialEdges = [
    { id: "e1-2", source: "1", target: "2", label: edgeLabel },
    { id: "e2-3", source: "2", target: "3", label: edgeLabel, animated: true },
    { id: "edge-1", source: "node-1", sourceHandle: "a", target: "node-2" },
    { id: "edge-2", source: "node-1", sourceHandle: "b", target: "node-3" },
];

const nodeColor = (node: { type?: string }) => {
    switch (node.type) {
        case "input":
            return "#6ede87";
        case "output":
            return "#6865A5";
        default:
            return "#ff0072";
    }
};

const TextUpdaterNode = () => {
    const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
        console.log(evt.target.value);
    }, []);

    return (
        <>
            <Handle type="target" position={Position.Top} />
            <div className="flex flex-col">
                <label htmlFor="text">Text:</label>
                <input id="text" name="text" onChange={onChange} className="nodrag" />
            </div>
            <Handle type="source" position={Position.Bottom} id="a" style={{ left: 50 }} />
            <Handle type="source" position={Position.Bottom} id="b" style={{ left: 150 }} />
        </>
    );
};

const TreeDesigner = () => {
    const [nodes, _setNodes, onNodesChange] = useNodesState<NodeData>(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const [variant, setVariant] = useState(BackgroundVariant.Dots);
    const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    return (
        <ReactFlowProvider>
            <div className="h-full w-full">
                <ReactFlow
                    id="default-tree-provider"
                    nodeTypes={nodeTypes}
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView
                >
                    <Controls />
                    <MiniMap nodeColor={nodeColor} />
                    <Background variant={variant} gap={12} size={1} />
                    <Panel position="top-left">
                        <div>variant:</div>
                        <button
                            className="mx-2 bg-slate-500/80"
                            onClick={() => setVariant(BackgroundVariant.Dots)}
                        >
                            dots
                        </button>
                        <button
                            className="mx-2 bg-slate-500/80"
                            onClick={() => setVariant(BackgroundVariant.Lines)}
                        >
                            lines
                        </button>
                        <button
                            className="mx-2 bg-slate-500/80"
                            onClick={() => setVariant(BackgroundVariant.Cross)}
                        >
                            cross
                        </button>
                    </Panel>
                </ReactFlow>
            </div>
        </ReactFlowProvider>
    );
};

export function App() {
    return (
        <MockLayout>
            <TreeDesigner />
        </MockLayout>
    );
}

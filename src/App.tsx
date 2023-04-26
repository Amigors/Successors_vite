import { ReactFlowProvider } from "reactflow"
import Flow from "./components/flow/Flow"

function App() {

  return (
      <ReactFlowProvider>
        <Flow/>
      </ReactFlowProvider>
  )
}


export default App

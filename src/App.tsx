import { ReactFlowProvider } from "reactflow"
import Flow from "./components/flow/Flow"
import UserInfo from "./components/custom/userInfo/UserInfo";

function App() {

  return (
      <>
        <ReactFlowProvider>
            <Flow/>
        </ReactFlowProvider>
      </>
  )
}


export default App

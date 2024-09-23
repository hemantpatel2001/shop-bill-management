import { Provider } from "react-redux"
import 'react-toastify/dist/ReactToastify.css';
import { PageRoute } from "./PageRoute/PageRoute"
import store from "./Slice/store"
import { ToastContainer } from "react-toastify";



const App = () => {
  return (
    <div>
      <Provider store={store} >
      <PageRoute/>
      </Provider>
<ToastContainer/>
    </div>
  )
}

export default App
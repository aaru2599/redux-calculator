import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './feature/store.js'
import Calculator from './feature/Calculator/Calculator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <Calculator/>
  </Provider>,
)

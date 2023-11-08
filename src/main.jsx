import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './feature/store.js'
import Product from './feature/Product/Product.Layout.jsx'
import CartLayout from './feature/Product/Cart/Cart.Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div className='d-flex'>
      <div style={{flex:"50%"}}>
        <Product />
      </div>
      <div style={{flex:"50%"}}>
        <CartLayout />
      </div>
    </div>
  </Provider>
)

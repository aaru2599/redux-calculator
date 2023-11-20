import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './feature/store.js'
import Product from './feature/Product/Product.Layout.jsx'
import CartLayout from './feature/Product/Cart/Cart.Layout.jsx'
import Counter from './feature/Counter/Counter.Layout.jsx'
import CalculatorV2Layout from './feature/CalculatorV2/CalculatorV2.Layout.jsx'
import ProductsLayout from './feature/Products/Products.Layout.jsx'
import UserLayout from './feature/UsersData/UserLayout.jsx'
import NasaDataLayout from './feature/NasaApi/NasaData.Layout.jsx'
const cartStyle={
  flex:"50%",
  position:"stickey"
  
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  //   <div className='d-flex'>
  //     <div style={{flex:"50%"}}>
  //       <Product />
  //     </div>
  //     <div style={cartStyle}>
  //       <CartLayout />
  //     </div>
  //   </div>
  // </Provider>
  <Provider store={store}>
    <NasaDataLayout/>
  </Provider>
)

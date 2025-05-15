import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>   
      <App />
     </Provider>
    
  </StrictMode>,
)

// steps :
// 1.create store
// 2.wrap app component under Provider
// 3.create Slice
// 4.register reducer in store
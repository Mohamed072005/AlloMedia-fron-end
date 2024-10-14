import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import './App.css'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <RouterProvider router={router}/>
      <Toaster
                position="top-right"
                reverseOrder={false}
            />
    </>
  )
}

export default App

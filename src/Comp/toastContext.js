import { createContext, useState } from 'react'
import MySnackBar from './mySnackBar.js'

export const ToastC = createContext({})
export const ToastP = ({children}) => {
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState('')
  function showHide(message) {
    setOpen(true)
    setMsg(message)
    setTimeout(() => {
      setOpen(false)
    }, 2000)
  }
  return (
    <ToastC.Provider value={ showHide }>
      <MySnackBar
      open={open}
      message={msg}
      />
      {children}
    </ToastC.Provider>
  )
}
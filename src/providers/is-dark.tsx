import { createContext, useContext } from 'react'

export const IsDarkContext = createContext<boolean>(null!)
export const useIsDark = () => {
  return useContext(IsDarkContext)
}

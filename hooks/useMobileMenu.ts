import { createContext, useState } from 'react'

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const mobileMenuContext = createContext(isOpen);


  return {mobileMenuContext, setIsOpen}
}
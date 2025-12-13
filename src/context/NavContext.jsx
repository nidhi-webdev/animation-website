import React, { createContext } from 'react'

const NavContext = ({children}) => {
const NavContext = createContext()
const [navOpen, setNavOpen] = useState(false)

  return (
    <div>
        <NavContext.Provider value={[navOpen, setNavOpen]}>
            {children}
        </NavContext.Provider>
      
    </div>
  )
}

export default NavContext

import React, { useState, useContext, createContext } from "react";
import sublinks from "./data";

export const AppContext = createContext();

export const AppContextProvider  = ({children}) => {

    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [isOpenSubmenu, setIsOpenSubmenu] = useState(true);
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page: '', links: []})

    const sidebarClose = () => {
        setIsOpenSidebar(false)
    }

    const sidebarOpen = () => {
        setIsOpenSidebar(true)
    }

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find(link => link.page === text);
        setPage(page);
        setLocation(coordinates)
      setIsOpenSidebar(true);
    };

    const closeSubmenu = () => {
      setIsOpenSidebar(false);
    };

    return (
      <AppContext.Provider
        value={{
          isOpenSidebar,
          isOpenSubmenu,
          sidebarClose,
          sidebarOpen,
          openSubmenu,
          closeSubmenu,
          location,
          page
        }}
      >
        {children}
      </AppContext.Provider>
    );
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

import React, { useState } from 'react'

export type MobileMenuContextPropsType = {
  isMainNavigationOpen: boolean;
  setIsMainNavigationOpen: (open: boolean) => void;
};

export const MobileMenuContext = React.createContext<MobileMenuContextPropsType>({
  isMainNavigationOpen: false,
  setIsMainNavigationOpen: () => {},
});

export const MobileMenuContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isMainNavigationOpen, setIsMainNavigationOpen] =
    useState<boolean>(false);

  return (
    <MobileMenuContext.Provider
      value={{ isMainNavigationOpen, setIsMainNavigationOpen }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};

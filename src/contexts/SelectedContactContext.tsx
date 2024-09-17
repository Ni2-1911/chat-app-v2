import { createContext, ReactNode, FC, useState, useContext } from "react";
import { ContactSelected } from "../types/type.common";
import { SelectedContactContextType } from "../types/type.contexts";

export const SelectedContactContext = createContext<
  SelectedContactContextType | undefined
>(undefined);
export const SelectedContactProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [contactSelected, setContactSelected] = useState<ContactSelected>(null);
  function handleContactSelected(contact: ContactSelected): void {
    setContactSelected(contact);
  }
  return (
    <SelectedContactContext.Provider
      value={{ contactSelected, handleContactSelected }}
    >
      {children}
    </SelectedContactContext.Provider>
  );
};

export const useSelectedContactContext = () => {
  const context = useContext(SelectedContactContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedContactContext must be used within a SelectedContactProvider."
    );
  }
  return context;
};

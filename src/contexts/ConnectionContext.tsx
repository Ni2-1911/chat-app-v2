import {
  createContext,
  ReactNode,
  useState,
  FC,
  useEffect,
  useContext,
} from "react";
import { ConnectionContextType } from "../types/type.contexts";
import { DEFAULT_PROFILE_IMAGE } from "../constants/constant.common";
import { Contact, UserIdKey } from "../types/type.common";

export const ConnectionContext = createContext<
  ConnectionContextType | undefined
>(undefined);

export const ConnectionProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [connection, setConnection] = useState<Contact[]>(() => {
    const savedItems = localStorage.getItem("connection");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  function addConnection(name: string) {
    const userId: UserIdKey = `user_id_${Date.now()}`;
    const newUser: Contact = {
      id: `user_id_${Date.now()}`,
      name: name,
      profileImg: DEFAULT_PROFILE_IMAGE,
    };
    setConnection((prevValue) => [...prevValue, newUser]);
    return userId;
  }

  function deleteConnection(userId: any) {
    const newData = connection.filter((item) => item.id !== userId);
    setConnection(newData);
  }
  useEffect(() => {
    localStorage.setItem("connection", JSON.stringify(connection));
  }, [connection]);

  return (
    <ConnectionContext.Provider
      value={{ connection, addConnection, deleteConnection }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};
export const useConnectionContext = () => {
  const context = useContext(ConnectionContext);
  if (context === undefined) {
    throw new Error(
      "useConnectionContext must be used within a ConnectionProvider."
    );
  }
  return context;
};

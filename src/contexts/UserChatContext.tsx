import {
  createContext,
  ReactNode,
  FC,
  useState,
  useContext,
  useEffect,
} from "react";
import { UserChatContextType } from "../types/type.contexts";
import {
  ContactSelected,
  LatestMessage,
  UserChatData,
  UserIdKey,
} from "../types/type.common";
import {
  deleteMessageFromDB,
  addMessageToDB,
  generateNewMessage,
  getLatestMessagefromDB,
} from "../utils/utils.common";
import { USER_CHAT_DATA } from "../constants/constant.common";

export const UserChatContext = createContext<UserChatContextType | undefined>(
  undefined
);
export const UserChatProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [userChatData, setUserChatData] = useState<UserChatData>(() => {
    const savedItems = localStorage.getItem("userChat");
    return savedItems ? JSON.parse(savedItems) : USER_CHAT_DATA;
  });
  const [latestChatData, setLastChatData] = useState<LatestMessage>(
    getLatestMessagefromDB(userChatData)
  );
  function addMessage(message: string, contactInfo: ContactSelected) {
    if (contactInfo != null) {
      const newData = addMessageToDB(userChatData, contactInfo.id, message);
      setUserChatData(() => newData);
    }
  }
  function deleteMessage(userId: UserIdKey, messageKey: string) {
    const newData = deleteMessageFromDB(userChatData, userId, messageKey);
    setUserChatData(() => newData);
  }
  function editMessage(message: string, userId: UserIdKey, messageKey: string) {
    const newMessage = generateNewMessage(message);
    const originalArray = userChatData.chatData[userId];
    const updatedArray = originalArray.map((item) =>
      item.id === messageKey ? newMessage : item
    );
    setUserChatData((prevVal) => ({
      ...prevVal,
      chatData: { ...prevVal.chatData, [userId]: updatedArray },
    }));
  }
  function deleteChat(userId: UserIdKey) {
    const savedItems = localStorage.getItem("userChat");
    if (savedItems) {
      const chats = JSON.parse(savedItems);
      const updatedObj = Object.fromEntries(
        Object.entries(chats).filter(([key]) => key !== userId)
      );
      const newData: UserChatData = { ...chats, updatedObj };
      setUserChatData(() => newData);
      localStorage.setItem("userChat", JSON.stringify(newData));
    }
  }
  useEffect(() => {
    localStorage.setItem("userChat", JSON.stringify(userChatData));
    setLastChatData(() => getLatestMessagefromDB(userChatData));
  }, [userChatData]);

  return (
    <UserChatContext.Provider
      value={{
        userChatData,
        addMessage,
        deleteMessage,
        deleteChat,
        editMessage,
        latestChatData,
      }}
    >
      {children}
    </UserChatContext.Provider>
  );
};
export const useChatDataContext = () => {
  const context = useContext(UserChatContext);
  if (context === undefined) {
    throw new Error("error");
  }
  return context;
};

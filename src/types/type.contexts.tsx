import {
  Contact,
  ContactSelected,
  HandleDeleteMessage,
  LatestMessage,
  UserChatData,
  UserIdKey,
  ViewMode,
} from "./type.common";

export type ConnectionContextType = {
  connection: Contact[];
  addConnection: (name: string) => UserIdKey;
  deleteConnection: (userId: any) => void;
};
export type UserChatContextType = {
  userChatData: UserChatData;
  addMessage: (messsage: string, contactInfo: ContactSelected) => void;
  deleteMessage: HandleDeleteMessage;
  deleteChat: (userId: any) => void;
  editMessage: (message: string, userId: UserIdKey, messageKey: string) => void;
  latestChatData: LatestMessage;
};
export type SelectedContactContextType = {
  contactSelected: ContactSelected;
  handleContactSelected: (contact: ContactSelected) => void;
};
export type ViewModeType = {
  viewMode: ViewMode;
  toggleMode: () => void;
};

import { UserChatData } from "../types/type.common";

export const DEFAULT_PROFILE_IMAGE =
  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg";
export const USER_CHAT_DATA: UserChatData = {
  id: "user_id_0",
  name: "Fujizumi Hokusaburo",
  profileImg: "https://cdn-icons-png.freepik.com/512/147/147137.png",
  chatData: {
    user_id_1: [],
  },
};
export const DIALOG_BOX_DATA = {
  newConversation: {
    inputData: "Type the name",
    buttonData: "start a new chat",
  },
  deleteConversation: {
    inputData: "Are you sure you want to delete",
    buttonData: "yes",
  },
  editMessage: {
    inputData: "Message text",
    buttonData: "save",
  },
};

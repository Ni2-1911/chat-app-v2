import ChatHeader from "./header/ChatHeader";
import ChatBox from "./chatbox/ChatBox";
import TextBox from "./textbox/TextBox";
import "/src/assets/styles/components/chat.css";
import { useSelectedContactContext } from "../../contexts/SelectedContactContext";
import Fallback from "../common/Fallback";

export default function ChatContainer() {
  const { contactSelected } = useSelectedContactContext();
  return (
    <div className="chatContainer h-full flex-center">
      {contactSelected === null ? (
        <Fallback fallBackText="Select a conversation to get started." />
      ) : (
        <div className="flex-col w-100 h-full">
          <ChatHeader contactInfo={contactSelected} />
          <ChatBox userId={contactSelected.id} />
          <TextBox contactInfo={contactSelected} />
        </div>
      )}
    </div>
  );
}

import ChatFallback from "./ChatFallback";
import ChatHeader from "./header/ChatHeader";
import ChatBox from "./chatbox/ChatBox";
import TextBox from "./textbox/TextBox";
import "/src/assets/styles/components/chat.css";
import { UserChatProvider } from "../../contexts/UserChatContext";
import { useSelectedContactContext } from "../../contexts/SelectedContactContext";

export default function ChatContainer() {
  const { contactSelected } = useSelectedContactContext();
  return (
    <div className="chatContainer h-full flex-center">
      {contactSelected === null ? (
        <ChatFallback />
      ) : (
        <div className="flex-col w-100 h-full">
          <UserChatProvider>
            <ChatHeader contactInfo={contactSelected} />
            <ChatBox userId={contactSelected.id} />
            <TextBox contactInfo={contactSelected} />
          </UserChatProvider>
        </div>
      )}
    </div>
  );
}

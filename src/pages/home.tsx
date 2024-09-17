import ChatContainer from "../components/chat/ChatContainer";
import SidebarContainer from "../components/sidebar/SidebarContainer";
import { SelectedContactProvider } from "../contexts/SelectedContactContext";
import { UserChatProvider } from "../contexts/UserChatContext";
import { ViewModeProvider } from "../contexts/ViewModeContext";

export default function Home() {
  return (
    <div className="chatApp flex-corner h-full w-full">
      <ViewModeProvider>
        <UserChatProvider>
          <SelectedContactProvider>
            <SidebarContainer />
            <ChatContainer />
          </SelectedContactProvider>
        </UserChatProvider>
      </ViewModeProvider>
    </div>
  );
}

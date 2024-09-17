import "../../assets/styles/components/sidebar.css";
import SidebarHeader from "./header/SidebarHeader";
import SearchBar from "./search/SearchBar";
import ContactList from "./contact/ContactList";
import AddConversation from "./addConversation/AddConversation";
import { ConnectionProvider } from "../../contexts/ConnectionContext";

export default function SidebarContainer() {
  return (
    <div className="sidebarContainer h-full flex-col">
      <SidebarHeader />
      <SearchBar />
      <ConnectionProvider>
        <ContactList />
        <AddConversation />
      </ConnectionProvider>
    </div>
  );
}

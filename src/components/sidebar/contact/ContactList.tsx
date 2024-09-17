import ContactItem from "./ContactItem";
import Fallback from "../../common/Fallback";
import { useConnectionContext } from "../../../contexts/ConnectionContext";

export default function ContactList() {
  const { connection } = useConnectionContext();
  return (
    <div className="contactList w-100">
      {connection.length === 0 ? (
        <Fallback fallBackText="No conversation yet" />
      ) : (
        <>
          {connection.map((contact) => {
            return (
              <div key={contact.id} className="border-btm">
                <ContactItem info={contact} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

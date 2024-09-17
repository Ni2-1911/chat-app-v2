import { useSelectedContactContext } from "../../../contexts/SelectedContactContext";
import { Contact } from "../../../types/type.common";
import { useState } from "react";
import DialogBox from "../../common/DialogBox";
import { DIALOG_BOX_DATA } from "../../../constants/constant.common";
import { useChatDataContext } from "../../../contexts/UserChatContext";
import { useConnectionContext } from "../../../contexts/ConnectionContext";
import DropdownMenu from "../../common/DropdownMenu";
import ViewModeWrapper from "../../common/ViewModeWrapper";
import { getTimeFormat } from "../../../utils/utils.common";

export default function ContactItem(contact: { info: Contact }) {
  const [isOpen, setIsOpen] = useState(false);
  const { handleContactSelected } = useSelectedContactContext();
  const { deleteConnection } = useConnectionContext();
  const { deleteChat, latestChatData } = useChatDataContext();
  const latestMessageTime = latestChatData[contact.info.id]?.time;
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  function action() {
    deleteChat(contact.info.id);
    deleteConnection(contact.info.id);
    handleContactSelected(null);
  }
  return (
    <>
      <div
        className="contactItem cursor-pointer flex-corner p-4"
        onClick={() => handleContactSelected(contact.info)}
      >
        <div className="flex-center">
          <img
            src={contact.info.profileImg}
            alt="..."
            className="profile-img p-3"
          />
          <div className="flex-col">
            <p>{contact.info.name}</p>
            <ViewModeWrapper>
              <p className="ellipsis-3-lines text-sm text-800">
                {latestChatData[contact.info.id]?.text}
              </p>
            </ViewModeWrapper>
          </div>
        </div>
        <div className="p-3">
          <DropdownMenu>
            <li className="utilListItem" onClick={openDialog}>
              Delete
            </li>
          </DropdownMenu>
          <ViewModeWrapper>
            <p className="text-sm text-800">
              {latestMessageTime === undefined
                ? null
                : getTimeFormat(new Date(latestMessageTime))}
            </p>
          </ViewModeWrapper>
        </div>
      </div>
      <DialogBox
        isOpen={isOpen}
        closeDialog={closeDialog}
        actionType="deleteChat"
        dialogAction={action}
        viewData={DIALOG_BOX_DATA.deleteConversation}
      />
    </>
  );
}

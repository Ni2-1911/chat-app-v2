import { HandleDeleteMessage, UserIdKey } from "../../../../types/type.common";
import DialogBox from "../../../common/DialogBox";
import { useState } from "react";
import { DIALOG_BOX_DATA } from "../../../../constants/constant.common";
import { useChatDataContext } from "../../../../contexts/UserChatContext";
import DropdownMenu from "../../../common/DropdownMenu";

export default function DeleteMessage({
  messageKey,
  deleteMessage,
  userId,
}: {
  messageKey: string;
  deleteMessage: HandleDeleteMessage;
  userId: UserIdKey;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { editMessage } = useChatDataContext();
  function openDialog() {
    setIsOpen(true);
  }
  function closeDialog() {
    setIsOpen(false);
  }
  function action(message: string) {
    editMessage(message, userId, messageKey);
  }
  return (
    <>
      <DropdownMenu>
        <li className="utilListItem" onClick={openDialog}>
          Edit
        </li>
        <li
          className="utilListItem"
          onClick={() => deleteMessage(userId, messageKey)}
        >
          Delete
        </li>
      </DropdownMenu>
      <DialogBox
        isOpen={isOpen}
        closeDialog={closeDialog}
        action={action}
        viewData={DIALOG_BOX_DATA.editMessage}
      />
    </>
  );
}

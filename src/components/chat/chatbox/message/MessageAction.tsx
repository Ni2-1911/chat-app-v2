import { UserIdKey } from "../../../../types/type.common";
import DialogBox from "../../../common/DialogBox";
import { useState } from "react";
import { DIALOG_BOX_DATA } from "../../../../constants/constant.common";
import { useChatDataContext } from "../../../../contexts/UserChatContext";
import DropdownMenu from "../../../common/DropdownMenu";
import { DialogBoxAction } from "../../../../types/type.props";

export default function MessageAction({
  messageKey,
  userId,
}: {
  messageKey: string;
  userId: UserIdKey;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState<DialogBoxAction>("editMessage");
  const { editMessage, deleteMessage } = useChatDataContext();
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  function dialogAction(message: string) {
    if (actionType === "editMessage") editMessage(message, userId, messageKey);
    else if (actionType === "deleteMessage") deleteMessage(userId, messageKey);
  }
  const viewData =
    actionType === "editMessage"
      ? DIALOG_BOX_DATA.editMessage
      : DIALOG_BOX_DATA.deleteConversation;
  return (
    <>
      <DropdownMenu>
        <li
          className="utilListItem"
          onClick={() => {
            setActionType("editMessage");
            openDialog();
          }}
        >
          Edit
        </li>
        <li
          className="utilListItem"
          onClick={() => {
            setActionType("deleteMessage");
            openDialog();
          }}
        >
          Delete
        </li>
      </DropdownMenu>
      <DialogBox
        isOpen={isOpen}
        closeDialog={closeDialog}
        actionType={actionType}
        dialogAction={dialogAction}
        viewData={viewData}
      />
    </>
  );
}

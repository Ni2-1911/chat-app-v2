import { useConnectionContext } from "../../../contexts/ConnectionContext";
import DialogBox from "../../common/DialogBox";
import { useState } from "react";
import { DIALOG_BOX_DATA } from "../../../constants/constant.common";
export default function AddConversation() {
  const [isOpen, setIsOpen] = useState(false);
  const { addConnection } = useConnectionContext();
  function openDialog() {
    setIsOpen(true);
  }
  function closeDialog() {
    setIsOpen(false);
  }
  function handleAddConnection(name: string) {
    addConnection(name);
  }
  return (
    <>
      <button
        className="addConversation btn-primary rounded-md cursor-pointer p-4"
        onClick={openDialog}
      >
        Start a new conversation
      </button>
      <DialogBox
        isOpen={isOpen}
        closeDialog={closeDialog}
        action={handleAddConnection}
        viewData={DIALOG_BOX_DATA.newConversation}
      />
    </>
  );
}

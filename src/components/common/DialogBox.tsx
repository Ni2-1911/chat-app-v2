import { useEffect, useRef } from "react";

export default function DialogBox({
  isOpen,
  closeDialog,
  action,
  viewData,
}: {
  isOpen: boolean;
  closeDialog: Function;
  action: Function;
  viewData: { inputData: string; buttonData: string };
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);
  function handleAction() {
    action(inputRef.current?.value);
    closeDialog();
    if (inputRef.current != null) inputRef.current.value = "";
  }
  return (
    <dialog ref={dialogRef}>
      <div className="flex-center flex-col h-100">
        <input
          ref={inputRef}
          className="dialog-input rounded-sm p-2"
          type="text"
          placeholder={viewData.inputData}
        />
        <div className="dialogHead p-2">
          <button
            className="btn-primary btn-dialog rounded-sm"
            onClick={() => closeDialog()}
          >
            cancel
          </button>
          <button
            className="btn-primary btn-dialog rounded-sm"
            onClick={() => handleAction()}
          >
            {viewData.buttonData}
          </button>
        </div>
      </div>
    </dialog>
  );
}

import MessageAction from "./MessageAction";
import { getTimeFormat } from "../../../../utils/utils.common";
import { UserIdKey } from "../../../../types/type.common";
import ViewModeWrapper from "../../../common/ViewModeWrapper";
export default function SentMessage({
  text,
  time,
  userId,
  messageKey,
}: {
  text: string;
  time: Date;
  userId: UserIdKey;
  messageKey: string;
}) {
  return (
    <div className="messageBox flex-center rounded-md sendingMessage">
      <p className="messageText">{text}</p>
      <div className="messageUtil flex-col p-2">
        <MessageAction userId={userId} messageKey={messageKey} />
        <ViewModeWrapper>
          <div className="text-800 text-sm">
            {getTimeFormat(new Date(time))}
          </div>
        </ViewModeWrapper>
      </div>
    </div>
  );
}

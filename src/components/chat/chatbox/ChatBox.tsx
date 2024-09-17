import { useChatDataContext } from "../../../contexts/UserChatContext";
import { Message, UserIdKey } from "../../../types/type.common";
import DefaultMessage from "./message/DefaultMessage";
import SentMessage from "./message/SentMessage";
import { useRef, useEffect } from "react";
export default function ChatBox({ userId }: { userId: UserIdKey }) {
  const { userChatData } = useChatDataContext();
  const conversation = userChatData.chatData[userId];
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollTo({
        top: endOfMessagesRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [conversation]);
  return (
    <div ref={endOfMessagesRef} className="chatBox flex-col">
      <DefaultMessage />
      {conversation ? (
        <>
          {conversation.map((message: Message) => {
            return (
              <SentMessage
                key={message.id}
                text={message.text}
                time={message.time}
                userId={userId}
                messageKey={message.id}
              />
            );
          })}
        </>
      ) : null}
    </div>
  );
}

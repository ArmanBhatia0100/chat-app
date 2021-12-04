import React from "react";
import MessageForm from "../MessageForm/MessageForm";
import MyMessage from "../Messages/MyMessage";
import TheirMessage from "../Messages/TheirMessage";
import "./ChatFeed.css";
function ChatFeed(props) {
  const renderReadReceipts = (message, isMyMessage) => {
    chat.people.map(
      (person, index) =>
        person.last_read === messages.id && (
          <div
            key={`read${index}`}
            className="read-reciept"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          ></div>
        )
    );
  };

  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];
  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`mesg_${index}`} style={{ width: "100%" }}>
          <div className="message__block">
            {isMyMessage ? (
              <MyMessage message={message}></MyMessage>
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              ></TheirMessage>
            )}
          </div>
          <div
            className="read__receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="chat__feed" style={{ border: "1px solid blue" }}>
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="subTitle">This is a demo project by Arman</div>
        <div style={{ height: "100px" }}></div>
      </div>
      <div className="Chat__container">
        <div className="message__conatiner">{renderMessages()}</div>
        <div className="message_form_container">
          <MessageForm {...props} chatId={activeChat}></MessageForm>
        </div>
      </div>
    </div>
  );
}

export default ChatFeed;

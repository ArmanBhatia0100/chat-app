function TheirMessage({ lastMessage, message }) {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message_row">
      {isFirstMessageByUser && (
        <div
          className="message__avatar"
          style={{
            backgroundImage: message.sender && `url(${message.sender.avatar})`,
          }}
        ></div>
      )}

      {message.attachments && message.attachments.length > 0 ? (
        <img
          src={message.attachment[0].file}
          alt="message-img"
          className="message_image"
          style={{ float: "right" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
            color: "white",
            backgroundColor: "#CABCDC",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}

export default TheirMessage;

import "./MyMessage.css";
function MyMessage({ message }) {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <div className="img__container">
        <img
          src={message.attachments[0].file}
          alt="message-img"
          className="message_image"
          style={{
            width: "260px",
            
            height: "180px",
          }}
        />
      </div>
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {message.text}
    </div>
  );
}

export default MyMessage;

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="bubble component" src="/background.png" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hi! Wtf</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        13:11
      </div>
    </div>
  );
};

export default Message;

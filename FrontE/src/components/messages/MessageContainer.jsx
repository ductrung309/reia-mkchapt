import MessageInput from "./MessageInput.jsx";
import Messages from "./Messages.jsx";

const NoChatSelect = () => {
  return null;
};

const MessageContainer = () => {
  var chatSelect = true;
  return (
    <div className="md:min-w-[450px] flex flex-col ">
      {chatSelect ? (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold">Lai Trung</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      ) : (
        <NoChatSelect />
      )}
    </div>
  );
};

export default MessageContainer;

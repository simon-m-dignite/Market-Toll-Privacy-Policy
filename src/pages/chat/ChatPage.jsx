import React from "react";
import ChatList from "../../components/Chat/ChatList";
import MessageBoard from "../../components/Chat/MessageBoard";

const ChatPage = () => {
  return (
    <div className="py-6 padding-x">
      <div className="bg-[#F7F7F7] rounded-[30px] p-5">
        <div className="w-full bg-white rounded-[30px] grid grid-cols-3 gap-5 max-h-[90vh] overflow-hidden">
          <div className="col-span-1 h-full">
            <ChatList />
          </div>
          <div className="col-span-2 h-full">
            <MessageBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

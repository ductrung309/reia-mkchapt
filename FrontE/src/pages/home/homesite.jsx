import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const home = () => {
  return (
    <div className="flex sn:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default home;

// Home.jsx
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className='flex h-[550px] border border-red-800 shadow-2xl rounded-lg overflow-hidden bg-white-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50'>
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;

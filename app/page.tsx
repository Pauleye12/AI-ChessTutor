import Header from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const page = () => {
  return (
    <div className="secondary-layout overflow-x-hidden pt-[80px] pl-[280px] min-h-screen h-full px-6">
      <Header />
      <Sidebar />
    </div>
  );
};

export default page;

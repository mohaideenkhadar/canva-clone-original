// import Image from "next/image";
import SideBar from "@/src/components/home/sidebar";
import Header from "@/src/components/home/header";
import Banner from "@/src/components/home/banner";

export default function Home() {
  return <div className="flex min-h-screen bg-white">
    <SideBar/>
    <div className="flex-1 flex flex-col ml-[72px]">
      <Header/>
      <main className="flex-1 p-6 overflow-y-auto pt-20">
        <Banner/>
      </main>
    </div>
  </div>
}

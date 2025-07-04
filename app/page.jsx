'use client';
import { assets } from "@/assets/assets";
import Message from "@/components/Message";
import Promptbox from "@/components/Promptbox";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const[expand, setExpand] =useState(false)
  const[messages, setMessages] =useState([])
  const[isLoading, setIsLoading] =useState(false)



  return (
   <div>
      <div className="flex  h-screen">
        <Sidebar expand={expand} setExpand={setExpand}/>

        <div className="flex-1 flex flex-col item-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
         
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image onClick={()=> (expand ? setExpand(false) : setExpand(true))} className="rotate-180" src={assets.menu_icon} alt=""/>
            <Image className="opacity-70" src={assets.chat_icon} alt=""/>

          </div>
          {messages.length === 0 ? (
            <>
            <div className="flex items-center justify-center gap-3">
              <Image src={assets.logo_icon} alt="" className="h-9"/>
              <p className="text-2xl font-medium">Hi, I'm DeepSeek.</p>
            </div>
            <p className=" flex items-centertext-sm mt-4 ml-4 justify-center">How can I help you today?</p>
            </>
          ):
            (
            <div>
              <Message  role='user' content='What is next js' />
            </div>
            )
            }

           
              <Promptbox isLoading={isLoading} setIsLoading={setIsLoading}/>
             <p className="text-xs absolute bottom-1 left-1/2 transform -translate-x-1/2 text-gray-500">AI-generated,for reference only</p>

        </div>
      </div>
   </div>
  );
}

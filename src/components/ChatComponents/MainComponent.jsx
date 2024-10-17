import Contact from "./Contact";
import './ChatStyle.css'
import ChatBox from "./ChatBox";
export default function MainComponent() {
    return (
        <>
            <div className="">
                <div className="bg-[#191e3a] w-full rounded-lg chat-system">
                    <div className="p-3">
                        <Contact />
                    </div>
                    <div className="w-full p-3">
                        <ChatBox />
                    </div>
                </div>
            </div>
        </>
    );
}
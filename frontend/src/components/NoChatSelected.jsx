import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome !</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;

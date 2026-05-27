import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoGroupsFound from "./NoGroupsFound";
import { useAuthStore } from "../store/useAuthStore";

function GroupsList(){
    const { getGroups, groups, isUserLoading, setSelectedUser } = useChatStore();
    const {onlineUsers} = useAuthStore();

    useEffect(() =>{
        getGroups();
    },[getGroups]);

    if(isUserLoading) return <UsersLoadingSkeleton />
    if(groups.length === 0) return <NoGroupsFound />

    return (
    <>
      {groups.map((group) => (
        <div
          key={group._id}
          className="bg-cyan-500/10 p-4 rounded-lg cursor-pointer hover:bg-cyan-500/20 transition-colors"
          onClick={() => setSelectedUser(group)}
        >
          <div className="flex items-center gap-3">
            <div className={`avatar ${onlineUsers.includes(group._id) ? "online" : "offline"}`}>
              <div className="size-12 rounded-full">
                <img src={group.profilePic || "/avatar.png"} alt={group.userName} />
              </div>
            </div>
            <h4 className="text-slate-200 font-medium truncate">{group.userName}</h4>
          </div>
        </div>
      ))}
    </>
  );
};


export default GroupsList;
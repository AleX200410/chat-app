import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import { useAuthStore } from "../store/useAuthStore";

function FriendsList() {
  const { getFriends, friends, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getFriends();
  }, [getFriends]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <>
      {friends.map((friend) => (
        <div
          key={friend._id}
          className="bg-cyan-500/10 p-4 rounded-lg cursor-pointer hover:bg-cyan-500/20 transition-colors"
          onClick={() => setSelectedUser(friend)}
        >
          <div className="flex items-center gap-3">
            <div className={`avatar ${onlineUsers.includes(friend._id) ? "online" : "offline"}`}>
              <div className="size-12 rounded-full">
                <img src={friend.profilePic || "/avatar.png"} />
              </div>
            </div>
            <h4 className="text-slate-200 font-medium">{friend.userName}</h4>
          </div>
        </div>
      ))}
    </>
  );
}
export default FriendsList;
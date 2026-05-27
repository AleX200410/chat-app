import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="tabs tabs-boxed bg-transparent p-2 m-2">
      <button
        onClick={() => setActiveTab("groups")}
        className={`tab ${
          activeTab === "groups" ? "bg-cyan-500/20 text-cyan-400" : "text-slate-400"
        }`}
      >
        Groups
      </button>

      <button
        onClick={() => setActiveTab("friends")}
        className={`tab ${
          activeTab === "friends" ? "bg-cyan-500/20 text-cyan-400" : "text-slate-400"
        }`}
      >
        Friends
      </button>
    </div>
  );
}
export default ActiveTabSwitch;
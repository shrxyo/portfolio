import FolderGrid from "./FolderGrid";
import ContentPanel from "./ContentPanel";

export default function WindowPage({ activeTab, setActiveTab }) {
  return (
    <div className="w-[650px] border-4 border-blue-700 bg-white shadow-lg">
      <div className="bg-blue-700 text-white p-2 font-bold text-sm flex justify-between">
        <span>Shreya Balakrishna</span>
        <span>_ [] X</span>
      </div>
      <div className="bg-gray-100 text-xs px-3 py-1 border-b border-gray-300">
        File &nbsp; Edit &nbsp; Place &nbsp; Holder
      </div>
      <div className="p-4">
        <FolderGrid setActiveTab={setActiveTab} />
        <ContentPanel activeTab={activeTab} />
      </div>
    </div>
  );
}
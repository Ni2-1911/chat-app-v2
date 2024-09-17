import { DEFAULT_PROFILE_IMAGE } from "../../../constants/constant.common";
import { useViewModeContext } from "../../../contexts/ViewModeContext";

export default function SidebarHeader() {
  const { viewMode, toggleMode } = useViewModeContext();
  return (
    <div className="flex-corner w-100">
      <img src={DEFAULT_PROFILE_IMAGE} alt="..." className="profile-img p-4" />
      <button
        className="toggleModeBtn btn-primary p-3 rounded-sm"
        onClick={toggleMode}
      >
        {viewMode === "compact" ? "spacious mode" : "compact mode"}
      </button>
    </div>
  );
}

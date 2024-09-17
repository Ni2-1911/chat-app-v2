import { ReactNode } from "react";
import { useViewModeContext } from "../../contexts/ViewModeContext";

export default function ViewModeWrapper({ children }: { children: ReactNode }) {
  const { viewMode } = useViewModeContext();
  return <div className={viewMode}>{children}</div>;
}

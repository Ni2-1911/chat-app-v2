import { createContext, ReactNode, FC, useState, useContext } from "react";
import { ViewMode } from "../types/type.common";
import { ViewModeType } from "../types/type.contexts";

export const ViewModeContext = createContext<ViewModeType | undefined>(
  undefined
);
export const ViewModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [viewMode, setViewMode] = useState<ViewMode>("spacious");
  function toggleMode() {
    if (viewMode == "spacious") {
      setViewMode("compact");
    } else {
      setViewMode("spacious");
    }
  }
  return (
    <ViewModeContext.Provider value={{ viewMode, toggleMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};
export const useViewModeContext = () => {
  const context = useContext(ViewModeContext);
  if (context === undefined) {
    throw new Error(
      "useViewModeContext must be used within a ViewModeProvider."
    );
  }
  return context;
};

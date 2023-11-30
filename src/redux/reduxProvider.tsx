"use client";

import { Provider } from "react-redux";
import appStore from "@/redux/store";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={appStore}>{children}</Provider>;
}

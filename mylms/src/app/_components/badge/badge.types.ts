import { ReactNode } from "react";
import { ComponentBase } from "../types/component-base.type";

export type BadgePorps = Omit<ComponentBase, "isDisabled"> & {
  children: ReactNode;
};

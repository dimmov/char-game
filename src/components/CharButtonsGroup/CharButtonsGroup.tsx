import { ChildrenProps } from "../../types/utils/ChildrenProps";

export default function CharButtonsGroup({ children }: ChildrenProps) {
  return <div className="flex flex-row gap-2">{children}</div>;
}

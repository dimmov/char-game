import { Button as UIButton } from "@mui/base/Button";

export default function Button({ ...props }) {
  return <UIButton className="border border-red-600" {...props} />;
}

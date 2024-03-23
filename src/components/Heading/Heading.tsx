import { useContext } from "react";
import Button from "../Button/Button";
import { UsersContext } from "../../store/users-context";

export default function Heading() {
  const { users } = useContext(UsersContext);
  return (
    <div className="w-full bg-slate-400 text-center h-auto p-4">
      <h1 className="text-5xl font-bold">Find The Right Game for You</h1>
      <h2>Currently registered users: {users.length}</h2>
      <p>
        Discover the best game for you and increase your chance of winning big.
      </p>
      <Button>Learn More</Button>
    </div>
  );
}

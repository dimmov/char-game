import Button from "../Button/Button";

type Props = {
  char: string;
};
export default function MainChar({ char }: Props) {
  return (
    <div className="bg-gray-200 rounded-2xl w-72 flex justify-center items-center h-96">
      <div
        className="text-9xl text-pink-400 h-full w-full"
        style={{ textShadow: "2px 2px grey" }}
      >
        <Button className="w-full h-full"> {char}</Button>
      </div>
    </div>
  );
}

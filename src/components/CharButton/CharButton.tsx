import Button from "../Button/Button";

type Props = {
  value: string;
};
export default function CharButton({ value }: Props) {
  return (
    <div className="bg-gray-200 rounded-xl basis-1/2 h-10 p-10 flex items-center justify-center">
      <Button className="w-full text-pink-400 text-2xl font-bold border border-blue-500">
        {value}
      </Button>
    </div>
  );
}

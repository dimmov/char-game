import Button from "../Button/Button";

export default function SingleGame() {
  return (
    <div className="border border-blue-500 p-2 m-5 rounded-lg">
      <div className="h-[340px] bg-blue-400">Heading image</div>
      <div>
        <div>Logo</div>
        <h1>You are playing Jackpot 1</h1>
        <p>All about winning</p>
      </div>
      <Button>Play Now</Button>
      <div>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          deserunt nobis nisi obcaecati ipsa esse iste, dignissimos iusto
          placeat, consequuntur quidem perspiciatis ratione ullam. Blanditiis
          quasi unde ipsum voluptatem fugit?
        </p>
      </div>
    </div>
  );
}

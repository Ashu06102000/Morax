import GameCardList from "./GameCardList";

const Games = () => {
  return (
    <div className="pt-32 max-w-screen-2xl ml-auto mr-auto">
      <h1 className="special-font hero-heading">
        Ga<b>m</b>es
      </h1>
      <GameCardList />
    </div>
  );
};

export default Games;

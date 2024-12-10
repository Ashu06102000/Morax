import React, { useEffect, useState } from "react";
import { GamingData } from "../../interface/interface";
import { fetchAllGames } from "../../db/db";
import GameFeature from "./GameFeature";
import { Link } from "react-router-dom";

const GameCardList = () => {
  const [games, setGames] = useState<GamingData[]>();
  useEffect(() => {
    const fetchGames = async () => {
      const data = await fetchAllGames();
      setGames(data);
    };
    fetchGames();
  }, []);
  console.log(games);

  const featureGames = games?.filter((data) => {
    return data.isFeatured;
  });

  return (
    <div className="w-full flex flex-wrap relative gap-2">
      <GameFeature gamesData={featureGames} />
      <div className="grid grid-cols-4 gap-2 w-full">
        {games?.map((games) => {
          const backgroundImage = `url('${games.image}')`;
          if (games.isFeatured) {
            return;
          }

          return (
            <Link
              to={`/games/${games.id}`}
              style={{ backgroundImage }}
              className="border border-gray-300 bg-cover bg-no-repeat shadow-md flex-col flex h-[400px] bg-center"
            >
              <div className="p-2 text-center h-full flex flex-col justify-end bg-[#0000002b] transition-all duration-500 ease-in-out hover:bg-[#00000059]">
                <h3 className="font-semibold font-zentry text-4xl text-blue-50">
                  {games.name}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GameCardList;

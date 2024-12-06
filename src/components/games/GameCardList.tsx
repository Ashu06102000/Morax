import React, { useEffect, useState } from "react";
import { GamingData } from "../../interface/interface";
import { fetchAllGames } from "../../db/db";

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
  return (
    <div className="w-full flex flex-wrap relative">
      {games?.map((games) => {
        const backgroundImage = `url('${games.image}')`;

        return (
          <div
            style={{ backgroundImage }}
            className="border border-gray-300 bg-cover bg-center bg-no-repeat rounded-lg shadow-md flex-col flex w-[50%] h-[600px] transition-transform transform hover:scale-105"
          >
            {/* <img
              src={games.image}
              alt={games.name}
              className="w-full h-full z-[-1] object-cover object-top absolute"
            /> */}
            <div className="p-2 text-center">
              <h3 className="text-lg font-semibold">{games.name}</h3>
              <p className="text-md text-gray-600 my-1">
                ${games.price.toFixed(2)}
              </p>
              <button className="bg-green-500 text-white border-none rounded px-3 py-1 cursor-pointer text-lg mt-2 hover:bg-green-600">
                Buy Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameCardList;

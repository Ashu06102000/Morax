import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameById } from "../../db/db";
import { url } from "inspector";

const GameDetailpage = () => {
  const { id } = useParams<{ id: string }>();
  const [gameDetail, setGameDetail] = useState<any>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      if (id) {
        try {
          const response = await fetchGameById(id);
          console.log(response, "successhik");
          setGameDetail(response);
        } catch (error) {
          console.error("Error fetching game details:", error);
        }
      }
    };

    fetchDetails();
  }, [id]);
  const bg = `/videos/infuse.webm`;
  console.log(gameDetail);
  return (
    <div className=" bg-no-repeat relative bg-cover w-full h-screen">
      <video className="absolute -z-10" muted loop autoPlay src={bg} />
      <div className="p-28 z-10  h-full flex justify-between rounded-lg  bg-[#0000001a]">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-semibold special-font text-8xl text-blue-50">
              <b>M</b>
              <b>O</b>
              <b>R</b>
              <b>A</b>
              <b>X</b>
            </h3>
            <p className="text-white">{gameDetail?.description}</p>
          </div>
        </div>
        <div className="bg-[#00000099] rounded-lg border border-gray-600 w-full max-w-xl p-6 flex flex-col gap-4">
          <div className="flex flex-col items-center w-full justify-center">
            <img
              className="w-full  h-[450px] object-cover mb-4 -z-10"
              src={gameDetail?.image}
              alt={`Image of ${gameDetail?.name}`}
            />
            <h4 className="font-semibold text-center text-6xl text-blue-50 -mt-12 ">
              {gameDetail?.name}
            </h4>
          </div>

          <p className="text-white mb-4 text-center">
            {gameDetail?.description}
          </p>

          <div className="flex justify-between items-center mb-4">
            <span className="text-blue-50 font-general">
              Category: {gameDetail?.category}
            </span>
            <span className="text-blue-50 font-general">
              Price: ${gameDetail?.price}
            </span>
          </div>

          <button
            className="bg-blue-50 text-black font-semibold py-2 px-6 rounded w-full hover:bg-blue-100 transition duration-200"
            onClick={() => {}}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameDetailpage;

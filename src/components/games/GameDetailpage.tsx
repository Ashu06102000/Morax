import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameById } from "../../db/db";

const GameDetailpage = () => {
  const { id } = useParams<{ id: string }>();
  const [gameDetail, setGameDetail] = useState(null);

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

  console.log(gameDetail);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default GameDetailpage;

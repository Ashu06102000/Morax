import React, { useEffect, useState } from "react";
import { ConsoleData, GamingData } from "../../interface/interface";
import { fetchAllConsoles } from "../../db/db";

import { Link } from "react-router-dom";
import CardFeature from "./CardFeature";
const ConsoleCard = () => {
  const [consoles, setConsoles] = useState<ConsoleData[]>();
  useEffect(() => {
    const fetchConsoles = async () => {
      const data = await fetchAllConsoles();
      setConsoles(data);
    };
    fetchConsoles();
  }, []);
  console.log(consoles, "fe");

  const featureConsoles = consoles?.filter((data) => {
    return data.isFeatured;
  });

  return (
    <div className="w-full flex flex-wrap relative gap-2">
      <CardFeature consoleData={featureConsoles} />
      <div className="grid grid-cols-4 gap-2 w-full">
        {consoles?.map((data) => {
          const backgroundImage = `url('${data.image}')`;
          if (data.isFeatured) {
            return;
          }
          console.log(data.id, "ds");
          return (
            <a
              key={data.id}
              href={`/consoles/${data.id}`}
              style={{ backgroundImage }}
              className="border border-gray-300 bg-cover bg-no-repeat shadow-md flex-col flex h-[400px] bg-center"
            >
              <div className="p-2 text-center h-full flex flex-col justify-end bg-[#0000002b] transition-all duration-500 ease-in-out hover:bg-[#00000059]">
                <h3 className="font-semibold font-zentry text-4xl text-blue-50">
                  {data.name}
                </h3>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ConsoleCard;

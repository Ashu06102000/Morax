import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../db/db";
import { PurchaseHistory } from "../../interface/interface";
import moment from "moment";
import { constants } from "../../constants/constants";

const Histoy = () => {
  const { user } = useAuth0();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (user) {
        try {
          const userData = await fetchUserData(user?.sub ?? "");
          setUserData(userData);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchUser();
  }, []);
  console.log(userData);
  return (
    <div className="max-w-screen-2xl py-20 mx-auto">
      <h1 className="special-font hero-heading">
        <b>{constants.HISTORY}</b>
      </h1>
      <div className="flex flex-col gap-20 mt-20 max-w-screen-sm">
        <div>
          <span className="text-sm special-font uppercase font-bold">
            {constants.TOTOAL_SPENT}
          </span>
          <h4 className="text-sm">₹ {userData?.totalPurchase}</h4>
        </div>
        <div className="flex flex-col gap-10">
          {userData?.purchaseHistory.map((items: PurchaseHistory) => {
            return (
              <div className="flex justify-between items-center border-b border-gray-800">
                <div className="flex flex-col justify-between">
                  <span className="font-bold text-2xl">{items.name}</span>
                  <span>{items.orderId}</span>
                </div>
                <div className="flex flex-col justify-between">
                  <span className="font-bold">{items.price}</span>
                  <span>
                    {moment(items.date).format("MMMM DD, YYYY, h:mm:ss")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Histoy;

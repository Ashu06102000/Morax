import { useAuth0 } from "@auth0/auth0-react";
import { fetchUserData } from "../../db/db";
import { useEffect, useState } from "react";
import { constants } from "../../constants/constants";

const Profile = () => {
  const { user } = useAuth0();
  const [userData, setUserData] = useState<any>(null);

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

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div id="profile-page">
      <div className="h-screen pt-28 max-w-screen-2xl  m-auto flex flex-col gap-24">
        <h1 className="special-font hero-heading text-yellow-300">
          <b>{constants.PROFILE}</b>
        </h1>
        <div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-base text-white font-general">
                {constants.NAME}
              </span>
              <h2 className="text-2xl  text-blue-50 font-medium font-general uppercase">
                {user?.name}
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-base text-white font-general">
                {constants.EMAIL}
              </span>
              <h2 className="text-2xl  text-blue-50 font-medium font-general">
                {user?.email}
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-base text-white font-general">
                {constants.TOTAL_PURCHASE}
              </span>
              <span className="text-2xl  text-blue-50 font-medium font-general">
                ₹ {userData?.totalPurchase}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { fetchUserData } from "../../db/db";

const Profile = () => {
  const { user } = useAuth0();
  const [userData, setUserData] = React.useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user?.sub) {
          const getUserData = await fetchUserData(user.sub);
          console.log(getUserData, "user");
          setUserData(getUserData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [user?.sub]);

  return (
    <div id="profile-page">
      <div className="h-screen pt-28 max-w-screen-2xl  m-auto flex flex-col gap-24">
        <h1 className="special-font hero-heading text-yellow-300">
          Pr<b>o</b>fil<b>e</b>
        </h1>
        <div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-base text-white font-general">Name</span>
              <h2 className="text-2xl  text-blue-50 font-medium font-general uppercase">
                {userData?.name}
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-base text-white font-general">Email</span>
              <h2 className="text-2xl  text-blue-50 font-medium font-general">
                {userData?.email}
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-base text-white font-general">
                Total Purchase
              </span>
              <h2 className="text-2xl  text-blue-50 font-medium font-general">
                -
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

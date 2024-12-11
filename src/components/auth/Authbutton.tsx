import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { saveUserData } from "../../db/db";

const AuthButton = ({ containerStyle }: { containerStyle?: string }) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  useEffect(() => {
    const storeUserData = async () => {
      if (isAuthenticated && user) {
        await saveUserData(user.sub ?? "", {
          name: user.name,
          email: user.email,
        });
      }
    };
    storeUserData();
  }, [isAuthenticated, user]);
  return isAuthenticated ? (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className={`flex relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black  font-general text-xs uppercase ${containerStyle}`}
    >
      Logout
    </button>
  ) : (
    <button
      className="flex relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black font-general text-xs uppercase"
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  );
};

export default AuthButton;

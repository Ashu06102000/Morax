import { useAuth0 } from "@auth0/auth0-react";

const AuthButton = ({ containerStyle }: { containerStyle?: string }) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

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

import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedPage = () => {
  return <h1>This is a protected page!</h1>;
};

export default withAuthenticationRequired(ProtectedPage, {
  onRedirecting: () => <div>Loading...</div>,
});

import Keycloak from 'keycloak-js'
import { ReactKeycloakProvider } from "@react-keycloak/web";
import PrivateRoute from './PrivateRoute';
import Loginout from './Loginout'

const keycloak = new Keycloak({
  url: "http://localhost:18080/auth/",
  clientId: "react-client",
  realm: "camunda-platform"
});

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Loginout></Loginout>
      <h1>Public Stuff</h1>
      <PrivateRoute>
        <h1>Private Stuff</h1>
      </PrivateRoute>
    </ReactKeycloakProvider>
  );
}

export default App;

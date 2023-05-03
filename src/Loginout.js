import { useKeycloak } from "@react-keycloak/web";

const Loginout = () => {
    const { keycloak, initialized } = useKeycloak();

    if(keycloak.authenticated){
        return (
            <button
                type="button"
                onClick={() => keycloak.logout()}
            >
                Logout ({keycloak.tokenParsed.preferred_username})
            </button>
        )
    } 
    else {
        return (
            <button
                type="button"
                onClick={() => keycloak.login()}
            >
                Login
            </button>
        )
    }
};

export default Loginout;
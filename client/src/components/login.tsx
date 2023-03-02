import { PublicClientApplication } from "@azure/msal-browser";
import React, { useRef, useState, useContext } from "react";
import AppContext, { Context } from "../context/context";

const iclLogo = new URL("../../assets/logo.webp", import.meta.url);

const msalConfig = {
  auth: {
    clientId: "c5513232-3568-4f91-aa1b-3ce69c85bada", //In-3DTech Client ID
    authority:
      "https://login.microsoftonline.com/e1585c6c-774c-4796-8b97-e378f19f6f79", // In-3DTech Tenant ID
  },
  cache: {
    cacheLocation: "sessionStorage",
  },
};

export const Login: React.FC<{
  tokenRef: React.MutableRefObject<string | undefined>;
}> = ({ tokenRef }) => {
  //Create MSAL instance with the config created ahead of time. This includes the tenant & client ID needed to make the request
  const msalInstance = useRef(new PublicClientApplication(msalConfig));
  const [connecting, setConnecting] = useState(false);
  const appContext = useContext<Context>(AppContext);

  async function loginToAzure() {
    setConnecting(true);
    try {
      //Using the instance created, this does a request to the Azure AD and creates a token for the user
      const loginResponse = await msalInstance.current.loginPopup({
        scopes: ["c5513232-3568-4f91-aa1b-3ce69c85bada/.default"],
      });
      //Save the token received in the resposne to a reference to be easily used in rest of application
      tokenRef.current = loginResponse.accessToken;
      const userRes = {
        name: loginResponse.account?.name,
        username: loginResponse.account?.username,
      };
      appContext.setUser(userRes);
      // appContext.setUser({
      //   name: "Jeremy Wesfield",
      //   username: "jwes@in3d-tech.com",
      // });
      // setAuthorized(true);
    } catch (err) {
      console.log("Error: " + err);
      setConnecting(false);
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login">
        <img className="login-logo" src={iclLogo.href}></img>
        {connecting ? (
          <div className="connecting">..מתחבר</div>
        ) : (
          <button className="login-btn" onClick={loginToAzure}>
            התחברות
          </button>
        )}
      </div>
    </div>
  );
};

// previous login details

// import { PublicClientApplication } from "@azure/msal-browser";
// import React, { useRef, useState } from "react";

// const iclLogo = new URL("../../assets/logo.webp", import.meta.url);

// const msalConfig = {
//   auth: {
//     clientId: "6287aa25-60a8-4c86-837e-8feaed21c9dc", //In-3DTech Client ID
//     authority:
//       "https://login.microsoftonline.com/23826c63-4992-4e44-bd86-1e9811e7a0bf", // In-3DTech Tenant ID
//   },
//   cache: {
//     cacheLocation: "sessionStorage",
//   },
// };

// export const Login: React.FC<{
//   setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
//   tokenRef: React.MutableRefObject<string | undefined>;
// }> = ({ setAuthorized, tokenRef }) => {
//   //Create MSAL instance with the config created ahead of time. This includes the tenant & client ID needed to make the request
//   const msalInstance = useRef(new PublicClientApplication(msalConfig));
//   const [connecting, setConnecting] = useState(false);

//   async function loginToAzure() {
//     setConnecting(true);
//     try {
//       //Using the instance created, this does a request to the Azure AD and creates a token for the user
//       const loginResponse = await msalInstance.current.loginPopup({
//         scopes: ["6287aa25-60a8-4c86-837e-8feaed21c9dc/.default"],
//       });
//       //Save the token received in the resposne to a reference to be easily used in rest of application
//       tokenRef.current = loginResponse.accessToken;
//       setAuthorized(true);
//     } catch (err) {
//       console.log("Error: " + err);
//       setConnecting(false);
//     }
//   }

//   return (
//     <div className="login-wrapper">
//       <div className="login">
//         <img className="login-logo" src={iclLogo.href}></img>
//         {connecting ? (
//           <div className="connecting">..מתחבר</div>
//         ) : (
//           <button className="login-btn" onClick={loginToAzure}>
//             התחברות
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

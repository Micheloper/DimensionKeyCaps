import { useContext } from "react";
import { UserAuthContext } from "../../context/UserAuthContext";
import "./UserAuthenticate.scss";

export const UserAuthenticate = () => {
  const { setIsAuthenticated } = useContext(UserAuthContext);

  const handlesubmit = () => {
    setIsAuthenticated(true);
  };
  return (
    <>
      <div className=" containerLogin0">
        <div className=" containerLogin">
          <h2>Por favor Logueate.</h2>
          <hr />

          <div>
            <button id="gooey-button" onClick={handlesubmit}>
              Login
              <span class="bubbles">
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

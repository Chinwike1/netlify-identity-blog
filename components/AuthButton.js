import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const AuthButton = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div className="absolute top-5 right-5">
      {!user ? (
        <button
          onClick={login}
          className="py-2 px-4 mr-2 bg-sky-500 hover:bg-sky-600 rounded-md"
        >
          Login
        </button>
      ) : (
        <button
          onClick={logout}
          className="py-2 px-4 mr-2 bg-sky-500 hover:bg-sky-600 rounded-md"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default AuthButton;

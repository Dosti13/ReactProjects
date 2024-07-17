import UserContext from "./Context";
import { useContext } from "react";

export default function MyConsumer () {

    const { user, setuser } = useContext(UserContext);

    return (
      <div>
        <p>Current value: {user}</p>
        <button onClick={() => setuser('new value')}>Update value</button>
      </div>
    );
  };

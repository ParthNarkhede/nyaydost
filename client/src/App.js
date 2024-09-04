import React, {useEffect, useState} from 'react';

function App() {
  const [backen, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
     ).then(
      data=>{
        setBackendData(data)
      }
     )
     },[])
  console.log(backen);

  return (
    <div>
      {/* {typeof backen.users === 'undefined' ? (
        <div>Loading...</div>
      ) : (
        backen.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )} */}
    </div>
  );
}

export default App;

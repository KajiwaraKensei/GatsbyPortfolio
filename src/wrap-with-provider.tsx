import React, { useState } from 'react';

export const myContext = React.createContext<any>({
  type: "card"
});

const Provider: React.FC = (props) => {
  const [isDark, setTheme] = useState<string>("false");

  return (
    <myContext.Provider value={{
      isDark,
      changeTheme: () => setTheme("true")
    }}>
      {props.children}
    </myContext.Provider>
  )
};

export default Provider
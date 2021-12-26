import React  from "react";
import Context from "./Components/Context";

// step-01 : creating context and exporting it to use it in another file
export const NameContext =React.createContext()

function App() {
  
  return (
    <div >
      {/* step-02 sending value to Children Context through provider */}
      {/* N.B attribute must be named 'value' otherwise it wont work */}
      <NameContext.Provider value={{name: 'Ruman',message:'Hi'}}>
        <Context />     
      </NameContext.Provider>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return(
        <div>Hi There</div>
    )
}

// ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
// )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
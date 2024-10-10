//CREATE ELEMENT USING JAVASCRIPT

// let heading = document.createElement("h1");
// heading.innerHTML = "hello,welcome to react js";
// let root = document.getElementById("root");
// root.appendChild(heading);

// CREATE ELEMENT USING REACT JS

// let heading=React.createElement("h1",{id:"heading",class:"heading"},"Element Created using react ");
// let root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/** 
 * <div id="parent">
 *  <div id="child">
 *     <h1>hi,i am tag</h1>
 *  </div>
 * </div>
*/

const heading=React.createElement("div",{id:"parent"},
        React.createElement("div",{},
            React.createElement("h1",{},"i am tag")
    )
)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);
//const heading=React.createElement("h1",{id:"heading"},"Hi from React JS");


const parent =React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hi am h1 TAG"),React.createElement("h2",{},"Hi am h2 TAG")]),

React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hi am h1 TAG"),React.createElement("h2",{},"Hi am h2 TAG")])]);

//for the above little confussion we are going to create ----jsx----
console.log(parent);

const ram = ReactDOM.createRoot(document.getElementById("ram"));


ram.render(parent);
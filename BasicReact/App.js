/**
 * <div id="parent">
 *    <div id = "child">
 *        <h1> I am a hero </h1>
 *    </div>
 * </div>
 * 
 * 
 * 
 */

const parent = React.createElement("div", {id:"parent"},
   [React.createElement("div", {id:"child"},
   React.createElement("h1", {}, "I was talking with my friend")),
   React.createElement("div", {id:"child2"},
   React.createElement("h2", {}, "I was talking with my friend and suddenly saw tiger"))]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
/*
 *  src/app.js takes JSX, Babel plugin generates JS to 
 *  public/scripts/app.js
*/

const app = {
    title: "Pigtown!",
    subtitle: "You are that pig.",
    options: ["One", "Two"]
}

const template =
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options." : "No options."}</p>
        <ol>
            <li>Option one.</li>
            <li>Option one.</li>
        </ol>
    </div>

const user = {
    name: "Cowson",
    age: 20,
    location: "Meadowland"
}

const templateTwo = 
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>} 
        {getLocation(user.location)}
    </div>
	
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

const appRoot = document.querySelector("#app");

// ReactDOM.render(template, appRoot);
ReactDOM.render(template, appRoot);
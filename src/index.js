import React from "react"
import ReactDOM from "react-dom"
import logo from "./img/react-logo.png"

function Page() {
    return (
      <div>
          <img src={logo} width="40px" />
          <h1>Fun facts about React</h1>
          <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
      </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
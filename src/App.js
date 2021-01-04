import {useState} from 'react'
import styles from "./App.module.css";
//import bootstrap from "./bootstrap.module.css";

function App() {
  const [formstate, formsetstate] = useState({ name: '', email: '', password: '' });
  
  const callapi = (event) => {
    //console.log(event.target[0].value)
  }
  const namechange = (event) => {
    formsetstate({ name: event.target.value});
  }

  const emailchange = (event) => {
    formsetstate({ email: event.target.value});
  }
  
  const passchange = (event) => {
    formsetstate({ password: event.target.value});
  }
  

  return (
    <div className={styles.app}>
      <div className={styles.formdiv}>
        <form className={styles.form}>
          <table>
            <tr>
              <td>Name:</td>
              <td>
                <input type="text" name="name" placeholder="Name" 
                  value={formstate.name} onchange={namechange}
                />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input type="email" name="email" placeholder="Email" 
                  value={formstate.email} onchange={emailchange} />
                
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input type="password" name="password" placeholder="Password" value={formstate.password} onchange={passchange} />
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <button className={styles.button} value="hi"onClick={callapi}>Submit</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
      <h1>{formstate.name}</h1>
      <h1>{formstate.email}</h1>
      <h1>{formstate.password}</h1>
    </div>
  );
}

export default App;

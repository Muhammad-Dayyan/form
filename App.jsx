import "./App.css"

const App = () => {

  return(
    <>
    <h1 className="heading">Rejister Form</h1>
    <div className="form">
       <form>
       Username: <input type="text" placeholder="Enter the Name"></input><br></br><br></br>
       Fathername: <input type="text" placeholder="Enter the Name"></input><br></br><br></br>
       Email: <input type="text" placeholder="Enter the Name"></input><br></br><br></br>
       Password: <input type="password" placeholder="Enter the Name"></input><br></br><br></br>
       
       <input type="submit" value="submit"></input>
        </form> </div>
        
    </>
  )
   

}

export default App
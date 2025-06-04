import Chai from "./chai"

function App() {
  const username = "chai aur code"

  return (
    <>
    <Chai/>
    <h1>chai aur react {username}</h1>   {/* {username}  is called expression or we can called evaluated expression 
                                          {} iske ander hum jsx k ander variable inject krte h*/}
    <p>test para</p>
    </>
  )
}

export default App

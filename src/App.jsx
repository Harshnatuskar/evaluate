function App() { 
 
  const getMessages = async()=>{
    const options = {
      method: "POST",
      body:JSON.stringify({
        message:"Hey , how are you doing?"
      }),
      headers:{
        'Content-type': "application/json"
      }
    }
    try{
      const response = await fetch('http://localhost:8000/root',options)
      const data = await response.json()
      console.log(data)
    }catch(error){
      console.error(error)
    }
  }
  return (
    <>
       <div className='app'> 
        <section className="side-bar">
          <button>+ new chat</button>
          <ul className="history">
            <li>lol</li>
          </ul> 
        </section>
        <section className="main">
          <h1>Evaluate</h1>
          <ul className="feed">

          </ul>
          <div className="bottom">
            <div className="input-holder">
              <input type="text" />
              <div onClick={getMessages} id="submit">
                {'>'} 
              </div>
              
            </div>
          </div>
        </section>
       </div>
    </>
  );
}

export default App

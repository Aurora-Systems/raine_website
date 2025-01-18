function App() {

  return (
    <div className="container-fluid p-0 m-0">
      <div className="sticky-top d-flex align-items-center justify-content-between  bg-white p-2">
          <div>
              <img src="https://ngratesc.sirv.com/Raine/favicon.png" width={"50px"} className="img-fluid" alt="logo"/>
          </div>
          <div>
            <button className="btn p_btn shadow">Book Now</button>
          </div>
      </div>
      <div className={"min-vh-100 d-flex align-items-center text-center justify-content-center"}>
        <div className="overlay">

        </div>
          <video src="https://ngratesc.sirv.com/Raine/6750890-hd_1920_1080_25fps.mp4" autoPlay loop muted/>
          <div className={"vid_con d-flex flex-column justify-content-center"}>
            <div>
              <img src="https://ngratesc.sirv.com/Raine/logo_header.png" width={200} className="img-fluid"/>
              <h1 className="display-1 text-center">Rediscover Your<br/> <span className="gradient-text"> Best Self</span><br/></h1>
              <button className="text-center p_btn btn shadow">Book Now</button>
              </div>
        </div>
      </div>
      <div className={"min-vh-100 d-flex align-items-center"}>
        <div className={"text-center"}>
          <div>
            <h1>Services</h1>
            <p></p>
          </div>
         
        </div>
      </div>


    </div>
  )
}

export default App

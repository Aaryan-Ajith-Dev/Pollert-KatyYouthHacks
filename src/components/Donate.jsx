import React from 'react';

function Donate() {
  return (
    <div className="header3">
      <h1 className='heading2'>Donate</h1>
      <p style={{ width: "32%", fontSize: "1em", lineHeight: "1.2" }}>Your part matters</p>
      <div className='donate-pos'>
        <p style={{ lineHeight: "2", width: "36%" }}>
          We use the donation to conduct workshops in areas with a high level of pollution and help provide info about how to reduce it.<br />
          We also plant trees for every donation and collect 1kg of ocean waste.<br />
          We are a charitable organisation and would love your help. <br />
        </p>
  <a href="donate.html" target="_blank" className='donate'>
    <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="Donate Image" style={{width:"50%"}}>
  </img>
  </a>

      </div>
    </div>
  )
}

export default Donate;

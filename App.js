import "./App.css";
function App() {
  

  return (
    <div className="main">
      <div className="header">
        <div className="content1">
          <div className="box">
            <p id="cb">CB</p>
          </div>
          <p id="cloud-banking">Cloudbanking</p>
        </div>
        <div className="content2">
          <div className="box2">
            <p id="gc">GC</p>
          </div>
          <div className="clark">
            <p id="clark">Gregory Clark</p>
          </div>
        </div>
      </div>
      <div className="main-body">
       <div className="lists">
        <div className="dot-one"><p>1</p></div>
       {Array.from({length:2}).map((item, index)=>(
        <div className="dot"><p></p></div>
       ))}
       {Array.from({length:7}).map((item, index)=>(
        <div className="dot1"><p></p></div>
       ))}
       <div className="dot-two"><p>2</p></div>
       {Array.from({length:9}).map((item, index)=>(
        <div className="dot1"><p></p></div>
       ))}
       <div className="dot-three"><p>3</p></div>
       {Array.from({length:9}).map((item, index)=>(
        <div className="dot1"><p></p></div>
       ))}
       <div className="dot-four"><p>4</p></div>
       {Array.from({length:9}).map((item, index)=>(
        <div className="dot1"><p></p></div>
       ))}
       <div className="dot-five"><p>5</p></div>
       {Array.from({length:9}).map((item, index)=>(
        <div className="dot1"><p></p></div>
       ))}
       <div className="list-items">
       <ul>
        <li><a href="#">Borrower company info</a></li>
        <li>Director Info</li>
        <li>Financial Info</li>
        <li>Past Performance Details</li>
        <li>Document Upload</li>
       </ul>
       </div>
       </div>
       <div className="container">
        <div className="container-title">
        <h1>Borrower Company Info</h1>
        </div>
        <div className="container-contents">
        <div className="properties">
          <label>Property Name</label><input id="one" placeholder="Property Name"></input>
        </div>
        <div className="properties">
          <label>Property Type</label>
          <select id="two">
          <option value="" disabled selected hidden>Property Type</option>
            <option>Own house</option>
            <option>Rented house</option>
          </select>
        </div>
        <div className="properties">
          <label>Number of units</label>
          <select id="three">
          <option value="" disabled selected hidden>Number of Units</option>
            <option>1</option>
            <option>2</option>
          </select>
          </div>
          <div className="address">
          <label>Property Address</label><input id="four" placeholder="Enter Borrower Name"></input>
        </div>
        <div className="file">
          <label>File Attachment</label><input id="five" type="file" placeholder="Property Name"></input>
        </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default App;

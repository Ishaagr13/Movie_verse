import React from "react";
import '../components/Card.css'

const Card = (props) => {
    // console.log(props);
  return (
    <div className="background-head" >
      <div className="main-card" style={{ width: "19rem" ,  }}>
        <img
          src={props.imgs}
          className="card-img-top"
          alt="Card"
          style={{height:"195px", borderRadius:"20px"}}
        />
        <div className="card-body" style={{textAlign:"center"}}>
          <h4 className="card-text" style={{margin:"15px 2px" , color:"white"}}>{props.name}</h4>
          <h5 className="card-title"style={{margin:"20px 2px" , color:"white"}}>{props.title}</h5>
          <a href={props.link} className="btn btn-primary">
            Watch now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

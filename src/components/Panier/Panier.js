import Achat from "../Achat/Achat";

const Panier = (props) => {
    return (

     <div className="BackgroundPanier"> 
      <div className="panier">
        <span role="close-button" onClick={props.handleDisplayPanier}>X</span>
        <div role="panier">
          Mon panier
          {props.achat.map((value,index)=><Achat id={value} key ={index}></Achat>)}
        </div>
      </div>
      </div>  
    );
  };
  
  export default Panier;
  
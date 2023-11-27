import React, { useState } from 'react';
import './Menus.css';



// Composant Menu
const Menu = (props) => {
  // État du panier
 



  return (
    <div>
      {/* Entrée du menu qui affiche le panier sous forme de modale */}
      <div onClick={props.handleDisplayPanier}>
        Afficher le Panier
      </div>

      
    </div>
  );
};

export default Menu;

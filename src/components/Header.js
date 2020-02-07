import React from 'react';

function Header({tech, onDelete}){
  return (
    <header>
      <nav>
        <div>
          <span>Meu Perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
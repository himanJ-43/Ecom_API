// import React from "react";
// import "./Navbar.css"

// function NavBar({ categories, onCategorySelect, props }) {
//   return (
//     <>
//     <br></br>
//     <input type="text" placeholder="Search products" onChange={props.onSearch} />
//     <nav id="cntr" className="navbar">
//       <ul className="navbar-nav">
//         {categories.map((category) => (
//           <li className="nav-item" key={category}>
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => onCategorySelect(category)}
//             >
//               {category}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//     <br></br>
//     <br></br>
//     </>
//   );
// }

// export default NavBar;


import React from 'react';
import './Navbar.css';

function NavBar({ categories, onCategorySelect, onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <>
      <br />
      <input
        type="text"
        placeholder="Search products"
        onChange={handleSearch}
      />
      <nav id="cntr" className="navbar">
        <ul className="navbar-nav">
          {categories.map((category) => (
            <li className="nav-item" key={category}>
              <a
                className="nav-link"
                href="#"
                onClick={() => onCategorySelect(category)}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <br />
      <br />
    </>
  );
}

export default NavBar;


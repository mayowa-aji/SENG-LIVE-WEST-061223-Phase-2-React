
// Set up state/setter function - create a state then when we click on the button it changes
// set up our helper function when we click on/off
// set up event listener

const Header = ({ isDarkMode, handleClick }) => {


  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <nav>
        <button onClick={handleClick}>{isDarkMode ? "Light Mode": "Dark Mode"}</button>
      </nav>
    </header>
  );
}

export default Header;

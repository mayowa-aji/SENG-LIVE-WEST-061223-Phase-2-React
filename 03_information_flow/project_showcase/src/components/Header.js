const Header = ({isDarkMode,handleToggleDarkMode}) => {


  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode"

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggleDarkMode}>{buttonTextContent}</button>
    </header>
  );
}

export default Header;

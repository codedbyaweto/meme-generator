import trollface from "../assets/troll-face.png";

export default function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className={darkMode ? "header dark" : "header"}>
      <img src={trollface} alt="Troll face" />
      <h1>Meme Generator</h1>

      <button className="toggle-btn" onClick={toggleDarkMode}>
        Toggle {darkMode ? "Light" : "Dark"}
      </button>
    </header>
  );
}

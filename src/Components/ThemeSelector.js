import React from "react";

const themes = ["Purple", "Green", "Blue", "Orange"];

const ThemeSelector = ({ setTheme }) => {
  return (
    <div className="flex gap-2">
      {themes.map((theme) => (
        <button
          key={theme}
          className={p-2 rounded bg-${theme.toLowerCase()}-600}
          onClick={() => setTheme(theme)}
        >
          {theme}
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;s
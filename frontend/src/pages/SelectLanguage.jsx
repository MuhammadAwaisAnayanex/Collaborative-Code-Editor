import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const SelectLanguage = () => {
  const { setLanguage } = useContext(LanguageContext);
  const languages = ["javascript", "python", "c++", "ruby"];

  return (
    <div className="p-6">
      <h2>Select a Programming Language</h2>
      {languages.map((lang) => (
        <button key={lang} onClick={() => setLanguage(lang)} className="p-2 m-2 bg-blue-500 text-white rounded">
          {lang}
        </button>
      ))}
    </div>
  );
};

export default SelectLanguage;

import { useLanguage } from "../contexts/language.context";
import styles from "../styles/components/languageToggle.module.css";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const isPortuguese = language.startsWith('pt');

  const toggleLanguage = () => {
    if (isPortuguese) {
      setLanguage('en');
    } else {
      setLanguage('pt-BR');
    }
  };

  return (
    <div className={styles.toggle} onClick={toggleLanguage}>
      <div className={`${styles.option} ${isPortuguese ? styles.active : ''}`}>
        PT
      </div>
      <div className={`${styles.option} ${!isPortuguese ? styles.active : ''}`}>
        EN
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Emoticon from './components/Emoticon';
import Configurator from './components/Configurator';
import { SettingContext } from './setting-context';

const App = () => {

const [settings, setSettings] = useState({
  eyes: 1,
  mouth: 2,
  color: 3
});

const changeEyes  = (id) => {
setSettings({...settings, eyes: id})
}

const changeMouth = (id) => {
  setSettings({...settings, mouth: id})
}

const changeColor = (id) => {
  setSettings({...settings, color: id})
}

  return (
    <SettingContext.Provider value={{
      ...settings, changeEyes, changeMouth, changeColor
    }}>

    <div className="container">
      <header>
        <h1>Vytvoř si vlastní emotikon</h1>
      </header>
      <main>
        <Emoticon />
        <Configurator />
      </main>
    </div>
    </SettingContext.Provider>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);

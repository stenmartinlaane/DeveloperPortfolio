'use client'
import React, { useContext, useEffect } from 'react'
import './module.css';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from "../ToggleColorMode";

const Slider = () => {

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const handleToggleColor = () => {
    colorMode.toggleColorMode()
  }

//   useEffect(() => {
//     if (theme.palette.mode === 'dark') {
//         document.body.classList.add("dark-theme");
//       } else {
//         document.body.classList.remove("dark-theme");
//       }
//   }, [theme.palette.mode])

  

  return (
    <div className='dark-mode-toggle'>
      <input type="checkbox" className="checkbox" id="checkbox"
        onChange={handleToggleColor}
        checked={theme.palette.mode === 'dark'}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <span className="ball"></span>
      </label>
    </div>
  )
}

{/* <script>
  const userPrefersDark = false;

  function setThemePreference(prefersDark) {
    if (prefersDark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }

  setThemePreference( );

  const checkbox = document.getElementById("checkbox");
  checkbox.checked = userPrefersDark;

  checkbox.addEventListener("change", (event) => {
    const isDarkMode = event.target.checked;
    setThemePreference(isDarkMode);
  });
</script> */}

export default Slider
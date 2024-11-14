// 'use client' comment for Next.js indicating client-side rendering
"use client";

// Import necessary hooks from React
import { createContext, useContext, useState } from "react";

// Create a Context object to manage global state
const StateContext = createContext();

// Context Provider component to wrap around child components and provide state
export const StateProvider = ({ children }) => {
  // State for tracking the active submenu, defaulting to "Development Training"
  const [activeSub, setactiveSub] = useState("Software & Web Development");

  // State for managing the visibility of a slider, initially set to false (hidden)
  const [slider, setslider] = useState(false);

  // state for managing activeLink
  const [activeLink, setactiveLink] = useState(null);

  // State for determining if the page has been scrolled, initially set to false
  const [isScrolled, setIsScrolled] = useState(false);

  // State for toggling a generic component or feature, initially set to false
  const [toggle, settoggle] = useState(false);

  const [hoverLink, sethoverLink] = useState(null);
  // Function to handle updating the active submenu
  const handleActiveLink = (e) => {
    setactiveSub(e);
  };

  // Function to toggle the slider visibility on and off
  const handleSlider = () => {
    setslider(!slider);
  };

  // Function to toggle the generic 'toggle' state
  const handleToggle = () => {
    settoggle(!toggle);
  };

  return (
    // Provide state and functions to child components through Context
    <StateContext.Provider
      value={{
        activeSub, // Current active submenu
        setactiveSub, // Function to update the active submenu
        slider, // State of the slider (visible or hidden)
        setslider, // Function to update slider state
        isScrolled, // State to track if the page has been scrolled
        setIsScrolled, // Function to update scroll state
        handleActiveLink, // Function to set active submenu
        handleSlider, // Function to toggle slider
        toggle, // Toggle state for some component
        settoggle, // Function to update toggle state
        handleToggle, // Function to toggle a feature
        hoverLink,
        sethoverLink,
        activeLink,
        setactiveLink,
      }}
    >
      {children} {/* Render child components here */}
    </StateContext.Provider>
  );
};

// Custom hook to easily access context values in child components
export const useData = () => useContext(StateContext);

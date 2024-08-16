/** @type {import('tailwindcss').Config} */
const color = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*"
  ],
  theme: {
    extend: {
    },
    colors:{
      "prim" : "rgb(48,52,116)",
      "sec"  : "rgb(66,70,128)",
      "bg" : "rgb(232, 233 , 247 ) ",
      "text-prim" :"rgb(71,75,132)",
      "bg-sec":"rgb(246 , 246 , 251)",
      "white" :" rgb(255,255,255)",
      ...color
      
    }
  },
  plugins: [],
}


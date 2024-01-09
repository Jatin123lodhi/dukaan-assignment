/** @type {import('tailwindcss').Config} */
 
 

// const colors = {
//   ...defaultColors,
//   ...{
//     errorRed: "#EE0003",
//     linkBlue: "#004D85",
//     lightRed: "#FFCAC7",
//     bgRed: "#F8F5F5",
//     gr: {
//       primaryR1: "#eccccc",
//       primaryR2: "#9F0002",
//       primaryR3: "#F3635B",
//       primaryR4: "#D4D4D4",
//       primaryR5: "#CCCCCC",
//       primaryR6: "#000000",
//       primaryR7: "#777777",
//       primaryR8: "#EDEDED",
//       primaryR9: "#A0A0A0",

//       primaryN1: "#1C2333",
//       primaryN2: "#2D3852",
//       primaryN8: "#CED4E4",
//       primaryN9: "#EFF1F6",

//       neutralT2: "#4C535D",
//       neutralT3: "#636C79",
//       neutralT4: "#7B8593",
//       neutral06: "#8C9CC0",
//       neutralT06: "#B3B9C1",
//       neutral05: "#979FAA",
//       neutral07: "#6B7FAE",
//       neutral08: "#EFEFEF",

//       placeHolder: "#747474",
//       userProfile1: "#F5E4E3",
//       textUserProfile4: "#4B4B4B",
//       textUserProfile5: "#1B2559",
//       primaryI1: "#D9D9D9",
//       background08: "#F8F8F9",
//       primaryGray: "#324054",
//       secondaryGray: "#71839B",
//     },
    
//     green: {
//       green1: "#3DB135",
//     },
//     red: {
//       primaryRed: "#C31700",
//       secondaryRed: "#9f000226",
//       darkRed: "#9F0002",
//     },
//   },
// }

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter var", "sans-serif"],
      },
      colors: {
        blue: {
          secondary: "#1E2640",
          primary: "#146EB4",
        },
        blackShades:{
        
          black30: "#4D4D4D",
          black80: "#D9D9D9",
          black90: '#E6E6E6'
        },
        red:{
          secondary: "#E50B20"
        }
      }
    },
  },
  plugins: [],
};

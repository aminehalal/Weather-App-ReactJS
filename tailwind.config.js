/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      width :{
        '96' : '27rem',
        '80' : '21rem'
      },
      height : {
        '96' : '30rem'
      },
      fontFamily:{
        'kanit' : ['Kanit' , 'sans-serif']
      }
    },
  },
  plugins: [],
}


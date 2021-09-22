module.exports = {
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundPosition: {
        'icons-1': '92% -10px',
        'icons-2': '92% -5px',
        'icons-3': '92% -1px',
        'icons-4': '92% -14px',
      },
      fontFamily: {
        sans: ['"Rubik"', 'sans-serif'],
      },
      fontSize: {
        'hrs': '2rem',
        'hrs-lg': '3.5rem',
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      },
      spacing: {
        '4.5': '4.5rem',
        '5.1': '5.1rem',
      },
      maxWidth: {
        'desktop': '1110px',
      },
      borderWidth: {
        '3': '3px',
      }
    },
    colors: {
      'blue': 'hsl(246, 80%, 60%)', //person
      'very-dark-blue': 'hsl(226, 43%, 10%)', //bg
      'dark-blue': 'hsl(235, 46%, 20%)', //card
      'desaturated-blue': 'hsl(235, 45%, 61%)', //time active
      'pale-blue': 'hsl(236, 100%, 87%)', //time normal
      'orange': 'hsl(15, 100%, 70%)', //work
      'soft-blue': 'hsl(195, 74%, 62%)', //play
      'light-red': 'hsl(348, 100%, 68%)', //study
      'lime-green': 'hsl(145, 58%, 55%)', //exercise
      'violet': 'hsl(264, 64%, 52%)', //social
      'soft-orange': 'hsl(43, 84%, 65%)', //self care
      'white': 'hsl(0, 0%, 100%)',
      'hover-blue': 'hsl(236, 41%, 34%)', //card active
      'link': 'hsl(228, 45%, 44%)', //attribution
    },
    backgroundImage: theme => ({
      'work': "url('../public/images/icon-work.svg')",
      'play': "url('../public/images/icon-play.svg')",
      'study': "url('../public/images/icon-study.svg')",
      'exercise': "url('../public/images/icon-exercise.svg')",
      'social': "url('../public/images/icon-social.svg')",
      'self-care': "url('../public/images/icon-self-care.svg')",
      'ellipsis': "url('../public/images/icon-ellipsis.svg')",
    })
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}

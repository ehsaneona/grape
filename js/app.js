tailwind.config = {
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: {
          900: "#06020C",
          800: "#0F081D",
        },
        purple: {
          800: "#2E1D41",
          700: "#270B27",
        },
        blue: {
          900: "#4A4BA6",
        },
        pink: {
          900: "#E547B6"
        },
        green: {
          900: "#01AEA5",
        },
        teal: {
          900: "#20CD8F"
        },
        gray: {
          900: "#d9d9d9"
        }
      },
      backgroundImage: {
        'pattern': "url('/img/pattern.png')",
      },
      animation: {
        fade: 'fadeIn 1s ease',
      },
      keyframes: {
        'fadeIn': {
          from: {opacity: 0, transform: 'translateY(50px)'},
          to: {opacity: 1, transform: 'translateY(0)'},
        },
      },
    }
  }
}

module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {

        "primary": "#251D58",

        "secondary": "#D926A9",

        "accent": "#1FB2A6",

        "neutral": "#191D24",

        "base-100": "#2A303C",

        "info": "#3ABFF8",

        "success": "#36D399",

        "warning": "#FBBD23",

        "error": "#F87272",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  ],
  plugins: [require("daisyui")],
}

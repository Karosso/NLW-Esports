const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {},
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        "nlw-gradient": "linear-gradient(90deg, #9572FC 0%, #43E7AD 50%, #E1D55D 100%)",
        "game-gradient": "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
    },
  },
  plugins: [
    plugin(function (helpers) {
      // variants that help styling Radix-UI components
      dataStateVariant('open', helpers)
      dataStateVariant('closed', helpers)
      dataStateVariant('on', helpers)
      dataStateVariant('checked', helpers)
      dataStateVariant('unchecked', helpers)
    }),
  ],
};

function dataStateVariant(state, {
  addVariant, // for registering custom variants
  e           // for manually escaping strings meant to be used in class names
}) {

addVariant(`data-state-${state}`, ({ modifySelectors, separator }) => {
  modifySelectors(({ className }) => {
    return `.${e(`data-state-${state}${separator}${className}`)}[data-state='${state}']`
  })
})

addVariant(`group-data-state-${state}`, ({ modifySelectors, separator }) => {
  modifySelectors(({ className }) => {
    return `.group[data-state='${state}'] .${e(
      `group-data-state-${state}${separator}${className}`,
    )}`
  })
})

addVariant(`peer-data-state-${state}`, ({ modifySelectors, separator }) => {
  modifySelectors(({ className }) => {
    return `.peer[data-state='${state}'] ~ .${e(
      `peer-data-state-${state}${separator}${className}`,
    )}`
  })
})
}

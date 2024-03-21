/* eslint-disable import/no-anonymous-default-export */
import config from "../tailwind.config"

export default {
  ...config,
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/shiro-ui/src/**/*.{js,jsx,ts,tsx}",
  ],
}

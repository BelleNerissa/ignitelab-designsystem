import { themes } from "@storybook/theming";
import '../src/styles/global.css'

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    docs: {
        theme: themes.dark,
    }
}
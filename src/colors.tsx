import variables from './index.scss'

enum ThemeType {
    primary = '--primaryColor',
    secondary = '--secondaryColor',
    tertiary = '--tertiaryColor',
    background = '--backgroundColor'
}

const theme = {
	primary: variables.primaryColor,
	secondary: variables.secondaryColor,
	tertiary: variables.tertiaryColor,
	background: variables.backgroundColor
}

function changeColor (type : ThemeType, newColor : string) {
	document.documentElement.style.setProperty(type.toString(), newColor)
}

export { theme, ThemeType, changeColor }

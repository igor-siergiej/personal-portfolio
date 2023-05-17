import darkThemeColors from '../theme/darkTheme.scss'
import lightThemeColors from '../theme/lightTheme.scss'

interface Theme {
    primaryColor: String,
    secondaryColor: String,
    tertiaryColor: String,
    backgroundColor: String,
	alternativeBackground: String,
	fontColor: String
}

const darkTheme: Theme = {
	primaryColor: darkThemeColors.primaryColor,
	secondaryColor: darkThemeColors.secondaryColor,
	tertiaryColor: darkThemeColors.tertiaryColor,
	backgroundColor: darkThemeColors.backgroundColor,
	alternativeBackground: darkThemeColors.alternativeBackground,
	fontColor: darkThemeColors.fontColor
}

const whiteTheme: Theme = {
	primaryColor: lightThemeColors.primaryColor,
	secondaryColor: lightThemeColors.secondaryColor,
	tertiaryColor: lightThemeColors.tertiaryColor,
	backgroundColor: lightThemeColors.backgroundColor,
	alternativeBackground: lightThemeColors.alternativeBackground,
	fontColor: lightThemeColors.fontColor
}

function changeTheme () {
	const themeColors = Object.keys(whiteTheme)
	const colorValues = Object.values(whiteTheme)
	for (let i = 0; i < themeColors.length; i++) {
		console.log(colorValues[i])
		document.documentElement.style.setProperty('--' + themeColors[i], colorValues[i])
	}
}

export { changeTheme }

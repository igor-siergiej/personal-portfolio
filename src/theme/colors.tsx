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

const lightTheme: Theme = {
	primaryColor: lightThemeColors.primaryColor,
	secondaryColor: lightThemeColors.secondaryColor,
	tertiaryColor: lightThemeColors.tertiaryColor,
	backgroundColor: lightThemeColors.backgroundColor,
	alternativeBackground: lightThemeColors.alternativeBackground,
	fontColor: lightThemeColors.fontColor
}

function setTheme (theme :Theme) {
	const colorKeys = Object.keys(theme)
	const colorValues = Object.values(theme)
	for (let i = 0; i < colorKeys.length; i++) {
		console.log(colorValues[i])
		document.documentElement.style.setProperty('--' + colorKeys[i], colorValues[i])
	}
}

function setDarkTheme () {
	setTheme(darkTheme)
}

function setLightTheme () {
	setTheme(lightTheme)
}

function changeTheme () {
	console.log('change')
}

export { setDarkTheme, setLightTheme, changeTheme }

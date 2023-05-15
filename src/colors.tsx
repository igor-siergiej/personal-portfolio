import variables from './index.scss'

enum ThemeType {
    primary = '--primaryColor',
    secondary = '--secondaryColor',
    tertiary = '--tertiaryColor',
    background = '--backgroundColor'
}

const defaultTheme = {
	primary: variables.primaryColor,
	secondary: variables.secondaryColor,
	tertiary: variables.tertiaryColor,
	background: variables.backgroundColor
}

const alternativeTheme = {
	primary: 'green',
	secondary: 'red',
	tertiary: 'purple',
	background: 'white'
}

function changeTheme () {
	for (let i = 0; i < Object.keys(defaultTheme).length; i++) {
		const thingToChange: string = Object.values(ThemeType)[i]
		const change:string = Object.values(alternativeTheme)[i]
		document.documentElement.style.setProperty(thingToChange, change)
	}
}

export { defaultTheme, ThemeType, changeTheme }

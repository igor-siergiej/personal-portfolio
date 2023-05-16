import variables from '../index.scss'

enum ThemeType {
    primary = '--primary',
    secondary = '--secondary',
    tertiary = '--tertiary',
    background = '--background',
	alternativeBackground = '--alternativeBackground'
}

const defaultTheme = {
	primary: variables.primaryColor,
	secondary: variables.secondaryColor,
	tertiary: variables.tertiaryColor,
	background: variables.backgroundColor,
	alternativeBackground: variables.alternativeBackground
}

type HSLA = {
	h: number,
	l: number,
	s: number,
	a: number
}

const alternativeTheme = {
	primary: { h: 211, s: 100, l: 50, a: 1 } as HSLA,
	secondary: { h: 31, s: 100, l: 50, a: 1 } as HSLA,
	tertiary: { h: 312, s: 100, l: 50, a: 1 } as HSLA,
	background: { h: 0, s: 0, l: 100, a: 1 } as HSLA,
	alternativeBack: { h: 0, s: 0, l: 80, a: 1 } as HSLA
}

function changeTheme () {
	for (let i = 0; i < Object.keys(ThemeType).length; i++) {
		const colorName: string = Object.values(ThemeType)[i]

		const newHLSA :HSLA = Object.values(alternativeTheme)[i]

		document.documentElement.style.setProperty(colorName + '-h', newHLSA.h.toString() + 'deg')
		document.documentElement.style.setProperty(colorName + '-l', newHLSA.l.toString() + '%')
		document.documentElement.style.setProperty(colorName + '-s', newHLSA.s.toString() + '%')
		document.documentElement.style.setProperty(colorName + '-a', newHLSA.a.toString())
	}
}

export { defaultTheme, ThemeType, changeTheme }

import useLocalStorage from '../../hooks/useLocalStorage'

export default function Theme() {
    const theme = useLocalStorage("theme", "light")
  return (
    <button type='button' onClick={theme.changeTheme}>{theme.theme}</button>
  )
}

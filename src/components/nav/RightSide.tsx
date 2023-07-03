import darkMode from '../../assets/moon.png'
import useColorMode from "../../hooks/useColorMode"
export default function RightSide() {
    const [colorMode, setColorMode] = useColorMode() 
    return (
        <>
            <img className=' w-10 rotate-90' onClick={() => setColorMode(colorMode === 'dark'? 'light': 'dark')} src={darkMode} alt="" />
            {/* <button className=" dark:text-white" onClick={() => setColorMode(colorMode === 'dark'? 'light': 'dark')}>Toggle Dark Mode</button> */}
        </>
    )
}

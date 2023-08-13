import { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext()

export const GlobalStateProvider = ({ children }) => {

    const [weatherInfo, setWeatherInfo] = useState()
    const [weather5DaysInfo, setWeather5DaysInfo] = useState()
    const [weatherIcon, setWeatherIcon] = useState(``)
    const [tempType, setTempType] = useState('°C')
    const [prefixWindSpeed, setPrefixWindSpeed] = useState('s')

    return (
        <GlobalStateContext.Provider value={{prefixWindSpeed, setPrefixWindSpeed, tempType, setTempType, weatherIcon, setWeatherIcon, weatherInfo, weather5DaysInfo, setWeather5DaysInfo, setWeatherInfo }}>
            {children}
        </GlobalStateContext.Provider>
    )
}

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (context === undefined) {
        throw new Error('useGlobalState deve ser dentro de um GlobalStateProvider');
    }
    return context
}
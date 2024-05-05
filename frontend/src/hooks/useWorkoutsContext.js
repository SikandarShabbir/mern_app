import {AppContext} from "../context/appContext";
import {useContext} from "react";

export const useWorkoutContext = () => {
    const context = useContext(AppContext)

    if (!context){
        throw Error('Invalid Context')
    }

    return context
}

import { createContext, useContext } from "react";

export type GlobalContent={
    username:string
}
export const GlobalContext=createContext<GlobalContent>({
    username:"imranny"
})
export const useGlobalContext=()=>useContext(GlobalContext)
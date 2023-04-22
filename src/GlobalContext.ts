import { createContext } from "react"
export type GlobalContent={
    username:string,
    path:string
}

export const GlobalContext=createContext<GlobalContent>({
    username:"",
    path:""
})
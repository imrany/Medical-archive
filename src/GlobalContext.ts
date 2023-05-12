import { createContext } from "react"
export type GlobalContent={
    name:string,
    path:string
}

export const GlobalContext=createContext<GlobalContent>({
    name:"",
    path:""
})
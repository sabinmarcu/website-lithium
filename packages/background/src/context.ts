import { makeRenderer } from "./renderer"

export type BackgroundContextType = {
  renderer: ReturnType<typeof makeRenderer>
}
export const BackgroundContext = createContext<BackgroundContextType>({})

import { createFactory } from "react"

export const atom = <T>(factory: () => T) => factory();
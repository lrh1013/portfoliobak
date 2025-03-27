import { createContext } from 'react'
import type { LoadingContextType } from '@/utils/context/LoadingType'

export const LoadingContext = createContext<LoadingContextType | null>(null)

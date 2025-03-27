import { useState } from 'react'
import { LoadingContext } from '@/utils/context/LoadingContext'
import type { ReactNode } from 'react'
import type { LoadingContextType } from './LoadingType'

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false)

  const value: LoadingContextType = {
    isLoading,
    showLoading: () => setIsLoading(true),
    hideLoading: () => setIsLoading(false),
  }

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  )
}

import { useState, useEffect, useRef, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import {
  LoadingContext,
  LoadingContextType,
} from '@/utils/context/loading/LoadingContext'

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const prevPath = useRef(location.pathname)

  const showLoading = () => setIsLoading(true)
  const hideLoading = () => setIsLoading(false)

  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      showLoading()

      const timeout = setTimeout(() => {
        hideLoading()
        prevPath.current = location.pathname
      }, 500)

      return () => clearTimeout(timeout)
    }
  }, [location.pathname])

  const value: LoadingContextType = {
    isLoading,
    showLoading,
    hideLoading,
  }

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  )
}

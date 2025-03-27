import { useEffect, useRef, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { LoadingContext } from '@/utils/context/LoadingContext'
import type { LoadingContextType } from '@/utils/context/LoadingType'

const LoadingHandler = () => {
  const location = useLocation()
  const prevPath = useRef(location.pathname)
  const loadingContext = useContext(LoadingContext) as LoadingContextType

  useEffect(() => {
    if (!loadingContext) return

    if (location.pathname !== prevPath.current) {
      loadingContext.showLoading()

      const timeout = setTimeout(() => {
        loadingContext.hideLoading()
        prevPath.current = location.pathname
      }, 500)

      return () => clearTimeout(timeout)
    }
  }, [location.pathname, loadingContext])

  return null
}

export default LoadingHandler

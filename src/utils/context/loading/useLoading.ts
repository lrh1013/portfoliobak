import { useContext } from 'react'
import { LoadingContext } from '@/utils/context/loading/LoadingContext'
import type { LoadingContextType } from '@/utils/context/loading/LoadingContext'

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('LoadingProvider 안에서만 사용할 수 있습니다.')
  }
  return context
}

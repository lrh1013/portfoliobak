import { useContext } from 'react'
import { LoadingContext } from '@/utils/context/LoadingContext'

function Loading() {
  const context = useContext(LoadingContext)
  if (!context) return null

  const { isLoading } = context
  if (!isLoading) return null

  return <div className="loading-overlay">로딩 중</div>
}

export default Loading

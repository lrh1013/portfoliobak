import { useLoading } from '@/utils/context/loading/useLoading'

function Loading() {
  const { isLoading } = useLoading()

  if (!isLoading) {
    return null
  }

  return <div className="loading-overlay">로딩 중</div>
}

export default Loading

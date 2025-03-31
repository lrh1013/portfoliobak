import { useRef } from 'react'
import { FilterCategory } from '@/utils/interface/projectData'
import Button from 'react-bootstrap/Button'
import Styles from '@/components/project/project.module.scss'

interface ProjectTabProps {
  filter: FilterCategory
  onChange: (category: FilterCategory) => void
}

interface ProjectTabItems {
  label: string
  value: FilterCategory
}

const tabItems: ProjectTabItems[] = [
  { label: '전체', value: 'all' },
  { label: '실무', value: 'work' },
  { label: '연습', value: 'practice' },
]

const ProjectTab = ({ filter, onChange }: ProjectTabProps) => {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = tabItems.findIndex((item) => item.value === filter)

    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % tabItems.length
      tabRefs.current[nextIndex]?.focus()
      onChange(tabItems[nextIndex].value)
    }

    if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + tabItems.length) % tabItems.length
      tabRefs.current[prevIndex]?.focus()
      onChange(tabItems[prevIndex].value)
    }
  }

  return (
    <div
      role="tablist"
      aria-label="프로젝트 카테고리 탭"
      aria-orientation="horizontal"
      className={Styles['project-tab']}
      onKeyDown={handleKeyDown}
    >
      {tabItems.map(({ label, value }, index) => {
        const isSelected = filter === value
        const tabId = `tab-${value}`
        const panelId = `panel-${value}`

        return (
          <Button
            id={tabId}
            key={value}
            role="tab"
            aria-selected={isSelected}
            aria-controls={panelId}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onChange(value)}
            ref={(el) => {
              tabRefs.current[index] = el
            }}
            variant={isSelected ? 'primary' : 'light'}
          >
            {label}
          </Button>
        )
      })}
    </div>
  )
}

export default ProjectTab

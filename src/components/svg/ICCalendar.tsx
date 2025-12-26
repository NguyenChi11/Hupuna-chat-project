interface CalendarIconProps {
  size?: number
  className?: string
}

export const ICCalendar = ({
  size = 24,
  className = '',
}: CalendarIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" />
    <line x1="3" y1="8" x2="21" y2="8" stroke="currentColor" />

    <line x1="7" y1="2" x2="7" y2="5" stroke="currentColor" strokeLinecap="round"/>
    <line x1="17" y1="2" x2="17" y2="5" stroke="currentColor" strokeLinecap="round"/>

    <line x1="6" y1="11" x2="8" y2="11" stroke="currentColor"/>
    <line x1="11" y1="11" x2="13" y2="11" stroke="currentColor"/>
    <line x1="16" y1="11" x2="18" y2="11" stroke="currentColor"/>

    <line x1="6" y1="14" x2="8" y2="14" stroke="currentColor"/>
    <line x1="11" y1="14" x2="13" y2="14" stroke="currentColor"/>
    <line x1="16" y1="14" x2="18" y2="14" stroke="currentColor"/>

    <line x1="6" y1="17" x2="8" y2="17" stroke="currentColor"/>
    <line x1="11" y1="17" x2="13" y2="17" stroke="currentColor"/>
    <line x1="16" y1="17" x2="18" y2="17" stroke="currentColor"/>
  </svg>
)

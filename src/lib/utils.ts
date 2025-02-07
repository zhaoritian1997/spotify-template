import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);


export const formatTimeToCount = (time: string) => {
  const timeArr = time.split(':').map(Number)
  if (timeArr.length === 3) {
    return timeArr[0] * 3600 + timeArr[1] * 60 + timeArr[2]
  } else if (timeArr.length === 2) {
    return timeArr[0] * 60 + timeArr[1]
  } else {
    return timeArr[0]
  }
}
export const formatCountToTime = (count: number) => {
  const hours = Math.floor(count / 3600)
  const minutes = Math.floor((count % 3600) / 60)
  const seconds = count % 60
  if (hours) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  } else if (minutes) {
    if (seconds < 10) {
      return `${minutes.toString().padStart(1, '0')}:0${seconds.toString().padStart(2, '0')}`
    } else {
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
  } else {
    return `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`
  }
}
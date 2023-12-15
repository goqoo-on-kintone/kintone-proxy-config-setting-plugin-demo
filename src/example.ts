import { DateTime, Settings } from 'luxon'
import { isHoliday } from '@holiday-jp/holiday_jp'

Settings.defaultZoneName = 'Asia/Tokyo'

export const getLatestWeekday = (date: DateTime): DateTime => {
  if ([6, 7].includes(date.weekday) || isHoliday(date.toJSDate())) {
    const prevDate = date.minus({ day: 1 })
    return getLatestWeekday(prevDate)
  }
  return date
}

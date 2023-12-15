import './jest.ignore'
import { DateTime } from 'luxon'
import { getLatestWeekday } from '../src/example'

describe('getLatestWeekday', () => {
  it('月曜日 -> 当日', () => {
    const date = DateTime.fromISO('2022-02-21')
    expect(getLatestWeekday(date).toISODate()).toBe('2022-02-21')
  })
  it('土曜日 -> 金曜日', () => {
    const date = DateTime.fromISO('2022-02-26')
    expect(getLatestWeekday(date).toISODate()).toBe('2022-02-25')
  })
  it('日曜日 -> 金曜日', () => {
    const date = DateTime.fromISO('2022-02-27')
    expect(getLatestWeekday(date).toISODate()).toBe('2022-02-25')
  })
  it('天皇誕生日(水曜日) -> 1日前(火曜日)', () => {
    const date = DateTime.fromISO('2022-02-23')
    expect(getLatestWeekday(date).toISODate()).toBe('2022-02-22')
  })
  it('成人の日(月曜日) -> 3日前(金曜日)', () => {
    const date = DateTime.fromISO('2022-01-10')
    expect(getLatestWeekday(date).toISODate()).toBe('2022-01-07')
  })
  it('こどもの日(木曜日) -> 3日前(月曜日)', () => {
    const date = DateTime.fromISO('2022-05-05')
    expect(getLatestWeekday(date).toISODate()).toBe('2022-05-02')
  })
})

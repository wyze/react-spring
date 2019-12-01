import { MockRaf } from 'mock-raf'
import { Controller, SpringValue, FrameValue } from '..'

declare global {
  let mockRaf: MockRaf

  let advanceUntil: (test: () => boolean) => Promise<void>
  let advanceUntilIdle: () => Promise<void>
  let advanceUntilValue: <T>(spring: FrameValue<T>, value: T) => Promise<void>

  /** Take an array of values (one per animation frame) from internal test storage  */
  let getFrames: {
    <T extends object>(ctrl: Controller<T>, preserve?: boolean): T[]
    <T>(spring: SpringValue<T>, preserve?: boolean): T[]
  }

  const global: {
    mockRaf: typeof mockRaf
    advanceUntil: typeof advanceUntil
    advanceUntilIdle: typeof advanceUntilIdle
    advanceUntilValue: typeof advanceUntilValue
    getFrames: typeof getFrames
  }
}
import config from '../goqoo.config'
import type { Context } from '../goqoo.config.types'

type AssertIsDefined = <T>(variable: T) => asserts variable is NonNullable<T>
const assertContextIsDefined: AssertIsDefined = (context) => {
  if (context === undefined || context === null) {
    const msg = `'context' is not found. received "${context}"`
    alert(msg)
    throw new Error(msg)
  }
}

const getContext = (): Context => {
  const context = config.environments
    .filter((ctx) => ctx.host === location.host)
    .find((ctx) =>
      Object.values(ctx.appId).some((id) => [kintone.app.getId(), kintone.mobile.app.getId()].includes(id))
    )

  assertContextIsDefined(context)

  return context
}

export const context = getContext()

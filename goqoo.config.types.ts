import type { Config as _Config, Auth } from 'goqoo'

export type Env = 'development' // | 'staging' | 'production'

export type AppId = {
  project: number // 案件管理
  customer: number // 顧客管理
  sales_activity: number // 活動履歴
}

type ProxyConfig = { url: string; method: 'GET' | 'POST' | 'PUT' | 'DELETE' }
export type ProxyConfigPlugin = {
  proxyConfigPluginId: string
  kintone: {
    recordsGet: ProxyConfig
    recordPut: ProxyConfig
  }
}

export type Context = {
  env: Env
  host: string
  auth: Auth
  appId: AppId
  externalApi: ProxyConfigPlugin
}

export type Config = _Config<Env, Context>

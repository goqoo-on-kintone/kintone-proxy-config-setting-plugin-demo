import { context } from 'context'
import type { DetailEvent } from 'types'

type CustomerRecord = kintone.types.SavedCustomerFields
type ProjectRecord = kintone.types.SavedProjectFields
type KintoneProxyResponse = [string, number, Record<string, string>]
type KintoneApiResponse<T> = { records: T[] }

const fetchViaPluginProxy = async <T>({
  pluginId,
  url,
  method,
  headers: reqHeaders = {},
  body: reqBody = {},
}: {
  pluginId: string
  url: string
  method: string
  headers?: Record<string, string>
  body?: any
}): Promise<T> => {
  const [resBody, resStatus, resHeaders] = (await kintone.plugin.app.proxy(
    pluginId,
    url,
    method,
    reqHeaders,
    reqBody
  )) as KintoneProxyResponse
  if (resStatus !== 200) {
    console.error(resBody, resHeaders)
    throw new Error(resBody)
  }
  return JSON.parse(resBody)
}

kintone.events.on(['app.record.create.show', 'app.record.edit.show'], (event: DetailEvent<ProjectRecord>) => {
  const { record } = event
  record.部署名.disabled = record.担当者名.disabled = false
  return event
})

kintone.events.on(['app.record.create.submit.success', 'app.record.edit.submit.success'], async (event: DetailEvent<ProjectRecord>) => {
  const customerAppId = kintone.app.getLookupTargetAppId('顧客名')!

  const {
    顧客管理レコード番号_関連レコード紐付け用: { value: customerRecordId },
    部署名: { value: deptName },
    担当者名: { value: contactName },
  } = event.record

  // 部署名・担当者名に変更があれば、顧客管理レコードを更新する
  const query = `$id="${customerRecordId}"`
  const params = `?app=${customerAppId}&query=${encodeURIComponent(query)}`
  const customerRecord = await fetchViaPluginProxy<KintoneApiResponse<CustomerRecord>>({
    pluginId: context.externalApi.proxyConfigPluginId,
    url: context.externalApi.kintone.recordsGet.url + params,
    method: context.externalApi.kintone.recordsGet.method,
  }).then((res) => res.records[0])

  if (customerRecord.部署名.value !== deptName || customerRecord.担当者名.value !== contactName) {
    try {
      await fetchViaPluginProxy<KintoneApiResponse<CustomerRecord>>({
        pluginId: context.externalApi.proxyConfigPluginId,
        url: context.externalApi.kintone.recordPut.url,
        method: context.externalApi.kintone.recordPut.method,
        headers: { 'Content-Type': 'application/json' },
        body: {
          app: customerAppId,
          id: customerRecord.$id.value,
          record: {
            部署名: { value: deptName },
            担当者名: { value: contactName },
          },
        },
      })
      alert('部署名または担当者名が変更されたので、顧客管理レコードも同時に更新しました。')
    } catch (e) {
      console.error(e)
      alert(`部署名または担当者名が変更されましたが、顧客管理レコードの同時更新が失敗しました。
※このレコード（案件管理）は問題なく更新されています。 `)
    }
  }

  return event
})

// NOTE: 即時関数なんぞ使わなくても、ブロックスコープ{}で囲めば十分だと思うのです。
// https://community.cybozu.dev/t/topic/1425
{
  // Proxy経由で任意のAPIリクエストをする関数
  const fetchViaProxy = async ({ url, method, headers: reqHeaders = {}, body: reqBody = {} }) => {
    const [resBody, resStatus, resHeaders] = await kintone.proxy(url, method, reqHeaders, reqBody)
    if (resStatus !== 200) {
      console.error(resBody, resHeaders)
      throw new Error(resBody)
    }
    return JSON.parse(resBody)
  }

  kintone.events.on(['app.record.create.show', 'app.record.edit.show', 'app.record.index.edit.show'], async (event) => {
    // 連番フィールドは自動採番なので編集不可にする
    event.record.連番.disabled = true
    return event
  })

  kintone.events.on('app.record.create.submit', async (event) => {
    try {
      // 連番フィールドの最新値を取得（自分にレコードアクセス権がないレコードもAPIトークンで取得する）
      const appId = kintone.app.getId()
      const query = 'order by 連番 desc limit 1'
      const fields = `fields[0]=連番`
      const params = `?app=${appId}&query=${encodeURIComponent(query)}&${fields}`
      const record = await fetchViaProxy({
        url: 'https://example.cybozu.com/k/v1/records.json' + params,
        method: 'GET',
        headers: { 'X-Cybozu-API-Token': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
      }).then((res) => res.records[0])

      // 採番してレコードに反映
      const latestNumber = Number(record?.連番.value ?? 0)
      event.record.連番.value = latestNumber + 1
      return event
    } catch (e) {
      console.error(e)
      alert(`採番に失敗しました。`)
      return false
    }
  })
}

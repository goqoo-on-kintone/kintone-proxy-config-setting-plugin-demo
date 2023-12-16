declare namespace kintone.types {
  interface CustomerFields {
    備考: kintone.fieldTypes.MultiLineText;
    郵便番号: kintone.fieldTypes.SingleLineText;
    部署名: kintone.fieldTypes.SingleLineText;
    メールアドレス: kintone.fieldTypes.Link;
    担当者名: kintone.fieldTypes.SingleLineText;
    顧客名: kintone.fieldTypes.SingleLineText;
    住所: kintone.fieldTypes.SingleLineText;
    TEL: kintone.fieldTypes.Link;
    FAX: kintone.fieldTypes.Link;
  }
  interface SavedCustomerFields extends CustomerFields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}

declare namespace kintone.types {
  interface SalesActivityFields {
    顧客管理レコード番号_関連レコード一覧紐付け用: kintone.fieldTypes.Number;
    案件管理レコード番号_関連レコード一覧紐付け用: kintone.fieldTypes.Number;
    部署名: kintone.fieldTypes.SingleLineText;
    担当者名: kintone.fieldTypes.SingleLineText;
    案件名: kintone.fieldTypes.SingleLineText;
    商談メモ: kintone.fieldTypes.MultiLineText;
    対応内容: kintone.fieldTypes.DropDown;
    顧客名: kintone.fieldTypes.SingleLineText;
    対応日時: kintone.fieldTypes.Date;

    対応者: kintone.fieldTypes.UserSelect;
    添付ファイル: kintone.fieldTypes.File;
  }
  interface SavedSalesActivityFields extends SalesActivityFields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}

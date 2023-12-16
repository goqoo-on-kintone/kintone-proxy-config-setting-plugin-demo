declare namespace kintone.types {
  interface ProjectFields {
    詳細: kintone.fieldTypes.MultiLineText;
    プラン費用: kintone.fieldTypes.Number;
    担当者名: kintone.fieldTypes.SingleLineText;
    案件名: kintone.fieldTypes.SingleLineText;
    顧客名: kintone.fieldTypes.SingleLineText;
    顧客管理レコード番号_関連レコード紐付け用: kintone.fieldTypes.Number;
    オプション費用: kintone.fieldTypes.Number;
    確度: kintone.fieldTypes.DropDown;
    提案プラン: kintone.fieldTypes.DropDown;
    受注予定日: kintone.fieldTypes.Date;
    部署名: kintone.fieldTypes.SingleLineText;
    初回商談日: kintone.fieldTypes.Date;
    合計費用: kintone.fieldTypes.Calc;
    オプション: kintone.fieldTypes.MultiSelect;
    商談担当者: kintone.fieldTypes.UserSelect;
    資料: kintone.fieldTypes.File;
  }
  interface SavedProjectFields extends ProjectFields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}

export class InventoryItem {
  public id: number;
  public itemNo: number;
  public name: string;
  public description: string;
  public itemCode: string;
  public amount: number;

  constructor(itemNo: number, name: string, desc: string, itemCode: string, amt: number) {
    this.itemNo = itemNo;
    this.name = name;
    this.description = desc;
    this.itemCode = itemCode;
    this.amount = amt;
  }
}

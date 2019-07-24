export interface Phone {
  id:    number;
  label: string;
  phone: string;
}

export interface SupportType {
  id?:     number;
  isUsed?: boolean;
  code:    string;
  charged: boolean;
  mature:  boolean;
  order:   number;
  phones:  Phone[];
}

export interface PhoneInterface {
  id:    number | null;
  label: string;
  phone: string;
}

export interface SupportTypeInterface {
  id:      number | null;
  isUsed:  boolean | null;
  code:    string;
  charged: boolean;
  mature:  boolean;
  order:   number | null;
  phones:  PhoneInterface[];
}

export interface DateRangeInterface {
  fromDate: string;
  toDate:   string;
}

export interface DutyItemInterface {
  dates:    DateRangeInterface[];
  charged:  boolean;
  mature:   boolean;
  employee: DutyEmployeeInterface;
  type:     string;
  phone:    string | null;
}

export interface DutyEmployeeInterface {
  login:    string;
  fullname: string;
  domain:   string;
}

export class SupportTypeCriteriaInterface {
  code: string;
  id:   number;
}

export interface DutyItemCriteria {
  range: DateRangeInterface;
  types: SupportTypeInterface[];
  all:   boolean;
}

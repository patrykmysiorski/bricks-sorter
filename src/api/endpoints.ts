const BASE_REBRICKABLE_ENDPOINT = "https://rebrickable.com/api/v3/lego/";

export const LEGO_SET_INVENTORY_ENDPOINT = (setNumber: number) =>
  `${BASE_REBRICKABLE_ENDPOINT}/sets/${String(setNumber)}-1/parts/`;

import { InventoryResponse } from "../model/inventory.ts";
import { LEGO_SET_INVENTORY_ENDPOINT } from "./endpoints.ts";

const API_KEY = import.meta.env.VITE_API_KEY;

const fetchRebrickableData = async (url: string) => {
  const response = await fetch(url, {
    headers: { Authorization: `key ${API_KEY}` },
  });
  return await response.json();
};

export const getLegoSetInventory = (
  setNumber: number,
): Promise<InventoryResponse> =>
  fetchRebrickableData(
    `${LEGO_SET_INVENTORY_ENDPOINT(setNumber)}?page_size=250`,
  );

interface ExternalIds {
  BrickLink: string[];
  BrickOwl: string[];
  Brickset: string[];
  LEGO: string[];
}

interface Part {
  part_num: string;
  name: string;
  part_cat_id: number;
  part_url: string;
  part_img_url: string;
  external_ids: ExternalIds;
  print_of: string;
}

interface Color {
  id: number;
  name: string;
  rgb: string;
  is_trans: boolean;
  external_ids: {
    BrickLink: { ext_ids: (number | null)[]; ext_descrs: string[][] };
    BrickOwl: { ext_ids: (number | null)[]; ext_descrs: string[][] };
    LEGO: { ext_ids: (number | null)[]; ext_descrs: string[][] };
    Peeron: { ext_ids: (number | null)[]; ext_descrs: string[][] };
    LDraw: { ext_ids: (number | null)[]; ext_descrs: string[][] };
  };
}

interface Result {
  id: number;
  inv_part_id: number;
  part: Part;
  color: Color;
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id: string;
  num_sets: number;
}

export interface InventoryResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}

import * as create from "./Create";
import * as getAll from "./GetAll";
import * as getByID from "./GetById";
import * as updateByID from "./UpdateById";
import * as deleteByID from "./DeleteById";
import * as count from "./Count";

export const CidadesProvider = {
  ...create,
  ...count,
  ...getAll,
  ...getByID,
  ...updateByID,
  ...deleteByID,
};

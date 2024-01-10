import * as create from "./Create";
import * as getAll from "./GetAll";
import * as getByID from "./GetById";
import * as updateByID from "./UpdateById";
import * as deleteByID from "./DeletedById";

export const CidadesController = {
  ...create,
  ...getAll,
  ...getByID,
  ...updateByID,
  ...deleteByID
};

import {Personaje} from "./Personaje";

export class Casa {
  id?: number;
  nombreCasa?: string;
  blazonCasa?: string;
  lemaCasa?: string;
  regionCasa?: string;
  asentamientoCasa?: string;
  Personajes?: Personaje[];
}

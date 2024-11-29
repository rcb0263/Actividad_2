import { OptionalId } from "mongodb";

export type FlightModel = OptionalId<{
  Origen: string;
  Destino: string;
  Fecha: string;
}>;

export type Flight = {
  id: string;
  Origen: string;
  Destino: string;
  Fecha: string;
};
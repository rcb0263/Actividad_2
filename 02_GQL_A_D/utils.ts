import { Flight, FlightModel } from "./types.ts";

export const formModelToFlight = (flightModel: FlightModel): Flight => {
  return {
    id: flightModel._id!.toString(),
    Origen: flightModel.Origen,
    Destino: flightModel.Destino,
    Fecha: flightModel.Fecha
   };
};
import { Collection, ObjectId } from "mongodb";
import { Flight, FlightModel } from "./types.ts";
import { formModelToFlight } from "./utils.ts";

export const resolvers = {
  Query: {
    getflights: async (
      { Destino }: { Destino: string },
      { Origen }: { Origen: string },
      context: { FlightsCollection: Collection<FlightModel> },
    ): Promise<Flight[]> => {
      const flightsModels = await context.FlightsCollection.find(

      ).toArray();
      const flightsModel = await flightsModels.filter(
        (p) => p.Origen === Origen
      );

      return flightsModel.map((flightModel) =>
        
        formModelToFlight(flightModel)
      );
    },
    getflight: async (
      _: unknown,
      { id }: { id: string },
      context: {
        FlightsCollection: Collection<FlightModel>;
      },
    ): Promise<Flight | null> => {
      const flightModel = await context.FlightsCollection.findOne({
        _id: new ObjectId(id),
      });
      if (!flightModel) {
        return null;
      }
      return formModelToFlight(flightModel);
    },
  },
  Mutation: {
    addFlight: async (
      _: unknown,
      args: { Origen: string; Destino: string, Fecha: string },
      context: {
        FlightsCollection: Collection<FlightModel>;
      },
    ): Promise<Flight> => {
      const { Origen, Destino, Fecha } = args;
      const { insertedId } = await context.FlightsCollection.insertOne({
        Origen,
        Destino,
        Fecha: Fecha
      });
      const flightModel = {
        _id: insertedId,
        Origen,
        Destino,
        Fecha
      };
      return formModelToFlight(flightModel!);
    },
  },
};
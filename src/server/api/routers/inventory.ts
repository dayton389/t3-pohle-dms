import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
export const inventoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.inventory.findMany({
      include: {
        images: {
          where: { isPrimary: true },
          take: 1,
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }),
});
// export const inventoryRouter = createTRPCRouter({
//   // Seed some test data
//   seed: publicProcedure.mutation(async ({ ctx }) => {
//     // Create parts
//     const roof = await ctx.db.part.upsert({
//       where: { sku: "ROOF-BLK-001" },
//       update: {},
//       create: {
//         sku: "ROOF-BLK-001",
//         name: "Premium Roof - Black",
//         category: "roof",
//         price: 1200,
//       },
//     });

//     const seat = await ctx.db.part.upsert({
//       where: { sku: "SEAT-REAR-TAN" },
//       update: {},
//       create: {
//         sku: "SEAT-REAR-TAN",
//         name: "Rear Flip Seat - Tan",
//         category: "seat",
//         price: 950,
//       },
//     });

//     // Create a cart with parts installed
//     const cart = await ctx.db.golfCart.create({
//       data: {
//         make: "Club Car",
//         model: "Onward",
//         year: 2024,
//         basePrice: 10000,
//         installedParts: {
//           create: [
//             {
//               partId: roof.id,
//               quantity: 1,
//               chargedPrice: 1100,
//             },
//             {
//               partId: seat.id,
//               quantity: 1,
//               chargedPrice: 900,
//             },
//           ],
//         },
//       },
//       include: {
//         installedParts: {
//           include: { part: true },
//         },
//       },
//     });

//     return cart;
//   }),

//   // Get all carts with their parts
//   getAll: publicProcedure.query(async ({ ctx }) => {
//     return ctx.db.golfCart.findMany({
//       include: {
//         installedParts: {
//           include: { part: true },
//         },
//       },
//     });
//   }),
// });
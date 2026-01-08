// // prisma/seed.ts
// import { PrismaClient } from '../generated/prisma'
// import type { FuelType, InventoryStatus, AccessoryCategory } from '../generated/prisma'

// const prisma = new PrismaClient()

// console.log('Available models:', Object.keys(prisma).filter(k => !k.startsWith('_') && !k.startsWith('$')))
// // ============================================
// // SEED DATA
// // ============================================

// const brands = ['Club Car', 'EZGO', 'Yamaha', 'Icon', 'Evolution']
// const modelsByBrand: Record<string, string[]> = {
//   'Club Car': ['Onward', 'Precedent', 'Tempo', 'Villager'],
//   'EZGO': ['TXT', 'RXV', 'Liberty', 'Express'],
//   'Yamaha': ['Drive2', 'G29', 'Adventurer', 'Concierge'],
//   'Icon': ['i40', 'i60', 'i80'],
//   'Evolution': ['Classic 4', 'Forester 4', 'Carrier 6'],
// }
// const colors = ['White', 'Black', 'Blue', 'Red', 'Green', 'Beige', 'Orange', 'Silver']
// const locations = ['Lot A', 'Lot B', 'Showroom', 'Service Bay']
// const fuelTypes: FuelType[] = ['ELECTRIC', 'GAS', 'LITHIUM']

// const accessories = [
//   // Wheels & Tires
//   { partNumber: 'WT-001', description: '10" Machined Aluminum Wheels (Set of 4)', cost: 280, retailPrice: 449, category: 'WHEELS_TIRES' },
//   { partNumber: 'WT-002', description: '12" Black Phantom Wheels (Set of 4)', cost: 320, retailPrice: 549, category: 'WHEELS_TIRES' },
//   { partNumber: 'WT-003', description: '23" All-Terrain Tires (Set of 4)', cost: 200, retailPrice: 349, category: 'WHEELS_TIRES' },

//   // Seats
//   { partNumber: 'ST-001', description: 'Premium Diamond Stitch Seat Covers - Black', cost: 150, retailPrice: 279, category: 'SEATS' },
//   { partNumber: 'ST-002', description: 'Premium Diamond Stitch Seat Covers - Two Tone', cost: 175, retailPrice: 329, category: 'SEATS' },
//   { partNumber: 'ST-003', description: 'Rear Flip Seat Kit', cost: 400, retailPrice: 699, category: 'SEATS', isFeatured: true },

//   // Lighting
//   { partNumber: 'LT-001', description: 'LED Headlight Bar', cost: 85, retailPrice: 149, category: 'LIGHTING' },
//   { partNumber: 'LT-002', description: 'LED Tail Light Kit', cost: 45, retailPrice: 89, category: 'LIGHTING' },
//   { partNumber: 'LT-003', description: 'Underbody LED Kit - RGB', cost: 65, retailPrice: 129, category: 'LIGHTING' },
//   { partNumber: 'LT-004', description: 'Light Bar 20"', cost: 95, retailPrice: 179, category: 'LIGHTING', isFeatured: true },

//   // Audio
//   { partNumber: 'AU-001', description: 'Bluetooth Speaker Sound Bar', cost: 120, retailPrice: 229, category: 'AUDIO', isFeatured: true },
//   { partNumber: 'AU-002', description: 'Overhead Console with Speakers', cost: 250, retailPrice: 449, category: 'AUDIO' },
//   { partNumber: 'AU-003', description: '6.5" Marine Speakers (Pair)', cost: 55, retailPrice: 99, category: 'AUDIO' },

//   // Enclosures
//   { partNumber: 'EN-001', description: '4-Passenger Enclosure - Black', cost: 180, retailPrice: 299, category: 'ENCLOSURES' },
//   { partNumber: 'EN-002', description: 'Club Car Precedent Enclosure', cost: 200, retailPrice: 349, category: 'ENCLOSURES' },
//   { partNumber: 'EN-003', description: 'Universal Golf Cart Cover', cost: 60, retailPrice: 99, category: 'ENCLOSURES' },

//   // Lift Kits
//   { partNumber: 'LK-001', description: '4" A-Arm Lift Kit - EZGO TXT', cost: 350, retailPrice: 599, category: 'LIFT_KITS', isFeatured: true },
//   { partNumber: 'LK-002', description: '6" A-Arm Lift Kit - Club Car Precedent', cost: 450, retailPrice: 749, category: 'LIFT_KITS' },
//   { partNumber: 'LK-003', description: '3" Spindle Lift Kit - Yamaha', cost: 200, retailPrice: 349, category: 'LIFT_KITS' },

//   // Mirrors
//   { partNumber: 'MR-001', description: 'Side Mirror Set - Universal', cost: 25, retailPrice: 49, category: 'MIRRORS' },
//   { partNumber: 'MR-002', description: 'Panoramic Rear View Mirror', cost: 30, retailPrice: 59, category: 'MIRRORS' },

//   // Storage
//   { partNumber: 'SG-001', description: 'Under Seat Storage Tray', cost: 35, retailPrice: 69, category: 'STORAGE' },
//   { partNumber: 'SG-002', description: 'Rear Cargo Box', cost: 150, retailPrice: 279, category: 'STORAGE' },
//   { partNumber: 'SG-003', description: 'Dash Compartment Organizer', cost: 20, retailPrice: 39, category: 'STORAGE' },

//   // Chargers
//   { partNumber: 'CH-001', description: '48V 15A Smart Charger', cost: 180, retailPrice: 299, category: 'CHARGERS' },
//   { partNumber: 'CH-002', description: '36V 20A Smart Charger', cost: 160, retailPrice: 279, category: 'CHARGERS' },
//   { partNumber: 'CH-003', description: 'Charging Cable Extension 25ft', cost: 25, retailPrice: 49, category: 'CHARGERS' },

//   // Batteries
//   { partNumber: 'BT-001', description: 'Trojan T-105 6V Battery', cost: 140, retailPrice: 199, category: 'BATTERIES' },
//   { partNumber: 'BT-002', description: '48V 100Ah Lithium Battery Kit', cost: 1800, retailPrice: 2999, category: 'BATTERIES', isFeatured: true },
//   { partNumber: 'BT-003', description: 'Battery Watering System', cost: 80, retailPrice: 149, category: 'BATTERIES' },

//   // Misc
//   { partNumber: 'MS-001', description: 'Steering Wheel - Woodgrain', cost: 45, retailPrice: 89, category: 'MISC' },
//   { partNumber: 'MS-002', description: 'Floor Mat Set - All Weather', cost: 35, retailPrice: 69, category: 'MISC' },
//   { partNumber: 'MS-003', description: 'Windshield - Tinted Fold-Down', cost: 120, retailPrice: 219, category: 'MISC' },
//   { partNumber: 'MS-004', description: 'Grab Bar - Powder Coated', cost: 40, retailPrice: 79, category: 'MISC' },
// ]

// const customers = [
//   { firstName: 'John', lastName: 'Doe', email: 'john.doe@email.com', phone: '555-0101', city: 'Phoenix', state: 'AZ' },
//   { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@email.com', phone: '555-0102', city: 'Scottsdale', state: 'AZ' },
//   { firstName: 'Bob', lastName: 'Johnson', email: 'bob.j@email.com', phone: '555-0103', city: 'Mesa', state: 'AZ' },
//   { firstName: 'Alice', lastName: 'Williams', email: 'alice.w@email.com', phone: '555-0104', city: 'Tempe', state: 'AZ' },
//   { firstName: 'Charlie', lastName: 'Brown', email: 'charlie.b@email.com', phone: '555-0105', city: 'Gilbert', state: 'AZ' },
//   { firstName: 'Diana', lastName: 'Garcia', email: 'diana.g@email.com', phone: '555-0106', city: 'Chandler', state: 'AZ' },
//   { firstName: 'Edward', lastName: 'Martinez', email: 'edward.m@email.com', phone: '555-0107', city: 'Glendale', state: 'AZ' },
//   { firstName: 'Fiona', lastName: 'Davis', email: 'fiona.d@email.com', phone: '555-0108', city: 'Peoria', state: 'AZ' },
// ]

// // ============================================
// // HELPERS
// // ============================================

// function randomFrom<T>(arr: T[]): T {
//   return arr[Math.floor(Math.random() * arr.length)]
// }

// function randomBetween(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }

// function generateSerialNumber(brand: string, index: number): string {
//   const prefix = brand.substring(0, 2).toUpperCase()
//   const year = randomBetween(18, 24)
//   return `${prefix}${year}${String(index).padStart(5, '0')}`
// }

// // ============================================
// // MAIN SEED FUNCTION
// // ============================================

// async function main() {
//   console.log('🌱 Starting seed...\n')

//   // Clear existing data
//   console.log('🗑️  Clearing existing data...')
//   await prisma.sale.deleteMany()
//   await prisma.inventoryImage.deleteMany()
//   await prisma.inventory.deleteMany()
//   await prisma.customer.deleteMany()
//   await prisma.accessory.deleteMany()

//   // Seed Customers
//   console.log('👥 Seeding customers...')
//   const createdCustomers = await Promise.all(
//     customers.map((c) =>
//       prisma.customer.create({
//         data: c,
//       })
//     )
//   )
//   console.log(`   ✓ Created ${createdCustomers.length} customers`)

//   // Seed Inventory
//   console.log('🚗 Seeding inventory...')
//   const inventoryItems = []

//   for (let i = 1; i <= 25; i++) {
//     const brand = randomFrom(brands)
//     const models = modelsByBrand[brand]
//     const fuel = randomFrom(fuelTypes)
//     const isSold = i <= 5 // First 5 are sold

//     const inventory = await prisma.inventory.create({
//       data: {
//         stockNumber: `STK-${String(i).padStart(4, '0')}`,
//         serialNumber: generateSerialNumber(brand, i),
//         year: randomBetween(2018, 2024),
//         brand,
//         model: randomFrom(models),
//         carType: randomFrom(['Golf Cart', 'Golf Cart', 'Golf Cart', 'LSV']), // weighted toward Golf Cart
//         fuel,
//         color: randomFrom(colors),
//         price: fuel === 'LITHIUM' 
//           ? randomBetween(12000, 20000) 
//           : randomBetween(5000, 15000),
//         mileage: fuel === 'GAS' ? `${randomBetween(100, 2000)} miles` : null,
//         azStreetLegal: Math.random() > 0.6,
//         status: isSold ? 'SOLD' : randomFrom(['AVAILABLE', 'AVAILABLE', 'AVAILABLE', 'PENDING', 'ON_ORDER']),
//         location: randomFrom(locations),
//         commentsPublic: randomFrom([
//           'Excellent condition, garage kept!',
//           'Recently serviced, ready to drive.',
//           'Low hours, well maintained.',
//           'Custom upgrades included.',
//           'Fleet vehicle, great condition.',
//           null,
//         ]),
//         commentsInternal: randomFrom([
//           'Trade-in from regular customer',
//           'Purchased at auction',
//           'Consignment unit',
//           'Check battery before delivery',
//           null,
//         ]),
//       },
//     })

//     // Add 1-4 images per inventory item
//     const imageCount = randomBetween(1, 4)
//     for (let j = 0; j < imageCount; j++) {
//       await prisma.inventoryImage.create({
//         data: {
//           inventoryId: inventory.id,
//           url: `https://placehold.co/800x600/png?text=${encodeURIComponent(brand + ' ' + inventory.model)}`,
//           sortOrder: j,
//           isPrimary: j === 0,
//         },
//       })
//     }

//     inventoryItems.push(inventory)
//   }
//   console.log(`   ✓ Created ${inventoryItems.length} inventory items with images`)

//   // Seed Sales (for sold inventory)
//   console.log('💰 Seeding sales...')
//   const soldInventory = inventoryItems.filter((inv) => inv.status === 'SOLD')
//   let salesCount = 0

//   for (const inv of soldInventory) {
//     const customer = randomFrom(createdCustomers)
//     const discount = Math.random() > 0.7 ? randomBetween(100, 500) : null
//     const tradein = Math.random() > 0.8 ? randomBetween(1000, 5000) : null

//     await prisma.sale.create({
//       data: {
//         inventoryId: inv.id,
//         customerId: customer.id,
//         salePrice: inv.price,
//         discount,
//         tradein,
//         dateSold: new Date(Date.now() - randomBetween(1, 90) * 24 * 60 * 60 * 1000), // random date in last 90 days
//       },
//     })
//     salesCount++
//   }
//   console.log(`   ✓ Created ${salesCount} sales records`)

//   // Seed Accessories
//   console.log('🔧 Seeding accessories...')
//   for (const acc of accessories) {
//     await prisma.accessory.create({
//       data: {
//         partNumber: acc.partNumber,
//         description: acc.description,
//         cost: acc.cost,
//         retailPrice: acc.retailPrice,
//         category: acc.category as AccessoryCategory,
//         forNewCarts: true,
//         forUsedCarts: true,
//         isFeatured: (acc as any).isFeatured ?? false,
//         showOnWebsite: true,
//         imageUrl: `https://placehold.co/400x400/png?text=${encodeURIComponent(acc.partNumber)}`,
//       },
//     })
//   }
//   console.log(`   ✓ Created ${accessories.length} accessories`)

//   // Summary
//   console.log('\n✅ Seed complete!')
//   console.log('─'.repeat(40))
//   console.log(`   Customers:   ${createdCustomers.length}`)
//   console.log(`   Inventory:   ${inventoryItems.length}`)
//   console.log(`   Sales:       ${salesCount}`)
//   console.log(`   Accessories: ${accessories.length}`)
//   console.log('─'.repeat(40))
// }

// main()
//   .catch((e) => {
//     console.error('❌ Seed failed:')
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
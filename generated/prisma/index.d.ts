
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model InventoryImage
 * 
 */
export type InventoryImage = $Result.DefaultSelection<Prisma.$InventoryImagePayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model Accessory
 * 
 */
export type Accessory = $Result.DefaultSelection<Prisma.$AccessoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FuelType: {
  ELECTRIC: 'ELECTRIC',
  GAS: 'GAS',
  LITHIUM: 'LITHIUM'
};

export type FuelType = (typeof FuelType)[keyof typeof FuelType]


export const InventoryStatus: {
  AVAILABLE: 'AVAILABLE',
  PENDING: 'PENDING',
  SOLD: 'SOLD',
  ON_ORDER: 'ON_ORDER',
  SERVICE: 'SERVICE'
};

export type InventoryStatus = (typeof InventoryStatus)[keyof typeof InventoryStatus]


export const AccessoryCategory: {
  WHEELS_TIRES: 'WHEELS_TIRES',
  SEATS: 'SEATS',
  LIGHTING: 'LIGHTING',
  AUDIO: 'AUDIO',
  ENCLOSURES: 'ENCLOSURES',
  LIFT_KITS: 'LIFT_KITS',
  MIRRORS: 'MIRRORS',
  STORAGE: 'STORAGE',
  CHARGERS: 'CHARGERS',
  BATTERIES: 'BATTERIES',
  MISC: 'MISC'
};

export type AccessoryCategory = (typeof AccessoryCategory)[keyof typeof AccessoryCategory]

}

export type FuelType = $Enums.FuelType

export const FuelType: typeof $Enums.FuelType

export type InventoryStatus = $Enums.InventoryStatus

export const InventoryStatus: typeof $Enums.InventoryStatus

export type AccessoryCategory = $Enums.AccessoryCategory

export const AccessoryCategory: typeof $Enums.AccessoryCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Inventories
 * const inventories = await prisma.inventory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Inventories
   * const inventories = await prisma.inventory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryImage`: Exposes CRUD operations for the **InventoryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryImages
    * const inventoryImages = await prisma.inventoryImage.findMany()
    * ```
    */
  get inventoryImage(): Prisma.InventoryImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessory`: Exposes CRUD operations for the **Accessory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accessories
    * const accessories = await prisma.accessory.findMany()
    * ```
    */
  get accessory(): Prisma.AccessoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Inventory: 'Inventory',
    InventoryImage: 'InventoryImage',
    Customer: 'Customer',
    Sale: 'Sale',
    Accessory: 'Accessory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "inventory" | "inventoryImage" | "customer" | "sale" | "accessory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      InventoryImage: {
        payload: Prisma.$InventoryImagePayload<ExtArgs>
        fields: Prisma.InventoryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryImagePayload>
          }
          findFirst: {
            args: Prisma.InventoryImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryImagePayload>
          }
          findMany: {
            args: Prisma.InventoryImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryImagePayload>[]
          }
          create: {
            args: Prisma.InventoryImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryImagePayload>
          }
          createMany: {
            args: Prisma.InventoryImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryImagePayload>[]
          }
          delete: {
            args: Prisma.InventoryImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryImagePayload>
          }
          update: {
            args: Prisma.InventoryImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryImagePayload>
          }
          deleteMany: {
            args: Prisma.InventoryImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryImagePayload>[]
          }
          upsert: {
            args: Prisma.InventoryImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryImagePayload>
          }
          aggregate: {
            args: Prisma.InventoryImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryImage>
          }
          groupBy: {
            args: Prisma.InventoryImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryImageCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryImageCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      Accessory: {
        payload: Prisma.$AccessoryPayload<ExtArgs>
        fields: Prisma.AccessoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>
          }
          findFirst: {
            args: Prisma.AccessoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>
          }
          findMany: {
            args: Prisma.AccessoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>[]
          }
          create: {
            args: Prisma.AccessoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>
          }
          createMany: {
            args: Prisma.AccessoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>[]
          }
          delete: {
            args: Prisma.AccessoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>
          }
          update: {
            args: Prisma.AccessoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>
          }
          deleteMany: {
            args: Prisma.AccessoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>[]
          }
          upsert: {
            args: Prisma.AccessoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>
          }
          aggregate: {
            args: Prisma.AccessoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessory>
          }
          groupBy: {
            args: Prisma.AccessoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessoryCountArgs<ExtArgs>
            result: $Utils.Optional<AccessoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    inventory?: InventoryOmit
    inventoryImage?: InventoryImageOmit
    customer?: CustomerOmit
    sale?: SaleOmit
    accessory?: AccessoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    images: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | InventoryCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryImageWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    sales: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | CustomerCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    year: number | null
    price: number | null
  }

  export type InventorySumAggregateOutputType = {
    year: number | null
    price: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: string | null
    stockNumber: string | null
    serialNumber: string | null
    year: number | null
    brand: string | null
    model: string | null
    carType: string | null
    fuel: $Enums.FuelType | null
    color: string | null
    price: number | null
    mileage: string | null
    azStreetLegal: boolean | null
    status: $Enums.InventoryStatus | null
    location: string | null
    commentsPublic: string | null
    commentsInternal: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: string | null
    stockNumber: string | null
    serialNumber: string | null
    year: number | null
    brand: string | null
    model: string | null
    carType: string | null
    fuel: $Enums.FuelType | null
    color: string | null
    price: number | null
    mileage: string | null
    azStreetLegal: boolean | null
    status: $Enums.InventoryStatus | null
    location: string | null
    commentsPublic: string | null
    commentsInternal: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    stockNumber: number
    serialNumber: number
    year: number
    brand: number
    model: number
    carType: number
    fuel: number
    color: number
    price: number
    mileage: number
    azStreetLegal: number
    status: number
    location: number
    commentsPublic: number
    commentsInternal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    year?: true
    price?: true
  }

  export type InventorySumAggregateInputType = {
    year?: true
    price?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    stockNumber?: true
    serialNumber?: true
    year?: true
    brand?: true
    model?: true
    carType?: true
    fuel?: true
    color?: true
    price?: true
    mileage?: true
    azStreetLegal?: true
    status?: true
    location?: true
    commentsPublic?: true
    commentsInternal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    stockNumber?: true
    serialNumber?: true
    year?: true
    brand?: true
    model?: true
    carType?: true
    fuel?: true
    color?: true
    price?: true
    mileage?: true
    azStreetLegal?: true
    status?: true
    location?: true
    commentsPublic?: true
    commentsInternal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    stockNumber?: true
    serialNumber?: true
    year?: true
    brand?: true
    model?: true
    carType?: true
    fuel?: true
    color?: true
    price?: true
    mileage?: true
    azStreetLegal?: true
    status?: true
    location?: true
    commentsPublic?: true
    commentsInternal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: string
    stockNumber: string
    serialNumber: string | null
    year: number | null
    brand: string
    model: string
    carType: string | null
    fuel: $Enums.FuelType
    color: string | null
    price: number
    mileage: string | null
    azStreetLegal: boolean
    status: $Enums.InventoryStatus
    location: string | null
    commentsPublic: string | null
    commentsInternal: string | null
    createdAt: Date
    updatedAt: Date
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockNumber?: boolean
    serialNumber?: boolean
    year?: boolean
    brand?: boolean
    model?: boolean
    carType?: boolean
    fuel?: boolean
    color?: boolean
    price?: boolean
    mileage?: boolean
    azStreetLegal?: boolean
    status?: boolean
    location?: boolean
    commentsPublic?: boolean
    commentsInternal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Inventory$imagesArgs<ExtArgs>
    sale?: boolean | Inventory$saleArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockNumber?: boolean
    serialNumber?: boolean
    year?: boolean
    brand?: boolean
    model?: boolean
    carType?: boolean
    fuel?: boolean
    color?: boolean
    price?: boolean
    mileage?: boolean
    azStreetLegal?: boolean
    status?: boolean
    location?: boolean
    commentsPublic?: boolean
    commentsInternal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockNumber?: boolean
    serialNumber?: boolean
    year?: boolean
    brand?: boolean
    model?: boolean
    carType?: boolean
    fuel?: boolean
    color?: boolean
    price?: boolean
    mileage?: boolean
    azStreetLegal?: boolean
    status?: boolean
    location?: boolean
    commentsPublic?: boolean
    commentsInternal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    id?: boolean
    stockNumber?: boolean
    serialNumber?: boolean
    year?: boolean
    brand?: boolean
    model?: boolean
    carType?: boolean
    fuel?: boolean
    color?: boolean
    price?: boolean
    mileage?: boolean
    azStreetLegal?: boolean
    status?: boolean
    location?: boolean
    commentsPublic?: boolean
    commentsInternal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stockNumber" | "serialNumber" | "year" | "brand" | "model" | "carType" | "fuel" | "color" | "price" | "mileage" | "azStreetLegal" | "status" | "location" | "commentsPublic" | "commentsInternal" | "createdAt" | "updatedAt", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Inventory$imagesArgs<ExtArgs>
    sale?: boolean | Inventory$saleArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      images: Prisma.$InventoryImagePayload<ExtArgs>[]
      sale: Prisma.$SalePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stockNumber: string
      serialNumber: string | null
      year: number | null
      brand: string
      model: string
      carType: string | null
      fuel: $Enums.FuelType
      color: string | null
      price: number
      mileage: string | null
      azStreetLegal: boolean
      status: $Enums.InventoryStatus
      location: string | null
      commentsPublic: string | null
      commentsInternal: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {InventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Inventory$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sale<T extends Inventory$saleArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$saleArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'String'>
    readonly stockNumber: FieldRef<"Inventory", 'String'>
    readonly serialNumber: FieldRef<"Inventory", 'String'>
    readonly year: FieldRef<"Inventory", 'Int'>
    readonly brand: FieldRef<"Inventory", 'String'>
    readonly model: FieldRef<"Inventory", 'String'>
    readonly carType: FieldRef<"Inventory", 'String'>
    readonly fuel: FieldRef<"Inventory", 'FuelType'>
    readonly color: FieldRef<"Inventory", 'String'>
    readonly price: FieldRef<"Inventory", 'Float'>
    readonly mileage: FieldRef<"Inventory", 'String'>
    readonly azStreetLegal: FieldRef<"Inventory", 'Boolean'>
    readonly status: FieldRef<"Inventory", 'InventoryStatus'>
    readonly location: FieldRef<"Inventory", 'String'>
    readonly commentsPublic: FieldRef<"Inventory", 'String'>
    readonly commentsInternal: FieldRef<"Inventory", 'String'>
    readonly createdAt: FieldRef<"Inventory", 'DateTime'>
    readonly updatedAt: FieldRef<"Inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
  }

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory updateManyAndReturn
   */
  export type InventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory.images
   */
  export type Inventory$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryImage
     */
    select?: InventoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryImage
     */
    omit?: InventoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryImageInclude<ExtArgs> | null
    where?: InventoryImageWhereInput
    orderBy?: InventoryImageOrderByWithRelationInput | InventoryImageOrderByWithRelationInput[]
    cursor?: InventoryImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryImageScalarFieldEnum | InventoryImageScalarFieldEnum[]
  }

  /**
   * Inventory.sale
   */
  export type Inventory$saleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Model InventoryImage
   */

  export type AggregateInventoryImage = {
    _count: InventoryImageCountAggregateOutputType | null
    _avg: InventoryImageAvgAggregateOutputType | null
    _sum: InventoryImageSumAggregateOutputType | null
    _min: InventoryImageMinAggregateOutputType | null
    _max: InventoryImageMaxAggregateOutputType | null
  }

  export type InventoryImageAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type InventoryImageSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type InventoryImageMinAggregateOutputType = {
    id: string | null
    inventoryId: string | null
    url: string | null
    sortOrder: number | null
    isPrimary: boolean | null
  }

  export type InventoryImageMaxAggregateOutputType = {
    id: string | null
    inventoryId: string | null
    url: string | null
    sortOrder: number | null
    isPrimary: boolean | null
  }

  export type InventoryImageCountAggregateOutputType = {
    id: number
    inventoryId: number
    url: number
    sortOrder: number
    isPrimary: number
    _all: number
  }


  export type InventoryImageAvgAggregateInputType = {
    sortOrder?: true
  }

  export type InventoryImageSumAggregateInputType = {
    sortOrder?: true
  }

  export type InventoryImageMinAggregateInputType = {
    id?: true
    inventoryId?: true
    url?: true
    sortOrder?: true
    isPrimary?: true
  }

  export type InventoryImageMaxAggregateInputType = {
    id?: true
    inventoryId?: true
    url?: true
    sortOrder?: true
    isPrimary?: true
  }

  export type InventoryImageCountAggregateInputType = {
    id?: true
    inventoryId?: true
    url?: true
    sortOrder?: true
    isPrimary?: true
    _all?: true
  }

  export type InventoryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryImage to aggregate.
     */
    where?: InventoryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryImages to fetch.
     */
    orderBy?: InventoryImageOrderByWithRelationInput | InventoryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryImages
    **/
    _count?: true | InventoryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryImageMaxAggregateInputType
  }

  export type GetInventoryImageAggregateType<T extends InventoryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryImage[P]>
      : GetScalarType<T[P], AggregateInventoryImage[P]>
  }




  export type InventoryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryImageWhereInput
    orderBy?: InventoryImageOrderByWithAggregationInput | InventoryImageOrderByWithAggregationInput[]
    by: InventoryImageScalarFieldEnum[] | InventoryImageScalarFieldEnum
    having?: InventoryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryImageCountAggregateInputType | true
    _avg?: InventoryImageAvgAggregateInputType
    _sum?: InventoryImageSumAggregateInputType
    _min?: InventoryImageMinAggregateInputType
    _max?: InventoryImageMaxAggregateInputType
  }

  export type InventoryImageGroupByOutputType = {
    id: string
    inventoryId: string
    url: string
    sortOrder: number
    isPrimary: boolean
    _count: InventoryImageCountAggregateOutputType | null
    _avg: InventoryImageAvgAggregateOutputType | null
    _sum: InventoryImageSumAggregateOutputType | null
    _min: InventoryImageMinAggregateOutputType | null
    _max: InventoryImageMaxAggregateOutputType | null
  }

  type GetInventoryImageGroupByPayload<T extends InventoryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryImageGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryImageGroupByOutputType[P]>
        }
      >
    >


  export type InventoryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    url?: boolean
    sortOrder?: boolean
    isPrimary?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryImage"]>

  export type InventoryImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    url?: boolean
    sortOrder?: boolean
    isPrimary?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryImage"]>

  export type InventoryImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    url?: boolean
    sortOrder?: boolean
    isPrimary?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryImage"]>

  export type InventoryImageSelectScalar = {
    id?: boolean
    inventoryId?: boolean
    url?: boolean
    sortOrder?: boolean
    isPrimary?: boolean
  }

  export type InventoryImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inventoryId" | "url" | "sortOrder" | "isPrimary", ExtArgs["result"]["inventoryImage"]>
  export type InventoryImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }
  export type InventoryImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }
  export type InventoryImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }

  export type $InventoryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryImage"
    objects: {
      inventory: Prisma.$InventoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inventoryId: string
      url: string
      sortOrder: number
      isPrimary: boolean
    }, ExtArgs["result"]["inventoryImage"]>
    composites: {}
  }

  type InventoryImageGetPayload<S extends boolean | null | undefined | InventoryImageDefaultArgs> = $Result.GetResult<Prisma.$InventoryImagePayload, S>

  type InventoryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryImageCountAggregateInputType | true
    }

  export interface InventoryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryImage'], meta: { name: 'InventoryImage' } }
    /**
     * Find zero or one InventoryImage that matches the filter.
     * @param {InventoryImageFindUniqueArgs} args - Arguments to find a InventoryImage
     * @example
     * // Get one InventoryImage
     * const inventoryImage = await prisma.inventoryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryImageFindUniqueArgs>(args: SelectSubset<T, InventoryImageFindUniqueArgs<ExtArgs>>): Prisma__InventoryImageClient<$Result.GetResult<Prisma.$InventoryImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryImageFindUniqueOrThrowArgs} args - Arguments to find a InventoryImage
     * @example
     * // Get one InventoryImage
     * const inventoryImage = await prisma.inventoryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryImageFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryImageClient<$Result.GetResult<Prisma.$InventoryImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryImageFindFirstArgs} args - Arguments to find a InventoryImage
     * @example
     * // Get one InventoryImage
     * const inventoryImage = await prisma.inventoryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryImageFindFirstArgs>(args?: SelectSubset<T, InventoryImageFindFirstArgs<ExtArgs>>): Prisma__InventoryImageClient<$Result.GetResult<Prisma.$InventoryImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryImageFindFirstOrThrowArgs} args - Arguments to find a InventoryImage
     * @example
     * // Get one InventoryImage
     * const inventoryImage = await prisma.inventoryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryImageFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryImageClient<$Result.GetResult<Prisma.$InventoryImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryImages
     * const inventoryImages = await prisma.inventoryImage.findMany()
     * 
     * // Get first 10 InventoryImages
     * const inventoryImages = await prisma.inventoryImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryImageWithIdOnly = await prisma.inventoryImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryImageFindManyArgs>(args?: SelectSubset<T, InventoryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryImage.
     * @param {InventoryImageCreateArgs} args - Arguments to create a InventoryImage.
     * @example
     * // Create one InventoryImage
     * const InventoryImage = await prisma.inventoryImage.create({
     *   data: {
     *     // ... data to create a InventoryImage
     *   }
     * })
     * 
     */
    create<T extends InventoryImageCreateArgs>(args: SelectSubset<T, InventoryImageCreateArgs<ExtArgs>>): Prisma__InventoryImageClient<$Result.GetResult<Prisma.$InventoryImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryImages.
     * @param {InventoryImageCreateManyArgs} args - Arguments to create many InventoryImages.
     * @example
     * // Create many InventoryImages
     * const inventoryImage = await prisma.inventoryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryImageCreateManyArgs>(args?: SelectSubset<T, InventoryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryImages and returns the data saved in the database.
     * @param {InventoryImageCreateManyAndReturnArgs} args - Arguments to create many InventoryImages.
     * @example
     * // Create many InventoryImages
     * const inventoryImage = await prisma.inventoryImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryImages and only return the `id`
     * const inventoryImageWithIdOnly = await prisma.inventoryImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryImageCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryImage.
     * @param {InventoryImageDeleteArgs} args - Arguments to delete one InventoryImage.
     * @example
     * // Delete one InventoryImage
     * const InventoryImage = await prisma.inventoryImage.delete({
     *   where: {
     *     // ... filter to delete one InventoryImage
     *   }
     * })
     * 
     */
    delete<T extends InventoryImageDeleteArgs>(args: SelectSubset<T, InventoryImageDeleteArgs<ExtArgs>>): Prisma__InventoryImageClient<$Result.GetResult<Prisma.$InventoryImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryImage.
     * @param {InventoryImageUpdateArgs} args - Arguments to update one InventoryImage.
     * @example
     * // Update one InventoryImage
     * const inventoryImage = await prisma.inventoryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryImageUpdateArgs>(args: SelectSubset<T, InventoryImageUpdateArgs<ExtArgs>>): Prisma__InventoryImageClient<$Result.GetResult<Prisma.$InventoryImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryImages.
     * @param {InventoryImageDeleteManyArgs} args - Arguments to filter InventoryImages to delete.
     * @example
     * // Delete a few InventoryImages
     * const { count } = await prisma.inventoryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryImageDeleteManyArgs>(args?: SelectSubset<T, InventoryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryImages
     * const inventoryImage = await prisma.inventoryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryImageUpdateManyArgs>(args: SelectSubset<T, InventoryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryImages and returns the data updated in the database.
     * @param {InventoryImageUpdateManyAndReturnArgs} args - Arguments to update many InventoryImages.
     * @example
     * // Update many InventoryImages
     * const inventoryImage = await prisma.inventoryImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryImages and only return the `id`
     * const inventoryImageWithIdOnly = await prisma.inventoryImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryImageUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryImage.
     * @param {InventoryImageUpsertArgs} args - Arguments to update or create a InventoryImage.
     * @example
     * // Update or create a InventoryImage
     * const inventoryImage = await prisma.inventoryImage.upsert({
     *   create: {
     *     // ... data to create a InventoryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryImage we want to update
     *   }
     * })
     */
    upsert<T extends InventoryImageUpsertArgs>(args: SelectSubset<T, InventoryImageUpsertArgs<ExtArgs>>): Prisma__InventoryImageClient<$Result.GetResult<Prisma.$InventoryImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryImageCountArgs} args - Arguments to filter InventoryImages to count.
     * @example
     * // Count the number of InventoryImages
     * const count = await prisma.inventoryImage.count({
     *   where: {
     *     // ... the filter for the InventoryImages we want to count
     *   }
     * })
    **/
    count<T extends InventoryImageCountArgs>(
      args?: Subset<T, InventoryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryImageAggregateArgs>(args: Subset<T, InventoryImageAggregateArgs>): Prisma.PrismaPromise<GetInventoryImageAggregateType<T>>

    /**
     * Group by InventoryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryImageGroupByArgs['orderBy'] }
        : { orderBy?: InventoryImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryImage model
   */
  readonly fields: InventoryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends InventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryDefaultArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryImage model
   */
  interface InventoryImageFieldRefs {
    readonly id: FieldRef<"InventoryImage", 'String'>
    readonly inventoryId: FieldRef<"InventoryImage", 'String'>
    readonly url: FieldRef<"InventoryImage", 'String'>
    readonly sortOrder: FieldRef<"InventoryImage", 'Int'>
    readonly isPrimary: FieldRef<"InventoryImage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * InventoryImage findUnique
   */
  export type InventoryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryImage
     */
    select?: InventoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryImage
     */
    omit?: InventoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryImageInclude<ExtArgs> | null
    /**
     * Filter, which InventoryImage to fetch.
     */
    where: InventoryImageWhereUniqueInput
  }

  /**
   * InventoryImage findUniqueOrThrow
   */
  export type InventoryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryImage
     */
    select?: InventoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryImage
     */
    omit?: InventoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryImageInclude<ExtArgs> | null
    /**
     * Filter, which InventoryImage to fetch.
     */
    where: InventoryImageWhereUniqueInput
  }

  /**
   * InventoryImage findFirst
   */
  export type InventoryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryImage
     */
    select?: InventoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryImage
     */
    omit?: InventoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryImageInclude<ExtArgs> | null
    /**
     * Filter, which InventoryImage to fetch.
     */
    where?: InventoryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryImages to fetch.
     */
    orderBy?: InventoryImageOrderByWithRelationInput | InventoryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryImages.
     */
    cursor?: InventoryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryImages.
     */
    distinct?: InventoryImageScalarFieldEnum | InventoryImageScalarFieldEnum[]
  }

  /**
   * InventoryImage findFirstOrThrow
   */
  export type InventoryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryImage
     */
    select?: InventoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryImage
     */
    omit?: InventoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryImageInclude<ExtArgs> | null
    /**
     * Filter, which InventoryImage to fetch.
     */
    where?: InventoryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryImages to fetch.
     */
    orderBy?: InventoryImageOrderByWithRelationInput | InventoryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryImages.
     */
    cursor?: InventoryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryImages.
     */
    distinct?: InventoryImageScalarFieldEnum | InventoryImageScalarFieldEnum[]
  }

  /**
   * InventoryImage findMany
   */
  export type InventoryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryImage
     */
    select?: InventoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryImage
     */
    omit?: InventoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryImageInclude<ExtArgs> | null
    /**
     * Filter, which InventoryImages to fetch.
     */
    where?: InventoryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryImages to fetch.
     */
    orderBy?: InventoryImageOrderByWithRelationInput | InventoryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryImages.
     */
    cursor?: InventoryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryImages.
     */
    skip?: number
    distinct?: InventoryImageScalarFieldEnum | InventoryImageScalarFieldEnum[]
  }

  /**
   * InventoryImage create
   */
  export type InventoryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryImage
     */
    select?: InventoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryImage
     */
    omit?: InventoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryImageInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryImage.
     */
    data: XOR<InventoryImageCreateInput, InventoryImageUncheckedCreateInput>
  }

  /**
   * InventoryImage createMany
   */
  export type InventoryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryImages.
     */
    data: InventoryImageCreateManyInput | InventoryImageCreateManyInput[]
  }

  /**
   * InventoryImage createManyAndReturn
   */
  export type InventoryImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryImage
     */
    select?: InventoryImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryImage
     */
    omit?: InventoryImageOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryImages.
     */
    data: InventoryImageCreateManyInput | InventoryImageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryImage update
   */
  export type InventoryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryImage
     */
    select?: InventoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryImage
     */
    omit?: InventoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryImageInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryImage.
     */
    data: XOR<InventoryImageUpdateInput, InventoryImageUncheckedUpdateInput>
    /**
     * Choose, which InventoryImage to update.
     */
    where: InventoryImageWhereUniqueInput
  }

  /**
   * InventoryImage updateMany
   */
  export type InventoryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryImages.
     */
    data: XOR<InventoryImageUpdateManyMutationInput, InventoryImageUncheckedUpdateManyInput>
    /**
     * Filter which InventoryImages to update
     */
    where?: InventoryImageWhereInput
    /**
     * Limit how many InventoryImages to update.
     */
    limit?: number
  }

  /**
   * InventoryImage updateManyAndReturn
   */
  export type InventoryImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryImage
     */
    select?: InventoryImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryImage
     */
    omit?: InventoryImageOmit<ExtArgs> | null
    /**
     * The data used to update InventoryImages.
     */
    data: XOR<InventoryImageUpdateManyMutationInput, InventoryImageUncheckedUpdateManyInput>
    /**
     * Filter which InventoryImages to update
     */
    where?: InventoryImageWhereInput
    /**
     * Limit how many InventoryImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryImage upsert
   */
  export type InventoryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryImage
     */
    select?: InventoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryImage
     */
    omit?: InventoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryImageInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryImage to update in case it exists.
     */
    where: InventoryImageWhereUniqueInput
    /**
     * In case the InventoryImage found by the `where` argument doesn't exist, create a new InventoryImage with this data.
     */
    create: XOR<InventoryImageCreateInput, InventoryImageUncheckedCreateInput>
    /**
     * In case the InventoryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryImageUpdateInput, InventoryImageUncheckedUpdateInput>
  }

  /**
   * InventoryImage delete
   */
  export type InventoryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryImage
     */
    select?: InventoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryImage
     */
    omit?: InventoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryImageInclude<ExtArgs> | null
    /**
     * Filter which InventoryImage to delete.
     */
    where: InventoryImageWhereUniqueInput
  }

  /**
   * InventoryImage deleteMany
   */
  export type InventoryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryImages to delete
     */
    where?: InventoryImageWhereInput
    /**
     * Limit how many InventoryImages to delete.
     */
    limit?: number
  }

  /**
   * InventoryImage without action
   */
  export type InventoryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryImage
     */
    select?: InventoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryImage
     */
    omit?: InventoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryImageInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    address: number
    city: number
    state: number
    zip: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sales?: boolean | Customer$salesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "address" | "city" | "state" | "zip" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | Customer$salesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string | null
      phone: string | null
      address: string | null
      city: string | null
      state: string | null
      zip: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends Customer$salesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly firstName: FieldRef<"Customer", 'String'>
    readonly lastName: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly city: FieldRef<"Customer", 'String'>
    readonly state: FieldRef<"Customer", 'String'>
    readonly zip: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.sales
   */
  export type Customer$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    salePrice: number | null
    discount: number | null
    tradein: number | null
  }

  export type SaleSumAggregateOutputType = {
    salePrice: number | null
    discount: number | null
    tradein: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: string | null
    inventoryId: string | null
    customerId: string | null
    salePrice: number | null
    discount: number | null
    tradein: number | null
    dateSold: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SaleMaxAggregateOutputType = {
    id: string | null
    inventoryId: string | null
    customerId: string | null
    salePrice: number | null
    discount: number | null
    tradein: number | null
    dateSold: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    inventoryId: number
    customerId: number
    salePrice: number
    discount: number
    tradein: number
    dateSold: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    salePrice?: true
    discount?: true
    tradein?: true
  }

  export type SaleSumAggregateInputType = {
    salePrice?: true
    discount?: true
    tradein?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    inventoryId?: true
    customerId?: true
    salePrice?: true
    discount?: true
    tradein?: true
    dateSold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    inventoryId?: true
    customerId?: true
    salePrice?: true
    discount?: true
    tradein?: true
    dateSold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    inventoryId?: true
    customerId?: true
    salePrice?: true
    discount?: true
    tradein?: true
    dateSold?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: string
    inventoryId: string
    customerId: string
    salePrice: number
    discount: number | null
    tradein: number | null
    dateSold: Date
    createdAt: Date
    updatedAt: Date
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    customerId?: boolean
    salePrice?: boolean
    discount?: boolean
    tradein?: boolean
    dateSold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    customerId?: boolean
    salePrice?: boolean
    discount?: boolean
    tradein?: boolean
    dateSold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    customerId?: boolean
    salePrice?: boolean
    discount?: boolean
    tradein?: boolean
    dateSold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    inventoryId?: boolean
    customerId?: boolean
    salePrice?: boolean
    discount?: boolean
    tradein?: boolean
    dateSold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inventoryId" | "customerId" | "salePrice" | "discount" | "tradein" | "dateSold" | "createdAt" | "updatedAt", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      inventory: Prisma.$InventoryPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inventoryId: string
      customerId: string
      salePrice: number
      discount: number | null
      tradein: number | null
      dateSold: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends InventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryDefaultArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'String'>
    readonly inventoryId: FieldRef<"Sale", 'String'>
    readonly customerId: FieldRef<"Sale", 'String'>
    readonly salePrice: FieldRef<"Sale", 'Float'>
    readonly discount: FieldRef<"Sale", 'Float'>
    readonly tradein: FieldRef<"Sale", 'Float'>
    readonly dateSold: FieldRef<"Sale", 'DateTime'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
    readonly updatedAt: FieldRef<"Sale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model Accessory
   */

  export type AggregateAccessory = {
    _count: AccessoryCountAggregateOutputType | null
    _avg: AccessoryAvgAggregateOutputType | null
    _sum: AccessorySumAggregateOutputType | null
    _min: AccessoryMinAggregateOutputType | null
    _max: AccessoryMaxAggregateOutputType | null
  }

  export type AccessoryAvgAggregateOutputType = {
    cost: number | null
    retailPrice: number | null
  }

  export type AccessorySumAggregateOutputType = {
    cost: number | null
    retailPrice: number | null
  }

  export type AccessoryMinAggregateOutputType = {
    id: string | null
    partNumber: string | null
    description: string | null
    cost: number | null
    retailPrice: number | null
    category: $Enums.AccessoryCategory | null
    forNewCarts: boolean | null
    forUsedCarts: boolean | null
    isFeatured: boolean | null
    showOnWebsite: boolean | null
    imageUrl: string | null
    commentsInternal: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccessoryMaxAggregateOutputType = {
    id: string | null
    partNumber: string | null
    description: string | null
    cost: number | null
    retailPrice: number | null
    category: $Enums.AccessoryCategory | null
    forNewCarts: boolean | null
    forUsedCarts: boolean | null
    isFeatured: boolean | null
    showOnWebsite: boolean | null
    imageUrl: string | null
    commentsInternal: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccessoryCountAggregateOutputType = {
    id: number
    partNumber: number
    description: number
    cost: number
    retailPrice: number
    category: number
    forNewCarts: number
    forUsedCarts: number
    isFeatured: number
    showOnWebsite: number
    imageUrl: number
    commentsInternal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccessoryAvgAggregateInputType = {
    cost?: true
    retailPrice?: true
  }

  export type AccessorySumAggregateInputType = {
    cost?: true
    retailPrice?: true
  }

  export type AccessoryMinAggregateInputType = {
    id?: true
    partNumber?: true
    description?: true
    cost?: true
    retailPrice?: true
    category?: true
    forNewCarts?: true
    forUsedCarts?: true
    isFeatured?: true
    showOnWebsite?: true
    imageUrl?: true
    commentsInternal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccessoryMaxAggregateInputType = {
    id?: true
    partNumber?: true
    description?: true
    cost?: true
    retailPrice?: true
    category?: true
    forNewCarts?: true
    forUsedCarts?: true
    isFeatured?: true
    showOnWebsite?: true
    imageUrl?: true
    commentsInternal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccessoryCountAggregateInputType = {
    id?: true
    partNumber?: true
    description?: true
    cost?: true
    retailPrice?: true
    category?: true
    forNewCarts?: true
    forUsedCarts?: true
    isFeatured?: true
    showOnWebsite?: true
    imageUrl?: true
    commentsInternal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccessoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accessory to aggregate.
     */
    where?: AccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accessories to fetch.
     */
    orderBy?: AccessoryOrderByWithRelationInput | AccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accessories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accessories
    **/
    _count?: true | AccessoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessoryMaxAggregateInputType
  }

  export type GetAccessoryAggregateType<T extends AccessoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessory[P]>
      : GetScalarType<T[P], AggregateAccessory[P]>
  }




  export type AccessoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessoryWhereInput
    orderBy?: AccessoryOrderByWithAggregationInput | AccessoryOrderByWithAggregationInput[]
    by: AccessoryScalarFieldEnum[] | AccessoryScalarFieldEnum
    having?: AccessoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessoryCountAggregateInputType | true
    _avg?: AccessoryAvgAggregateInputType
    _sum?: AccessorySumAggregateInputType
    _min?: AccessoryMinAggregateInputType
    _max?: AccessoryMaxAggregateInputType
  }

  export type AccessoryGroupByOutputType = {
    id: string
    partNumber: string | null
    description: string
    cost: number | null
    retailPrice: number
    category: $Enums.AccessoryCategory | null
    forNewCarts: boolean
    forUsedCarts: boolean
    isFeatured: boolean
    showOnWebsite: boolean
    imageUrl: string | null
    commentsInternal: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccessoryCountAggregateOutputType | null
    _avg: AccessoryAvgAggregateOutputType | null
    _sum: AccessorySumAggregateOutputType | null
    _min: AccessoryMinAggregateOutputType | null
    _max: AccessoryMaxAggregateOutputType | null
  }

  type GetAccessoryGroupByPayload<T extends AccessoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessoryGroupByOutputType[P]>
            : GetScalarType<T[P], AccessoryGroupByOutputType[P]>
        }
      >
    >


  export type AccessorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partNumber?: boolean
    description?: boolean
    cost?: boolean
    retailPrice?: boolean
    category?: boolean
    forNewCarts?: boolean
    forUsedCarts?: boolean
    isFeatured?: boolean
    showOnWebsite?: boolean
    imageUrl?: boolean
    commentsInternal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accessory"]>

  export type AccessorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partNumber?: boolean
    description?: boolean
    cost?: boolean
    retailPrice?: boolean
    category?: boolean
    forNewCarts?: boolean
    forUsedCarts?: boolean
    isFeatured?: boolean
    showOnWebsite?: boolean
    imageUrl?: boolean
    commentsInternal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accessory"]>

  export type AccessorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partNumber?: boolean
    description?: boolean
    cost?: boolean
    retailPrice?: boolean
    category?: boolean
    forNewCarts?: boolean
    forUsedCarts?: boolean
    isFeatured?: boolean
    showOnWebsite?: boolean
    imageUrl?: boolean
    commentsInternal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accessory"]>

  export type AccessorySelectScalar = {
    id?: boolean
    partNumber?: boolean
    description?: boolean
    cost?: boolean
    retailPrice?: boolean
    category?: boolean
    forNewCarts?: boolean
    forUsedCarts?: boolean
    isFeatured?: boolean
    showOnWebsite?: boolean
    imageUrl?: boolean
    commentsInternal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccessoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "partNumber" | "description" | "cost" | "retailPrice" | "category" | "forNewCarts" | "forUsedCarts" | "isFeatured" | "showOnWebsite" | "imageUrl" | "commentsInternal" | "createdAt" | "updatedAt", ExtArgs["result"]["accessory"]>

  export type $AccessoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accessory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      partNumber: string | null
      description: string
      cost: number | null
      retailPrice: number
      category: $Enums.AccessoryCategory | null
      forNewCarts: boolean
      forUsedCarts: boolean
      isFeatured: boolean
      showOnWebsite: boolean
      imageUrl: string | null
      commentsInternal: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accessory"]>
    composites: {}
  }

  type AccessoryGetPayload<S extends boolean | null | undefined | AccessoryDefaultArgs> = $Result.GetResult<Prisma.$AccessoryPayload, S>

  type AccessoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessoryCountAggregateInputType | true
    }

  export interface AccessoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accessory'], meta: { name: 'Accessory' } }
    /**
     * Find zero or one Accessory that matches the filter.
     * @param {AccessoryFindUniqueArgs} args - Arguments to find a Accessory
     * @example
     * // Get one Accessory
     * const accessory = await prisma.accessory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessoryFindUniqueArgs>(args: SelectSubset<T, AccessoryFindUniqueArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accessory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessoryFindUniqueOrThrowArgs} args - Arguments to find a Accessory
     * @example
     * // Get one Accessory
     * const accessory = await prisma.accessory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accessory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessoryFindFirstArgs} args - Arguments to find a Accessory
     * @example
     * // Get one Accessory
     * const accessory = await prisma.accessory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessoryFindFirstArgs>(args?: SelectSubset<T, AccessoryFindFirstArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accessory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessoryFindFirstOrThrowArgs} args - Arguments to find a Accessory
     * @example
     * // Get one Accessory
     * const accessory = await prisma.accessory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accessories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accessories
     * const accessories = await prisma.accessory.findMany()
     * 
     * // Get first 10 Accessories
     * const accessories = await prisma.accessory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessoryWithIdOnly = await prisma.accessory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessoryFindManyArgs>(args?: SelectSubset<T, AccessoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accessory.
     * @param {AccessoryCreateArgs} args - Arguments to create a Accessory.
     * @example
     * // Create one Accessory
     * const Accessory = await prisma.accessory.create({
     *   data: {
     *     // ... data to create a Accessory
     *   }
     * })
     * 
     */
    create<T extends AccessoryCreateArgs>(args: SelectSubset<T, AccessoryCreateArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accessories.
     * @param {AccessoryCreateManyArgs} args - Arguments to create many Accessories.
     * @example
     * // Create many Accessories
     * const accessory = await prisma.accessory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessoryCreateManyArgs>(args?: SelectSubset<T, AccessoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accessories and returns the data saved in the database.
     * @param {AccessoryCreateManyAndReturnArgs} args - Arguments to create many Accessories.
     * @example
     * // Create many Accessories
     * const accessory = await prisma.accessory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accessories and only return the `id`
     * const accessoryWithIdOnly = await prisma.accessory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessoryCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accessory.
     * @param {AccessoryDeleteArgs} args - Arguments to delete one Accessory.
     * @example
     * // Delete one Accessory
     * const Accessory = await prisma.accessory.delete({
     *   where: {
     *     // ... filter to delete one Accessory
     *   }
     * })
     * 
     */
    delete<T extends AccessoryDeleteArgs>(args: SelectSubset<T, AccessoryDeleteArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accessory.
     * @param {AccessoryUpdateArgs} args - Arguments to update one Accessory.
     * @example
     * // Update one Accessory
     * const accessory = await prisma.accessory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessoryUpdateArgs>(args: SelectSubset<T, AccessoryUpdateArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accessories.
     * @param {AccessoryDeleteManyArgs} args - Arguments to filter Accessories to delete.
     * @example
     * // Delete a few Accessories
     * const { count } = await prisma.accessory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessoryDeleteManyArgs>(args?: SelectSubset<T, AccessoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accessories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accessories
     * const accessory = await prisma.accessory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessoryUpdateManyArgs>(args: SelectSubset<T, AccessoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accessories and returns the data updated in the database.
     * @param {AccessoryUpdateManyAndReturnArgs} args - Arguments to update many Accessories.
     * @example
     * // Update many Accessories
     * const accessory = await prisma.accessory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accessories and only return the `id`
     * const accessoryWithIdOnly = await prisma.accessory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccessoryUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accessory.
     * @param {AccessoryUpsertArgs} args - Arguments to update or create a Accessory.
     * @example
     * // Update or create a Accessory
     * const accessory = await prisma.accessory.upsert({
     *   create: {
     *     // ... data to create a Accessory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accessory we want to update
     *   }
     * })
     */
    upsert<T extends AccessoryUpsertArgs>(args: SelectSubset<T, AccessoryUpsertArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accessories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessoryCountArgs} args - Arguments to filter Accessories to count.
     * @example
     * // Count the number of Accessories
     * const count = await prisma.accessory.count({
     *   where: {
     *     // ... the filter for the Accessories we want to count
     *   }
     * })
    **/
    count<T extends AccessoryCountArgs>(
      args?: Subset<T, AccessoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accessory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessoryAggregateArgs>(args: Subset<T, AccessoryAggregateArgs>): Prisma.PrismaPromise<GetAccessoryAggregateType<T>>

    /**
     * Group by Accessory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessoryGroupByArgs['orderBy'] }
        : { orderBy?: AccessoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accessory model
   */
  readonly fields: AccessoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accessory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Accessory model
   */
  interface AccessoryFieldRefs {
    readonly id: FieldRef<"Accessory", 'String'>
    readonly partNumber: FieldRef<"Accessory", 'String'>
    readonly description: FieldRef<"Accessory", 'String'>
    readonly cost: FieldRef<"Accessory", 'Float'>
    readonly retailPrice: FieldRef<"Accessory", 'Float'>
    readonly category: FieldRef<"Accessory", 'AccessoryCategory'>
    readonly forNewCarts: FieldRef<"Accessory", 'Boolean'>
    readonly forUsedCarts: FieldRef<"Accessory", 'Boolean'>
    readonly isFeatured: FieldRef<"Accessory", 'Boolean'>
    readonly showOnWebsite: FieldRef<"Accessory", 'Boolean'>
    readonly imageUrl: FieldRef<"Accessory", 'String'>
    readonly commentsInternal: FieldRef<"Accessory", 'String'>
    readonly createdAt: FieldRef<"Accessory", 'DateTime'>
    readonly updatedAt: FieldRef<"Accessory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Accessory findUnique
   */
  export type AccessoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accessory
     */
    omit?: AccessoryOmit<ExtArgs> | null
    /**
     * Filter, which Accessory to fetch.
     */
    where: AccessoryWhereUniqueInput
  }

  /**
   * Accessory findUniqueOrThrow
   */
  export type AccessoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accessory
     */
    omit?: AccessoryOmit<ExtArgs> | null
    /**
     * Filter, which Accessory to fetch.
     */
    where: AccessoryWhereUniqueInput
  }

  /**
   * Accessory findFirst
   */
  export type AccessoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accessory
     */
    omit?: AccessoryOmit<ExtArgs> | null
    /**
     * Filter, which Accessory to fetch.
     */
    where?: AccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accessories to fetch.
     */
    orderBy?: AccessoryOrderByWithRelationInput | AccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accessories.
     */
    cursor?: AccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accessories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accessories.
     */
    distinct?: AccessoryScalarFieldEnum | AccessoryScalarFieldEnum[]
  }

  /**
   * Accessory findFirstOrThrow
   */
  export type AccessoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accessory
     */
    omit?: AccessoryOmit<ExtArgs> | null
    /**
     * Filter, which Accessory to fetch.
     */
    where?: AccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accessories to fetch.
     */
    orderBy?: AccessoryOrderByWithRelationInput | AccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accessories.
     */
    cursor?: AccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accessories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accessories.
     */
    distinct?: AccessoryScalarFieldEnum | AccessoryScalarFieldEnum[]
  }

  /**
   * Accessory findMany
   */
  export type AccessoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accessory
     */
    omit?: AccessoryOmit<ExtArgs> | null
    /**
     * Filter, which Accessories to fetch.
     */
    where?: AccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accessories to fetch.
     */
    orderBy?: AccessoryOrderByWithRelationInput | AccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accessories.
     */
    cursor?: AccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accessories.
     */
    skip?: number
    distinct?: AccessoryScalarFieldEnum | AccessoryScalarFieldEnum[]
  }

  /**
   * Accessory create
   */
  export type AccessoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accessory
     */
    omit?: AccessoryOmit<ExtArgs> | null
    /**
     * The data needed to create a Accessory.
     */
    data: XOR<AccessoryCreateInput, AccessoryUncheckedCreateInput>
  }

  /**
   * Accessory createMany
   */
  export type AccessoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accessories.
     */
    data: AccessoryCreateManyInput | AccessoryCreateManyInput[]
  }

  /**
   * Accessory createManyAndReturn
   */
  export type AccessoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accessory
     */
    omit?: AccessoryOmit<ExtArgs> | null
    /**
     * The data used to create many Accessories.
     */
    data: AccessoryCreateManyInput | AccessoryCreateManyInput[]
  }

  /**
   * Accessory update
   */
  export type AccessoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accessory
     */
    omit?: AccessoryOmit<ExtArgs> | null
    /**
     * The data needed to update a Accessory.
     */
    data: XOR<AccessoryUpdateInput, AccessoryUncheckedUpdateInput>
    /**
     * Choose, which Accessory to update.
     */
    where: AccessoryWhereUniqueInput
  }

  /**
   * Accessory updateMany
   */
  export type AccessoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accessories.
     */
    data: XOR<AccessoryUpdateManyMutationInput, AccessoryUncheckedUpdateManyInput>
    /**
     * Filter which Accessories to update
     */
    where?: AccessoryWhereInput
    /**
     * Limit how many Accessories to update.
     */
    limit?: number
  }

  /**
   * Accessory updateManyAndReturn
   */
  export type AccessoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accessory
     */
    omit?: AccessoryOmit<ExtArgs> | null
    /**
     * The data used to update Accessories.
     */
    data: XOR<AccessoryUpdateManyMutationInput, AccessoryUncheckedUpdateManyInput>
    /**
     * Filter which Accessories to update
     */
    where?: AccessoryWhereInput
    /**
     * Limit how many Accessories to update.
     */
    limit?: number
  }

  /**
   * Accessory upsert
   */
  export type AccessoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accessory
     */
    omit?: AccessoryOmit<ExtArgs> | null
    /**
     * The filter to search for the Accessory to update in case it exists.
     */
    where: AccessoryWhereUniqueInput
    /**
     * In case the Accessory found by the `where` argument doesn't exist, create a new Accessory with this data.
     */
    create: XOR<AccessoryCreateInput, AccessoryUncheckedCreateInput>
    /**
     * In case the Accessory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessoryUpdateInput, AccessoryUncheckedUpdateInput>
  }

  /**
   * Accessory delete
   */
  export type AccessoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accessory
     */
    omit?: AccessoryOmit<ExtArgs> | null
    /**
     * Filter which Accessory to delete.
     */
    where: AccessoryWhereUniqueInput
  }

  /**
   * Accessory deleteMany
   */
  export type AccessoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accessories to delete
     */
    where?: AccessoryWhereInput
    /**
     * Limit how many Accessories to delete.
     */
    limit?: number
  }

  /**
   * Accessory without action
   */
  export type AccessoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accessory
     */
    omit?: AccessoryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    stockNumber: 'stockNumber',
    serialNumber: 'serialNumber',
    year: 'year',
    brand: 'brand',
    model: 'model',
    carType: 'carType',
    fuel: 'fuel',
    color: 'color',
    price: 'price',
    mileage: 'mileage',
    azStreetLegal: 'azStreetLegal',
    status: 'status',
    location: 'location',
    commentsPublic: 'commentsPublic',
    commentsInternal: 'commentsInternal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const InventoryImageScalarFieldEnum: {
    id: 'id',
    inventoryId: 'inventoryId',
    url: 'url',
    sortOrder: 'sortOrder',
    isPrimary: 'isPrimary'
  };

  export type InventoryImageScalarFieldEnum = (typeof InventoryImageScalarFieldEnum)[keyof typeof InventoryImageScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    inventoryId: 'inventoryId',
    customerId: 'customerId',
    salePrice: 'salePrice',
    discount: 'discount',
    tradein: 'tradein',
    dateSold: 'dateSold',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const AccessoryScalarFieldEnum: {
    id: 'id',
    partNumber: 'partNumber',
    description: 'description',
    cost: 'cost',
    retailPrice: 'retailPrice',
    category: 'category',
    forNewCarts: 'forNewCarts',
    forUsedCarts: 'forUsedCarts',
    isFeatured: 'isFeatured',
    showOnWebsite: 'showOnWebsite',
    imageUrl: 'imageUrl',
    commentsInternal: 'commentsInternal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccessoryScalarFieldEnum = (typeof AccessoryScalarFieldEnum)[keyof typeof AccessoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'FuelType'
   */
  export type EnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'InventoryStatus'
   */
  export type EnumInventoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AccessoryCategory'
   */
  export type EnumAccessoryCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessoryCategory'>
    
  /**
   * Deep Input Types
   */


  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: StringFilter<"Inventory"> | string
    stockNumber?: StringFilter<"Inventory"> | string
    serialNumber?: StringNullableFilter<"Inventory"> | string | null
    year?: IntNullableFilter<"Inventory"> | number | null
    brand?: StringFilter<"Inventory"> | string
    model?: StringFilter<"Inventory"> | string
    carType?: StringNullableFilter<"Inventory"> | string | null
    fuel?: EnumFuelTypeFilter<"Inventory"> | $Enums.FuelType
    color?: StringNullableFilter<"Inventory"> | string | null
    price?: FloatFilter<"Inventory"> | number
    mileage?: StringNullableFilter<"Inventory"> | string | null
    azStreetLegal?: BoolFilter<"Inventory"> | boolean
    status?: EnumInventoryStatusFilter<"Inventory"> | $Enums.InventoryStatus
    location?: StringNullableFilter<"Inventory"> | string | null
    commentsPublic?: StringNullableFilter<"Inventory"> | string | null
    commentsInternal?: StringNullableFilter<"Inventory"> | string | null
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    updatedAt?: DateTimeFilter<"Inventory"> | Date | string
    images?: InventoryImageListRelationFilter
    sale?: XOR<SaleNullableScalarRelationFilter, SaleWhereInput> | null
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    stockNumber?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    brand?: SortOrder
    model?: SortOrder
    carType?: SortOrderInput | SortOrder
    fuel?: SortOrder
    color?: SortOrderInput | SortOrder
    price?: SortOrder
    mileage?: SortOrderInput | SortOrder
    azStreetLegal?: SortOrder
    status?: SortOrder
    location?: SortOrderInput | SortOrder
    commentsPublic?: SortOrderInput | SortOrder
    commentsInternal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: InventoryImageOrderByRelationAggregateInput
    sale?: SaleOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stockNumber?: string
    serialNumber?: string
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    year?: IntNullableFilter<"Inventory"> | number | null
    brand?: StringFilter<"Inventory"> | string
    model?: StringFilter<"Inventory"> | string
    carType?: StringNullableFilter<"Inventory"> | string | null
    fuel?: EnumFuelTypeFilter<"Inventory"> | $Enums.FuelType
    color?: StringNullableFilter<"Inventory"> | string | null
    price?: FloatFilter<"Inventory"> | number
    mileage?: StringNullableFilter<"Inventory"> | string | null
    azStreetLegal?: BoolFilter<"Inventory"> | boolean
    status?: EnumInventoryStatusFilter<"Inventory"> | $Enums.InventoryStatus
    location?: StringNullableFilter<"Inventory"> | string | null
    commentsPublic?: StringNullableFilter<"Inventory"> | string | null
    commentsInternal?: StringNullableFilter<"Inventory"> | string | null
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    updatedAt?: DateTimeFilter<"Inventory"> | Date | string
    images?: InventoryImageListRelationFilter
    sale?: XOR<SaleNullableScalarRelationFilter, SaleWhereInput> | null
  }, "id" | "stockNumber" | "serialNumber">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    stockNumber?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    brand?: SortOrder
    model?: SortOrder
    carType?: SortOrderInput | SortOrder
    fuel?: SortOrder
    color?: SortOrderInput | SortOrder
    price?: SortOrder
    mileage?: SortOrderInput | SortOrder
    azStreetLegal?: SortOrder
    status?: SortOrder
    location?: SortOrderInput | SortOrder
    commentsPublic?: SortOrderInput | SortOrder
    commentsInternal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inventory"> | string
    stockNumber?: StringWithAggregatesFilter<"Inventory"> | string
    serialNumber?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    year?: IntNullableWithAggregatesFilter<"Inventory"> | number | null
    brand?: StringWithAggregatesFilter<"Inventory"> | string
    model?: StringWithAggregatesFilter<"Inventory"> | string
    carType?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    fuel?: EnumFuelTypeWithAggregatesFilter<"Inventory"> | $Enums.FuelType
    color?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    price?: FloatWithAggregatesFilter<"Inventory"> | number
    mileage?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    azStreetLegal?: BoolWithAggregatesFilter<"Inventory"> | boolean
    status?: EnumInventoryStatusWithAggregatesFilter<"Inventory"> | $Enums.InventoryStatus
    location?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    commentsPublic?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    commentsInternal?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
  }

  export type InventoryImageWhereInput = {
    AND?: InventoryImageWhereInput | InventoryImageWhereInput[]
    OR?: InventoryImageWhereInput[]
    NOT?: InventoryImageWhereInput | InventoryImageWhereInput[]
    id?: StringFilter<"InventoryImage"> | string
    inventoryId?: StringFilter<"InventoryImage"> | string
    url?: StringFilter<"InventoryImage"> | string
    sortOrder?: IntFilter<"InventoryImage"> | number
    isPrimary?: BoolFilter<"InventoryImage"> | boolean
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
  }

  export type InventoryImageOrderByWithRelationInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
    isPrimary?: SortOrder
    inventory?: InventoryOrderByWithRelationInput
  }

  export type InventoryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryImageWhereInput | InventoryImageWhereInput[]
    OR?: InventoryImageWhereInput[]
    NOT?: InventoryImageWhereInput | InventoryImageWhereInput[]
    inventoryId?: StringFilter<"InventoryImage"> | string
    url?: StringFilter<"InventoryImage"> | string
    sortOrder?: IntFilter<"InventoryImage"> | number
    isPrimary?: BoolFilter<"InventoryImage"> | boolean
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
  }, "id">

  export type InventoryImageOrderByWithAggregationInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
    isPrimary?: SortOrder
    _count?: InventoryImageCountOrderByAggregateInput
    _avg?: InventoryImageAvgOrderByAggregateInput
    _max?: InventoryImageMaxOrderByAggregateInput
    _min?: InventoryImageMinOrderByAggregateInput
    _sum?: InventoryImageSumOrderByAggregateInput
  }

  export type InventoryImageScalarWhereWithAggregatesInput = {
    AND?: InventoryImageScalarWhereWithAggregatesInput | InventoryImageScalarWhereWithAggregatesInput[]
    OR?: InventoryImageScalarWhereWithAggregatesInput[]
    NOT?: InventoryImageScalarWhereWithAggregatesInput | InventoryImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryImage"> | string
    inventoryId?: StringWithAggregatesFilter<"InventoryImage"> | string
    url?: StringWithAggregatesFilter<"InventoryImage"> | string
    sortOrder?: IntWithAggregatesFilter<"InventoryImage"> | number
    isPrimary?: BoolWithAggregatesFilter<"InventoryImage"> | boolean
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    state?: StringNullableFilter<"Customer"> | string | null
    zip?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    sales?: SaleListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sales?: SaleOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    state?: StringNullableFilter<"Customer"> | string | null
    zip?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    sales?: SaleListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    firstName?: StringWithAggregatesFilter<"Customer"> | string
    lastName?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    city?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    state?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    zip?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: StringFilter<"Sale"> | string
    inventoryId?: StringFilter<"Sale"> | string
    customerId?: StringFilter<"Sale"> | string
    salePrice?: FloatFilter<"Sale"> | number
    discount?: FloatNullableFilter<"Sale"> | number | null
    tradein?: FloatNullableFilter<"Sale"> | number | null
    dateSold?: DateTimeFilter<"Sale"> | Date | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    updatedAt?: DateTimeFilter<"Sale"> | Date | string
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    customerId?: SortOrder
    salePrice?: SortOrder
    discount?: SortOrderInput | SortOrder
    tradein?: SortOrderInput | SortOrder
    dateSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inventory?: InventoryOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inventoryId?: string
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    customerId?: StringFilter<"Sale"> | string
    salePrice?: FloatFilter<"Sale"> | number
    discount?: FloatNullableFilter<"Sale"> | number | null
    tradein?: FloatNullableFilter<"Sale"> | number | null
    dateSold?: DateTimeFilter<"Sale"> | Date | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    updatedAt?: DateTimeFilter<"Sale"> | Date | string
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id" | "inventoryId">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    customerId?: SortOrder
    salePrice?: SortOrder
    discount?: SortOrderInput | SortOrder
    tradein?: SortOrderInput | SortOrder
    dateSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sale"> | string
    inventoryId?: StringWithAggregatesFilter<"Sale"> | string
    customerId?: StringWithAggregatesFilter<"Sale"> | string
    salePrice?: FloatWithAggregatesFilter<"Sale"> | number
    discount?: FloatNullableWithAggregatesFilter<"Sale"> | number | null
    tradein?: FloatNullableWithAggregatesFilter<"Sale"> | number | null
    dateSold?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
  }

  export type AccessoryWhereInput = {
    AND?: AccessoryWhereInput | AccessoryWhereInput[]
    OR?: AccessoryWhereInput[]
    NOT?: AccessoryWhereInput | AccessoryWhereInput[]
    id?: StringFilter<"Accessory"> | string
    partNumber?: StringNullableFilter<"Accessory"> | string | null
    description?: StringFilter<"Accessory"> | string
    cost?: FloatNullableFilter<"Accessory"> | number | null
    retailPrice?: FloatFilter<"Accessory"> | number
    category?: EnumAccessoryCategoryNullableFilter<"Accessory"> | $Enums.AccessoryCategory | null
    forNewCarts?: BoolFilter<"Accessory"> | boolean
    forUsedCarts?: BoolFilter<"Accessory"> | boolean
    isFeatured?: BoolFilter<"Accessory"> | boolean
    showOnWebsite?: BoolFilter<"Accessory"> | boolean
    imageUrl?: StringNullableFilter<"Accessory"> | string | null
    commentsInternal?: StringNullableFilter<"Accessory"> | string | null
    createdAt?: DateTimeFilter<"Accessory"> | Date | string
    updatedAt?: DateTimeFilter<"Accessory"> | Date | string
  }

  export type AccessoryOrderByWithRelationInput = {
    id?: SortOrder
    partNumber?: SortOrderInput | SortOrder
    description?: SortOrder
    cost?: SortOrderInput | SortOrder
    retailPrice?: SortOrder
    category?: SortOrderInput | SortOrder
    forNewCarts?: SortOrder
    forUsedCarts?: SortOrder
    isFeatured?: SortOrder
    showOnWebsite?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    commentsInternal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    partNumber?: string
    AND?: AccessoryWhereInput | AccessoryWhereInput[]
    OR?: AccessoryWhereInput[]
    NOT?: AccessoryWhereInput | AccessoryWhereInput[]
    description?: StringFilter<"Accessory"> | string
    cost?: FloatNullableFilter<"Accessory"> | number | null
    retailPrice?: FloatFilter<"Accessory"> | number
    category?: EnumAccessoryCategoryNullableFilter<"Accessory"> | $Enums.AccessoryCategory | null
    forNewCarts?: BoolFilter<"Accessory"> | boolean
    forUsedCarts?: BoolFilter<"Accessory"> | boolean
    isFeatured?: BoolFilter<"Accessory"> | boolean
    showOnWebsite?: BoolFilter<"Accessory"> | boolean
    imageUrl?: StringNullableFilter<"Accessory"> | string | null
    commentsInternal?: StringNullableFilter<"Accessory"> | string | null
    createdAt?: DateTimeFilter<"Accessory"> | Date | string
    updatedAt?: DateTimeFilter<"Accessory"> | Date | string
  }, "id" | "partNumber">

  export type AccessoryOrderByWithAggregationInput = {
    id?: SortOrder
    partNumber?: SortOrderInput | SortOrder
    description?: SortOrder
    cost?: SortOrderInput | SortOrder
    retailPrice?: SortOrder
    category?: SortOrderInput | SortOrder
    forNewCarts?: SortOrder
    forUsedCarts?: SortOrder
    isFeatured?: SortOrder
    showOnWebsite?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    commentsInternal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccessoryCountOrderByAggregateInput
    _avg?: AccessoryAvgOrderByAggregateInput
    _max?: AccessoryMaxOrderByAggregateInput
    _min?: AccessoryMinOrderByAggregateInput
    _sum?: AccessorySumOrderByAggregateInput
  }

  export type AccessoryScalarWhereWithAggregatesInput = {
    AND?: AccessoryScalarWhereWithAggregatesInput | AccessoryScalarWhereWithAggregatesInput[]
    OR?: AccessoryScalarWhereWithAggregatesInput[]
    NOT?: AccessoryScalarWhereWithAggregatesInput | AccessoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Accessory"> | string
    partNumber?: StringNullableWithAggregatesFilter<"Accessory"> | string | null
    description?: StringWithAggregatesFilter<"Accessory"> | string
    cost?: FloatNullableWithAggregatesFilter<"Accessory"> | number | null
    retailPrice?: FloatWithAggregatesFilter<"Accessory"> | number
    category?: EnumAccessoryCategoryNullableWithAggregatesFilter<"Accessory"> | $Enums.AccessoryCategory | null
    forNewCarts?: BoolWithAggregatesFilter<"Accessory"> | boolean
    forUsedCarts?: BoolWithAggregatesFilter<"Accessory"> | boolean
    isFeatured?: BoolWithAggregatesFilter<"Accessory"> | boolean
    showOnWebsite?: BoolWithAggregatesFilter<"Accessory"> | boolean
    imageUrl?: StringNullableWithAggregatesFilter<"Accessory"> | string | null
    commentsInternal?: StringNullableWithAggregatesFilter<"Accessory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Accessory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Accessory"> | Date | string
  }

  export type InventoryCreateInput = {
    id?: string
    stockNumber: string
    serialNumber?: string | null
    year?: number | null
    brand: string
    model: string
    carType?: string | null
    fuel: $Enums.FuelType
    color?: string | null
    price: number
    mileage?: string | null
    azStreetLegal?: boolean
    status?: $Enums.InventoryStatus
    location?: string | null
    commentsPublic?: string | null
    commentsInternal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: InventoryImageCreateNestedManyWithoutInventoryInput
    sale?: SaleCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: string
    stockNumber: string
    serialNumber?: string | null
    year?: number | null
    brand: string
    model: string
    carType?: string | null
    fuel: $Enums.FuelType
    color?: string | null
    price: number
    mileage?: string | null
    azStreetLegal?: boolean
    status?: $Enums.InventoryStatus
    location?: string | null
    commentsPublic?: string | null
    commentsInternal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: InventoryImageUncheckedCreateNestedManyWithoutInventoryInput
    sale?: SaleUncheckedCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    carType?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    azStreetLegal?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    commentsPublic?: NullableStringFieldUpdateOperationsInput | string | null
    commentsInternal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: InventoryImageUpdateManyWithoutInventoryNestedInput
    sale?: SaleUpdateOneWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    carType?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    azStreetLegal?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    commentsPublic?: NullableStringFieldUpdateOperationsInput | string | null
    commentsInternal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: InventoryImageUncheckedUpdateManyWithoutInventoryNestedInput
    sale?: SaleUncheckedUpdateOneWithoutInventoryNestedInput
  }

  export type InventoryCreateManyInput = {
    id?: string
    stockNumber: string
    serialNumber?: string | null
    year?: number | null
    brand: string
    model: string
    carType?: string | null
    fuel: $Enums.FuelType
    color?: string | null
    price: number
    mileage?: string | null
    azStreetLegal?: boolean
    status?: $Enums.InventoryStatus
    location?: string | null
    commentsPublic?: string | null
    commentsInternal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    carType?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    azStreetLegal?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    commentsPublic?: NullableStringFieldUpdateOperationsInput | string | null
    commentsInternal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    carType?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    azStreetLegal?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    commentsPublic?: NullableStringFieldUpdateOperationsInput | string | null
    commentsInternal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryImageCreateInput = {
    id?: string
    url: string
    sortOrder?: number
    isPrimary?: boolean
    inventory: InventoryCreateNestedOneWithoutImagesInput
  }

  export type InventoryImageUncheckedCreateInput = {
    id?: string
    inventoryId: string
    url: string
    sortOrder?: number
    isPrimary?: boolean
  }

  export type InventoryImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    inventory?: InventoryUpdateOneRequiredWithoutImagesNestedInput
  }

  export type InventoryImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InventoryImageCreateManyInput = {
    id?: string
    inventoryId: string
    url: string
    sortOrder?: number
    isPrimary?: boolean
  }

  export type InventoryImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InventoryImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateInput = {
    id?: string
    salePrice: number
    discount?: number | null
    tradein?: number | null
    dateSold?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory: InventoryCreateNestedOneWithoutSaleInput
    customer: CustomerCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateInput = {
    id?: string
    inventoryId: string
    customerId: string
    salePrice: number
    discount?: number | null
    tradein?: number | null
    dateSold?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tradein?: NullableFloatFieldUpdateOperationsInput | number | null
    dateSold?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateOneRequiredWithoutSaleNestedInput
    customer?: CustomerUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    salePrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tradein?: NullableFloatFieldUpdateOperationsInput | number | null
    dateSold?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateManyInput = {
    id?: string
    inventoryId: string
    customerId: string
    salePrice: number
    discount?: number | null
    tradein?: number | null
    dateSold?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tradein?: NullableFloatFieldUpdateOperationsInput | number | null
    dateSold?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    salePrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tradein?: NullableFloatFieldUpdateOperationsInput | number | null
    dateSold?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessoryCreateInput = {
    id?: string
    partNumber?: string | null
    description: string
    cost?: number | null
    retailPrice: number
    category?: $Enums.AccessoryCategory | null
    forNewCarts?: boolean
    forUsedCarts?: boolean
    isFeatured?: boolean
    showOnWebsite?: boolean
    imageUrl?: string | null
    commentsInternal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessoryUncheckedCreateInput = {
    id?: string
    partNumber?: string | null
    description: string
    cost?: number | null
    retailPrice: number
    category?: $Enums.AccessoryCategory | null
    forNewCarts?: boolean
    forUsedCarts?: boolean
    isFeatured?: boolean
    showOnWebsite?: boolean
    imageUrl?: string | null
    commentsInternal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    partNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    retailPrice?: FloatFieldUpdateOperationsInput | number
    category?: NullableEnumAccessoryCategoryFieldUpdateOperationsInput | $Enums.AccessoryCategory | null
    forNewCarts?: BoolFieldUpdateOperationsInput | boolean
    forUsedCarts?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    showOnWebsite?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentsInternal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    partNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    retailPrice?: FloatFieldUpdateOperationsInput | number
    category?: NullableEnumAccessoryCategoryFieldUpdateOperationsInput | $Enums.AccessoryCategory | null
    forNewCarts?: BoolFieldUpdateOperationsInput | boolean
    forUsedCarts?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    showOnWebsite?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentsInternal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessoryCreateManyInput = {
    id?: string
    partNumber?: string | null
    description: string
    cost?: number | null
    retailPrice: number
    category?: $Enums.AccessoryCategory | null
    forNewCarts?: boolean
    forUsedCarts?: boolean
    isFeatured?: boolean
    showOnWebsite?: boolean
    imageUrl?: string | null
    commentsInternal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    partNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    retailPrice?: FloatFieldUpdateOperationsInput | number
    category?: NullableEnumAccessoryCategoryFieldUpdateOperationsInput | $Enums.AccessoryCategory | null
    forNewCarts?: BoolFieldUpdateOperationsInput | boolean
    forUsedCarts?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    showOnWebsite?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentsInternal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    partNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    retailPrice?: FloatFieldUpdateOperationsInput | number
    category?: NullableEnumAccessoryCategoryFieldUpdateOperationsInput | $Enums.AccessoryCategory | null
    forNewCarts?: BoolFieldUpdateOperationsInput | boolean
    forUsedCarts?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    showOnWebsite?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentsInternal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumFuelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[]
    notIn?: $Enums.FuelType[]
    not?: NestedEnumFuelTypeFilter<$PrismaModel> | $Enums.FuelType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumInventoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryStatus[]
    notIn?: $Enums.InventoryStatus[]
    not?: NestedEnumInventoryStatusFilter<$PrismaModel> | $Enums.InventoryStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InventoryImageListRelationFilter = {
    every?: InventoryImageWhereInput
    some?: InventoryImageWhereInput
    none?: InventoryImageWhereInput
  }

  export type SaleNullableScalarRelationFilter = {
    is?: SaleWhereInput | null
    isNot?: SaleWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InventoryImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    stockNumber?: SortOrder
    serialNumber?: SortOrder
    year?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    carType?: SortOrder
    fuel?: SortOrder
    color?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    azStreetLegal?: SortOrder
    status?: SortOrder
    location?: SortOrder
    commentsPublic?: SortOrder
    commentsInternal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    year?: SortOrder
    price?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    stockNumber?: SortOrder
    serialNumber?: SortOrder
    year?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    carType?: SortOrder
    fuel?: SortOrder
    color?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    azStreetLegal?: SortOrder
    status?: SortOrder
    location?: SortOrder
    commentsPublic?: SortOrder
    commentsInternal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    stockNumber?: SortOrder
    serialNumber?: SortOrder
    year?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    carType?: SortOrder
    fuel?: SortOrder
    color?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    azStreetLegal?: SortOrder
    status?: SortOrder
    location?: SortOrder
    commentsPublic?: SortOrder
    commentsInternal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    year?: SortOrder
    price?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumFuelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[]
    notIn?: $Enums.FuelType[]
    not?: NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel> | $Enums.FuelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuelTypeFilter<$PrismaModel>
    _max?: NestedEnumFuelTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumInventoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryStatus[]
    notIn?: $Enums.InventoryStatus[]
    not?: NestedEnumInventoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InventoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryStatusFilter<$PrismaModel>
    _max?: NestedEnumInventoryStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type InventoryScalarRelationFilter = {
    is?: InventoryWhereInput
    isNot?: InventoryWhereInput
  }

  export type InventoryImageCountOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
    isPrimary?: SortOrder
  }

  export type InventoryImageAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type InventoryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
    isPrimary?: SortOrder
  }

  export type InventoryImageMinOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    url?: SortOrder
    sortOrder?: SortOrder
    isPrimary?: SortOrder
  }

  export type InventoryImageSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    customerId?: SortOrder
    salePrice?: SortOrder
    discount?: SortOrder
    tradein?: SortOrder
    dateSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    salePrice?: SortOrder
    discount?: SortOrder
    tradein?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    customerId?: SortOrder
    salePrice?: SortOrder
    discount?: SortOrder
    tradein?: SortOrder
    dateSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    customerId?: SortOrder
    salePrice?: SortOrder
    discount?: SortOrder
    tradein?: SortOrder
    dateSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    salePrice?: SortOrder
    discount?: SortOrder
    tradein?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumAccessoryCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessoryCategory | EnumAccessoryCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.AccessoryCategory[] | null
    notIn?: $Enums.AccessoryCategory[] | null
    not?: NestedEnumAccessoryCategoryNullableFilter<$PrismaModel> | $Enums.AccessoryCategory | null
  }

  export type AccessoryCountOrderByAggregateInput = {
    id?: SortOrder
    partNumber?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    retailPrice?: SortOrder
    category?: SortOrder
    forNewCarts?: SortOrder
    forUsedCarts?: SortOrder
    isFeatured?: SortOrder
    showOnWebsite?: SortOrder
    imageUrl?: SortOrder
    commentsInternal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessoryAvgOrderByAggregateInput = {
    cost?: SortOrder
    retailPrice?: SortOrder
  }

  export type AccessoryMaxOrderByAggregateInput = {
    id?: SortOrder
    partNumber?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    retailPrice?: SortOrder
    category?: SortOrder
    forNewCarts?: SortOrder
    forUsedCarts?: SortOrder
    isFeatured?: SortOrder
    showOnWebsite?: SortOrder
    imageUrl?: SortOrder
    commentsInternal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessoryMinOrderByAggregateInput = {
    id?: SortOrder
    partNumber?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    retailPrice?: SortOrder
    category?: SortOrder
    forNewCarts?: SortOrder
    forUsedCarts?: SortOrder
    isFeatured?: SortOrder
    showOnWebsite?: SortOrder
    imageUrl?: SortOrder
    commentsInternal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessorySumOrderByAggregateInput = {
    cost?: SortOrder
    retailPrice?: SortOrder
  }

  export type EnumAccessoryCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessoryCategory | EnumAccessoryCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.AccessoryCategory[] | null
    notIn?: $Enums.AccessoryCategory[] | null
    not?: NestedEnumAccessoryCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.AccessoryCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAccessoryCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumAccessoryCategoryNullableFilter<$PrismaModel>
  }

  export type InventoryImageCreateNestedManyWithoutInventoryInput = {
    create?: XOR<InventoryImageCreateWithoutInventoryInput, InventoryImageUncheckedCreateWithoutInventoryInput> | InventoryImageCreateWithoutInventoryInput[] | InventoryImageUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryImageCreateOrConnectWithoutInventoryInput | InventoryImageCreateOrConnectWithoutInventoryInput[]
    createMany?: InventoryImageCreateManyInventoryInputEnvelope
    connect?: InventoryImageWhereUniqueInput | InventoryImageWhereUniqueInput[]
  }

  export type SaleCreateNestedOneWithoutInventoryInput = {
    create?: XOR<SaleCreateWithoutInventoryInput, SaleUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: SaleCreateOrConnectWithoutInventoryInput
    connect?: SaleWhereUniqueInput
  }

  export type InventoryImageUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<InventoryImageCreateWithoutInventoryInput, InventoryImageUncheckedCreateWithoutInventoryInput> | InventoryImageCreateWithoutInventoryInput[] | InventoryImageUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryImageCreateOrConnectWithoutInventoryInput | InventoryImageCreateOrConnectWithoutInventoryInput[]
    createMany?: InventoryImageCreateManyInventoryInputEnvelope
    connect?: InventoryImageWhereUniqueInput | InventoryImageWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedOneWithoutInventoryInput = {
    create?: XOR<SaleCreateWithoutInventoryInput, SaleUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: SaleCreateOrConnectWithoutInventoryInput
    connect?: SaleWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumFuelTypeFieldUpdateOperationsInput = {
    set?: $Enums.FuelType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumInventoryStatusFieldUpdateOperationsInput = {
    set?: $Enums.InventoryStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InventoryImageUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<InventoryImageCreateWithoutInventoryInput, InventoryImageUncheckedCreateWithoutInventoryInput> | InventoryImageCreateWithoutInventoryInput[] | InventoryImageUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryImageCreateOrConnectWithoutInventoryInput | InventoryImageCreateOrConnectWithoutInventoryInput[]
    upsert?: InventoryImageUpsertWithWhereUniqueWithoutInventoryInput | InventoryImageUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: InventoryImageCreateManyInventoryInputEnvelope
    set?: InventoryImageWhereUniqueInput | InventoryImageWhereUniqueInput[]
    disconnect?: InventoryImageWhereUniqueInput | InventoryImageWhereUniqueInput[]
    delete?: InventoryImageWhereUniqueInput | InventoryImageWhereUniqueInput[]
    connect?: InventoryImageWhereUniqueInput | InventoryImageWhereUniqueInput[]
    update?: InventoryImageUpdateWithWhereUniqueWithoutInventoryInput | InventoryImageUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: InventoryImageUpdateManyWithWhereWithoutInventoryInput | InventoryImageUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: InventoryImageScalarWhereInput | InventoryImageScalarWhereInput[]
  }

  export type SaleUpdateOneWithoutInventoryNestedInput = {
    create?: XOR<SaleCreateWithoutInventoryInput, SaleUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: SaleCreateOrConnectWithoutInventoryInput
    upsert?: SaleUpsertWithoutInventoryInput
    disconnect?: SaleWhereInput | boolean
    delete?: SaleWhereInput | boolean
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutInventoryInput, SaleUpdateWithoutInventoryInput>, SaleUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryImageUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<InventoryImageCreateWithoutInventoryInput, InventoryImageUncheckedCreateWithoutInventoryInput> | InventoryImageCreateWithoutInventoryInput[] | InventoryImageUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryImageCreateOrConnectWithoutInventoryInput | InventoryImageCreateOrConnectWithoutInventoryInput[]
    upsert?: InventoryImageUpsertWithWhereUniqueWithoutInventoryInput | InventoryImageUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: InventoryImageCreateManyInventoryInputEnvelope
    set?: InventoryImageWhereUniqueInput | InventoryImageWhereUniqueInput[]
    disconnect?: InventoryImageWhereUniqueInput | InventoryImageWhereUniqueInput[]
    delete?: InventoryImageWhereUniqueInput | InventoryImageWhereUniqueInput[]
    connect?: InventoryImageWhereUniqueInput | InventoryImageWhereUniqueInput[]
    update?: InventoryImageUpdateWithWhereUniqueWithoutInventoryInput | InventoryImageUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: InventoryImageUpdateManyWithWhereWithoutInventoryInput | InventoryImageUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: InventoryImageScalarWhereInput | InventoryImageScalarWhereInput[]
  }

  export type SaleUncheckedUpdateOneWithoutInventoryNestedInput = {
    create?: XOR<SaleCreateWithoutInventoryInput, SaleUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: SaleCreateOrConnectWithoutInventoryInput
    upsert?: SaleUpsertWithoutInventoryInput
    disconnect?: SaleWhereInput | boolean
    delete?: SaleWhereInput | boolean
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutInventoryInput, SaleUpdateWithoutInventoryInput>, SaleUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryCreateNestedOneWithoutImagesInput = {
    create?: XOR<InventoryCreateWithoutImagesInput, InventoryUncheckedCreateWithoutImagesInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutImagesInput
    connect?: InventoryWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InventoryUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<InventoryCreateWithoutImagesInput, InventoryUncheckedCreateWithoutImagesInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutImagesInput
    upsert?: InventoryUpsertWithoutImagesInput
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutImagesInput, InventoryUpdateWithoutImagesInput>, InventoryUncheckedUpdateWithoutImagesInput>
  }

  export type SaleCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCustomerInput | SaleUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCustomerInput | SaleUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCustomerInput | SaleUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCustomerInput | SaleUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCustomerInput | SaleUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCustomerInput | SaleUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type InventoryCreateNestedOneWithoutSaleInput = {
    create?: XOR<InventoryCreateWithoutSaleInput, InventoryUncheckedCreateWithoutSaleInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutSaleInput
    connect?: InventoryWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutSalesInput = {
    create?: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSalesInput
    connect?: CustomerWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InventoryUpdateOneRequiredWithoutSaleNestedInput = {
    create?: XOR<InventoryCreateWithoutSaleInput, InventoryUncheckedCreateWithoutSaleInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutSaleInput
    upsert?: InventoryUpsertWithoutSaleInput
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutSaleInput, InventoryUpdateWithoutSaleInput>, InventoryUncheckedUpdateWithoutSaleInput>
  }

  export type CustomerUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSalesInput
    upsert?: CustomerUpsertWithoutSalesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSalesInput, CustomerUpdateWithoutSalesInput>, CustomerUncheckedUpdateWithoutSalesInput>
  }

  export type NullableEnumAccessoryCategoryFieldUpdateOperationsInput = {
    set?: $Enums.AccessoryCategory | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumFuelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[]
    notIn?: $Enums.FuelType[]
    not?: NestedEnumFuelTypeFilter<$PrismaModel> | $Enums.FuelType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumInventoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryStatus[]
    notIn?: $Enums.InventoryStatus[]
    not?: NestedEnumInventoryStatusFilter<$PrismaModel> | $Enums.InventoryStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[]
    notIn?: $Enums.FuelType[]
    not?: NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel> | $Enums.FuelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuelTypeFilter<$PrismaModel>
    _max?: NestedEnumFuelTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumInventoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryStatus[]
    notIn?: $Enums.InventoryStatus[]
    not?: NestedEnumInventoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InventoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryStatusFilter<$PrismaModel>
    _max?: NestedEnumInventoryStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumAccessoryCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessoryCategory | EnumAccessoryCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.AccessoryCategory[] | null
    notIn?: $Enums.AccessoryCategory[] | null
    not?: NestedEnumAccessoryCategoryNullableFilter<$PrismaModel> | $Enums.AccessoryCategory | null
  }

  export type NestedEnumAccessoryCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessoryCategory | EnumAccessoryCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.AccessoryCategory[] | null
    notIn?: $Enums.AccessoryCategory[] | null
    not?: NestedEnumAccessoryCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.AccessoryCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAccessoryCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumAccessoryCategoryNullableFilter<$PrismaModel>
  }

  export type InventoryImageCreateWithoutInventoryInput = {
    id?: string
    url: string
    sortOrder?: number
    isPrimary?: boolean
  }

  export type InventoryImageUncheckedCreateWithoutInventoryInput = {
    id?: string
    url: string
    sortOrder?: number
    isPrimary?: boolean
  }

  export type InventoryImageCreateOrConnectWithoutInventoryInput = {
    where: InventoryImageWhereUniqueInput
    create: XOR<InventoryImageCreateWithoutInventoryInput, InventoryImageUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryImageCreateManyInventoryInputEnvelope = {
    data: InventoryImageCreateManyInventoryInput | InventoryImageCreateManyInventoryInput[]
  }

  export type SaleCreateWithoutInventoryInput = {
    id?: string
    salePrice: number
    discount?: number | null
    tradein?: number | null
    dateSold?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutInventoryInput = {
    id?: string
    customerId: string
    salePrice: number
    discount?: number | null
    tradein?: number | null
    dateSold?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaleCreateOrConnectWithoutInventoryInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutInventoryInput, SaleUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryImageUpsertWithWhereUniqueWithoutInventoryInput = {
    where: InventoryImageWhereUniqueInput
    update: XOR<InventoryImageUpdateWithoutInventoryInput, InventoryImageUncheckedUpdateWithoutInventoryInput>
    create: XOR<InventoryImageCreateWithoutInventoryInput, InventoryImageUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryImageUpdateWithWhereUniqueWithoutInventoryInput = {
    where: InventoryImageWhereUniqueInput
    data: XOR<InventoryImageUpdateWithoutInventoryInput, InventoryImageUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryImageUpdateManyWithWhereWithoutInventoryInput = {
    where: InventoryImageScalarWhereInput
    data: XOR<InventoryImageUpdateManyMutationInput, InventoryImageUncheckedUpdateManyWithoutInventoryInput>
  }

  export type InventoryImageScalarWhereInput = {
    AND?: InventoryImageScalarWhereInput | InventoryImageScalarWhereInput[]
    OR?: InventoryImageScalarWhereInput[]
    NOT?: InventoryImageScalarWhereInput | InventoryImageScalarWhereInput[]
    id?: StringFilter<"InventoryImage"> | string
    inventoryId?: StringFilter<"InventoryImage"> | string
    url?: StringFilter<"InventoryImage"> | string
    sortOrder?: IntFilter<"InventoryImage"> | number
    isPrimary?: BoolFilter<"InventoryImage"> | boolean
  }

  export type SaleUpsertWithoutInventoryInput = {
    update: XOR<SaleUpdateWithoutInventoryInput, SaleUncheckedUpdateWithoutInventoryInput>
    create: XOR<SaleCreateWithoutInventoryInput, SaleUncheckedCreateWithoutInventoryInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutInventoryInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutInventoryInput, SaleUncheckedUpdateWithoutInventoryInput>
  }

  export type SaleUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tradein?: NullableFloatFieldUpdateOperationsInput | number | null
    dateSold?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    salePrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tradein?: NullableFloatFieldUpdateOperationsInput | number | null
    dateSold?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateWithoutImagesInput = {
    id?: string
    stockNumber: string
    serialNumber?: string | null
    year?: number | null
    brand: string
    model: string
    carType?: string | null
    fuel: $Enums.FuelType
    color?: string | null
    price: number
    mileage?: string | null
    azStreetLegal?: boolean
    status?: $Enums.InventoryStatus
    location?: string | null
    commentsPublic?: string | null
    commentsInternal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sale?: SaleCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutImagesInput = {
    id?: string
    stockNumber: string
    serialNumber?: string | null
    year?: number | null
    brand: string
    model: string
    carType?: string | null
    fuel: $Enums.FuelType
    color?: string | null
    price: number
    mileage?: string | null
    azStreetLegal?: boolean
    status?: $Enums.InventoryStatus
    location?: string | null
    commentsPublic?: string | null
    commentsInternal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sale?: SaleUncheckedCreateNestedOneWithoutInventoryInput
  }

  export type InventoryCreateOrConnectWithoutImagesInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutImagesInput, InventoryUncheckedCreateWithoutImagesInput>
  }

  export type InventoryUpsertWithoutImagesInput = {
    update: XOR<InventoryUpdateWithoutImagesInput, InventoryUncheckedUpdateWithoutImagesInput>
    create: XOR<InventoryCreateWithoutImagesInput, InventoryUncheckedCreateWithoutImagesInput>
    where?: InventoryWhereInput
  }

  export type InventoryUpdateToOneWithWhereWithoutImagesInput = {
    where?: InventoryWhereInput
    data: XOR<InventoryUpdateWithoutImagesInput, InventoryUncheckedUpdateWithoutImagesInput>
  }

  export type InventoryUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    carType?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    azStreetLegal?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    commentsPublic?: NullableStringFieldUpdateOperationsInput | string | null
    commentsInternal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sale?: SaleUpdateOneWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    carType?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    azStreetLegal?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    commentsPublic?: NullableStringFieldUpdateOperationsInput | string | null
    commentsInternal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sale?: SaleUncheckedUpdateOneWithoutInventoryNestedInput
  }

  export type SaleCreateWithoutCustomerInput = {
    id?: string
    salePrice: number
    discount?: number | null
    tradein?: number | null
    dateSold?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory: InventoryCreateNestedOneWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutCustomerInput = {
    id?: string
    inventoryId: string
    salePrice: number
    discount?: number | null
    tradein?: number | null
    dateSold?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaleCreateOrConnectWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput>
  }

  export type SaleCreateManyCustomerInputEnvelope = {
    data: SaleCreateManyCustomerInput | SaleCreateManyCustomerInput[]
  }

  export type SaleUpsertWithWhereUniqueWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutCustomerInput, SaleUncheckedUpdateWithoutCustomerInput>
    create: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutCustomerInput, SaleUncheckedUpdateWithoutCustomerInput>
  }

  export type SaleUpdateManyWithWhereWithoutCustomerInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutCustomerInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: StringFilter<"Sale"> | string
    inventoryId?: StringFilter<"Sale"> | string
    customerId?: StringFilter<"Sale"> | string
    salePrice?: FloatFilter<"Sale"> | number
    discount?: FloatNullableFilter<"Sale"> | number | null
    tradein?: FloatNullableFilter<"Sale"> | number | null
    dateSold?: DateTimeFilter<"Sale"> | Date | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    updatedAt?: DateTimeFilter<"Sale"> | Date | string
  }

  export type InventoryCreateWithoutSaleInput = {
    id?: string
    stockNumber: string
    serialNumber?: string | null
    year?: number | null
    brand: string
    model: string
    carType?: string | null
    fuel: $Enums.FuelType
    color?: string | null
    price: number
    mileage?: string | null
    azStreetLegal?: boolean
    status?: $Enums.InventoryStatus
    location?: string | null
    commentsPublic?: string | null
    commentsInternal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: InventoryImageCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutSaleInput = {
    id?: string
    stockNumber: string
    serialNumber?: string | null
    year?: number | null
    brand: string
    model: string
    carType?: string | null
    fuel: $Enums.FuelType
    color?: string | null
    price: number
    mileage?: string | null
    azStreetLegal?: boolean
    status?: $Enums.InventoryStatus
    location?: string | null
    commentsPublic?: string | null
    commentsInternal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: InventoryImageUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryCreateOrConnectWithoutSaleInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutSaleInput, InventoryUncheckedCreateWithoutSaleInput>
  }

  export type CustomerCreateWithoutSalesInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutSalesInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutSalesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
  }

  export type InventoryUpsertWithoutSaleInput = {
    update: XOR<InventoryUpdateWithoutSaleInput, InventoryUncheckedUpdateWithoutSaleInput>
    create: XOR<InventoryCreateWithoutSaleInput, InventoryUncheckedCreateWithoutSaleInput>
    where?: InventoryWhereInput
  }

  export type InventoryUpdateToOneWithWhereWithoutSaleInput = {
    where?: InventoryWhereInput
    data: XOR<InventoryUpdateWithoutSaleInput, InventoryUncheckedUpdateWithoutSaleInput>
  }

  export type InventoryUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    carType?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    azStreetLegal?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    commentsPublic?: NullableStringFieldUpdateOperationsInput | string | null
    commentsInternal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: InventoryImageUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    carType?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    azStreetLegal?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    commentsPublic?: NullableStringFieldUpdateOperationsInput | string | null
    commentsInternal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: InventoryImageUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type CustomerUpsertWithoutSalesInput = {
    update: XOR<CustomerUpdateWithoutSalesInput, CustomerUncheckedUpdateWithoutSalesInput>
    create: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSalesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSalesInput, CustomerUncheckedUpdateWithoutSalesInput>
  }

  export type CustomerUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryImageCreateManyInventoryInput = {
    id?: string
    url: string
    sortOrder?: number
    isPrimary?: boolean
  }

  export type InventoryImageUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InventoryImageUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InventoryImageUncheckedUpdateManyWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SaleCreateManyCustomerInput = {
    id?: string
    inventoryId: string
    salePrice: number
    discount?: number | null
    tradein?: number | null
    dateSold?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaleUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tradein?: NullableFloatFieldUpdateOperationsInput | number | null
    dateSold?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateOneRequiredWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    salePrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tradein?: NullableFloatFieldUpdateOperationsInput | number | null
    dateSold?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    salePrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tradein?: NullableFloatFieldUpdateOperationsInput | number | null
    dateSold?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
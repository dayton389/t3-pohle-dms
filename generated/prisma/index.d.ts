
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
 * Model GolfCart
 * 
 */
export type GolfCart = $Result.DefaultSelection<Prisma.$GolfCartPayload>
/**
 * Model Part
 * 
 */
export type Part = $Result.DefaultSelection<Prisma.$PartPayload>
/**
 * Model InstalledPart
 * 
 */
export type InstalledPart = $Result.DefaultSelection<Prisma.$InstalledPartPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GolfCarts
 * const golfCarts = await prisma.golfCart.findMany()
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
   * // Fetch zero or more GolfCarts
   * const golfCarts = await prisma.golfCart.findMany()
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
   * `prisma.golfCart`: Exposes CRUD operations for the **GolfCart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GolfCarts
    * const golfCarts = await prisma.golfCart.findMany()
    * ```
    */
  get golfCart(): Prisma.GolfCartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.part`: Exposes CRUD operations for the **Part** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parts
    * const parts = await prisma.part.findMany()
    * ```
    */
  get part(): Prisma.PartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.installedPart`: Exposes CRUD operations for the **InstalledPart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstalledParts
    * const installedParts = await prisma.installedPart.findMany()
    * ```
    */
  get installedPart(): Prisma.InstalledPartDelegate<ExtArgs, ClientOptions>;
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
    GolfCart: 'GolfCart',
    Part: 'Part',
    InstalledPart: 'InstalledPart'
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
      modelProps: "golfCart" | "part" | "installedPart"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      GolfCart: {
        payload: Prisma.$GolfCartPayload<ExtArgs>
        fields: Prisma.GolfCartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GolfCartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfCartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GolfCartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfCartPayload>
          }
          findFirst: {
            args: Prisma.GolfCartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfCartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GolfCartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfCartPayload>
          }
          findMany: {
            args: Prisma.GolfCartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfCartPayload>[]
          }
          create: {
            args: Prisma.GolfCartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfCartPayload>
          }
          createMany: {
            args: Prisma.GolfCartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GolfCartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfCartPayload>[]
          }
          delete: {
            args: Prisma.GolfCartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfCartPayload>
          }
          update: {
            args: Prisma.GolfCartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfCartPayload>
          }
          deleteMany: {
            args: Prisma.GolfCartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GolfCartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GolfCartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfCartPayload>[]
          }
          upsert: {
            args: Prisma.GolfCartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfCartPayload>
          }
          aggregate: {
            args: Prisma.GolfCartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGolfCart>
          }
          groupBy: {
            args: Prisma.GolfCartGroupByArgs<ExtArgs>
            result: $Utils.Optional<GolfCartGroupByOutputType>[]
          }
          count: {
            args: Prisma.GolfCartCountArgs<ExtArgs>
            result: $Utils.Optional<GolfCartCountAggregateOutputType> | number
          }
        }
      }
      Part: {
        payload: Prisma.$PartPayload<ExtArgs>
        fields: Prisma.PartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findFirst: {
            args: Prisma.PartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findMany: {
            args: Prisma.PartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          create: {
            args: Prisma.PartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          createMany: {
            args: Prisma.PartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          delete: {
            args: Prisma.PartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          update: {
            args: Prisma.PartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          deleteMany: {
            args: Prisma.PartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          upsert: {
            args: Prisma.PartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          aggregate: {
            args: Prisma.PartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePart>
          }
          groupBy: {
            args: Prisma.PartGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartCountArgs<ExtArgs>
            result: $Utils.Optional<PartCountAggregateOutputType> | number
          }
        }
      }
      InstalledPart: {
        payload: Prisma.$InstalledPartPayload<ExtArgs>
        fields: Prisma.InstalledPartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstalledPartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstalledPartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstalledPartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstalledPartPayload>
          }
          findFirst: {
            args: Prisma.InstalledPartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstalledPartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstalledPartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstalledPartPayload>
          }
          findMany: {
            args: Prisma.InstalledPartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstalledPartPayload>[]
          }
          create: {
            args: Prisma.InstalledPartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstalledPartPayload>
          }
          createMany: {
            args: Prisma.InstalledPartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstalledPartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstalledPartPayload>[]
          }
          delete: {
            args: Prisma.InstalledPartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstalledPartPayload>
          }
          update: {
            args: Prisma.InstalledPartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstalledPartPayload>
          }
          deleteMany: {
            args: Prisma.InstalledPartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstalledPartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstalledPartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstalledPartPayload>[]
          }
          upsert: {
            args: Prisma.InstalledPartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstalledPartPayload>
          }
          aggregate: {
            args: Prisma.InstalledPartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstalledPart>
          }
          groupBy: {
            args: Prisma.InstalledPartGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstalledPartGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstalledPartCountArgs<ExtArgs>
            result: $Utils.Optional<InstalledPartCountAggregateOutputType> | number
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
    golfCart?: GolfCartOmit
    part?: PartOmit
    installedPart?: InstalledPartOmit
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
   * Count Type GolfCartCountOutputType
   */

  export type GolfCartCountOutputType = {
    installedParts: number
  }

  export type GolfCartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installedParts?: boolean | GolfCartCountOutputTypeCountInstalledPartsArgs
  }

  // Custom InputTypes
  /**
   * GolfCartCountOutputType without action
   */
  export type GolfCartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfCartCountOutputType
     */
    select?: GolfCartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GolfCartCountOutputType without action
   */
  export type GolfCartCountOutputTypeCountInstalledPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstalledPartWhereInput
  }


  /**
   * Count Type PartCountOutputType
   */

  export type PartCountOutputType = {
    installations: number
  }

  export type PartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installations?: boolean | PartCountOutputTypeCountInstallationsArgs
  }

  // Custom InputTypes
  /**
   * PartCountOutputType without action
   */
  export type PartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartCountOutputType
     */
    select?: PartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartCountOutputType without action
   */
  export type PartCountOutputTypeCountInstallationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstalledPartWhereInput
  }


  /**
   * Models
   */

  /**
   * Model GolfCart
   */

  export type AggregateGolfCart = {
    _count: GolfCartCountAggregateOutputType | null
    _avg: GolfCartAvgAggregateOutputType | null
    _sum: GolfCartSumAggregateOutputType | null
    _min: GolfCartMinAggregateOutputType | null
    _max: GolfCartMaxAggregateOutputType | null
  }

  export type GolfCartAvgAggregateOutputType = {
    year: number | null
    basePrice: number | null
  }

  export type GolfCartSumAggregateOutputType = {
    year: number | null
    basePrice: number | null
  }

  export type GolfCartMinAggregateOutputType = {
    id: string | null
    make: string | null
    model: string | null
    year: number | null
    basePrice: number | null
  }

  export type GolfCartMaxAggregateOutputType = {
    id: string | null
    make: string | null
    model: string | null
    year: number | null
    basePrice: number | null
  }

  export type GolfCartCountAggregateOutputType = {
    id: number
    make: number
    model: number
    year: number
    basePrice: number
    _all: number
  }


  export type GolfCartAvgAggregateInputType = {
    year?: true
    basePrice?: true
  }

  export type GolfCartSumAggregateInputType = {
    year?: true
    basePrice?: true
  }

  export type GolfCartMinAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    basePrice?: true
  }

  export type GolfCartMaxAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    basePrice?: true
  }

  export type GolfCartCountAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    basePrice?: true
    _all?: true
  }

  export type GolfCartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GolfCart to aggregate.
     */
    where?: GolfCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GolfCarts to fetch.
     */
    orderBy?: GolfCartOrderByWithRelationInput | GolfCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GolfCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GolfCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GolfCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GolfCarts
    **/
    _count?: true | GolfCartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GolfCartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GolfCartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GolfCartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GolfCartMaxAggregateInputType
  }

  export type GetGolfCartAggregateType<T extends GolfCartAggregateArgs> = {
        [P in keyof T & keyof AggregateGolfCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGolfCart[P]>
      : GetScalarType<T[P], AggregateGolfCart[P]>
  }




  export type GolfCartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GolfCartWhereInput
    orderBy?: GolfCartOrderByWithAggregationInput | GolfCartOrderByWithAggregationInput[]
    by: GolfCartScalarFieldEnum[] | GolfCartScalarFieldEnum
    having?: GolfCartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GolfCartCountAggregateInputType | true
    _avg?: GolfCartAvgAggregateInputType
    _sum?: GolfCartSumAggregateInputType
    _min?: GolfCartMinAggregateInputType
    _max?: GolfCartMaxAggregateInputType
  }

  export type GolfCartGroupByOutputType = {
    id: string
    make: string
    model: string
    year: number
    basePrice: number
    _count: GolfCartCountAggregateOutputType | null
    _avg: GolfCartAvgAggregateOutputType | null
    _sum: GolfCartSumAggregateOutputType | null
    _min: GolfCartMinAggregateOutputType | null
    _max: GolfCartMaxAggregateOutputType | null
  }

  type GetGolfCartGroupByPayload<T extends GolfCartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GolfCartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GolfCartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GolfCartGroupByOutputType[P]>
            : GetScalarType<T[P], GolfCartGroupByOutputType[P]>
        }
      >
    >


  export type GolfCartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    basePrice?: boolean
    installedParts?: boolean | GolfCart$installedPartsArgs<ExtArgs>
    _count?: boolean | GolfCartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["golfCart"]>

  export type GolfCartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    basePrice?: boolean
  }, ExtArgs["result"]["golfCart"]>

  export type GolfCartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    basePrice?: boolean
  }, ExtArgs["result"]["golfCart"]>

  export type GolfCartSelectScalar = {
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    basePrice?: boolean
  }

  export type GolfCartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "make" | "model" | "year" | "basePrice", ExtArgs["result"]["golfCart"]>
  export type GolfCartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installedParts?: boolean | GolfCart$installedPartsArgs<ExtArgs>
    _count?: boolean | GolfCartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GolfCartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GolfCartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GolfCartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GolfCart"
    objects: {
      installedParts: Prisma.$InstalledPartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      make: string
      model: string
      year: number
      basePrice: number
    }, ExtArgs["result"]["golfCart"]>
    composites: {}
  }

  type GolfCartGetPayload<S extends boolean | null | undefined | GolfCartDefaultArgs> = $Result.GetResult<Prisma.$GolfCartPayload, S>

  type GolfCartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GolfCartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GolfCartCountAggregateInputType | true
    }

  export interface GolfCartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GolfCart'], meta: { name: 'GolfCart' } }
    /**
     * Find zero or one GolfCart that matches the filter.
     * @param {GolfCartFindUniqueArgs} args - Arguments to find a GolfCart
     * @example
     * // Get one GolfCart
     * const golfCart = await prisma.golfCart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GolfCartFindUniqueArgs>(args: SelectSubset<T, GolfCartFindUniqueArgs<ExtArgs>>): Prisma__GolfCartClient<$Result.GetResult<Prisma.$GolfCartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GolfCart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GolfCartFindUniqueOrThrowArgs} args - Arguments to find a GolfCart
     * @example
     * // Get one GolfCart
     * const golfCart = await prisma.golfCart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GolfCartFindUniqueOrThrowArgs>(args: SelectSubset<T, GolfCartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GolfCartClient<$Result.GetResult<Prisma.$GolfCartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GolfCart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolfCartFindFirstArgs} args - Arguments to find a GolfCart
     * @example
     * // Get one GolfCart
     * const golfCart = await prisma.golfCart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GolfCartFindFirstArgs>(args?: SelectSubset<T, GolfCartFindFirstArgs<ExtArgs>>): Prisma__GolfCartClient<$Result.GetResult<Prisma.$GolfCartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GolfCart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolfCartFindFirstOrThrowArgs} args - Arguments to find a GolfCart
     * @example
     * // Get one GolfCart
     * const golfCart = await prisma.golfCart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GolfCartFindFirstOrThrowArgs>(args?: SelectSubset<T, GolfCartFindFirstOrThrowArgs<ExtArgs>>): Prisma__GolfCartClient<$Result.GetResult<Prisma.$GolfCartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GolfCarts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolfCartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GolfCarts
     * const golfCarts = await prisma.golfCart.findMany()
     * 
     * // Get first 10 GolfCarts
     * const golfCarts = await prisma.golfCart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const golfCartWithIdOnly = await prisma.golfCart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GolfCartFindManyArgs>(args?: SelectSubset<T, GolfCartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GolfCartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GolfCart.
     * @param {GolfCartCreateArgs} args - Arguments to create a GolfCart.
     * @example
     * // Create one GolfCart
     * const GolfCart = await prisma.golfCart.create({
     *   data: {
     *     // ... data to create a GolfCart
     *   }
     * })
     * 
     */
    create<T extends GolfCartCreateArgs>(args: SelectSubset<T, GolfCartCreateArgs<ExtArgs>>): Prisma__GolfCartClient<$Result.GetResult<Prisma.$GolfCartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GolfCarts.
     * @param {GolfCartCreateManyArgs} args - Arguments to create many GolfCarts.
     * @example
     * // Create many GolfCarts
     * const golfCart = await prisma.golfCart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GolfCartCreateManyArgs>(args?: SelectSubset<T, GolfCartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GolfCarts and returns the data saved in the database.
     * @param {GolfCartCreateManyAndReturnArgs} args - Arguments to create many GolfCarts.
     * @example
     * // Create many GolfCarts
     * const golfCart = await prisma.golfCart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GolfCarts and only return the `id`
     * const golfCartWithIdOnly = await prisma.golfCart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GolfCartCreateManyAndReturnArgs>(args?: SelectSubset<T, GolfCartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GolfCartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GolfCart.
     * @param {GolfCartDeleteArgs} args - Arguments to delete one GolfCart.
     * @example
     * // Delete one GolfCart
     * const GolfCart = await prisma.golfCart.delete({
     *   where: {
     *     // ... filter to delete one GolfCart
     *   }
     * })
     * 
     */
    delete<T extends GolfCartDeleteArgs>(args: SelectSubset<T, GolfCartDeleteArgs<ExtArgs>>): Prisma__GolfCartClient<$Result.GetResult<Prisma.$GolfCartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GolfCart.
     * @param {GolfCartUpdateArgs} args - Arguments to update one GolfCart.
     * @example
     * // Update one GolfCart
     * const golfCart = await prisma.golfCart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GolfCartUpdateArgs>(args: SelectSubset<T, GolfCartUpdateArgs<ExtArgs>>): Prisma__GolfCartClient<$Result.GetResult<Prisma.$GolfCartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GolfCarts.
     * @param {GolfCartDeleteManyArgs} args - Arguments to filter GolfCarts to delete.
     * @example
     * // Delete a few GolfCarts
     * const { count } = await prisma.golfCart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GolfCartDeleteManyArgs>(args?: SelectSubset<T, GolfCartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GolfCarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolfCartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GolfCarts
     * const golfCart = await prisma.golfCart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GolfCartUpdateManyArgs>(args: SelectSubset<T, GolfCartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GolfCarts and returns the data updated in the database.
     * @param {GolfCartUpdateManyAndReturnArgs} args - Arguments to update many GolfCarts.
     * @example
     * // Update many GolfCarts
     * const golfCart = await prisma.golfCart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GolfCarts and only return the `id`
     * const golfCartWithIdOnly = await prisma.golfCart.updateManyAndReturn({
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
    updateManyAndReturn<T extends GolfCartUpdateManyAndReturnArgs>(args: SelectSubset<T, GolfCartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GolfCartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GolfCart.
     * @param {GolfCartUpsertArgs} args - Arguments to update or create a GolfCart.
     * @example
     * // Update or create a GolfCart
     * const golfCart = await prisma.golfCart.upsert({
     *   create: {
     *     // ... data to create a GolfCart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GolfCart we want to update
     *   }
     * })
     */
    upsert<T extends GolfCartUpsertArgs>(args: SelectSubset<T, GolfCartUpsertArgs<ExtArgs>>): Prisma__GolfCartClient<$Result.GetResult<Prisma.$GolfCartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GolfCarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolfCartCountArgs} args - Arguments to filter GolfCarts to count.
     * @example
     * // Count the number of GolfCarts
     * const count = await prisma.golfCart.count({
     *   where: {
     *     // ... the filter for the GolfCarts we want to count
     *   }
     * })
    **/
    count<T extends GolfCartCountArgs>(
      args?: Subset<T, GolfCartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GolfCartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GolfCart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolfCartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GolfCartAggregateArgs>(args: Subset<T, GolfCartAggregateArgs>): Prisma.PrismaPromise<GetGolfCartAggregateType<T>>

    /**
     * Group by GolfCart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolfCartGroupByArgs} args - Group by arguments.
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
      T extends GolfCartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GolfCartGroupByArgs['orderBy'] }
        : { orderBy?: GolfCartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GolfCartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGolfCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GolfCart model
   */
  readonly fields: GolfCartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GolfCart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GolfCartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    installedParts<T extends GolfCart$installedPartsArgs<ExtArgs> = {}>(args?: Subset<T, GolfCart$installedPartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstalledPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GolfCart model
   */
  interface GolfCartFieldRefs {
    readonly id: FieldRef<"GolfCart", 'String'>
    readonly make: FieldRef<"GolfCart", 'String'>
    readonly model: FieldRef<"GolfCart", 'String'>
    readonly year: FieldRef<"GolfCart", 'Int'>
    readonly basePrice: FieldRef<"GolfCart", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * GolfCart findUnique
   */
  export type GolfCartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfCart
     */
    select?: GolfCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfCart
     */
    omit?: GolfCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfCartInclude<ExtArgs> | null
    /**
     * Filter, which GolfCart to fetch.
     */
    where: GolfCartWhereUniqueInput
  }

  /**
   * GolfCart findUniqueOrThrow
   */
  export type GolfCartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfCart
     */
    select?: GolfCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfCart
     */
    omit?: GolfCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfCartInclude<ExtArgs> | null
    /**
     * Filter, which GolfCart to fetch.
     */
    where: GolfCartWhereUniqueInput
  }

  /**
   * GolfCart findFirst
   */
  export type GolfCartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfCart
     */
    select?: GolfCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfCart
     */
    omit?: GolfCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfCartInclude<ExtArgs> | null
    /**
     * Filter, which GolfCart to fetch.
     */
    where?: GolfCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GolfCarts to fetch.
     */
    orderBy?: GolfCartOrderByWithRelationInput | GolfCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GolfCarts.
     */
    cursor?: GolfCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GolfCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GolfCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GolfCarts.
     */
    distinct?: GolfCartScalarFieldEnum | GolfCartScalarFieldEnum[]
  }

  /**
   * GolfCart findFirstOrThrow
   */
  export type GolfCartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfCart
     */
    select?: GolfCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfCart
     */
    omit?: GolfCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfCartInclude<ExtArgs> | null
    /**
     * Filter, which GolfCart to fetch.
     */
    where?: GolfCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GolfCarts to fetch.
     */
    orderBy?: GolfCartOrderByWithRelationInput | GolfCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GolfCarts.
     */
    cursor?: GolfCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GolfCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GolfCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GolfCarts.
     */
    distinct?: GolfCartScalarFieldEnum | GolfCartScalarFieldEnum[]
  }

  /**
   * GolfCart findMany
   */
  export type GolfCartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfCart
     */
    select?: GolfCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfCart
     */
    omit?: GolfCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfCartInclude<ExtArgs> | null
    /**
     * Filter, which GolfCarts to fetch.
     */
    where?: GolfCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GolfCarts to fetch.
     */
    orderBy?: GolfCartOrderByWithRelationInput | GolfCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GolfCarts.
     */
    cursor?: GolfCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GolfCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GolfCarts.
     */
    skip?: number
    distinct?: GolfCartScalarFieldEnum | GolfCartScalarFieldEnum[]
  }

  /**
   * GolfCart create
   */
  export type GolfCartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfCart
     */
    select?: GolfCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfCart
     */
    omit?: GolfCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfCartInclude<ExtArgs> | null
    /**
     * The data needed to create a GolfCart.
     */
    data: XOR<GolfCartCreateInput, GolfCartUncheckedCreateInput>
  }

  /**
   * GolfCart createMany
   */
  export type GolfCartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GolfCarts.
     */
    data: GolfCartCreateManyInput | GolfCartCreateManyInput[]
  }

  /**
   * GolfCart createManyAndReturn
   */
  export type GolfCartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfCart
     */
    select?: GolfCartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GolfCart
     */
    omit?: GolfCartOmit<ExtArgs> | null
    /**
     * The data used to create many GolfCarts.
     */
    data: GolfCartCreateManyInput | GolfCartCreateManyInput[]
  }

  /**
   * GolfCart update
   */
  export type GolfCartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfCart
     */
    select?: GolfCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfCart
     */
    omit?: GolfCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfCartInclude<ExtArgs> | null
    /**
     * The data needed to update a GolfCart.
     */
    data: XOR<GolfCartUpdateInput, GolfCartUncheckedUpdateInput>
    /**
     * Choose, which GolfCart to update.
     */
    where: GolfCartWhereUniqueInput
  }

  /**
   * GolfCart updateMany
   */
  export type GolfCartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GolfCarts.
     */
    data: XOR<GolfCartUpdateManyMutationInput, GolfCartUncheckedUpdateManyInput>
    /**
     * Filter which GolfCarts to update
     */
    where?: GolfCartWhereInput
    /**
     * Limit how many GolfCarts to update.
     */
    limit?: number
  }

  /**
   * GolfCart updateManyAndReturn
   */
  export type GolfCartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfCart
     */
    select?: GolfCartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GolfCart
     */
    omit?: GolfCartOmit<ExtArgs> | null
    /**
     * The data used to update GolfCarts.
     */
    data: XOR<GolfCartUpdateManyMutationInput, GolfCartUncheckedUpdateManyInput>
    /**
     * Filter which GolfCarts to update
     */
    where?: GolfCartWhereInput
    /**
     * Limit how many GolfCarts to update.
     */
    limit?: number
  }

  /**
   * GolfCart upsert
   */
  export type GolfCartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfCart
     */
    select?: GolfCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfCart
     */
    omit?: GolfCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfCartInclude<ExtArgs> | null
    /**
     * The filter to search for the GolfCart to update in case it exists.
     */
    where: GolfCartWhereUniqueInput
    /**
     * In case the GolfCart found by the `where` argument doesn't exist, create a new GolfCart with this data.
     */
    create: XOR<GolfCartCreateInput, GolfCartUncheckedCreateInput>
    /**
     * In case the GolfCart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GolfCartUpdateInput, GolfCartUncheckedUpdateInput>
  }

  /**
   * GolfCart delete
   */
  export type GolfCartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfCart
     */
    select?: GolfCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfCart
     */
    omit?: GolfCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfCartInclude<ExtArgs> | null
    /**
     * Filter which GolfCart to delete.
     */
    where: GolfCartWhereUniqueInput
  }

  /**
   * GolfCart deleteMany
   */
  export type GolfCartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GolfCarts to delete
     */
    where?: GolfCartWhereInput
    /**
     * Limit how many GolfCarts to delete.
     */
    limit?: number
  }

  /**
   * GolfCart.installedParts
   */
  export type GolfCart$installedPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstalledPart
     */
    select?: InstalledPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstalledPart
     */
    omit?: InstalledPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstalledPartInclude<ExtArgs> | null
    where?: InstalledPartWhereInput
    orderBy?: InstalledPartOrderByWithRelationInput | InstalledPartOrderByWithRelationInput[]
    cursor?: InstalledPartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstalledPartScalarFieldEnum | InstalledPartScalarFieldEnum[]
  }

  /**
   * GolfCart without action
   */
  export type GolfCartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfCart
     */
    select?: GolfCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfCart
     */
    omit?: GolfCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfCartInclude<ExtArgs> | null
  }


  /**
   * Model Part
   */

  export type AggregatePart = {
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  export type PartAvgAggregateOutputType = {
    price: number | null
  }

  export type PartSumAggregateOutputType = {
    price: number | null
  }

  export type PartMinAggregateOutputType = {
    id: string | null
    sku: string | null
    name: string | null
    category: string | null
    price: number | null
  }

  export type PartMaxAggregateOutputType = {
    id: string | null
    sku: string | null
    name: string | null
    category: string | null
    price: number | null
  }

  export type PartCountAggregateOutputType = {
    id: number
    sku: number
    name: number
    category: number
    price: number
    _all: number
  }


  export type PartAvgAggregateInputType = {
    price?: true
  }

  export type PartSumAggregateInputType = {
    price?: true
  }

  export type PartMinAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    category?: true
    price?: true
  }

  export type PartMaxAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    category?: true
    price?: true
  }

  export type PartCountAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    category?: true
    price?: true
    _all?: true
  }

  export type PartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Part to aggregate.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parts
    **/
    _count?: true | PartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartMaxAggregateInputType
  }

  export type GetPartAggregateType<T extends PartAggregateArgs> = {
        [P in keyof T & keyof AggregatePart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePart[P]>
      : GetScalarType<T[P], AggregatePart[P]>
  }




  export type PartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
    orderBy?: PartOrderByWithAggregationInput | PartOrderByWithAggregationInput[]
    by: PartScalarFieldEnum[] | PartScalarFieldEnum
    having?: PartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartCountAggregateInputType | true
    _avg?: PartAvgAggregateInputType
    _sum?: PartSumAggregateInputType
    _min?: PartMinAggregateInputType
    _max?: PartMaxAggregateInputType
  }

  export type PartGroupByOutputType = {
    id: string
    sku: string
    name: string
    category: string
    price: number
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  type GetPartGroupByPayload<T extends PartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartGroupByOutputType[P]>
            : GetScalarType<T[P], PartGroupByOutputType[P]>
        }
      >
    >


  export type PartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
    installations?: boolean | Part$installationsArgs<ExtArgs>
    _count?: boolean | PartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
  }, ExtArgs["result"]["part"]>

  export type PartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
  }, ExtArgs["result"]["part"]>

  export type PartSelectScalar = {
    id?: boolean
    sku?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
  }

  export type PartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sku" | "name" | "category" | "price", ExtArgs["result"]["part"]>
  export type PartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installations?: boolean | Part$installationsArgs<ExtArgs>
    _count?: boolean | PartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Part"
    objects: {
      installations: Prisma.$InstalledPartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sku: string
      name: string
      category: string
      price: number
    }, ExtArgs["result"]["part"]>
    composites: {}
  }

  type PartGetPayload<S extends boolean | null | undefined | PartDefaultArgs> = $Result.GetResult<Prisma.$PartPayload, S>

  type PartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartCountAggregateInputType | true
    }

  export interface PartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Part'], meta: { name: 'Part' } }
    /**
     * Find zero or one Part that matches the filter.
     * @param {PartFindUniqueArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartFindUniqueArgs>(args: SelectSubset<T, PartFindUniqueArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Part that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartFindUniqueOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartFindUniqueOrThrowArgs>(args: SelectSubset<T, PartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartFindFirstArgs>(args?: SelectSubset<T, PartFindFirstArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartFindFirstOrThrowArgs>(args?: SelectSubset<T, PartFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parts
     * const parts = await prisma.part.findMany()
     * 
     * // Get first 10 Parts
     * const parts = await prisma.part.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partWithIdOnly = await prisma.part.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartFindManyArgs>(args?: SelectSubset<T, PartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Part.
     * @param {PartCreateArgs} args - Arguments to create a Part.
     * @example
     * // Create one Part
     * const Part = await prisma.part.create({
     *   data: {
     *     // ... data to create a Part
     *   }
     * })
     * 
     */
    create<T extends PartCreateArgs>(args: SelectSubset<T, PartCreateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parts.
     * @param {PartCreateManyArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartCreateManyArgs>(args?: SelectSubset<T, PartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parts and returns the data saved in the database.
     * @param {PartCreateManyAndReturnArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartCreateManyAndReturnArgs>(args?: SelectSubset<T, PartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Part.
     * @param {PartDeleteArgs} args - Arguments to delete one Part.
     * @example
     * // Delete one Part
     * const Part = await prisma.part.delete({
     *   where: {
     *     // ... filter to delete one Part
     *   }
     * })
     * 
     */
    delete<T extends PartDeleteArgs>(args: SelectSubset<T, PartDeleteArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Part.
     * @param {PartUpdateArgs} args - Arguments to update one Part.
     * @example
     * // Update one Part
     * const part = await prisma.part.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartUpdateArgs>(args: SelectSubset<T, PartUpdateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parts.
     * @param {PartDeleteManyArgs} args - Arguments to filter Parts to delete.
     * @example
     * // Delete a few Parts
     * const { count } = await prisma.part.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartDeleteManyArgs>(args?: SelectSubset<T, PartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartUpdateManyArgs>(args: SelectSubset<T, PartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts and returns the data updated in the database.
     * @param {PartUpdateManyAndReturnArgs} args - Arguments to update many Parts.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.updateManyAndReturn({
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
    updateManyAndReturn<T extends PartUpdateManyAndReturnArgs>(args: SelectSubset<T, PartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Part.
     * @param {PartUpsertArgs} args - Arguments to update or create a Part.
     * @example
     * // Update or create a Part
     * const part = await prisma.part.upsert({
     *   create: {
     *     // ... data to create a Part
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Part we want to update
     *   }
     * })
     */
    upsert<T extends PartUpsertArgs>(args: SelectSubset<T, PartUpsertArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartCountArgs} args - Arguments to filter Parts to count.
     * @example
     * // Count the number of Parts
     * const count = await prisma.part.count({
     *   where: {
     *     // ... the filter for the Parts we want to count
     *   }
     * })
    **/
    count<T extends PartCountArgs>(
      args?: Subset<T, PartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartAggregateArgs>(args: Subset<T, PartAggregateArgs>): Prisma.PrismaPromise<GetPartAggregateType<T>>

    /**
     * Group by Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartGroupByArgs} args - Group by arguments.
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
      T extends PartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartGroupByArgs['orderBy'] }
        : { orderBy?: PartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Part model
   */
  readonly fields: PartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Part.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    installations<T extends Part$installationsArgs<ExtArgs> = {}>(args?: Subset<T, Part$installationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstalledPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Part model
   */
  interface PartFieldRefs {
    readonly id: FieldRef<"Part", 'String'>
    readonly sku: FieldRef<"Part", 'String'>
    readonly name: FieldRef<"Part", 'String'>
    readonly category: FieldRef<"Part", 'String'>
    readonly price: FieldRef<"Part", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Part findUnique
   */
  export type PartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findUniqueOrThrow
   */
  export type PartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findFirst
   */
  export type PartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findFirstOrThrow
   */
  export type PartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findMany
   */
  export type PartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part create
   */
  export type PartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to create a Part.
     */
    data: XOR<PartCreateInput, PartUncheckedCreateInput>
  }

  /**
   * Part createMany
   */
  export type PartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
  }

  /**
   * Part createManyAndReturn
   */
  export type PartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
  }

  /**
   * Part update
   */
  export type PartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to update a Part.
     */
    data: XOR<PartUpdateInput, PartUncheckedUpdateInput>
    /**
     * Choose, which Part to update.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part updateMany
   */
  export type PartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
  }

  /**
   * Part updateManyAndReturn
   */
  export type PartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
  }

  /**
   * Part upsert
   */
  export type PartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The filter to search for the Part to update in case it exists.
     */
    where: PartWhereUniqueInput
    /**
     * In case the Part found by the `where` argument doesn't exist, create a new Part with this data.
     */
    create: XOR<PartCreateInput, PartUncheckedCreateInput>
    /**
     * In case the Part was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartUpdateInput, PartUncheckedUpdateInput>
  }

  /**
   * Part delete
   */
  export type PartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter which Part to delete.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part deleteMany
   */
  export type PartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parts to delete
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to delete.
     */
    limit?: number
  }

  /**
   * Part.installations
   */
  export type Part$installationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstalledPart
     */
    select?: InstalledPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstalledPart
     */
    omit?: InstalledPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstalledPartInclude<ExtArgs> | null
    where?: InstalledPartWhereInput
    orderBy?: InstalledPartOrderByWithRelationInput | InstalledPartOrderByWithRelationInput[]
    cursor?: InstalledPartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstalledPartScalarFieldEnum | InstalledPartScalarFieldEnum[]
  }

  /**
   * Part without action
   */
  export type PartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
  }


  /**
   * Model InstalledPart
   */

  export type AggregateInstalledPart = {
    _count: InstalledPartCountAggregateOutputType | null
    _avg: InstalledPartAvgAggregateOutputType | null
    _sum: InstalledPartSumAggregateOutputType | null
    _min: InstalledPartMinAggregateOutputType | null
    _max: InstalledPartMaxAggregateOutputType | null
  }

  export type InstalledPartAvgAggregateOutputType = {
    quantity: number | null
    chargedPrice: number | null
  }

  export type InstalledPartSumAggregateOutputType = {
    quantity: number | null
    chargedPrice: number | null
  }

  export type InstalledPartMinAggregateOutputType = {
    id: string | null
    installedAt: Date | null
    quantity: number | null
    chargedPrice: number | null
    cartId: string | null
    partId: string | null
  }

  export type InstalledPartMaxAggregateOutputType = {
    id: string | null
    installedAt: Date | null
    quantity: number | null
    chargedPrice: number | null
    cartId: string | null
    partId: string | null
  }

  export type InstalledPartCountAggregateOutputType = {
    id: number
    installedAt: number
    quantity: number
    chargedPrice: number
    cartId: number
    partId: number
    _all: number
  }


  export type InstalledPartAvgAggregateInputType = {
    quantity?: true
    chargedPrice?: true
  }

  export type InstalledPartSumAggregateInputType = {
    quantity?: true
    chargedPrice?: true
  }

  export type InstalledPartMinAggregateInputType = {
    id?: true
    installedAt?: true
    quantity?: true
    chargedPrice?: true
    cartId?: true
    partId?: true
  }

  export type InstalledPartMaxAggregateInputType = {
    id?: true
    installedAt?: true
    quantity?: true
    chargedPrice?: true
    cartId?: true
    partId?: true
  }

  export type InstalledPartCountAggregateInputType = {
    id?: true
    installedAt?: true
    quantity?: true
    chargedPrice?: true
    cartId?: true
    partId?: true
    _all?: true
  }

  export type InstalledPartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstalledPart to aggregate.
     */
    where?: InstalledPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstalledParts to fetch.
     */
    orderBy?: InstalledPartOrderByWithRelationInput | InstalledPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstalledPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstalledParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstalledParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstalledParts
    **/
    _count?: true | InstalledPartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstalledPartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstalledPartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstalledPartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstalledPartMaxAggregateInputType
  }

  export type GetInstalledPartAggregateType<T extends InstalledPartAggregateArgs> = {
        [P in keyof T & keyof AggregateInstalledPart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstalledPart[P]>
      : GetScalarType<T[P], AggregateInstalledPart[P]>
  }




  export type InstalledPartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstalledPartWhereInput
    orderBy?: InstalledPartOrderByWithAggregationInput | InstalledPartOrderByWithAggregationInput[]
    by: InstalledPartScalarFieldEnum[] | InstalledPartScalarFieldEnum
    having?: InstalledPartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstalledPartCountAggregateInputType | true
    _avg?: InstalledPartAvgAggregateInputType
    _sum?: InstalledPartSumAggregateInputType
    _min?: InstalledPartMinAggregateInputType
    _max?: InstalledPartMaxAggregateInputType
  }

  export type InstalledPartGroupByOutputType = {
    id: string
    installedAt: Date
    quantity: number
    chargedPrice: number
    cartId: string
    partId: string
    _count: InstalledPartCountAggregateOutputType | null
    _avg: InstalledPartAvgAggregateOutputType | null
    _sum: InstalledPartSumAggregateOutputType | null
    _min: InstalledPartMinAggregateOutputType | null
    _max: InstalledPartMaxAggregateOutputType | null
  }

  type GetInstalledPartGroupByPayload<T extends InstalledPartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstalledPartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstalledPartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstalledPartGroupByOutputType[P]>
            : GetScalarType<T[P], InstalledPartGroupByOutputType[P]>
        }
      >
    >


  export type InstalledPartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installedAt?: boolean
    quantity?: boolean
    chargedPrice?: boolean
    cartId?: boolean
    partId?: boolean
    cart?: boolean | GolfCartDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installedPart"]>

  export type InstalledPartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installedAt?: boolean
    quantity?: boolean
    chargedPrice?: boolean
    cartId?: boolean
    partId?: boolean
    cart?: boolean | GolfCartDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installedPart"]>

  export type InstalledPartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installedAt?: boolean
    quantity?: boolean
    chargedPrice?: boolean
    cartId?: boolean
    partId?: boolean
    cart?: boolean | GolfCartDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installedPart"]>

  export type InstalledPartSelectScalar = {
    id?: boolean
    installedAt?: boolean
    quantity?: boolean
    chargedPrice?: boolean
    cartId?: boolean
    partId?: boolean
  }

  export type InstalledPartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "installedAt" | "quantity" | "chargedPrice" | "cartId" | "partId", ExtArgs["result"]["installedPart"]>
  export type InstalledPartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | GolfCartDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }
  export type InstalledPartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | GolfCartDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }
  export type InstalledPartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | GolfCartDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }

  export type $InstalledPartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstalledPart"
    objects: {
      cart: Prisma.$GolfCartPayload<ExtArgs>
      part: Prisma.$PartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      installedAt: Date
      quantity: number
      chargedPrice: number
      cartId: string
      partId: string
    }, ExtArgs["result"]["installedPart"]>
    composites: {}
  }

  type InstalledPartGetPayload<S extends boolean | null | undefined | InstalledPartDefaultArgs> = $Result.GetResult<Prisma.$InstalledPartPayload, S>

  type InstalledPartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstalledPartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstalledPartCountAggregateInputType | true
    }

  export interface InstalledPartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstalledPart'], meta: { name: 'InstalledPart' } }
    /**
     * Find zero or one InstalledPart that matches the filter.
     * @param {InstalledPartFindUniqueArgs} args - Arguments to find a InstalledPart
     * @example
     * // Get one InstalledPart
     * const installedPart = await prisma.installedPart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstalledPartFindUniqueArgs>(args: SelectSubset<T, InstalledPartFindUniqueArgs<ExtArgs>>): Prisma__InstalledPartClient<$Result.GetResult<Prisma.$InstalledPartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstalledPart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstalledPartFindUniqueOrThrowArgs} args - Arguments to find a InstalledPart
     * @example
     * // Get one InstalledPart
     * const installedPart = await prisma.installedPart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstalledPartFindUniqueOrThrowArgs>(args: SelectSubset<T, InstalledPartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstalledPartClient<$Result.GetResult<Prisma.$InstalledPartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstalledPart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstalledPartFindFirstArgs} args - Arguments to find a InstalledPart
     * @example
     * // Get one InstalledPart
     * const installedPart = await prisma.installedPart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstalledPartFindFirstArgs>(args?: SelectSubset<T, InstalledPartFindFirstArgs<ExtArgs>>): Prisma__InstalledPartClient<$Result.GetResult<Prisma.$InstalledPartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstalledPart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstalledPartFindFirstOrThrowArgs} args - Arguments to find a InstalledPart
     * @example
     * // Get one InstalledPart
     * const installedPart = await prisma.installedPart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstalledPartFindFirstOrThrowArgs>(args?: SelectSubset<T, InstalledPartFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstalledPartClient<$Result.GetResult<Prisma.$InstalledPartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstalledParts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstalledPartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstalledParts
     * const installedParts = await prisma.installedPart.findMany()
     * 
     * // Get first 10 InstalledParts
     * const installedParts = await prisma.installedPart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const installedPartWithIdOnly = await prisma.installedPart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstalledPartFindManyArgs>(args?: SelectSubset<T, InstalledPartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstalledPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstalledPart.
     * @param {InstalledPartCreateArgs} args - Arguments to create a InstalledPart.
     * @example
     * // Create one InstalledPart
     * const InstalledPart = await prisma.installedPart.create({
     *   data: {
     *     // ... data to create a InstalledPart
     *   }
     * })
     * 
     */
    create<T extends InstalledPartCreateArgs>(args: SelectSubset<T, InstalledPartCreateArgs<ExtArgs>>): Prisma__InstalledPartClient<$Result.GetResult<Prisma.$InstalledPartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstalledParts.
     * @param {InstalledPartCreateManyArgs} args - Arguments to create many InstalledParts.
     * @example
     * // Create many InstalledParts
     * const installedPart = await prisma.installedPart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstalledPartCreateManyArgs>(args?: SelectSubset<T, InstalledPartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstalledParts and returns the data saved in the database.
     * @param {InstalledPartCreateManyAndReturnArgs} args - Arguments to create many InstalledParts.
     * @example
     * // Create many InstalledParts
     * const installedPart = await prisma.installedPart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstalledParts and only return the `id`
     * const installedPartWithIdOnly = await prisma.installedPart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstalledPartCreateManyAndReturnArgs>(args?: SelectSubset<T, InstalledPartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstalledPartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstalledPart.
     * @param {InstalledPartDeleteArgs} args - Arguments to delete one InstalledPart.
     * @example
     * // Delete one InstalledPart
     * const InstalledPart = await prisma.installedPart.delete({
     *   where: {
     *     // ... filter to delete one InstalledPart
     *   }
     * })
     * 
     */
    delete<T extends InstalledPartDeleteArgs>(args: SelectSubset<T, InstalledPartDeleteArgs<ExtArgs>>): Prisma__InstalledPartClient<$Result.GetResult<Prisma.$InstalledPartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstalledPart.
     * @param {InstalledPartUpdateArgs} args - Arguments to update one InstalledPart.
     * @example
     * // Update one InstalledPart
     * const installedPart = await prisma.installedPart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstalledPartUpdateArgs>(args: SelectSubset<T, InstalledPartUpdateArgs<ExtArgs>>): Prisma__InstalledPartClient<$Result.GetResult<Prisma.$InstalledPartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstalledParts.
     * @param {InstalledPartDeleteManyArgs} args - Arguments to filter InstalledParts to delete.
     * @example
     * // Delete a few InstalledParts
     * const { count } = await prisma.installedPart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstalledPartDeleteManyArgs>(args?: SelectSubset<T, InstalledPartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstalledParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstalledPartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstalledParts
     * const installedPart = await prisma.installedPart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstalledPartUpdateManyArgs>(args: SelectSubset<T, InstalledPartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstalledParts and returns the data updated in the database.
     * @param {InstalledPartUpdateManyAndReturnArgs} args - Arguments to update many InstalledParts.
     * @example
     * // Update many InstalledParts
     * const installedPart = await prisma.installedPart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstalledParts and only return the `id`
     * const installedPartWithIdOnly = await prisma.installedPart.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstalledPartUpdateManyAndReturnArgs>(args: SelectSubset<T, InstalledPartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstalledPartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstalledPart.
     * @param {InstalledPartUpsertArgs} args - Arguments to update or create a InstalledPart.
     * @example
     * // Update or create a InstalledPart
     * const installedPart = await prisma.installedPart.upsert({
     *   create: {
     *     // ... data to create a InstalledPart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstalledPart we want to update
     *   }
     * })
     */
    upsert<T extends InstalledPartUpsertArgs>(args: SelectSubset<T, InstalledPartUpsertArgs<ExtArgs>>): Prisma__InstalledPartClient<$Result.GetResult<Prisma.$InstalledPartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstalledParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstalledPartCountArgs} args - Arguments to filter InstalledParts to count.
     * @example
     * // Count the number of InstalledParts
     * const count = await prisma.installedPart.count({
     *   where: {
     *     // ... the filter for the InstalledParts we want to count
     *   }
     * })
    **/
    count<T extends InstalledPartCountArgs>(
      args?: Subset<T, InstalledPartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstalledPartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstalledPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstalledPartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstalledPartAggregateArgs>(args: Subset<T, InstalledPartAggregateArgs>): Prisma.PrismaPromise<GetInstalledPartAggregateType<T>>

    /**
     * Group by InstalledPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstalledPartGroupByArgs} args - Group by arguments.
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
      T extends InstalledPartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstalledPartGroupByArgs['orderBy'] }
        : { orderBy?: InstalledPartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstalledPartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstalledPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstalledPart model
   */
  readonly fields: InstalledPartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstalledPart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstalledPartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends GolfCartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GolfCartDefaultArgs<ExtArgs>>): Prisma__GolfCartClient<$Result.GetResult<Prisma.$GolfCartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    part<T extends PartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartDefaultArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InstalledPart model
   */
  interface InstalledPartFieldRefs {
    readonly id: FieldRef<"InstalledPart", 'String'>
    readonly installedAt: FieldRef<"InstalledPart", 'DateTime'>
    readonly quantity: FieldRef<"InstalledPart", 'Int'>
    readonly chargedPrice: FieldRef<"InstalledPart", 'Float'>
    readonly cartId: FieldRef<"InstalledPart", 'String'>
    readonly partId: FieldRef<"InstalledPart", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InstalledPart findUnique
   */
  export type InstalledPartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstalledPart
     */
    select?: InstalledPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstalledPart
     */
    omit?: InstalledPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstalledPartInclude<ExtArgs> | null
    /**
     * Filter, which InstalledPart to fetch.
     */
    where: InstalledPartWhereUniqueInput
  }

  /**
   * InstalledPart findUniqueOrThrow
   */
  export type InstalledPartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstalledPart
     */
    select?: InstalledPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstalledPart
     */
    omit?: InstalledPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstalledPartInclude<ExtArgs> | null
    /**
     * Filter, which InstalledPart to fetch.
     */
    where: InstalledPartWhereUniqueInput
  }

  /**
   * InstalledPart findFirst
   */
  export type InstalledPartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstalledPart
     */
    select?: InstalledPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstalledPart
     */
    omit?: InstalledPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstalledPartInclude<ExtArgs> | null
    /**
     * Filter, which InstalledPart to fetch.
     */
    where?: InstalledPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstalledParts to fetch.
     */
    orderBy?: InstalledPartOrderByWithRelationInput | InstalledPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstalledParts.
     */
    cursor?: InstalledPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstalledParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstalledParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstalledParts.
     */
    distinct?: InstalledPartScalarFieldEnum | InstalledPartScalarFieldEnum[]
  }

  /**
   * InstalledPart findFirstOrThrow
   */
  export type InstalledPartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstalledPart
     */
    select?: InstalledPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstalledPart
     */
    omit?: InstalledPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstalledPartInclude<ExtArgs> | null
    /**
     * Filter, which InstalledPart to fetch.
     */
    where?: InstalledPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstalledParts to fetch.
     */
    orderBy?: InstalledPartOrderByWithRelationInput | InstalledPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstalledParts.
     */
    cursor?: InstalledPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstalledParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstalledParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstalledParts.
     */
    distinct?: InstalledPartScalarFieldEnum | InstalledPartScalarFieldEnum[]
  }

  /**
   * InstalledPart findMany
   */
  export type InstalledPartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstalledPart
     */
    select?: InstalledPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstalledPart
     */
    omit?: InstalledPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstalledPartInclude<ExtArgs> | null
    /**
     * Filter, which InstalledParts to fetch.
     */
    where?: InstalledPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstalledParts to fetch.
     */
    orderBy?: InstalledPartOrderByWithRelationInput | InstalledPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstalledParts.
     */
    cursor?: InstalledPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstalledParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstalledParts.
     */
    skip?: number
    distinct?: InstalledPartScalarFieldEnum | InstalledPartScalarFieldEnum[]
  }

  /**
   * InstalledPart create
   */
  export type InstalledPartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstalledPart
     */
    select?: InstalledPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstalledPart
     */
    omit?: InstalledPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstalledPartInclude<ExtArgs> | null
    /**
     * The data needed to create a InstalledPart.
     */
    data: XOR<InstalledPartCreateInput, InstalledPartUncheckedCreateInput>
  }

  /**
   * InstalledPart createMany
   */
  export type InstalledPartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstalledParts.
     */
    data: InstalledPartCreateManyInput | InstalledPartCreateManyInput[]
  }

  /**
   * InstalledPart createManyAndReturn
   */
  export type InstalledPartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstalledPart
     */
    select?: InstalledPartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstalledPart
     */
    omit?: InstalledPartOmit<ExtArgs> | null
    /**
     * The data used to create many InstalledParts.
     */
    data: InstalledPartCreateManyInput | InstalledPartCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstalledPartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstalledPart update
   */
  export type InstalledPartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstalledPart
     */
    select?: InstalledPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstalledPart
     */
    omit?: InstalledPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstalledPartInclude<ExtArgs> | null
    /**
     * The data needed to update a InstalledPart.
     */
    data: XOR<InstalledPartUpdateInput, InstalledPartUncheckedUpdateInput>
    /**
     * Choose, which InstalledPart to update.
     */
    where: InstalledPartWhereUniqueInput
  }

  /**
   * InstalledPart updateMany
   */
  export type InstalledPartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstalledParts.
     */
    data: XOR<InstalledPartUpdateManyMutationInput, InstalledPartUncheckedUpdateManyInput>
    /**
     * Filter which InstalledParts to update
     */
    where?: InstalledPartWhereInput
    /**
     * Limit how many InstalledParts to update.
     */
    limit?: number
  }

  /**
   * InstalledPart updateManyAndReturn
   */
  export type InstalledPartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstalledPart
     */
    select?: InstalledPartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstalledPart
     */
    omit?: InstalledPartOmit<ExtArgs> | null
    /**
     * The data used to update InstalledParts.
     */
    data: XOR<InstalledPartUpdateManyMutationInput, InstalledPartUncheckedUpdateManyInput>
    /**
     * Filter which InstalledParts to update
     */
    where?: InstalledPartWhereInput
    /**
     * Limit how many InstalledParts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstalledPartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstalledPart upsert
   */
  export type InstalledPartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstalledPart
     */
    select?: InstalledPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstalledPart
     */
    omit?: InstalledPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstalledPartInclude<ExtArgs> | null
    /**
     * The filter to search for the InstalledPart to update in case it exists.
     */
    where: InstalledPartWhereUniqueInput
    /**
     * In case the InstalledPart found by the `where` argument doesn't exist, create a new InstalledPart with this data.
     */
    create: XOR<InstalledPartCreateInput, InstalledPartUncheckedCreateInput>
    /**
     * In case the InstalledPart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstalledPartUpdateInput, InstalledPartUncheckedUpdateInput>
  }

  /**
   * InstalledPart delete
   */
  export type InstalledPartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstalledPart
     */
    select?: InstalledPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstalledPart
     */
    omit?: InstalledPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstalledPartInclude<ExtArgs> | null
    /**
     * Filter which InstalledPart to delete.
     */
    where: InstalledPartWhereUniqueInput
  }

  /**
   * InstalledPart deleteMany
   */
  export type InstalledPartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstalledParts to delete
     */
    where?: InstalledPartWhereInput
    /**
     * Limit how many InstalledParts to delete.
     */
    limit?: number
  }

  /**
   * InstalledPart without action
   */
  export type InstalledPartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstalledPart
     */
    select?: InstalledPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstalledPart
     */
    omit?: InstalledPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstalledPartInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GolfCartScalarFieldEnum: {
    id: 'id',
    make: 'make',
    model: 'model',
    year: 'year',
    basePrice: 'basePrice'
  };

  export type GolfCartScalarFieldEnum = (typeof GolfCartScalarFieldEnum)[keyof typeof GolfCartScalarFieldEnum]


  export const PartScalarFieldEnum: {
    id: 'id',
    sku: 'sku',
    name: 'name',
    category: 'category',
    price: 'price'
  };

  export type PartScalarFieldEnum = (typeof PartScalarFieldEnum)[keyof typeof PartScalarFieldEnum]


  export const InstalledPartScalarFieldEnum: {
    id: 'id',
    installedAt: 'installedAt',
    quantity: 'quantity',
    chargedPrice: 'chargedPrice',
    cartId: 'cartId',
    partId: 'partId'
  };

  export type InstalledPartScalarFieldEnum = (typeof InstalledPartScalarFieldEnum)[keyof typeof InstalledPartScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type GolfCartWhereInput = {
    AND?: GolfCartWhereInput | GolfCartWhereInput[]
    OR?: GolfCartWhereInput[]
    NOT?: GolfCartWhereInput | GolfCartWhereInput[]
    id?: StringFilter<"GolfCart"> | string
    make?: StringFilter<"GolfCart"> | string
    model?: StringFilter<"GolfCart"> | string
    year?: IntFilter<"GolfCart"> | number
    basePrice?: FloatFilter<"GolfCart"> | number
    installedParts?: InstalledPartListRelationFilter
  }

  export type GolfCartOrderByWithRelationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    basePrice?: SortOrder
    installedParts?: InstalledPartOrderByRelationAggregateInput
  }

  export type GolfCartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GolfCartWhereInput | GolfCartWhereInput[]
    OR?: GolfCartWhereInput[]
    NOT?: GolfCartWhereInput | GolfCartWhereInput[]
    make?: StringFilter<"GolfCart"> | string
    model?: StringFilter<"GolfCart"> | string
    year?: IntFilter<"GolfCart"> | number
    basePrice?: FloatFilter<"GolfCart"> | number
    installedParts?: InstalledPartListRelationFilter
  }, "id">

  export type GolfCartOrderByWithAggregationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    basePrice?: SortOrder
    _count?: GolfCartCountOrderByAggregateInput
    _avg?: GolfCartAvgOrderByAggregateInput
    _max?: GolfCartMaxOrderByAggregateInput
    _min?: GolfCartMinOrderByAggregateInput
    _sum?: GolfCartSumOrderByAggregateInput
  }

  export type GolfCartScalarWhereWithAggregatesInput = {
    AND?: GolfCartScalarWhereWithAggregatesInput | GolfCartScalarWhereWithAggregatesInput[]
    OR?: GolfCartScalarWhereWithAggregatesInput[]
    NOT?: GolfCartScalarWhereWithAggregatesInput | GolfCartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GolfCart"> | string
    make?: StringWithAggregatesFilter<"GolfCart"> | string
    model?: StringWithAggregatesFilter<"GolfCart"> | string
    year?: IntWithAggregatesFilter<"GolfCart"> | number
    basePrice?: FloatWithAggregatesFilter<"GolfCart"> | number
  }

  export type PartWhereInput = {
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    id?: StringFilter<"Part"> | string
    sku?: StringFilter<"Part"> | string
    name?: StringFilter<"Part"> | string
    category?: StringFilter<"Part"> | string
    price?: FloatFilter<"Part"> | number
    installations?: InstalledPartListRelationFilter
  }

  export type PartOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    installations?: InstalledPartOrderByRelationAggregateInput
  }

  export type PartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    name?: StringFilter<"Part"> | string
    category?: StringFilter<"Part"> | string
    price?: FloatFilter<"Part"> | number
    installations?: InstalledPartListRelationFilter
  }, "id" | "sku">

  export type PartOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    _count?: PartCountOrderByAggregateInput
    _avg?: PartAvgOrderByAggregateInput
    _max?: PartMaxOrderByAggregateInput
    _min?: PartMinOrderByAggregateInput
    _sum?: PartSumOrderByAggregateInput
  }

  export type PartScalarWhereWithAggregatesInput = {
    AND?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    OR?: PartScalarWhereWithAggregatesInput[]
    NOT?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Part"> | string
    sku?: StringWithAggregatesFilter<"Part"> | string
    name?: StringWithAggregatesFilter<"Part"> | string
    category?: StringWithAggregatesFilter<"Part"> | string
    price?: FloatWithAggregatesFilter<"Part"> | number
  }

  export type InstalledPartWhereInput = {
    AND?: InstalledPartWhereInput | InstalledPartWhereInput[]
    OR?: InstalledPartWhereInput[]
    NOT?: InstalledPartWhereInput | InstalledPartWhereInput[]
    id?: StringFilter<"InstalledPart"> | string
    installedAt?: DateTimeFilter<"InstalledPart"> | Date | string
    quantity?: IntFilter<"InstalledPart"> | number
    chargedPrice?: FloatFilter<"InstalledPart"> | number
    cartId?: StringFilter<"InstalledPart"> | string
    partId?: StringFilter<"InstalledPart"> | string
    cart?: XOR<GolfCartScalarRelationFilter, GolfCartWhereInput>
    part?: XOR<PartScalarRelationFilter, PartWhereInput>
  }

  export type InstalledPartOrderByWithRelationInput = {
    id?: SortOrder
    installedAt?: SortOrder
    quantity?: SortOrder
    chargedPrice?: SortOrder
    cartId?: SortOrder
    partId?: SortOrder
    cart?: GolfCartOrderByWithRelationInput
    part?: PartOrderByWithRelationInput
  }

  export type InstalledPartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InstalledPartWhereInput | InstalledPartWhereInput[]
    OR?: InstalledPartWhereInput[]
    NOT?: InstalledPartWhereInput | InstalledPartWhereInput[]
    installedAt?: DateTimeFilter<"InstalledPart"> | Date | string
    quantity?: IntFilter<"InstalledPart"> | number
    chargedPrice?: FloatFilter<"InstalledPart"> | number
    cartId?: StringFilter<"InstalledPart"> | string
    partId?: StringFilter<"InstalledPart"> | string
    cart?: XOR<GolfCartScalarRelationFilter, GolfCartWhereInput>
    part?: XOR<PartScalarRelationFilter, PartWhereInput>
  }, "id">

  export type InstalledPartOrderByWithAggregationInput = {
    id?: SortOrder
    installedAt?: SortOrder
    quantity?: SortOrder
    chargedPrice?: SortOrder
    cartId?: SortOrder
    partId?: SortOrder
    _count?: InstalledPartCountOrderByAggregateInput
    _avg?: InstalledPartAvgOrderByAggregateInput
    _max?: InstalledPartMaxOrderByAggregateInput
    _min?: InstalledPartMinOrderByAggregateInput
    _sum?: InstalledPartSumOrderByAggregateInput
  }

  export type InstalledPartScalarWhereWithAggregatesInput = {
    AND?: InstalledPartScalarWhereWithAggregatesInput | InstalledPartScalarWhereWithAggregatesInput[]
    OR?: InstalledPartScalarWhereWithAggregatesInput[]
    NOT?: InstalledPartScalarWhereWithAggregatesInput | InstalledPartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InstalledPart"> | string
    installedAt?: DateTimeWithAggregatesFilter<"InstalledPart"> | Date | string
    quantity?: IntWithAggregatesFilter<"InstalledPart"> | number
    chargedPrice?: FloatWithAggregatesFilter<"InstalledPart"> | number
    cartId?: StringWithAggregatesFilter<"InstalledPart"> | string
    partId?: StringWithAggregatesFilter<"InstalledPart"> | string
  }

  export type GolfCartCreateInput = {
    id?: string
    make: string
    model: string
    year: number
    basePrice: number
    installedParts?: InstalledPartCreateNestedManyWithoutCartInput
  }

  export type GolfCartUncheckedCreateInput = {
    id?: string
    make: string
    model: string
    year: number
    basePrice: number
    installedParts?: InstalledPartUncheckedCreateNestedManyWithoutCartInput
  }

  export type GolfCartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    installedParts?: InstalledPartUpdateManyWithoutCartNestedInput
  }

  export type GolfCartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    installedParts?: InstalledPartUncheckedUpdateManyWithoutCartNestedInput
  }

  export type GolfCartCreateManyInput = {
    id?: string
    make: string
    model: string
    year: number
    basePrice: number
  }

  export type GolfCartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
  }

  export type GolfCartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
  }

  export type PartCreateInput = {
    id?: string
    sku: string
    name: string
    category: string
    price: number
    installations?: InstalledPartCreateNestedManyWithoutPartInput
  }

  export type PartUncheckedCreateInput = {
    id?: string
    sku: string
    name: string
    category: string
    price: number
    installations?: InstalledPartUncheckedCreateNestedManyWithoutPartInput
  }

  export type PartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    installations?: InstalledPartUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    installations?: InstalledPartUncheckedUpdateManyWithoutPartNestedInput
  }

  export type PartCreateManyInput = {
    id?: string
    sku: string
    name: string
    category: string
    price: number
  }

  export type PartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type PartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type InstalledPartCreateInput = {
    id?: string
    installedAt?: Date | string
    quantity?: number
    chargedPrice: number
    cart: GolfCartCreateNestedOneWithoutInstalledPartsInput
    part: PartCreateNestedOneWithoutInstallationsInput
  }

  export type InstalledPartUncheckedCreateInput = {
    id?: string
    installedAt?: Date | string
    quantity?: number
    chargedPrice: number
    cartId: string
    partId: string
  }

  export type InstalledPartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    chargedPrice?: FloatFieldUpdateOperationsInput | number
    cart?: GolfCartUpdateOneRequiredWithoutInstalledPartsNestedInput
    part?: PartUpdateOneRequiredWithoutInstallationsNestedInput
  }

  export type InstalledPartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    chargedPrice?: FloatFieldUpdateOperationsInput | number
    cartId?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
  }

  export type InstalledPartCreateManyInput = {
    id?: string
    installedAt?: Date | string
    quantity?: number
    chargedPrice: number
    cartId: string
    partId: string
  }

  export type InstalledPartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    chargedPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type InstalledPartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    chargedPrice?: FloatFieldUpdateOperationsInput | number
    cartId?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
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

  export type InstalledPartListRelationFilter = {
    every?: InstalledPartWhereInput
    some?: InstalledPartWhereInput
    none?: InstalledPartWhereInput
  }

  export type InstalledPartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GolfCartCountOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    basePrice?: SortOrder
  }

  export type GolfCartAvgOrderByAggregateInput = {
    year?: SortOrder
    basePrice?: SortOrder
  }

  export type GolfCartMaxOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    basePrice?: SortOrder
  }

  export type GolfCartMinOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    basePrice?: SortOrder
  }

  export type GolfCartSumOrderByAggregateInput = {
    year?: SortOrder
    basePrice?: SortOrder
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

  export type PartCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
  }

  export type PartAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PartMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
  }

  export type PartMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
  }

  export type PartSumOrderByAggregateInput = {
    price?: SortOrder
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

  export type GolfCartScalarRelationFilter = {
    is?: GolfCartWhereInput
    isNot?: GolfCartWhereInput
  }

  export type PartScalarRelationFilter = {
    is?: PartWhereInput
    isNot?: PartWhereInput
  }

  export type InstalledPartCountOrderByAggregateInput = {
    id?: SortOrder
    installedAt?: SortOrder
    quantity?: SortOrder
    chargedPrice?: SortOrder
    cartId?: SortOrder
    partId?: SortOrder
  }

  export type InstalledPartAvgOrderByAggregateInput = {
    quantity?: SortOrder
    chargedPrice?: SortOrder
  }

  export type InstalledPartMaxOrderByAggregateInput = {
    id?: SortOrder
    installedAt?: SortOrder
    quantity?: SortOrder
    chargedPrice?: SortOrder
    cartId?: SortOrder
    partId?: SortOrder
  }

  export type InstalledPartMinOrderByAggregateInput = {
    id?: SortOrder
    installedAt?: SortOrder
    quantity?: SortOrder
    chargedPrice?: SortOrder
    cartId?: SortOrder
    partId?: SortOrder
  }

  export type InstalledPartSumOrderByAggregateInput = {
    quantity?: SortOrder
    chargedPrice?: SortOrder
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

  export type InstalledPartCreateNestedManyWithoutCartInput = {
    create?: XOR<InstalledPartCreateWithoutCartInput, InstalledPartUncheckedCreateWithoutCartInput> | InstalledPartCreateWithoutCartInput[] | InstalledPartUncheckedCreateWithoutCartInput[]
    connectOrCreate?: InstalledPartCreateOrConnectWithoutCartInput | InstalledPartCreateOrConnectWithoutCartInput[]
    createMany?: InstalledPartCreateManyCartInputEnvelope
    connect?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
  }

  export type InstalledPartUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<InstalledPartCreateWithoutCartInput, InstalledPartUncheckedCreateWithoutCartInput> | InstalledPartCreateWithoutCartInput[] | InstalledPartUncheckedCreateWithoutCartInput[]
    connectOrCreate?: InstalledPartCreateOrConnectWithoutCartInput | InstalledPartCreateOrConnectWithoutCartInput[]
    createMany?: InstalledPartCreateManyCartInputEnvelope
    connect?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InstalledPartUpdateManyWithoutCartNestedInput = {
    create?: XOR<InstalledPartCreateWithoutCartInput, InstalledPartUncheckedCreateWithoutCartInput> | InstalledPartCreateWithoutCartInput[] | InstalledPartUncheckedCreateWithoutCartInput[]
    connectOrCreate?: InstalledPartCreateOrConnectWithoutCartInput | InstalledPartCreateOrConnectWithoutCartInput[]
    upsert?: InstalledPartUpsertWithWhereUniqueWithoutCartInput | InstalledPartUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: InstalledPartCreateManyCartInputEnvelope
    set?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    disconnect?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    delete?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    connect?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    update?: InstalledPartUpdateWithWhereUniqueWithoutCartInput | InstalledPartUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: InstalledPartUpdateManyWithWhereWithoutCartInput | InstalledPartUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: InstalledPartScalarWhereInput | InstalledPartScalarWhereInput[]
  }

  export type InstalledPartUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<InstalledPartCreateWithoutCartInput, InstalledPartUncheckedCreateWithoutCartInput> | InstalledPartCreateWithoutCartInput[] | InstalledPartUncheckedCreateWithoutCartInput[]
    connectOrCreate?: InstalledPartCreateOrConnectWithoutCartInput | InstalledPartCreateOrConnectWithoutCartInput[]
    upsert?: InstalledPartUpsertWithWhereUniqueWithoutCartInput | InstalledPartUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: InstalledPartCreateManyCartInputEnvelope
    set?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    disconnect?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    delete?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    connect?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    update?: InstalledPartUpdateWithWhereUniqueWithoutCartInput | InstalledPartUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: InstalledPartUpdateManyWithWhereWithoutCartInput | InstalledPartUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: InstalledPartScalarWhereInput | InstalledPartScalarWhereInput[]
  }

  export type InstalledPartCreateNestedManyWithoutPartInput = {
    create?: XOR<InstalledPartCreateWithoutPartInput, InstalledPartUncheckedCreateWithoutPartInput> | InstalledPartCreateWithoutPartInput[] | InstalledPartUncheckedCreateWithoutPartInput[]
    connectOrCreate?: InstalledPartCreateOrConnectWithoutPartInput | InstalledPartCreateOrConnectWithoutPartInput[]
    createMany?: InstalledPartCreateManyPartInputEnvelope
    connect?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
  }

  export type InstalledPartUncheckedCreateNestedManyWithoutPartInput = {
    create?: XOR<InstalledPartCreateWithoutPartInput, InstalledPartUncheckedCreateWithoutPartInput> | InstalledPartCreateWithoutPartInput[] | InstalledPartUncheckedCreateWithoutPartInput[]
    connectOrCreate?: InstalledPartCreateOrConnectWithoutPartInput | InstalledPartCreateOrConnectWithoutPartInput[]
    createMany?: InstalledPartCreateManyPartInputEnvelope
    connect?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
  }

  export type InstalledPartUpdateManyWithoutPartNestedInput = {
    create?: XOR<InstalledPartCreateWithoutPartInput, InstalledPartUncheckedCreateWithoutPartInput> | InstalledPartCreateWithoutPartInput[] | InstalledPartUncheckedCreateWithoutPartInput[]
    connectOrCreate?: InstalledPartCreateOrConnectWithoutPartInput | InstalledPartCreateOrConnectWithoutPartInput[]
    upsert?: InstalledPartUpsertWithWhereUniqueWithoutPartInput | InstalledPartUpsertWithWhereUniqueWithoutPartInput[]
    createMany?: InstalledPartCreateManyPartInputEnvelope
    set?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    disconnect?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    delete?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    connect?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    update?: InstalledPartUpdateWithWhereUniqueWithoutPartInput | InstalledPartUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: InstalledPartUpdateManyWithWhereWithoutPartInput | InstalledPartUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: InstalledPartScalarWhereInput | InstalledPartScalarWhereInput[]
  }

  export type InstalledPartUncheckedUpdateManyWithoutPartNestedInput = {
    create?: XOR<InstalledPartCreateWithoutPartInput, InstalledPartUncheckedCreateWithoutPartInput> | InstalledPartCreateWithoutPartInput[] | InstalledPartUncheckedCreateWithoutPartInput[]
    connectOrCreate?: InstalledPartCreateOrConnectWithoutPartInput | InstalledPartCreateOrConnectWithoutPartInput[]
    upsert?: InstalledPartUpsertWithWhereUniqueWithoutPartInput | InstalledPartUpsertWithWhereUniqueWithoutPartInput[]
    createMany?: InstalledPartCreateManyPartInputEnvelope
    set?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    disconnect?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    delete?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    connect?: InstalledPartWhereUniqueInput | InstalledPartWhereUniqueInput[]
    update?: InstalledPartUpdateWithWhereUniqueWithoutPartInput | InstalledPartUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: InstalledPartUpdateManyWithWhereWithoutPartInput | InstalledPartUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: InstalledPartScalarWhereInput | InstalledPartScalarWhereInput[]
  }

  export type GolfCartCreateNestedOneWithoutInstalledPartsInput = {
    create?: XOR<GolfCartCreateWithoutInstalledPartsInput, GolfCartUncheckedCreateWithoutInstalledPartsInput>
    connectOrCreate?: GolfCartCreateOrConnectWithoutInstalledPartsInput
    connect?: GolfCartWhereUniqueInput
  }

  export type PartCreateNestedOneWithoutInstallationsInput = {
    create?: XOR<PartCreateWithoutInstallationsInput, PartUncheckedCreateWithoutInstallationsInput>
    connectOrCreate?: PartCreateOrConnectWithoutInstallationsInput
    connect?: PartWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GolfCartUpdateOneRequiredWithoutInstalledPartsNestedInput = {
    create?: XOR<GolfCartCreateWithoutInstalledPartsInput, GolfCartUncheckedCreateWithoutInstalledPartsInput>
    connectOrCreate?: GolfCartCreateOrConnectWithoutInstalledPartsInput
    upsert?: GolfCartUpsertWithoutInstalledPartsInput
    connect?: GolfCartWhereUniqueInput
    update?: XOR<XOR<GolfCartUpdateToOneWithWhereWithoutInstalledPartsInput, GolfCartUpdateWithoutInstalledPartsInput>, GolfCartUncheckedUpdateWithoutInstalledPartsInput>
  }

  export type PartUpdateOneRequiredWithoutInstallationsNestedInput = {
    create?: XOR<PartCreateWithoutInstallationsInput, PartUncheckedCreateWithoutInstallationsInput>
    connectOrCreate?: PartCreateOrConnectWithoutInstallationsInput
    upsert?: PartUpsertWithoutInstallationsInput
    connect?: PartWhereUniqueInput
    update?: XOR<XOR<PartUpdateToOneWithWhereWithoutInstallationsInput, PartUpdateWithoutInstallationsInput>, PartUncheckedUpdateWithoutInstallationsInput>
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

  export type InstalledPartCreateWithoutCartInput = {
    id?: string
    installedAt?: Date | string
    quantity?: number
    chargedPrice: number
    part: PartCreateNestedOneWithoutInstallationsInput
  }

  export type InstalledPartUncheckedCreateWithoutCartInput = {
    id?: string
    installedAt?: Date | string
    quantity?: number
    chargedPrice: number
    partId: string
  }

  export type InstalledPartCreateOrConnectWithoutCartInput = {
    where: InstalledPartWhereUniqueInput
    create: XOR<InstalledPartCreateWithoutCartInput, InstalledPartUncheckedCreateWithoutCartInput>
  }

  export type InstalledPartCreateManyCartInputEnvelope = {
    data: InstalledPartCreateManyCartInput | InstalledPartCreateManyCartInput[]
  }

  export type InstalledPartUpsertWithWhereUniqueWithoutCartInput = {
    where: InstalledPartWhereUniqueInput
    update: XOR<InstalledPartUpdateWithoutCartInput, InstalledPartUncheckedUpdateWithoutCartInput>
    create: XOR<InstalledPartCreateWithoutCartInput, InstalledPartUncheckedCreateWithoutCartInput>
  }

  export type InstalledPartUpdateWithWhereUniqueWithoutCartInput = {
    where: InstalledPartWhereUniqueInput
    data: XOR<InstalledPartUpdateWithoutCartInput, InstalledPartUncheckedUpdateWithoutCartInput>
  }

  export type InstalledPartUpdateManyWithWhereWithoutCartInput = {
    where: InstalledPartScalarWhereInput
    data: XOR<InstalledPartUpdateManyMutationInput, InstalledPartUncheckedUpdateManyWithoutCartInput>
  }

  export type InstalledPartScalarWhereInput = {
    AND?: InstalledPartScalarWhereInput | InstalledPartScalarWhereInput[]
    OR?: InstalledPartScalarWhereInput[]
    NOT?: InstalledPartScalarWhereInput | InstalledPartScalarWhereInput[]
    id?: StringFilter<"InstalledPart"> | string
    installedAt?: DateTimeFilter<"InstalledPart"> | Date | string
    quantity?: IntFilter<"InstalledPart"> | number
    chargedPrice?: FloatFilter<"InstalledPart"> | number
    cartId?: StringFilter<"InstalledPart"> | string
    partId?: StringFilter<"InstalledPart"> | string
  }

  export type InstalledPartCreateWithoutPartInput = {
    id?: string
    installedAt?: Date | string
    quantity?: number
    chargedPrice: number
    cart: GolfCartCreateNestedOneWithoutInstalledPartsInput
  }

  export type InstalledPartUncheckedCreateWithoutPartInput = {
    id?: string
    installedAt?: Date | string
    quantity?: number
    chargedPrice: number
    cartId: string
  }

  export type InstalledPartCreateOrConnectWithoutPartInput = {
    where: InstalledPartWhereUniqueInput
    create: XOR<InstalledPartCreateWithoutPartInput, InstalledPartUncheckedCreateWithoutPartInput>
  }

  export type InstalledPartCreateManyPartInputEnvelope = {
    data: InstalledPartCreateManyPartInput | InstalledPartCreateManyPartInput[]
  }

  export type InstalledPartUpsertWithWhereUniqueWithoutPartInput = {
    where: InstalledPartWhereUniqueInput
    update: XOR<InstalledPartUpdateWithoutPartInput, InstalledPartUncheckedUpdateWithoutPartInput>
    create: XOR<InstalledPartCreateWithoutPartInput, InstalledPartUncheckedCreateWithoutPartInput>
  }

  export type InstalledPartUpdateWithWhereUniqueWithoutPartInput = {
    where: InstalledPartWhereUniqueInput
    data: XOR<InstalledPartUpdateWithoutPartInput, InstalledPartUncheckedUpdateWithoutPartInput>
  }

  export type InstalledPartUpdateManyWithWhereWithoutPartInput = {
    where: InstalledPartScalarWhereInput
    data: XOR<InstalledPartUpdateManyMutationInput, InstalledPartUncheckedUpdateManyWithoutPartInput>
  }

  export type GolfCartCreateWithoutInstalledPartsInput = {
    id?: string
    make: string
    model: string
    year: number
    basePrice: number
  }

  export type GolfCartUncheckedCreateWithoutInstalledPartsInput = {
    id?: string
    make: string
    model: string
    year: number
    basePrice: number
  }

  export type GolfCartCreateOrConnectWithoutInstalledPartsInput = {
    where: GolfCartWhereUniqueInput
    create: XOR<GolfCartCreateWithoutInstalledPartsInput, GolfCartUncheckedCreateWithoutInstalledPartsInput>
  }

  export type PartCreateWithoutInstallationsInput = {
    id?: string
    sku: string
    name: string
    category: string
    price: number
  }

  export type PartUncheckedCreateWithoutInstallationsInput = {
    id?: string
    sku: string
    name: string
    category: string
    price: number
  }

  export type PartCreateOrConnectWithoutInstallationsInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutInstallationsInput, PartUncheckedCreateWithoutInstallationsInput>
  }

  export type GolfCartUpsertWithoutInstalledPartsInput = {
    update: XOR<GolfCartUpdateWithoutInstalledPartsInput, GolfCartUncheckedUpdateWithoutInstalledPartsInput>
    create: XOR<GolfCartCreateWithoutInstalledPartsInput, GolfCartUncheckedCreateWithoutInstalledPartsInput>
    where?: GolfCartWhereInput
  }

  export type GolfCartUpdateToOneWithWhereWithoutInstalledPartsInput = {
    where?: GolfCartWhereInput
    data: XOR<GolfCartUpdateWithoutInstalledPartsInput, GolfCartUncheckedUpdateWithoutInstalledPartsInput>
  }

  export type GolfCartUpdateWithoutInstalledPartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
  }

  export type GolfCartUncheckedUpdateWithoutInstalledPartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
  }

  export type PartUpsertWithoutInstallationsInput = {
    update: XOR<PartUpdateWithoutInstallationsInput, PartUncheckedUpdateWithoutInstallationsInput>
    create: XOR<PartCreateWithoutInstallationsInput, PartUncheckedCreateWithoutInstallationsInput>
    where?: PartWhereInput
  }

  export type PartUpdateToOneWithWhereWithoutInstallationsInput = {
    where?: PartWhereInput
    data: XOR<PartUpdateWithoutInstallationsInput, PartUncheckedUpdateWithoutInstallationsInput>
  }

  export type PartUpdateWithoutInstallationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type PartUncheckedUpdateWithoutInstallationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type InstalledPartCreateManyCartInput = {
    id?: string
    installedAt?: Date | string
    quantity?: number
    chargedPrice: number
    partId: string
  }

  export type InstalledPartUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    chargedPrice?: FloatFieldUpdateOperationsInput | number
    part?: PartUpdateOneRequiredWithoutInstallationsNestedInput
  }

  export type InstalledPartUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    chargedPrice?: FloatFieldUpdateOperationsInput | number
    partId?: StringFieldUpdateOperationsInput | string
  }

  export type InstalledPartUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    chargedPrice?: FloatFieldUpdateOperationsInput | number
    partId?: StringFieldUpdateOperationsInput | string
  }

  export type InstalledPartCreateManyPartInput = {
    id?: string
    installedAt?: Date | string
    quantity?: number
    chargedPrice: number
    cartId: string
  }

  export type InstalledPartUpdateWithoutPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    chargedPrice?: FloatFieldUpdateOperationsInput | number
    cart?: GolfCartUpdateOneRequiredWithoutInstalledPartsNestedInput
  }

  export type InstalledPartUncheckedUpdateWithoutPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    chargedPrice?: FloatFieldUpdateOperationsInput | number
    cartId?: StringFieldUpdateOperationsInput | string
  }

  export type InstalledPartUncheckedUpdateManyWithoutPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    chargedPrice?: FloatFieldUpdateOperationsInput | number
    cartId?: StringFieldUpdateOperationsInput | string
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
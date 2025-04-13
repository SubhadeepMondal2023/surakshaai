
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Prescription
 * 
 */
export type Prescription = $Result.DefaultSelection<Prisma.$PrescriptionPayload>
/**
 * Model LabTest
 * 
 */
export type LabTest = $Result.DefaultSelection<Prisma.$LabTestPayload>
/**
 * Model HealthMetric
 * 
 */
export type HealthMetric = $Result.DefaultSelection<Prisma.$HealthMetricPayload>
/**
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  PATIENT: 'PATIENT',
  DOCTOR: 'DOCTOR',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AppointmentStatus: {
  SCHEDULED: 'SCHEDULED',
  CHECKED_IN: 'CHECKED_IN',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
  RESCHEDULED: 'RESCHEDULED',
  WAITING: 'WAITING'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const AppointmentType: {
  IN_PERSON: 'IN_PERSON',
  TELEMEDICINE: 'TELEMEDICINE'
};

export type AppointmentType = (typeof AppointmentType)[keyof typeof AppointmentType]


export const PrescriptionStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

export type PrescriptionStatus = (typeof PrescriptionStatus)[keyof typeof PrescriptionStatus]


export const LabTestStatus: {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
  IN_PROGRESS: 'IN_PROGRESS'
};

export type LabTestStatus = (typeof LabTestStatus)[keyof typeof LabTestStatus]


export const TestPriority: {
  NORMAL: 'NORMAL',
  URGENT: 'URGENT',
  STAT: 'STAT'
};

export type TestPriority = (typeof TestPriority)[keyof typeof TestPriority]


export const MetricType: {
  BLOOD_PRESSURE: 'BLOOD_PRESSURE',
  HEART_RATE: 'HEART_RATE',
  WEIGHT: 'WEIGHT',
  BLOOD_GLUCOSE: 'BLOOD_GLUCOSE',
  TEMPERATURE: 'TEMPERATURE',
  OXYGEN_SATURATION: 'OXYGEN_SATURATION',
  OTHER: 'OTHER'
};

export type MetricType = (typeof MetricType)[keyof typeof MetricType]


export const MessageSender: {
  PATIENT: 'PATIENT',
  AI_DOCTOR: 'AI_DOCTOR'
};

export type MessageSender = (typeof MessageSender)[keyof typeof MessageSender]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type AppointmentType = $Enums.AppointmentType

export const AppointmentType: typeof $Enums.AppointmentType

export type PrescriptionStatus = $Enums.PrescriptionStatus

export const PrescriptionStatus: typeof $Enums.PrescriptionStatus

export type LabTestStatus = $Enums.LabTestStatus

export const LabTestStatus: typeof $Enums.LabTestStatus

export type TestPriority = $Enums.TestPriority

export const TestPriority: typeof $Enums.TestPriority

export type MetricType = $Enums.MetricType

export const MetricType: typeof $Enums.MetricType

export type MessageSender = $Enums.MessageSender

export const MessageSender: typeof $Enums.MessageSender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **Prescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescription.findMany()
    * ```
    */
  get prescription(): Prisma.PrescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labTest`: Exposes CRUD operations for the **LabTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabTests
    * const labTests = await prisma.labTest.findMany()
    * ```
    */
  get labTest(): Prisma.LabTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.healthMetric`: Exposes CRUD operations for the **HealthMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HealthMetrics
    * const healthMetrics = await prisma.healthMetric.findMany()
    * ```
    */
  get healthMetric(): Prisma.HealthMetricDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Patient: 'Patient',
    Doctor: 'Doctor',
    Availability: 'Availability',
    Appointment: 'Appointment',
    Prescription: 'Prescription',
    LabTest: 'LabTest',
    HealthMetric: 'HealthMetric',
    ChatSession: 'ChatSession',
    ChatMessage: 'ChatMessage',
    Review: 'Review'
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
      modelProps: "user" | "patient" | "doctor" | "availability" | "appointment" | "prescription" | "labTest" | "healthMetric" | "chatSession" | "chatMessage" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          createMany: {
            args: Prisma.AvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Prescription: {
        payload: Prisma.$PrescriptionPayload<ExtArgs>
        fields: Prisma.PrescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findMany: {
            args: Prisma.PrescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          create: {
            args: Prisma.PrescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          createMany: {
            args: Prisma.PrescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          delete: {
            args: Prisma.PrescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          update: {
            args: Prisma.PrescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          upsert: {
            args: Prisma.PrescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescription>
          }
          groupBy: {
            args: Prisma.PrescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionCountAggregateOutputType> | number
          }
        }
      }
      LabTest: {
        payload: Prisma.$LabTestPayload<ExtArgs>
        fields: Prisma.LabTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          findFirst: {
            args: Prisma.LabTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          findMany: {
            args: Prisma.LabTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>[]
          }
          create: {
            args: Prisma.LabTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          createMany: {
            args: Prisma.LabTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>[]
          }
          delete: {
            args: Prisma.LabTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          update: {
            args: Prisma.LabTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          deleteMany: {
            args: Prisma.LabTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>[]
          }
          upsert: {
            args: Prisma.LabTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          aggregate: {
            args: Prisma.LabTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabTest>
          }
          groupBy: {
            args: Prisma.LabTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabTestCountArgs<ExtArgs>
            result: $Utils.Optional<LabTestCountAggregateOutputType> | number
          }
        }
      }
      HealthMetric: {
        payload: Prisma.$HealthMetricPayload<ExtArgs>
        fields: Prisma.HealthMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HealthMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HealthMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>
          }
          findFirst: {
            args: Prisma.HealthMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HealthMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>
          }
          findMany: {
            args: Prisma.HealthMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>[]
          }
          create: {
            args: Prisma.HealthMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>
          }
          createMany: {
            args: Prisma.HealthMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HealthMetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>[]
          }
          delete: {
            args: Prisma.HealthMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>
          }
          update: {
            args: Prisma.HealthMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>
          }
          deleteMany: {
            args: Prisma.HealthMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HealthMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HealthMetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>[]
          }
          upsert: {
            args: Prisma.HealthMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>
          }
          aggregate: {
            args: Prisma.HealthMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealthMetric>
          }
          groupBy: {
            args: Prisma.HealthMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<HealthMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.HealthMetricCountArgs<ExtArgs>
            result: $Utils.Optional<HealthMetricCountAggregateOutputType> | number
          }
        }
      }
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    patient?: PatientOmit
    doctor?: DoctorOmit
    availability?: AvailabilityOmit
    appointment?: AppointmentOmit
    prescription?: PrescriptionOmit
    labTest?: LabTestOmit
    healthMetric?: HealthMetricOmit
    chatSession?: ChatSessionOmit
    chatMessage?: ChatMessageOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    appointments: number
    prescriptions: number
    labTests: number
    healthMetrics: number
    chatSessions: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | PatientCountOutputTypeCountAppointmentsArgs
    prescriptions?: boolean | PatientCountOutputTypeCountPrescriptionsArgs
    labTests?: boolean | PatientCountOutputTypeCountLabTestsArgs
    healthMetrics?: boolean | PatientCountOutputTypeCountHealthMetricsArgs
    chatSessions?: boolean | PatientCountOutputTypeCountChatSessionsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountLabTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabTestWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountHealthMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthMetricWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountChatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    appointments: number
    prescriptions: number
    labOrders: number
    availability: number
    reviews: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | DoctorCountOutputTypeCountAppointmentsArgs
    prescriptions?: boolean | DoctorCountOutputTypeCountPrescriptionsArgs
    labOrders?: boolean | DoctorCountOutputTypeCountLabOrdersArgs
    availability?: boolean | DoctorCountOutputTypeCountAvailabilityArgs
    reviews?: boolean | DoctorCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountLabOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabTestWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ChatSessionCountOutputType
   */

  export type ChatSessionCountOutputType = {
    messages: number
  }

  export type ChatSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatSessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSessionCountOutputType
     */
    select?: ChatSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    firstName: number
    lastName: number
    phone: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    patient?: boolean | User$patientArgs<ExtArgs>
    doctor?: boolean | User$doctorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "firstName" | "lastName" | "phone" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | User$patientArgs<ExtArgs>
    doctor?: boolean | User$doctorArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs> | null
      doctor: Prisma.$DoctorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      firstName: string
      lastName: string
      phone: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.UserRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends User$patientArgs<ExtArgs> = {}>(args?: Subset<T, User$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctor<T extends User$doctorArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.patient
   */
  export type User$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * User.doctor
   */
  export type User$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    userId: string | null
    patientId: string | null
    dateOfBirth: Date | null
    address: string | null
    insuranceProvider: string | null
    insuranceNumber: string | null
    emergencyContact: string | null
    emergencyPhone: string | null
    notes: string | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    patientId: string | null
    dateOfBirth: Date | null
    address: string | null
    insuranceProvider: string | null
    insuranceNumber: string | null
    emergencyContact: string | null
    emergencyPhone: string | null
    notes: string | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    userId: number
    patientId: number
    dateOfBirth: number
    address: number
    insuranceProvider: number
    insuranceNumber: number
    emergencyContact: number
    emergencyPhone: number
    notes: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    userId?: true
    patientId?: true
    dateOfBirth?: true
    address?: true
    insuranceProvider?: true
    insuranceNumber?: true
    emergencyContact?: true
    emergencyPhone?: true
    notes?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    userId?: true
    patientId?: true
    dateOfBirth?: true
    address?: true
    insuranceProvider?: true
    insuranceNumber?: true
    emergencyContact?: true
    emergencyPhone?: true
    notes?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    userId?: true
    patientId?: true
    dateOfBirth?: true
    address?: true
    insuranceProvider?: true
    insuranceNumber?: true
    emergencyContact?: true
    emergencyPhone?: true
    notes?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    userId: string
    patientId: string
    dateOfBirth: Date | null
    address: string | null
    insuranceProvider: string | null
    insuranceNumber: string | null
    emergencyContact: string | null
    emergencyPhone: string | null
    notes: string | null
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    patientId?: boolean
    dateOfBirth?: boolean
    address?: boolean
    insuranceProvider?: boolean
    insuranceNumber?: boolean
    emergencyContact?: boolean
    emergencyPhone?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    prescriptions?: boolean | Patient$prescriptionsArgs<ExtArgs>
    labTests?: boolean | Patient$labTestsArgs<ExtArgs>
    healthMetrics?: boolean | Patient$healthMetricsArgs<ExtArgs>
    chatSessions?: boolean | Patient$chatSessionsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    patientId?: boolean
    dateOfBirth?: boolean
    address?: boolean
    insuranceProvider?: boolean
    insuranceNumber?: boolean
    emergencyContact?: boolean
    emergencyPhone?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    patientId?: boolean
    dateOfBirth?: boolean
    address?: boolean
    insuranceProvider?: boolean
    insuranceNumber?: boolean
    emergencyContact?: boolean
    emergencyPhone?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    userId?: boolean
    patientId?: boolean
    dateOfBirth?: boolean
    address?: boolean
    insuranceProvider?: boolean
    insuranceNumber?: boolean
    emergencyContact?: boolean
    emergencyPhone?: boolean
    notes?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "patientId" | "dateOfBirth" | "address" | "insuranceProvider" | "insuranceNumber" | "emergencyContact" | "emergencyPhone" | "notes", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    prescriptions?: boolean | Patient$prescriptionsArgs<ExtArgs>
    labTests?: boolean | Patient$labTestsArgs<ExtArgs>
    healthMetrics?: boolean | Patient$healthMetricsArgs<ExtArgs>
    chatSessions?: boolean | Patient$chatSessionsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
      labTests: Prisma.$LabTestPayload<ExtArgs>[]
      healthMetrics: Prisma.$HealthMetricPayload<ExtArgs>[]
      chatSessions: Prisma.$ChatSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      patientId: string
      dateOfBirth: Date | null
      address: string | null
      insuranceProvider: string | null
      insuranceNumber: string | null
      emergencyContact: string | null
      emergencyPhone: string | null
      notes: string | null
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends Patient$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptions<T extends Patient$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labTests<T extends Patient$labTestsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$labTestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    healthMetrics<T extends Patient$healthMetricsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$healthMetricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatSessions<T extends Patient$chatSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$chatSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly userId: FieldRef<"Patient", 'String'>
    readonly patientId: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly insuranceProvider: FieldRef<"Patient", 'String'>
    readonly insuranceNumber: FieldRef<"Patient", 'String'>
    readonly emergencyContact: FieldRef<"Patient", 'String'>
    readonly emergencyPhone: FieldRef<"Patient", 'String'>
    readonly notes: FieldRef<"Patient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.appointments
   */
  export type Patient$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Patient.prescriptions
   */
  export type Patient$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Patient.labTests
   */
  export type Patient$labTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    where?: LabTestWhereInput
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    cursor?: LabTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabTestScalarFieldEnum | LabTestScalarFieldEnum[]
  }

  /**
   * Patient.healthMetrics
   */
  export type Patient$healthMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    where?: HealthMetricWhereInput
    orderBy?: HealthMetricOrderByWithRelationInput | HealthMetricOrderByWithRelationInput[]
    cursor?: HealthMetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HealthMetricScalarFieldEnum | HealthMetricScalarFieldEnum[]
  }

  /**
   * Patient.chatSessions
   */
  export type Patient$chatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    consultationFee: Decimal | null
    yearsExperience: number | null
    rating: number | null
    reviewCount: number | null
  }

  export type DoctorSumAggregateOutputType = {
    consultationFee: Decimal | null
    yearsExperience: number | null
    rating: number | null
    reviewCount: number | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    doctorId: string | null
    specialization: string | null
    qualifications: string | null
    hospital: string | null
    clinic: string | null
    about: string | null
    consultationFee: Decimal | null
    yearsExperience: number | null
    verified: boolean | null
    rating: number | null
    reviewCount: number | null
    calendarId: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    doctorId: string | null
    specialization: string | null
    qualifications: string | null
    hospital: string | null
    clinic: string | null
    about: string | null
    consultationFee: Decimal | null
    yearsExperience: number | null
    verified: boolean | null
    rating: number | null
    reviewCount: number | null
    calendarId: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    userId: number
    doctorId: number
    specialization: number
    qualifications: number
    hospital: number
    clinic: number
    about: number
    consultationFee: number
    yearsExperience: number
    verified: number
    rating: number
    reviewCount: number
    calendarId: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    consultationFee?: true
    yearsExperience?: true
    rating?: true
    reviewCount?: true
  }

  export type DoctorSumAggregateInputType = {
    consultationFee?: true
    yearsExperience?: true
    rating?: true
    reviewCount?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    userId?: true
    doctorId?: true
    specialization?: true
    qualifications?: true
    hospital?: true
    clinic?: true
    about?: true
    consultationFee?: true
    yearsExperience?: true
    verified?: true
    rating?: true
    reviewCount?: true
    calendarId?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    userId?: true
    doctorId?: true
    specialization?: true
    qualifications?: true
    hospital?: true
    clinic?: true
    about?: true
    consultationFee?: true
    yearsExperience?: true
    verified?: true
    rating?: true
    reviewCount?: true
    calendarId?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    userId?: true
    doctorId?: true
    specialization?: true
    qualifications?: true
    hospital?: true
    clinic?: true
    about?: true
    consultationFee?: true
    yearsExperience?: true
    verified?: true
    rating?: true
    reviewCount?: true
    calendarId?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: string
    userId: string
    doctorId: string
    specialization: string
    qualifications: string | null
    hospital: string | null
    clinic: string | null
    about: string | null
    consultationFee: Decimal | null
    yearsExperience: number | null
    verified: boolean
    rating: number | null
    reviewCount: number
    calendarId: string | null
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    doctorId?: boolean
    specialization?: boolean
    qualifications?: boolean
    hospital?: boolean
    clinic?: boolean
    about?: boolean
    consultationFee?: boolean
    yearsExperience?: boolean
    verified?: boolean
    rating?: boolean
    reviewCount?: boolean
    calendarId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    prescriptions?: boolean | Doctor$prescriptionsArgs<ExtArgs>
    labOrders?: boolean | Doctor$labOrdersArgs<ExtArgs>
    availability?: boolean | Doctor$availabilityArgs<ExtArgs>
    reviews?: boolean | Doctor$reviewsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    doctorId?: boolean
    specialization?: boolean
    qualifications?: boolean
    hospital?: boolean
    clinic?: boolean
    about?: boolean
    consultationFee?: boolean
    yearsExperience?: boolean
    verified?: boolean
    rating?: boolean
    reviewCount?: boolean
    calendarId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    doctorId?: boolean
    specialization?: boolean
    qualifications?: boolean
    hospital?: boolean
    clinic?: boolean
    about?: boolean
    consultationFee?: boolean
    yearsExperience?: boolean
    verified?: boolean
    rating?: boolean
    reviewCount?: boolean
    calendarId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    userId?: boolean
    doctorId?: boolean
    specialization?: boolean
    qualifications?: boolean
    hospital?: boolean
    clinic?: boolean
    about?: boolean
    consultationFee?: boolean
    yearsExperience?: boolean
    verified?: boolean
    rating?: boolean
    reviewCount?: boolean
    calendarId?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "doctorId" | "specialization" | "qualifications" | "hospital" | "clinic" | "about" | "consultationFee" | "yearsExperience" | "verified" | "rating" | "reviewCount" | "calendarId", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    prescriptions?: boolean | Doctor$prescriptionsArgs<ExtArgs>
    labOrders?: boolean | Doctor$labOrdersArgs<ExtArgs>
    availability?: boolean | Doctor$availabilityArgs<ExtArgs>
    reviews?: boolean | Doctor$reviewsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
      labOrders: Prisma.$LabTestPayload<ExtArgs>[]
      availability: Prisma.$AvailabilityPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      doctorId: string
      specialization: string
      qualifications: string | null
      hospital: string | null
      clinic: string | null
      about: string | null
      consultationFee: Prisma.Decimal | null
      yearsExperience: number | null
      verified: boolean
      rating: number | null
      reviewCount: number
      calendarId: string | null
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends Doctor$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptions<T extends Doctor$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labOrders<T extends Doctor$labOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$labOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availability<T extends Doctor$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Doctor$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'String'>
    readonly userId: FieldRef<"Doctor", 'String'>
    readonly doctorId: FieldRef<"Doctor", 'String'>
    readonly specialization: FieldRef<"Doctor", 'String'>
    readonly qualifications: FieldRef<"Doctor", 'String'>
    readonly hospital: FieldRef<"Doctor", 'String'>
    readonly clinic: FieldRef<"Doctor", 'String'>
    readonly about: FieldRef<"Doctor", 'String'>
    readonly consultationFee: FieldRef<"Doctor", 'Decimal'>
    readonly yearsExperience: FieldRef<"Doctor", 'Int'>
    readonly verified: FieldRef<"Doctor", 'Boolean'>
    readonly rating: FieldRef<"Doctor", 'Float'>
    readonly reviewCount: FieldRef<"Doctor", 'Int'>
    readonly calendarId: FieldRef<"Doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.appointments
   */
  export type Doctor$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Doctor.prescriptions
   */
  export type Doctor$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Doctor.labOrders
   */
  export type Doctor$labOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    where?: LabTestWhereInput
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    cursor?: LabTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabTestScalarFieldEnum | LabTestScalarFieldEnum[]
  }

  /**
   * Doctor.availability
   */
  export type Doctor$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Doctor.reviews
   */
  export type Doctor$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type AvailabilitySumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    available: boolean | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    available: boolean | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    doctorId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    available: number
    _all: number
  }


  export type AvailabilityAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type AvailabilitySumAggregateInputType = {
    dayOfWeek?: true
  }

  export type AvailabilityMinAggregateInputType = {
    id?: true
    doctorId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    available?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    doctorId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    available?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    doctorId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    available?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _avg?: AvailabilityAvgAggregateInputType
    _sum?: AvailabilitySumAggregateInputType
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: string
    doctorId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    available: boolean
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    available?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    available?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    available?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectScalar = {
    id?: boolean
    doctorId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    available?: boolean
  }

  export type AvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "dayOfWeek" | "startTime" | "endTime" | "available", ExtArgs["result"]["availability"]>
  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      dayOfWeek: number
      startTime: string
      endTime: string
      available: boolean
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }

  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityFindUniqueArgs>(args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityFindFirstArgs>(args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityFindManyArgs>(args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
     */
    create<T extends AvailabilityCreateArgs>(args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Availabilities.
     * @param {AvailabilityCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityCreateManyArgs>(args?: SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Availabilities and returns the data saved in the database.
     * @param {AvailabilityCreateManyAndReturnArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityDeleteArgs>(args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityUpdateArgs>(args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityDeleteManyArgs>(args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityUpdateManyArgs>(args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities and returns the data updated in the database.
     * @param {AvailabilityUpdateManyAndReturnArgs} args - Arguments to update many Availabilities.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityUpsertArgs>(args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Availability model
   */
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'String'>
    readonly doctorId: FieldRef<"Availability", 'String'>
    readonly dayOfWeek: FieldRef<"Availability", 'Int'>
    readonly startTime: FieldRef<"Availability", 'String'>
    readonly endTime: FieldRef<"Availability", 'String'>
    readonly available: FieldRef<"Availability", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }

  /**
   * Availability createMany
   */
  export type AvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Availability createManyAndReturn
   */
  export type AvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
  }

  /**
   * Availability updateManyAndReturn
   */
  export type AvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }

  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to delete.
     */
    limit?: number
  }

  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    duration: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    duration: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    status: $Enums.AppointmentStatus | null
    type: $Enums.AppointmentType | null
    reason: string | null
    notes: string | null
    location: string | null
    duration: number | null
    calendarEventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    status: $Enums.AppointmentStatus | null
    type: $Enums.AppointmentType | null
    reason: string | null
    notes: string | null
    location: string | null
    duration: number | null
    calendarEventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    date: number
    startTime: number
    endTime: number
    status: number
    type: number
    reason: number
    notes: number
    location: number
    duration: number
    calendarEventId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    duration?: true
  }

  export type AppointmentSumAggregateInputType = {
    duration?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    type?: true
    reason?: true
    notes?: true
    location?: true
    duration?: true
    calendarEventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    type?: true
    reason?: true
    notes?: true
    location?: true
    duration?: true
    calendarEventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    type?: true
    reason?: true
    notes?: true
    location?: true
    duration?: true
    calendarEventId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    patientId: string
    doctorId: string
    date: Date
    startTime: string
    endTime: string
    status: $Enums.AppointmentStatus
    type: $Enums.AppointmentType
    reason: string | null
    notes: string | null
    location: string | null
    duration: number
    calendarEventId: string | null
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    type?: boolean
    reason?: boolean
    notes?: boolean
    location?: boolean
    duration?: boolean
    calendarEventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    type?: boolean
    reason?: boolean
    notes?: boolean
    location?: boolean
    duration?: boolean
    calendarEventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    type?: boolean
    reason?: boolean
    notes?: boolean
    location?: boolean
    duration?: boolean
    calendarEventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    type?: boolean
    reason?: boolean
    notes?: boolean
    location?: boolean
    duration?: boolean
    calendarEventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "date" | "startTime" | "endTime" | "status" | "type" | "reason" | "notes" | "location" | "duration" | "calendarEventId" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      doctorId: string
      date: Date
      startTime: string
      endTime: string
      status: $Enums.AppointmentStatus
      type: $Enums.AppointmentType
      reason: string | null
      notes: string | null
      location: string | null
      duration: number
      calendarEventId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly patientId: FieldRef<"Appointment", 'String'>
    readonly doctorId: FieldRef<"Appointment", 'String'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly startTime: FieldRef<"Appointment", 'String'>
    readonly endTime: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly type: FieldRef<"Appointment", 'AppointmentType'>
    readonly reason: FieldRef<"Appointment", 'String'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly location: FieldRef<"Appointment", 'String'>
    readonly duration: FieldRef<"Appointment", 'Int'>
    readonly calendarEventId: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Prescription
   */

  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null
    _avg: PrescriptionAvgAggregateOutputType | null
    _sum: PrescriptionSumAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  export type PrescriptionAvgAggregateOutputType = {
    refills: number | null
    refillsRemaining: number | null
  }

  export type PrescriptionSumAggregateOutputType = {
    refills: number | null
    refillsRemaining: number | null
  }

  export type PrescriptionMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    medicationName: string | null
    dosage: string | null
    frequency: string | null
    duration: string | null
    instructions: string | null
    refills: number | null
    refillsRemaining: number | null
    pharmacy: string | null
    status: $Enums.PrescriptionStatus | null
    prescribedOn: Date | null
    expiresOn: Date | null
    updatedAt: Date | null
  }

  export type PrescriptionMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    medicationName: string | null
    dosage: string | null
    frequency: string | null
    duration: string | null
    instructions: string | null
    refills: number | null
    refillsRemaining: number | null
    pharmacy: string | null
    status: $Enums.PrescriptionStatus | null
    prescribedOn: Date | null
    expiresOn: Date | null
    updatedAt: Date | null
  }

  export type PrescriptionCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    medicationName: number
    dosage: number
    frequency: number
    duration: number
    instructions: number
    refills: number
    refillsRemaining: number
    pharmacy: number
    status: number
    prescribedOn: number
    expiresOn: number
    updatedAt: number
    _all: number
  }


  export type PrescriptionAvgAggregateInputType = {
    refills?: true
    refillsRemaining?: true
  }

  export type PrescriptionSumAggregateInputType = {
    refills?: true
    refillsRemaining?: true
  }

  export type PrescriptionMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    medicationName?: true
    dosage?: true
    frequency?: true
    duration?: true
    instructions?: true
    refills?: true
    refillsRemaining?: true
    pharmacy?: true
    status?: true
    prescribedOn?: true
    expiresOn?: true
    updatedAt?: true
  }

  export type PrescriptionMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    medicationName?: true
    dosage?: true
    frequency?: true
    duration?: true
    instructions?: true
    refills?: true
    refillsRemaining?: true
    pharmacy?: true
    status?: true
    prescribedOn?: true
    expiresOn?: true
    updatedAt?: true
  }

  export type PrescriptionCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    medicationName?: true
    dosage?: true
    frequency?: true
    duration?: true
    instructions?: true
    refills?: true
    refillsRemaining?: true
    pharmacy?: true
    status?: true
    prescribedOn?: true
    expiresOn?: true
    updatedAt?: true
    _all?: true
  }

  export type PrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescription to aggregate.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prescriptions
    **/
    _count?: true | PrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrescriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrescriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMaxAggregateInputType
  }

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>
  }




  export type PrescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithAggregationInput | PrescriptionOrderByWithAggregationInput[]
    by: PrescriptionScalarFieldEnum[] | PrescriptionScalarFieldEnum
    having?: PrescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionCountAggregateInputType | true
    _avg?: PrescriptionAvgAggregateInputType
    _sum?: PrescriptionSumAggregateInputType
    _min?: PrescriptionMinAggregateInputType
    _max?: PrescriptionMaxAggregateInputType
  }

  export type PrescriptionGroupByOutputType = {
    id: string
    patientId: string
    doctorId: string
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions: string | null
    refills: number
    refillsRemaining: number
    pharmacy: string | null
    status: $Enums.PrescriptionStatus
    prescribedOn: Date
    expiresOn: Date | null
    updatedAt: Date
    _count: PrescriptionCountAggregateOutputType | null
    _avg: PrescriptionAvgAggregateOutputType | null
    _sum: PrescriptionSumAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    medicationName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
    refills?: boolean
    refillsRemaining?: boolean
    pharmacy?: boolean
    status?: boolean
    prescribedOn?: boolean
    expiresOn?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    medicationName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
    refills?: boolean
    refillsRemaining?: boolean
    pharmacy?: boolean
    status?: boolean
    prescribedOn?: boolean
    expiresOn?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    medicationName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
    refills?: boolean
    refillsRemaining?: boolean
    pharmacy?: boolean
    status?: boolean
    prescribedOn?: boolean
    expiresOn?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    medicationName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
    refills?: boolean
    refillsRemaining?: boolean
    pharmacy?: boolean
    status?: boolean
    prescribedOn?: boolean
    expiresOn?: boolean
    updatedAt?: boolean
  }

  export type PrescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "medicationName" | "dosage" | "frequency" | "duration" | "instructions" | "refills" | "refillsRemaining" | "pharmacy" | "status" | "prescribedOn" | "expiresOn" | "updatedAt", ExtArgs["result"]["prescription"]>
  export type PrescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $PrescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prescription"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      doctorId: string
      medicationName: string
      dosage: string
      frequency: string
      duration: string
      instructions: string | null
      refills: number
      refillsRemaining: number
      pharmacy: string | null
      status: $Enums.PrescriptionStatus
      prescribedOn: Date
      expiresOn: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["prescription"]>
    composites: {}
  }

  type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionPayload, S>

  type PrescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionCountAggregateInputType | true
    }

  export interface PrescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prescription'], meta: { name: 'Prescription' } }
    /**
     * Find zero or one Prescription that matches the filter.
     * @param {PrescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionFindUniqueArgs>(args: SelectSubset<T, PrescriptionFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionFindFirstArgs>(args?: SelectSubset<T, PrescriptionFindFirstArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrescriptionFindManyArgs>(args?: SelectSubset<T, PrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prescription.
     * @param {PrescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     * 
     */
    create<T extends PrescriptionCreateArgs>(args: SelectSubset<T, PrescriptionCreateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prescriptions.
     * @param {PrescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionCreateManyArgs>(args?: SelectSubset<T, PrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prescriptions and returns the data saved in the database.
     * @param {PrescriptionCreateManyAndReturnArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PrescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prescription.
     * @param {PrescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionDeleteArgs>(args: SelectSubset<T, PrescriptionDeleteArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prescription.
     * @param {PrescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionUpdateArgs>(args: SelectSubset<T, PrescriptionUpdateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prescriptions.
     * @param {PrescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionDeleteManyArgs>(args?: SelectSubset<T, PrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionUpdateManyArgs>(args: SelectSubset<T, PrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions and returns the data updated in the database.
     * @param {PrescriptionUpdateManyAndReturnArgs} args - Arguments to update many Prescriptions.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PrescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prescription.
     * @param {PrescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionUpsertArgs>(args: SelectSubset<T, PrescriptionUpsertArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionCountArgs>(
      args?: Subset<T, PrescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionAggregateArgs>(args: Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prescription model
   */
  readonly fields: PrescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Prescription model
   */
  interface PrescriptionFieldRefs {
    readonly id: FieldRef<"Prescription", 'String'>
    readonly patientId: FieldRef<"Prescription", 'String'>
    readonly doctorId: FieldRef<"Prescription", 'String'>
    readonly medicationName: FieldRef<"Prescription", 'String'>
    readonly dosage: FieldRef<"Prescription", 'String'>
    readonly frequency: FieldRef<"Prescription", 'String'>
    readonly duration: FieldRef<"Prescription", 'String'>
    readonly instructions: FieldRef<"Prescription", 'String'>
    readonly refills: FieldRef<"Prescription", 'Int'>
    readonly refillsRemaining: FieldRef<"Prescription", 'Int'>
    readonly pharmacy: FieldRef<"Prescription", 'String'>
    readonly status: FieldRef<"Prescription", 'PrescriptionStatus'>
    readonly prescribedOn: FieldRef<"Prescription", 'DateTime'>
    readonly expiresOn: FieldRef<"Prescription", 'DateTime'>
    readonly updatedAt: FieldRef<"Prescription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prescription findUnique
   */
  export type PrescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findUniqueOrThrow
   */
  export type PrescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findFirst
   */
  export type PrescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findFirstOrThrow
   */
  export type PrescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findMany
   */
  export type PrescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescriptions to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription create
   */
  export type PrescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prescription.
     */
    data: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
  }

  /**
   * Prescription createMany
   */
  export type PrescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prescription createManyAndReturn
   */
  export type PrescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription update
   */
  export type PrescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prescription.
     */
    data: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
    /**
     * Choose, which Prescription to update.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription updateMany
   */
  export type PrescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
  }

  /**
   * Prescription updateManyAndReturn
   */
  export type PrescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription upsert
   */
  export type PrescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prescription to update in case it exists.
     */
    where: PrescriptionWhereUniqueInput
    /**
     * In case the Prescription found by the `where` argument doesn't exist, create a new Prescription with this data.
     */
    create: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
    /**
     * In case the Prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
  }

  /**
   * Prescription delete
   */
  export type PrescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter which Prescription to delete.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription deleteMany
   */
  export type PrescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescriptions to delete
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to delete.
     */
    limit?: number
  }

  /**
   * Prescription without action
   */
  export type PrescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
  }


  /**
   * Model LabTest
   */

  export type AggregateLabTest = {
    _count: LabTestCountAggregateOutputType | null
    _min: LabTestMinAggregateOutputType | null
    _max: LabTestMaxAggregateOutputType | null
  }

  export type LabTestMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    orderedById: string | null
    testName: string | null
    testCode: string | null
    status: $Enums.LabTestStatus | null
    scheduledDate: Date | null
    completedDate: Date | null
    results: string | null
    notes: string | null
    priority: $Enums.TestPriority | null
    fasting: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LabTestMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    orderedById: string | null
    testName: string | null
    testCode: string | null
    status: $Enums.LabTestStatus | null
    scheduledDate: Date | null
    completedDate: Date | null
    results: string | null
    notes: string | null
    priority: $Enums.TestPriority | null
    fasting: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LabTestCountAggregateOutputType = {
    id: number
    patientId: number
    orderedById: number
    testName: number
    testCode: number
    status: number
    scheduledDate: number
    completedDate: number
    results: number
    notes: number
    priority: number
    fasting: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LabTestMinAggregateInputType = {
    id?: true
    patientId?: true
    orderedById?: true
    testName?: true
    testCode?: true
    status?: true
    scheduledDate?: true
    completedDate?: true
    results?: true
    notes?: true
    priority?: true
    fasting?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LabTestMaxAggregateInputType = {
    id?: true
    patientId?: true
    orderedById?: true
    testName?: true
    testCode?: true
    status?: true
    scheduledDate?: true
    completedDate?: true
    results?: true
    notes?: true
    priority?: true
    fasting?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LabTestCountAggregateInputType = {
    id?: true
    patientId?: true
    orderedById?: true
    testName?: true
    testCode?: true
    status?: true
    scheduledDate?: true
    completedDate?: true
    results?: true
    notes?: true
    priority?: true
    fasting?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LabTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabTest to aggregate.
     */
    where?: LabTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabTests to fetch.
     */
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabTests
    **/
    _count?: true | LabTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabTestMaxAggregateInputType
  }

  export type GetLabTestAggregateType<T extends LabTestAggregateArgs> = {
        [P in keyof T & keyof AggregateLabTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabTest[P]>
      : GetScalarType<T[P], AggregateLabTest[P]>
  }




  export type LabTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabTestWhereInput
    orderBy?: LabTestOrderByWithAggregationInput | LabTestOrderByWithAggregationInput[]
    by: LabTestScalarFieldEnum[] | LabTestScalarFieldEnum
    having?: LabTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabTestCountAggregateInputType | true
    _min?: LabTestMinAggregateInputType
    _max?: LabTestMaxAggregateInputType
  }

  export type LabTestGroupByOutputType = {
    id: string
    patientId: string
    orderedById: string
    testName: string
    testCode: string | null
    status: $Enums.LabTestStatus
    scheduledDate: Date | null
    completedDate: Date | null
    results: string | null
    notes: string | null
    priority: $Enums.TestPriority
    fasting: boolean
    createdAt: Date
    updatedAt: Date
    _count: LabTestCountAggregateOutputType | null
    _min: LabTestMinAggregateOutputType | null
    _max: LabTestMaxAggregateOutputType | null
  }

  type GetLabTestGroupByPayload<T extends LabTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabTestGroupByOutputType[P]>
            : GetScalarType<T[P], LabTestGroupByOutputType[P]>
        }
      >
    >


  export type LabTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    orderedById?: boolean
    testName?: boolean
    testCode?: boolean
    status?: boolean
    scheduledDate?: boolean
    completedDate?: boolean
    results?: boolean
    notes?: boolean
    priority?: boolean
    fasting?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    orderedBy?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labTest"]>

  export type LabTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    orderedById?: boolean
    testName?: boolean
    testCode?: boolean
    status?: boolean
    scheduledDate?: boolean
    completedDate?: boolean
    results?: boolean
    notes?: boolean
    priority?: boolean
    fasting?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    orderedBy?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labTest"]>

  export type LabTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    orderedById?: boolean
    testName?: boolean
    testCode?: boolean
    status?: boolean
    scheduledDate?: boolean
    completedDate?: boolean
    results?: boolean
    notes?: boolean
    priority?: boolean
    fasting?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    orderedBy?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labTest"]>

  export type LabTestSelectScalar = {
    id?: boolean
    patientId?: boolean
    orderedById?: boolean
    testName?: boolean
    testCode?: boolean
    status?: boolean
    scheduledDate?: boolean
    completedDate?: boolean
    results?: boolean
    notes?: boolean
    priority?: boolean
    fasting?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LabTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "orderedById" | "testName" | "testCode" | "status" | "scheduledDate" | "completedDate" | "results" | "notes" | "priority" | "fasting" | "createdAt" | "updatedAt", ExtArgs["result"]["labTest"]>
  export type LabTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    orderedBy?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type LabTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    orderedBy?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type LabTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    orderedBy?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $LabTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabTest"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      orderedBy: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      orderedById: string
      testName: string
      testCode: string | null
      status: $Enums.LabTestStatus
      scheduledDate: Date | null
      completedDate: Date | null
      results: string | null
      notes: string | null
      priority: $Enums.TestPriority
      fasting: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["labTest"]>
    composites: {}
  }

  type LabTestGetPayload<S extends boolean | null | undefined | LabTestDefaultArgs> = $Result.GetResult<Prisma.$LabTestPayload, S>

  type LabTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabTestCountAggregateInputType | true
    }

  export interface LabTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabTest'], meta: { name: 'LabTest' } }
    /**
     * Find zero or one LabTest that matches the filter.
     * @param {LabTestFindUniqueArgs} args - Arguments to find a LabTest
     * @example
     * // Get one LabTest
     * const labTest = await prisma.labTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabTestFindUniqueArgs>(args: SelectSubset<T, LabTestFindUniqueArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabTestFindUniqueOrThrowArgs} args - Arguments to find a LabTest
     * @example
     * // Get one LabTest
     * const labTest = await prisma.labTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabTestFindUniqueOrThrowArgs>(args: SelectSubset<T, LabTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestFindFirstArgs} args - Arguments to find a LabTest
     * @example
     * // Get one LabTest
     * const labTest = await prisma.labTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabTestFindFirstArgs>(args?: SelectSubset<T, LabTestFindFirstArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestFindFirstOrThrowArgs} args - Arguments to find a LabTest
     * @example
     * // Get one LabTest
     * const labTest = await prisma.labTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabTestFindFirstOrThrowArgs>(args?: SelectSubset<T, LabTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabTests
     * const labTests = await prisma.labTest.findMany()
     * 
     * // Get first 10 LabTests
     * const labTests = await prisma.labTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labTestWithIdOnly = await prisma.labTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabTestFindManyArgs>(args?: SelectSubset<T, LabTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabTest.
     * @param {LabTestCreateArgs} args - Arguments to create a LabTest.
     * @example
     * // Create one LabTest
     * const LabTest = await prisma.labTest.create({
     *   data: {
     *     // ... data to create a LabTest
     *   }
     * })
     * 
     */
    create<T extends LabTestCreateArgs>(args: SelectSubset<T, LabTestCreateArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabTests.
     * @param {LabTestCreateManyArgs} args - Arguments to create many LabTests.
     * @example
     * // Create many LabTests
     * const labTest = await prisma.labTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabTestCreateManyArgs>(args?: SelectSubset<T, LabTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabTests and returns the data saved in the database.
     * @param {LabTestCreateManyAndReturnArgs} args - Arguments to create many LabTests.
     * @example
     * // Create many LabTests
     * const labTest = await prisma.labTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabTests and only return the `id`
     * const labTestWithIdOnly = await prisma.labTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabTestCreateManyAndReturnArgs>(args?: SelectSubset<T, LabTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabTest.
     * @param {LabTestDeleteArgs} args - Arguments to delete one LabTest.
     * @example
     * // Delete one LabTest
     * const LabTest = await prisma.labTest.delete({
     *   where: {
     *     // ... filter to delete one LabTest
     *   }
     * })
     * 
     */
    delete<T extends LabTestDeleteArgs>(args: SelectSubset<T, LabTestDeleteArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabTest.
     * @param {LabTestUpdateArgs} args - Arguments to update one LabTest.
     * @example
     * // Update one LabTest
     * const labTest = await prisma.labTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabTestUpdateArgs>(args: SelectSubset<T, LabTestUpdateArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabTests.
     * @param {LabTestDeleteManyArgs} args - Arguments to filter LabTests to delete.
     * @example
     * // Delete a few LabTests
     * const { count } = await prisma.labTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabTestDeleteManyArgs>(args?: SelectSubset<T, LabTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabTests
     * const labTest = await prisma.labTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabTestUpdateManyArgs>(args: SelectSubset<T, LabTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabTests and returns the data updated in the database.
     * @param {LabTestUpdateManyAndReturnArgs} args - Arguments to update many LabTests.
     * @example
     * // Update many LabTests
     * const labTest = await prisma.labTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabTests and only return the `id`
     * const labTestWithIdOnly = await prisma.labTest.updateManyAndReturn({
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
    updateManyAndReturn<T extends LabTestUpdateManyAndReturnArgs>(args: SelectSubset<T, LabTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabTest.
     * @param {LabTestUpsertArgs} args - Arguments to update or create a LabTest.
     * @example
     * // Update or create a LabTest
     * const labTest = await prisma.labTest.upsert({
     *   create: {
     *     // ... data to create a LabTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabTest we want to update
     *   }
     * })
     */
    upsert<T extends LabTestUpsertArgs>(args: SelectSubset<T, LabTestUpsertArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestCountArgs} args - Arguments to filter LabTests to count.
     * @example
     * // Count the number of LabTests
     * const count = await prisma.labTest.count({
     *   where: {
     *     // ... the filter for the LabTests we want to count
     *   }
     * })
    **/
    count<T extends LabTestCountArgs>(
      args?: Subset<T, LabTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabTestAggregateArgs>(args: Subset<T, LabTestAggregateArgs>): Prisma.PrismaPromise<GetLabTestAggregateType<T>>

    /**
     * Group by LabTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestGroupByArgs} args - Group by arguments.
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
      T extends LabTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabTestGroupByArgs['orderBy'] }
        : { orderBy?: LabTestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabTest model
   */
  readonly fields: LabTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderedBy<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LabTest model
   */
  interface LabTestFieldRefs {
    readonly id: FieldRef<"LabTest", 'String'>
    readonly patientId: FieldRef<"LabTest", 'String'>
    readonly orderedById: FieldRef<"LabTest", 'String'>
    readonly testName: FieldRef<"LabTest", 'String'>
    readonly testCode: FieldRef<"LabTest", 'String'>
    readonly status: FieldRef<"LabTest", 'LabTestStatus'>
    readonly scheduledDate: FieldRef<"LabTest", 'DateTime'>
    readonly completedDate: FieldRef<"LabTest", 'DateTime'>
    readonly results: FieldRef<"LabTest", 'String'>
    readonly notes: FieldRef<"LabTest", 'String'>
    readonly priority: FieldRef<"LabTest", 'TestPriority'>
    readonly fasting: FieldRef<"LabTest", 'Boolean'>
    readonly createdAt: FieldRef<"LabTest", 'DateTime'>
    readonly updatedAt: FieldRef<"LabTest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LabTest findUnique
   */
  export type LabTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTest to fetch.
     */
    where: LabTestWhereUniqueInput
  }

  /**
   * LabTest findUniqueOrThrow
   */
  export type LabTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTest to fetch.
     */
    where: LabTestWhereUniqueInput
  }

  /**
   * LabTest findFirst
   */
  export type LabTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTest to fetch.
     */
    where?: LabTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabTests to fetch.
     */
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabTests.
     */
    cursor?: LabTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabTests.
     */
    distinct?: LabTestScalarFieldEnum | LabTestScalarFieldEnum[]
  }

  /**
   * LabTest findFirstOrThrow
   */
  export type LabTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTest to fetch.
     */
    where?: LabTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabTests to fetch.
     */
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabTests.
     */
    cursor?: LabTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabTests.
     */
    distinct?: LabTestScalarFieldEnum | LabTestScalarFieldEnum[]
  }

  /**
   * LabTest findMany
   */
  export type LabTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTests to fetch.
     */
    where?: LabTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabTests to fetch.
     */
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabTests.
     */
    cursor?: LabTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabTests.
     */
    skip?: number
    distinct?: LabTestScalarFieldEnum | LabTestScalarFieldEnum[]
  }

  /**
   * LabTest create
   */
  export type LabTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * The data needed to create a LabTest.
     */
    data: XOR<LabTestCreateInput, LabTestUncheckedCreateInput>
  }

  /**
   * LabTest createMany
   */
  export type LabTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabTests.
     */
    data: LabTestCreateManyInput | LabTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabTest createManyAndReturn
   */
  export type LabTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * The data used to create many LabTests.
     */
    data: LabTestCreateManyInput | LabTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabTest update
   */
  export type LabTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * The data needed to update a LabTest.
     */
    data: XOR<LabTestUpdateInput, LabTestUncheckedUpdateInput>
    /**
     * Choose, which LabTest to update.
     */
    where: LabTestWhereUniqueInput
  }

  /**
   * LabTest updateMany
   */
  export type LabTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabTests.
     */
    data: XOR<LabTestUpdateManyMutationInput, LabTestUncheckedUpdateManyInput>
    /**
     * Filter which LabTests to update
     */
    where?: LabTestWhereInput
    /**
     * Limit how many LabTests to update.
     */
    limit?: number
  }

  /**
   * LabTest updateManyAndReturn
   */
  export type LabTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * The data used to update LabTests.
     */
    data: XOR<LabTestUpdateManyMutationInput, LabTestUncheckedUpdateManyInput>
    /**
     * Filter which LabTests to update
     */
    where?: LabTestWhereInput
    /**
     * Limit how many LabTests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabTest upsert
   */
  export type LabTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * The filter to search for the LabTest to update in case it exists.
     */
    where: LabTestWhereUniqueInput
    /**
     * In case the LabTest found by the `where` argument doesn't exist, create a new LabTest with this data.
     */
    create: XOR<LabTestCreateInput, LabTestUncheckedCreateInput>
    /**
     * In case the LabTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabTestUpdateInput, LabTestUncheckedUpdateInput>
  }

  /**
   * LabTest delete
   */
  export type LabTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter which LabTest to delete.
     */
    where: LabTestWhereUniqueInput
  }

  /**
   * LabTest deleteMany
   */
  export type LabTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabTests to delete
     */
    where?: LabTestWhereInput
    /**
     * Limit how many LabTests to delete.
     */
    limit?: number
  }

  /**
   * LabTest without action
   */
  export type LabTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
  }


  /**
   * Model HealthMetric
   */

  export type AggregateHealthMetric = {
    _count: HealthMetricCountAggregateOutputType | null
    _min: HealthMetricMinAggregateOutputType | null
    _max: HealthMetricMaxAggregateOutputType | null
  }

  export type HealthMetricMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    type: $Enums.MetricType | null
    value: string | null
    unit: string | null
    recordedAt: Date | null
    notes: string | null
  }

  export type HealthMetricMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    type: $Enums.MetricType | null
    value: string | null
    unit: string | null
    recordedAt: Date | null
    notes: string | null
  }

  export type HealthMetricCountAggregateOutputType = {
    id: number
    patientId: number
    type: number
    value: number
    unit: number
    recordedAt: number
    notes: number
    _all: number
  }


  export type HealthMetricMinAggregateInputType = {
    id?: true
    patientId?: true
    type?: true
    value?: true
    unit?: true
    recordedAt?: true
    notes?: true
  }

  export type HealthMetricMaxAggregateInputType = {
    id?: true
    patientId?: true
    type?: true
    value?: true
    unit?: true
    recordedAt?: true
    notes?: true
  }

  export type HealthMetricCountAggregateInputType = {
    id?: true
    patientId?: true
    type?: true
    value?: true
    unit?: true
    recordedAt?: true
    notes?: true
    _all?: true
  }

  export type HealthMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthMetric to aggregate.
     */
    where?: HealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthMetrics to fetch.
     */
    orderBy?: HealthMetricOrderByWithRelationInput | HealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HealthMetrics
    **/
    _count?: true | HealthMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HealthMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HealthMetricMaxAggregateInputType
  }

  export type GetHealthMetricAggregateType<T extends HealthMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateHealthMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealthMetric[P]>
      : GetScalarType<T[P], AggregateHealthMetric[P]>
  }




  export type HealthMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthMetricWhereInput
    orderBy?: HealthMetricOrderByWithAggregationInput | HealthMetricOrderByWithAggregationInput[]
    by: HealthMetricScalarFieldEnum[] | HealthMetricScalarFieldEnum
    having?: HealthMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HealthMetricCountAggregateInputType | true
    _min?: HealthMetricMinAggregateInputType
    _max?: HealthMetricMaxAggregateInputType
  }

  export type HealthMetricGroupByOutputType = {
    id: string
    patientId: string
    type: $Enums.MetricType
    value: string
    unit: string
    recordedAt: Date
    notes: string | null
    _count: HealthMetricCountAggregateOutputType | null
    _min: HealthMetricMinAggregateOutputType | null
    _max: HealthMetricMaxAggregateOutputType | null
  }

  type GetHealthMetricGroupByPayload<T extends HealthMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HealthMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HealthMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HealthMetricGroupByOutputType[P]>
            : GetScalarType<T[P], HealthMetricGroupByOutputType[P]>
        }
      >
    >


  export type HealthMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    type?: boolean
    value?: boolean
    unit?: boolean
    recordedAt?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthMetric"]>

  export type HealthMetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    type?: boolean
    value?: boolean
    unit?: boolean
    recordedAt?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthMetric"]>

  export type HealthMetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    type?: boolean
    value?: boolean
    unit?: boolean
    recordedAt?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthMetric"]>

  export type HealthMetricSelectScalar = {
    id?: boolean
    patientId?: boolean
    type?: boolean
    value?: boolean
    unit?: boolean
    recordedAt?: boolean
    notes?: boolean
  }

  export type HealthMetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "type" | "value" | "unit" | "recordedAt" | "notes", ExtArgs["result"]["healthMetric"]>
  export type HealthMetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type HealthMetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type HealthMetricIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $HealthMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HealthMetric"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      type: $Enums.MetricType
      value: string
      unit: string
      recordedAt: Date
      notes: string | null
    }, ExtArgs["result"]["healthMetric"]>
    composites: {}
  }

  type HealthMetricGetPayload<S extends boolean | null | undefined | HealthMetricDefaultArgs> = $Result.GetResult<Prisma.$HealthMetricPayload, S>

  type HealthMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HealthMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HealthMetricCountAggregateInputType | true
    }

  export interface HealthMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HealthMetric'], meta: { name: 'HealthMetric' } }
    /**
     * Find zero or one HealthMetric that matches the filter.
     * @param {HealthMetricFindUniqueArgs} args - Arguments to find a HealthMetric
     * @example
     * // Get one HealthMetric
     * const healthMetric = await prisma.healthMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HealthMetricFindUniqueArgs>(args: SelectSubset<T, HealthMetricFindUniqueArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HealthMetric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HealthMetricFindUniqueOrThrowArgs} args - Arguments to find a HealthMetric
     * @example
     * // Get one HealthMetric
     * const healthMetric = await prisma.healthMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HealthMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, HealthMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthMetricFindFirstArgs} args - Arguments to find a HealthMetric
     * @example
     * // Get one HealthMetric
     * const healthMetric = await prisma.healthMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HealthMetricFindFirstArgs>(args?: SelectSubset<T, HealthMetricFindFirstArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthMetricFindFirstOrThrowArgs} args - Arguments to find a HealthMetric
     * @example
     * // Get one HealthMetric
     * const healthMetric = await prisma.healthMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HealthMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, HealthMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HealthMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HealthMetrics
     * const healthMetrics = await prisma.healthMetric.findMany()
     * 
     * // Get first 10 HealthMetrics
     * const healthMetrics = await prisma.healthMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const healthMetricWithIdOnly = await prisma.healthMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HealthMetricFindManyArgs>(args?: SelectSubset<T, HealthMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HealthMetric.
     * @param {HealthMetricCreateArgs} args - Arguments to create a HealthMetric.
     * @example
     * // Create one HealthMetric
     * const HealthMetric = await prisma.healthMetric.create({
     *   data: {
     *     // ... data to create a HealthMetric
     *   }
     * })
     * 
     */
    create<T extends HealthMetricCreateArgs>(args: SelectSubset<T, HealthMetricCreateArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HealthMetrics.
     * @param {HealthMetricCreateManyArgs} args - Arguments to create many HealthMetrics.
     * @example
     * // Create many HealthMetrics
     * const healthMetric = await prisma.healthMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HealthMetricCreateManyArgs>(args?: SelectSubset<T, HealthMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HealthMetrics and returns the data saved in the database.
     * @param {HealthMetricCreateManyAndReturnArgs} args - Arguments to create many HealthMetrics.
     * @example
     * // Create many HealthMetrics
     * const healthMetric = await prisma.healthMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HealthMetrics and only return the `id`
     * const healthMetricWithIdOnly = await prisma.healthMetric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HealthMetricCreateManyAndReturnArgs>(args?: SelectSubset<T, HealthMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HealthMetric.
     * @param {HealthMetricDeleteArgs} args - Arguments to delete one HealthMetric.
     * @example
     * // Delete one HealthMetric
     * const HealthMetric = await prisma.healthMetric.delete({
     *   where: {
     *     // ... filter to delete one HealthMetric
     *   }
     * })
     * 
     */
    delete<T extends HealthMetricDeleteArgs>(args: SelectSubset<T, HealthMetricDeleteArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HealthMetric.
     * @param {HealthMetricUpdateArgs} args - Arguments to update one HealthMetric.
     * @example
     * // Update one HealthMetric
     * const healthMetric = await prisma.healthMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HealthMetricUpdateArgs>(args: SelectSubset<T, HealthMetricUpdateArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HealthMetrics.
     * @param {HealthMetricDeleteManyArgs} args - Arguments to filter HealthMetrics to delete.
     * @example
     * // Delete a few HealthMetrics
     * const { count } = await prisma.healthMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HealthMetricDeleteManyArgs>(args?: SelectSubset<T, HealthMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HealthMetrics
     * const healthMetric = await prisma.healthMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HealthMetricUpdateManyArgs>(args: SelectSubset<T, HealthMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthMetrics and returns the data updated in the database.
     * @param {HealthMetricUpdateManyAndReturnArgs} args - Arguments to update many HealthMetrics.
     * @example
     * // Update many HealthMetrics
     * const healthMetric = await prisma.healthMetric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HealthMetrics and only return the `id`
     * const healthMetricWithIdOnly = await prisma.healthMetric.updateManyAndReturn({
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
    updateManyAndReturn<T extends HealthMetricUpdateManyAndReturnArgs>(args: SelectSubset<T, HealthMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HealthMetric.
     * @param {HealthMetricUpsertArgs} args - Arguments to update or create a HealthMetric.
     * @example
     * // Update or create a HealthMetric
     * const healthMetric = await prisma.healthMetric.upsert({
     *   create: {
     *     // ... data to create a HealthMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HealthMetric we want to update
     *   }
     * })
     */
    upsert<T extends HealthMetricUpsertArgs>(args: SelectSubset<T, HealthMetricUpsertArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HealthMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthMetricCountArgs} args - Arguments to filter HealthMetrics to count.
     * @example
     * // Count the number of HealthMetrics
     * const count = await prisma.healthMetric.count({
     *   where: {
     *     // ... the filter for the HealthMetrics we want to count
     *   }
     * })
    **/
    count<T extends HealthMetricCountArgs>(
      args?: Subset<T, HealthMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HealthMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HealthMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HealthMetricAggregateArgs>(args: Subset<T, HealthMetricAggregateArgs>): Prisma.PrismaPromise<GetHealthMetricAggregateType<T>>

    /**
     * Group by HealthMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthMetricGroupByArgs} args - Group by arguments.
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
      T extends HealthMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HealthMetricGroupByArgs['orderBy'] }
        : { orderBy?: HealthMetricGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HealthMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealthMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HealthMetric model
   */
  readonly fields: HealthMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HealthMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HealthMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HealthMetric model
   */
  interface HealthMetricFieldRefs {
    readonly id: FieldRef<"HealthMetric", 'String'>
    readonly patientId: FieldRef<"HealthMetric", 'String'>
    readonly type: FieldRef<"HealthMetric", 'MetricType'>
    readonly value: FieldRef<"HealthMetric", 'String'>
    readonly unit: FieldRef<"HealthMetric", 'String'>
    readonly recordedAt: FieldRef<"HealthMetric", 'DateTime'>
    readonly notes: FieldRef<"HealthMetric", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HealthMetric findUnique
   */
  export type HealthMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which HealthMetric to fetch.
     */
    where: HealthMetricWhereUniqueInput
  }

  /**
   * HealthMetric findUniqueOrThrow
   */
  export type HealthMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which HealthMetric to fetch.
     */
    where: HealthMetricWhereUniqueInput
  }

  /**
   * HealthMetric findFirst
   */
  export type HealthMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which HealthMetric to fetch.
     */
    where?: HealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthMetrics to fetch.
     */
    orderBy?: HealthMetricOrderByWithRelationInput | HealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthMetrics.
     */
    cursor?: HealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthMetrics.
     */
    distinct?: HealthMetricScalarFieldEnum | HealthMetricScalarFieldEnum[]
  }

  /**
   * HealthMetric findFirstOrThrow
   */
  export type HealthMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which HealthMetric to fetch.
     */
    where?: HealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthMetrics to fetch.
     */
    orderBy?: HealthMetricOrderByWithRelationInput | HealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthMetrics.
     */
    cursor?: HealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthMetrics.
     */
    distinct?: HealthMetricScalarFieldEnum | HealthMetricScalarFieldEnum[]
  }

  /**
   * HealthMetric findMany
   */
  export type HealthMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which HealthMetrics to fetch.
     */
    where?: HealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthMetrics to fetch.
     */
    orderBy?: HealthMetricOrderByWithRelationInput | HealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HealthMetrics.
     */
    cursor?: HealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthMetrics.
     */
    skip?: number
    distinct?: HealthMetricScalarFieldEnum | HealthMetricScalarFieldEnum[]
  }

  /**
   * HealthMetric create
   */
  export type HealthMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * The data needed to create a HealthMetric.
     */
    data: XOR<HealthMetricCreateInput, HealthMetricUncheckedCreateInput>
  }

  /**
   * HealthMetric createMany
   */
  export type HealthMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HealthMetrics.
     */
    data: HealthMetricCreateManyInput | HealthMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HealthMetric createManyAndReturn
   */
  export type HealthMetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * The data used to create many HealthMetrics.
     */
    data: HealthMetricCreateManyInput | HealthMetricCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HealthMetric update
   */
  export type HealthMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * The data needed to update a HealthMetric.
     */
    data: XOR<HealthMetricUpdateInput, HealthMetricUncheckedUpdateInput>
    /**
     * Choose, which HealthMetric to update.
     */
    where: HealthMetricWhereUniqueInput
  }

  /**
   * HealthMetric updateMany
   */
  export type HealthMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HealthMetrics.
     */
    data: XOR<HealthMetricUpdateManyMutationInput, HealthMetricUncheckedUpdateManyInput>
    /**
     * Filter which HealthMetrics to update
     */
    where?: HealthMetricWhereInput
    /**
     * Limit how many HealthMetrics to update.
     */
    limit?: number
  }

  /**
   * HealthMetric updateManyAndReturn
   */
  export type HealthMetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * The data used to update HealthMetrics.
     */
    data: XOR<HealthMetricUpdateManyMutationInput, HealthMetricUncheckedUpdateManyInput>
    /**
     * Filter which HealthMetrics to update
     */
    where?: HealthMetricWhereInput
    /**
     * Limit how many HealthMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HealthMetric upsert
   */
  export type HealthMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * The filter to search for the HealthMetric to update in case it exists.
     */
    where: HealthMetricWhereUniqueInput
    /**
     * In case the HealthMetric found by the `where` argument doesn't exist, create a new HealthMetric with this data.
     */
    create: XOR<HealthMetricCreateInput, HealthMetricUncheckedCreateInput>
    /**
     * In case the HealthMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HealthMetricUpdateInput, HealthMetricUncheckedUpdateInput>
  }

  /**
   * HealthMetric delete
   */
  export type HealthMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * Filter which HealthMetric to delete.
     */
    where: HealthMetricWhereUniqueInput
  }

  /**
   * HealthMetric deleteMany
   */
  export type HealthMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthMetrics to delete
     */
    where?: HealthMetricWhereInput
    /**
     * Limit how many HealthMetrics to delete.
     */
    limit?: number
  }

  /**
   * HealthMetric without action
   */
  export type HealthMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
  }


  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    startedAt: Date | null
    endedAt: Date | null
    topic: string | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    startedAt: Date | null
    endedAt: Date | null
    topic: string | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    patientId: number
    startedAt: number
    endedAt: number
    topic: number
    _all: number
  }


  export type ChatSessionMinAggregateInputType = {
    id?: true
    patientId?: true
    startedAt?: true
    endedAt?: true
    topic?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    patientId?: true
    startedAt?: true
    endedAt?: true
    topic?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    patientId?: true
    startedAt?: true
    endedAt?: true
    topic?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: string
    patientId: string
    startedAt: Date
    endedAt: Date | null
    topic: string | null
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    topic?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    topic?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    topic?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectScalar = {
    id?: boolean
    patientId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    topic?: boolean
  }

  export type ChatSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "startedAt" | "endedAt" | "topic", ExtArgs["result"]["chatSession"]>
  export type ChatSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      startedAt: Date
      endedAt: Date | null
      topic: string | null
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {ChatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions and returns the data updated in the database.
     * @param {ChatSessionUpdateManyAndReturnArgs} args - Arguments to update many ChatSessions.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
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
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends ChatSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChatSession model
   */
  interface ChatSessionFieldRefs {
    readonly id: FieldRef<"ChatSession", 'String'>
    readonly patientId: FieldRef<"ChatSession", 'String'>
    readonly startedAt: FieldRef<"ChatSession", 'DateTime'>
    readonly endedAt: FieldRef<"ChatSession", 'DateTime'>
    readonly topic: FieldRef<"ChatSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession createManyAndReturn
   */
  export type ChatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession updateManyAndReturn
   */
  export type ChatSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to delete.
     */
    limit?: number
  }

  /**
   * ChatSession.messages
   */
  export type ChatSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    content: string | null
    sentBy: $Enums.MessageSender | null
    sentAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    content: string | null
    sentBy: $Enums.MessageSender | null
    sentAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    sessionId: number
    content: number
    sentBy: number
    sentAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    sessionId?: true
    content?: true
    sentBy?: true
    sentAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    sessionId?: true
    content?: true
    sentBy?: true
    sentAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    sessionId?: true
    content?: true
    sentBy?: true
    sentAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    sessionId: string
    content: string
    sentBy: $Enums.MessageSender
    sentAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    content?: boolean
    sentBy?: boolean
    sentAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    content?: boolean
    sentBy?: boolean
    sentAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    content?: boolean
    sentBy?: boolean
    sentAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    sessionId?: boolean
    content?: boolean
    sentBy?: boolean
    sentAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "content" | "sentBy" | "sentAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      session: Prisma.$ChatSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      content: string
      sentBy: $Enums.MessageSender
      sentAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly sessionId: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly sentBy: FieldRef<"ChatMessage", 'MessageSender'>
    readonly sentAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    patientName: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    patientName: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    doctorId: number
    patientName: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    doctorId?: true
    patientName?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    doctorId?: true
    patientName?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    doctorId?: true
    patientName?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    doctorId: string
    patientName: string
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientName?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientName?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientName?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    doctorId?: boolean
    patientName?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "patientName" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      patientName: string
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly doctorId: FieldRef<"Review", 'String'>
    readonly patientName: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Float'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    patientId: 'patientId',
    dateOfBirth: 'dateOfBirth',
    address: 'address',
    insuranceProvider: 'insuranceProvider',
    insuranceNumber: 'insuranceNumber',
    emergencyContact: 'emergencyContact',
    emergencyPhone: 'emergencyPhone',
    notes: 'notes'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    doctorId: 'doctorId',
    specialization: 'specialization',
    qualifications: 'qualifications',
    hospital: 'hospital',
    clinic: 'clinic',
    about: 'about',
    consultationFee: 'consultationFee',
    yearsExperience: 'yearsExperience',
    verified: 'verified',
    rating: 'rating',
    reviewCount: 'reviewCount',
    calendarId: 'calendarId'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    available: 'available'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    type: 'type',
    reason: 'reason',
    notes: 'notes',
    location: 'location',
    duration: 'duration',
    calendarEventId: 'calendarEventId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const PrescriptionScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    medicationName: 'medicationName',
    dosage: 'dosage',
    frequency: 'frequency',
    duration: 'duration',
    instructions: 'instructions',
    refills: 'refills',
    refillsRemaining: 'refillsRemaining',
    pharmacy: 'pharmacy',
    status: 'status',
    prescribedOn: 'prescribedOn',
    expiresOn: 'expiresOn',
    updatedAt: 'updatedAt'
  };

  export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum]


  export const LabTestScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    orderedById: 'orderedById',
    testName: 'testName',
    testCode: 'testCode',
    status: 'status',
    scheduledDate: 'scheduledDate',
    completedDate: 'completedDate',
    results: 'results',
    notes: 'notes',
    priority: 'priority',
    fasting: 'fasting',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LabTestScalarFieldEnum = (typeof LabTestScalarFieldEnum)[keyof typeof LabTestScalarFieldEnum]


  export const HealthMetricScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    type: 'type',
    value: 'value',
    unit: 'unit',
    recordedAt: 'recordedAt',
    notes: 'notes'
  };

  export type HealthMetricScalarFieldEnum = (typeof HealthMetricScalarFieldEnum)[keyof typeof HealthMetricScalarFieldEnum]


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    topic: 'topic'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    content: 'content',
    sentBy: 'sentBy',
    sentAt: 'sentAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    patientName: 'patientName',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'AppointmentType'
   */
  export type EnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType'>
    


  /**
   * Reference to a field of type 'AppointmentType[]'
   */
  export type ListEnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType[]'>
    


  /**
   * Reference to a field of type 'PrescriptionStatus'
   */
  export type EnumPrescriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrescriptionStatus'>
    


  /**
   * Reference to a field of type 'PrescriptionStatus[]'
   */
  export type ListEnumPrescriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrescriptionStatus[]'>
    


  /**
   * Reference to a field of type 'LabTestStatus'
   */
  export type EnumLabTestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LabTestStatus'>
    


  /**
   * Reference to a field of type 'LabTestStatus[]'
   */
  export type ListEnumLabTestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LabTestStatus[]'>
    


  /**
   * Reference to a field of type 'TestPriority'
   */
  export type EnumTestPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestPriority'>
    


  /**
   * Reference to a field of type 'TestPriority[]'
   */
  export type ListEnumTestPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestPriority[]'>
    


  /**
   * Reference to a field of type 'MetricType'
   */
  export type EnumMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricType'>
    


  /**
   * Reference to a field of type 'MetricType[]'
   */
  export type ListEnumMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricType[]'>
    


  /**
   * Reference to a field of type 'MessageSender'
   */
  export type EnumMessageSenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageSender'>
    


  /**
   * Reference to a field of type 'MessageSender[]'
   */
  export type ListEnumMessageSenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageSender[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    userId?: StringFilter<"Patient"> | string
    patientId?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    insuranceProvider?: StringNullableFilter<"Patient"> | string | null
    insuranceNumber?: StringNullableFilter<"Patient"> | string | null
    emergencyContact?: StringNullableFilter<"Patient"> | string | null
    emergencyPhone?: StringNullableFilter<"Patient"> | string | null
    notes?: StringNullableFilter<"Patient"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
    labTests?: LabTestListRelationFilter
    healthMetrics?: HealthMetricListRelationFilter
    chatSessions?: ChatSessionListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    insuranceProvider?: SortOrderInput | SortOrder
    insuranceNumber?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    emergencyPhone?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
    labTests?: LabTestOrderByRelationAggregateInput
    healthMetrics?: HealthMetricOrderByRelationAggregateInput
    chatSessions?: ChatSessionOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    patientId?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    insuranceProvider?: StringNullableFilter<"Patient"> | string | null
    insuranceNumber?: StringNullableFilter<"Patient"> | string | null
    emergencyContact?: StringNullableFilter<"Patient"> | string | null
    emergencyPhone?: StringNullableFilter<"Patient"> | string | null
    notes?: StringNullableFilter<"Patient"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
    labTests?: LabTestListRelationFilter
    healthMetrics?: HealthMetricListRelationFilter
    chatSessions?: ChatSessionListRelationFilter
  }, "id" | "userId" | "patientId">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    insuranceProvider?: SortOrderInput | SortOrder
    insuranceNumber?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    emergencyPhone?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    userId?: StringWithAggregatesFilter<"Patient"> | string
    patientId?: StringWithAggregatesFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    insuranceProvider?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    insuranceNumber?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    emergencyContact?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    emergencyPhone?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Patient"> | string | null
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: StringFilter<"Doctor"> | string
    userId?: StringFilter<"Doctor"> | string
    doctorId?: StringFilter<"Doctor"> | string
    specialization?: StringFilter<"Doctor"> | string
    qualifications?: StringNullableFilter<"Doctor"> | string | null
    hospital?: StringNullableFilter<"Doctor"> | string | null
    clinic?: StringNullableFilter<"Doctor"> | string | null
    about?: StringNullableFilter<"Doctor"> | string | null
    consultationFee?: DecimalNullableFilter<"Doctor"> | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: IntNullableFilter<"Doctor"> | number | null
    verified?: BoolFilter<"Doctor"> | boolean
    rating?: FloatNullableFilter<"Doctor"> | number | null
    reviewCount?: IntFilter<"Doctor"> | number
    calendarId?: StringNullableFilter<"Doctor"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
    labOrders?: LabTestListRelationFilter
    availability?: AvailabilityListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    doctorId?: SortOrder
    specialization?: SortOrder
    qualifications?: SortOrderInput | SortOrder
    hospital?: SortOrderInput | SortOrder
    clinic?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    consultationFee?: SortOrderInput | SortOrder
    yearsExperience?: SortOrderInput | SortOrder
    verified?: SortOrder
    rating?: SortOrderInput | SortOrder
    reviewCount?: SortOrder
    calendarId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
    labOrders?: LabTestOrderByRelationAggregateInput
    availability?: AvailabilityOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    doctorId?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    specialization?: StringFilter<"Doctor"> | string
    qualifications?: StringNullableFilter<"Doctor"> | string | null
    hospital?: StringNullableFilter<"Doctor"> | string | null
    clinic?: StringNullableFilter<"Doctor"> | string | null
    about?: StringNullableFilter<"Doctor"> | string | null
    consultationFee?: DecimalNullableFilter<"Doctor"> | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: IntNullableFilter<"Doctor"> | number | null
    verified?: BoolFilter<"Doctor"> | boolean
    rating?: FloatNullableFilter<"Doctor"> | number | null
    reviewCount?: IntFilter<"Doctor"> | number
    calendarId?: StringNullableFilter<"Doctor"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
    labOrders?: LabTestListRelationFilter
    availability?: AvailabilityListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "userId" | "doctorId">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    doctorId?: SortOrder
    specialization?: SortOrder
    qualifications?: SortOrderInput | SortOrder
    hospital?: SortOrderInput | SortOrder
    clinic?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    consultationFee?: SortOrderInput | SortOrder
    yearsExperience?: SortOrderInput | SortOrder
    verified?: SortOrder
    rating?: SortOrderInput | SortOrder
    reviewCount?: SortOrder
    calendarId?: SortOrderInput | SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doctor"> | string
    userId?: StringWithAggregatesFilter<"Doctor"> | string
    doctorId?: StringWithAggregatesFilter<"Doctor"> | string
    specialization?: StringWithAggregatesFilter<"Doctor"> | string
    qualifications?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    hospital?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    clinic?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    about?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    consultationFee?: DecimalNullableWithAggregatesFilter<"Doctor"> | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: IntNullableWithAggregatesFilter<"Doctor"> | number | null
    verified?: BoolWithAggregatesFilter<"Doctor"> | boolean
    rating?: FloatNullableWithAggregatesFilter<"Doctor"> | number | null
    reviewCount?: IntWithAggregatesFilter<"Doctor"> | number
    calendarId?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: StringFilter<"Availability"> | string
    doctorId?: StringFilter<"Availability"> | string
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    available?: BoolFilter<"Availability"> | boolean
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    available?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    doctorId_dayOfWeek_startTime?: AvailabilityDoctorIdDayOfWeekStartTimeCompoundUniqueInput
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    doctorId?: StringFilter<"Availability"> | string
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    available?: BoolFilter<"Availability"> | boolean
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id" | "doctorId_dayOfWeek_startTime">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    available?: SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _avg?: AvailabilityAvgOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
    _sum?: AvailabilitySumOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Availability"> | string
    doctorId?: StringWithAggregatesFilter<"Availability"> | string
    dayOfWeek?: IntWithAggregatesFilter<"Availability"> | number
    startTime?: StringWithAggregatesFilter<"Availability"> | string
    endTime?: StringWithAggregatesFilter<"Availability"> | string
    available?: BoolWithAggregatesFilter<"Availability"> | boolean
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    endTime?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    reason?: StringNullableFilter<"Appointment"> | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    duration?: IntFilter<"Appointment"> | number
    calendarEventId?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    duration?: SortOrder
    calendarEventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    endTime?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    reason?: StringNullableFilter<"Appointment"> | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    duration?: IntFilter<"Appointment"> | number
    calendarEventId?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    duration?: SortOrder
    calendarEventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    patientId?: StringWithAggregatesFilter<"Appointment"> | string
    doctorId?: StringWithAggregatesFilter<"Appointment"> | string
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    startTime?: StringWithAggregatesFilter<"Appointment"> | string
    endTime?: StringWithAggregatesFilter<"Appointment"> | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeWithAggregatesFilter<"Appointment"> | $Enums.AppointmentType
    reason?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    location?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    duration?: IntWithAggregatesFilter<"Appointment"> | number
    calendarEventId?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type PrescriptionWhereInput = {
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    id?: StringFilter<"Prescription"> | string
    patientId?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    medicationName?: StringFilter<"Prescription"> | string
    dosage?: StringFilter<"Prescription"> | string
    frequency?: StringFilter<"Prescription"> | string
    duration?: StringFilter<"Prescription"> | string
    instructions?: StringNullableFilter<"Prescription"> | string | null
    refills?: IntFilter<"Prescription"> | number
    refillsRemaining?: IntFilter<"Prescription"> | number
    pharmacy?: StringNullableFilter<"Prescription"> | string | null
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    prescribedOn?: DateTimeFilter<"Prescription"> | Date | string
    expiresOn?: DateTimeNullableFilter<"Prescription"> | Date | string | null
    updatedAt?: DateTimeFilter<"Prescription"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type PrescriptionOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrderInput | SortOrder
    refills?: SortOrder
    refillsRemaining?: SortOrder
    pharmacy?: SortOrderInput | SortOrder
    status?: SortOrder
    prescribedOn?: SortOrder
    expiresOn?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
  }

  export type PrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    patientId?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    medicationName?: StringFilter<"Prescription"> | string
    dosage?: StringFilter<"Prescription"> | string
    frequency?: StringFilter<"Prescription"> | string
    duration?: StringFilter<"Prescription"> | string
    instructions?: StringNullableFilter<"Prescription"> | string | null
    refills?: IntFilter<"Prescription"> | number
    refillsRemaining?: IntFilter<"Prescription"> | number
    pharmacy?: StringNullableFilter<"Prescription"> | string | null
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    prescribedOn?: DateTimeFilter<"Prescription"> | Date | string
    expiresOn?: DateTimeNullableFilter<"Prescription"> | Date | string | null
    updatedAt?: DateTimeFilter<"Prescription"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id">

  export type PrescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrderInput | SortOrder
    refills?: SortOrder
    refillsRemaining?: SortOrder
    pharmacy?: SortOrderInput | SortOrder
    status?: SortOrder
    prescribedOn?: SortOrder
    expiresOn?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: PrescriptionCountOrderByAggregateInput
    _avg?: PrescriptionAvgOrderByAggregateInput
    _max?: PrescriptionMaxOrderByAggregateInput
    _min?: PrescriptionMinOrderByAggregateInput
    _sum?: PrescriptionSumOrderByAggregateInput
  }

  export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    OR?: PrescriptionScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prescription"> | string
    patientId?: StringWithAggregatesFilter<"Prescription"> | string
    doctorId?: StringWithAggregatesFilter<"Prescription"> | string
    medicationName?: StringWithAggregatesFilter<"Prescription"> | string
    dosage?: StringWithAggregatesFilter<"Prescription"> | string
    frequency?: StringWithAggregatesFilter<"Prescription"> | string
    duration?: StringWithAggregatesFilter<"Prescription"> | string
    instructions?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    refills?: IntWithAggregatesFilter<"Prescription"> | number
    refillsRemaining?: IntWithAggregatesFilter<"Prescription"> | number
    pharmacy?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    status?: EnumPrescriptionStatusWithAggregatesFilter<"Prescription"> | $Enums.PrescriptionStatus
    prescribedOn?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
    expiresOn?: DateTimeNullableWithAggregatesFilter<"Prescription"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
  }

  export type LabTestWhereInput = {
    AND?: LabTestWhereInput | LabTestWhereInput[]
    OR?: LabTestWhereInput[]
    NOT?: LabTestWhereInput | LabTestWhereInput[]
    id?: StringFilter<"LabTest"> | string
    patientId?: StringFilter<"LabTest"> | string
    orderedById?: StringFilter<"LabTest"> | string
    testName?: StringFilter<"LabTest"> | string
    testCode?: StringNullableFilter<"LabTest"> | string | null
    status?: EnumLabTestStatusFilter<"LabTest"> | $Enums.LabTestStatus
    scheduledDate?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    completedDate?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    results?: StringNullableFilter<"LabTest"> | string | null
    notes?: StringNullableFilter<"LabTest"> | string | null
    priority?: EnumTestPriorityFilter<"LabTest"> | $Enums.TestPriority
    fasting?: BoolFilter<"LabTest"> | boolean
    createdAt?: DateTimeFilter<"LabTest"> | Date | string
    updatedAt?: DateTimeFilter<"LabTest"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    orderedBy?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type LabTestOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    orderedById?: SortOrder
    testName?: SortOrder
    testCode?: SortOrderInput | SortOrder
    status?: SortOrder
    scheduledDate?: SortOrderInput | SortOrder
    completedDate?: SortOrderInput | SortOrder
    results?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    priority?: SortOrder
    fasting?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    orderedBy?: DoctorOrderByWithRelationInput
  }

  export type LabTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LabTestWhereInput | LabTestWhereInput[]
    OR?: LabTestWhereInput[]
    NOT?: LabTestWhereInput | LabTestWhereInput[]
    patientId?: StringFilter<"LabTest"> | string
    orderedById?: StringFilter<"LabTest"> | string
    testName?: StringFilter<"LabTest"> | string
    testCode?: StringNullableFilter<"LabTest"> | string | null
    status?: EnumLabTestStatusFilter<"LabTest"> | $Enums.LabTestStatus
    scheduledDate?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    completedDate?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    results?: StringNullableFilter<"LabTest"> | string | null
    notes?: StringNullableFilter<"LabTest"> | string | null
    priority?: EnumTestPriorityFilter<"LabTest"> | $Enums.TestPriority
    fasting?: BoolFilter<"LabTest"> | boolean
    createdAt?: DateTimeFilter<"LabTest"> | Date | string
    updatedAt?: DateTimeFilter<"LabTest"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    orderedBy?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id">

  export type LabTestOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    orderedById?: SortOrder
    testName?: SortOrder
    testCode?: SortOrderInput | SortOrder
    status?: SortOrder
    scheduledDate?: SortOrderInput | SortOrder
    completedDate?: SortOrderInput | SortOrder
    results?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    priority?: SortOrder
    fasting?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LabTestCountOrderByAggregateInput
    _max?: LabTestMaxOrderByAggregateInput
    _min?: LabTestMinOrderByAggregateInput
  }

  export type LabTestScalarWhereWithAggregatesInput = {
    AND?: LabTestScalarWhereWithAggregatesInput | LabTestScalarWhereWithAggregatesInput[]
    OR?: LabTestScalarWhereWithAggregatesInput[]
    NOT?: LabTestScalarWhereWithAggregatesInput | LabTestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LabTest"> | string
    patientId?: StringWithAggregatesFilter<"LabTest"> | string
    orderedById?: StringWithAggregatesFilter<"LabTest"> | string
    testName?: StringWithAggregatesFilter<"LabTest"> | string
    testCode?: StringNullableWithAggregatesFilter<"LabTest"> | string | null
    status?: EnumLabTestStatusWithAggregatesFilter<"LabTest"> | $Enums.LabTestStatus
    scheduledDate?: DateTimeNullableWithAggregatesFilter<"LabTest"> | Date | string | null
    completedDate?: DateTimeNullableWithAggregatesFilter<"LabTest"> | Date | string | null
    results?: StringNullableWithAggregatesFilter<"LabTest"> | string | null
    notes?: StringNullableWithAggregatesFilter<"LabTest"> | string | null
    priority?: EnumTestPriorityWithAggregatesFilter<"LabTest"> | $Enums.TestPriority
    fasting?: BoolWithAggregatesFilter<"LabTest"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LabTest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LabTest"> | Date | string
  }

  export type HealthMetricWhereInput = {
    AND?: HealthMetricWhereInput | HealthMetricWhereInput[]
    OR?: HealthMetricWhereInput[]
    NOT?: HealthMetricWhereInput | HealthMetricWhereInput[]
    id?: StringFilter<"HealthMetric"> | string
    patientId?: StringFilter<"HealthMetric"> | string
    type?: EnumMetricTypeFilter<"HealthMetric"> | $Enums.MetricType
    value?: StringFilter<"HealthMetric"> | string
    unit?: StringFilter<"HealthMetric"> | string
    recordedAt?: DateTimeFilter<"HealthMetric"> | Date | string
    notes?: StringNullableFilter<"HealthMetric"> | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type HealthMetricOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    recordedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type HealthMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HealthMetricWhereInput | HealthMetricWhereInput[]
    OR?: HealthMetricWhereInput[]
    NOT?: HealthMetricWhereInput | HealthMetricWhereInput[]
    patientId?: StringFilter<"HealthMetric"> | string
    type?: EnumMetricTypeFilter<"HealthMetric"> | $Enums.MetricType
    value?: StringFilter<"HealthMetric"> | string
    unit?: StringFilter<"HealthMetric"> | string
    recordedAt?: DateTimeFilter<"HealthMetric"> | Date | string
    notes?: StringNullableFilter<"HealthMetric"> | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type HealthMetricOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    recordedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: HealthMetricCountOrderByAggregateInput
    _max?: HealthMetricMaxOrderByAggregateInput
    _min?: HealthMetricMinOrderByAggregateInput
  }

  export type HealthMetricScalarWhereWithAggregatesInput = {
    AND?: HealthMetricScalarWhereWithAggregatesInput | HealthMetricScalarWhereWithAggregatesInput[]
    OR?: HealthMetricScalarWhereWithAggregatesInput[]
    NOT?: HealthMetricScalarWhereWithAggregatesInput | HealthMetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HealthMetric"> | string
    patientId?: StringWithAggregatesFilter<"HealthMetric"> | string
    type?: EnumMetricTypeWithAggregatesFilter<"HealthMetric"> | $Enums.MetricType
    value?: StringWithAggregatesFilter<"HealthMetric"> | string
    unit?: StringWithAggregatesFilter<"HealthMetric"> | string
    recordedAt?: DateTimeWithAggregatesFilter<"HealthMetric"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"HealthMetric"> | string | null
  }

  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    patientId?: StringFilter<"ChatSession"> | string
    startedAt?: DateTimeFilter<"ChatSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"ChatSession"> | Date | string | null
    topic?: StringNullableFilter<"ChatSession"> | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    messages?: ChatMessageListRelationFilter
  }

  export type ChatSessionOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    topic?: SortOrderInput | SortOrder
    patient?: PatientOrderByWithRelationInput
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    patientId?: StringFilter<"ChatSession"> | string
    startedAt?: DateTimeFilter<"ChatSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"ChatSession"> | Date | string | null
    topic?: StringNullableFilter<"ChatSession"> | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    topic?: SortOrderInput | SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatSession"> | string
    patientId?: StringWithAggregatesFilter<"ChatSession"> | string
    startedAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"ChatSession"> | Date | string | null
    topic?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    sessionId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    sentBy?: EnumMessageSenderFilter<"ChatMessage"> | $Enums.MessageSender
    sentAt?: DateTimeFilter<"ChatMessage"> | Date | string
    session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    content?: SortOrder
    sentBy?: SortOrder
    sentAt?: SortOrder
    session?: ChatSessionOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    sessionId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    sentBy?: EnumMessageSenderFilter<"ChatMessage"> | $Enums.MessageSender
    sentAt?: DateTimeFilter<"ChatMessage"> | Date | string
    session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    content?: SortOrder
    sentBy?: SortOrder
    sentAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    sessionId?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    sentBy?: EnumMessageSenderWithAggregatesFilter<"ChatMessage"> | $Enums.MessageSender
    sentAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    doctorId?: StringFilter<"Review"> | string
    patientName?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientName?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    doctorId?: StringFilter<"Review"> | string
    patientName?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientName?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    doctorId?: StringWithAggregatesFilter<"Review"> | string
    patientName?: StringWithAggregatesFilter<"Review"> | string
    rating?: FloatWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    patient?: PatientCreateNestedOneWithoutUserInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    patient?: PatientUpdateOneWithoutUserNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type PatientCreateInput = {
    id?: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    user: UserCreateNestedOneWithoutPatientInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    labTests?: LabTestCreateNestedManyWithoutPatientInput
    healthMetrics?: HealthMetricCreateNestedManyWithoutPatientInput
    chatSessions?: ChatSessionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    userId: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    labTests?: LabTestUncheckedCreateNestedManyWithoutPatientInput
    healthMetrics?: HealthMetricUncheckedCreateNestedManyWithoutPatientInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    labTests?: LabTestUpdateManyWithoutPatientNestedInput
    healthMetrics?: HealthMetricUpdateManyWithoutPatientNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    labTests?: LabTestUncheckedUpdateManyWithoutPatientNestedInput
    healthMetrics?: HealthMetricUncheckedUpdateManyWithoutPatientNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    userId: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorCreateInput = {
    id?: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
    user: UserCreateNestedOneWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
    labOrders?: LabTestCreateNestedManyWithoutOrderedByInput
    availability?: AvailabilityCreateNestedManyWithoutDoctorInput
    reviews?: ReviewCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    userId: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    labOrders?: LabTestUncheckedCreateNestedManyWithoutOrderedByInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
    labOrders?: LabTestUpdateManyWithoutOrderedByNestedInput
    availability?: AvailabilityUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    labOrders?: LabTestUncheckedUpdateManyWithoutOrderedByNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: string
    userId: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
  }

  export type DoctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityCreateInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    available?: boolean
    doctor: DoctorCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: string
    doctorId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    available?: boolean
  }

  export type AvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    doctor?: DoctorUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilityCreateManyInput = {
    id?: string
    doctorId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    available?: boolean
  }

  export type AvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppointmentCreateInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    type?: $Enums.AppointmentType
    reason?: string | null
    notes?: string | null
    location?: string | null
    duration: number
    calendarEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    patientId: string
    doctorId: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    type?: $Enums.AppointmentType
    reason?: string | null
    notes?: string | null
    location?: string | null
    duration: number
    calendarEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: string
    patientId: string
    doctorId: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    type?: $Enums.AppointmentType
    reason?: string | null
    notes?: string | null
    location?: string | null
    duration: number
    calendarEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionCreateInput = {
    id?: string
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    refills?: number
    refillsRemaining?: number
    pharmacy?: string | null
    status?: $Enums.PrescriptionStatus
    prescribedOn?: Date | string
    expiresOn?: Date | string | null
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
    doctor: DoctorCreateNestedOneWithoutPrescriptionsInput
  }

  export type PrescriptionUncheckedCreateInput = {
    id?: string
    patientId: string
    doctorId: string
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    refills?: number
    refillsRemaining?: number
    pharmacy?: string | null
    status?: $Enums.PrescriptionStatus
    prescribedOn?: Date | string
    expiresOn?: Date | string | null
    updatedAt?: Date | string
  }

  export type PrescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    refills?: IntFieldUpdateOperationsInput | number
    refillsRemaining?: IntFieldUpdateOperationsInput | number
    pharmacy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    prescribedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput
  }

  export type PrescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    refills?: IntFieldUpdateOperationsInput | number
    refillsRemaining?: IntFieldUpdateOperationsInput | number
    pharmacy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    prescribedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionCreateManyInput = {
    id?: string
    patientId: string
    doctorId: string
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    refills?: number
    refillsRemaining?: number
    pharmacy?: string | null
    status?: $Enums.PrescriptionStatus
    prescribedOn?: Date | string
    expiresOn?: Date | string | null
    updatedAt?: Date | string
  }

  export type PrescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    refills?: IntFieldUpdateOperationsInput | number
    refillsRemaining?: IntFieldUpdateOperationsInput | number
    pharmacy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    prescribedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    refills?: IntFieldUpdateOperationsInput | number
    refillsRemaining?: IntFieldUpdateOperationsInput | number
    pharmacy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    prescribedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabTestCreateInput = {
    id?: string
    testName: string
    testCode?: string | null
    status?: $Enums.LabTestStatus
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    results?: string | null
    notes?: string | null
    priority?: $Enums.TestPriority
    fasting?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutLabTestsInput
    orderedBy: DoctorCreateNestedOneWithoutLabOrdersInput
  }

  export type LabTestUncheckedCreateInput = {
    id?: string
    patientId: string
    orderedById: string
    testName: string
    testCode?: string | null
    status?: $Enums.LabTestStatus
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    results?: string | null
    notes?: string | null
    priority?: $Enums.TestPriority
    fasting?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabTestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLabTestStatusFieldUpdateOperationsInput | $Enums.LabTestStatus
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTestPriorityFieldUpdateOperationsInput | $Enums.TestPriority
    fasting?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutLabTestsNestedInput
    orderedBy?: DoctorUpdateOneRequiredWithoutLabOrdersNestedInput
  }

  export type LabTestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    orderedById?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLabTestStatusFieldUpdateOperationsInput | $Enums.LabTestStatus
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTestPriorityFieldUpdateOperationsInput | $Enums.TestPriority
    fasting?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabTestCreateManyInput = {
    id?: string
    patientId: string
    orderedById: string
    testName: string
    testCode?: string | null
    status?: $Enums.LabTestStatus
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    results?: string | null
    notes?: string | null
    priority?: $Enums.TestPriority
    fasting?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabTestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLabTestStatusFieldUpdateOperationsInput | $Enums.LabTestStatus
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTestPriorityFieldUpdateOperationsInput | $Enums.TestPriority
    fasting?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabTestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    orderedById?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLabTestStatusFieldUpdateOperationsInput | $Enums.LabTestStatus
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTestPriorityFieldUpdateOperationsInput | $Enums.TestPriority
    fasting?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthMetricCreateInput = {
    id?: string
    type: $Enums.MetricType
    value: string
    unit: string
    recordedAt?: Date | string
    notes?: string | null
    patient: PatientCreateNestedOneWithoutHealthMetricsInput
  }

  export type HealthMetricUncheckedCreateInput = {
    id?: string
    patientId: string
    type: $Enums.MetricType
    value: string
    unit: string
    recordedAt?: Date | string
    notes?: string | null
  }

  export type HealthMetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneRequiredWithoutHealthMetricsNestedInput
  }

  export type HealthMetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    type?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HealthMetricCreateManyInput = {
    id?: string
    patientId: string
    type: $Enums.MetricType
    value: string
    unit: string
    recordedAt?: Date | string
    notes?: string | null
  }

  export type HealthMetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HealthMetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    type?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatSessionCreateInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    topic?: string | null
    patient: PatientCreateNestedOneWithoutChatSessionsInput
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateInput = {
    id?: string
    patientId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    topic?: string | null
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneRequiredWithoutChatSessionsNestedInput
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionCreateManyInput = {
    id?: string
    patientId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    topic?: string | null
  }

  export type ChatSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageCreateInput = {
    id?: string
    content: string
    sentBy: $Enums.MessageSender
    sentAt?: Date | string
    session: ChatSessionCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    sessionId: string
    content: string
    sentBy: $Enums.MessageSender
    sentAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentBy?: EnumMessageSenderFieldUpdateOperationsInput | $Enums.MessageSender
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ChatSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentBy?: EnumMessageSenderFieldUpdateOperationsInput | $Enums.MessageSender
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    sessionId: string
    content: string
    sentBy: $Enums.MessageSender
    sentAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentBy?: EnumMessageSenderFieldUpdateOperationsInput | $Enums.MessageSender
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentBy?: EnumMessageSenderFieldUpdateOperationsInput | $Enums.MessageSender
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    patientName: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    doctorId: string
    patientName: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    doctorId: string
    patientName: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type DoctorNullableScalarRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type PrescriptionListRelationFilter = {
    every?: PrescriptionWhereInput
    some?: PrescriptionWhereInput
    none?: PrescriptionWhereInput
  }

  export type LabTestListRelationFilter = {
    every?: LabTestWhereInput
    some?: LabTestWhereInput
    none?: LabTestWhereInput
  }

  export type HealthMetricListRelationFilter = {
    every?: HealthMetricWhereInput
    some?: HealthMetricWhereInput
    none?: HealthMetricWhereInput
  }

  export type ChatSessionListRelationFilter = {
    every?: ChatSessionWhereInput
    some?: ChatSessionWhereInput
    none?: ChatSessionWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HealthMetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    insuranceProvider?: SortOrder
    insuranceNumber?: SortOrder
    emergencyContact?: SortOrder
    emergencyPhone?: SortOrder
    notes?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    insuranceProvider?: SortOrder
    insuranceNumber?: SortOrder
    emergencyContact?: SortOrder
    emergencyPhone?: SortOrder
    notes?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    insuranceProvider?: SortOrder
    insuranceNumber?: SortOrder
    emergencyContact?: SortOrder
    emergencyPhone?: SortOrder
    notes?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AvailabilityListRelationFilter = {
    every?: AvailabilityWhereInput
    some?: AvailabilityWhereInput
    none?: AvailabilityWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type AvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    doctorId?: SortOrder
    specialization?: SortOrder
    qualifications?: SortOrder
    hospital?: SortOrder
    clinic?: SortOrder
    about?: SortOrder
    consultationFee?: SortOrder
    yearsExperience?: SortOrder
    verified?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    calendarId?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    consultationFee?: SortOrder
    yearsExperience?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    doctorId?: SortOrder
    specialization?: SortOrder
    qualifications?: SortOrder
    hospital?: SortOrder
    clinic?: SortOrder
    about?: SortOrder
    consultationFee?: SortOrder
    yearsExperience?: SortOrder
    verified?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    calendarId?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    doctorId?: SortOrder
    specialization?: SortOrder
    qualifications?: SortOrder
    hospital?: SortOrder
    clinic?: SortOrder
    about?: SortOrder
    consultationFee?: SortOrder
    yearsExperience?: SortOrder
    verified?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    calendarId?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    consultationFee?: SortOrder
    yearsExperience?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type AvailabilityDoctorIdDayOfWeekStartTimeCompoundUniqueInput = {
    doctorId: string
    dayOfWeek: number
    startTime: string
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    available?: SortOrder
  }

  export type AvailabilityAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    available?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    available?: SortOrder
  }

  export type AvailabilitySumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type EnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    location?: SortOrder
    duration?: SortOrder
    calendarEventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    location?: SortOrder
    duration?: SortOrder
    calendarEventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    location?: SortOrder
    duration?: SortOrder
    calendarEventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type EnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type EnumPrescriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusFilter<$PrismaModel> | $Enums.PrescriptionStatus
  }

  export type PrescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrder
    refills?: SortOrder
    refillsRemaining?: SortOrder
    pharmacy?: SortOrder
    status?: SortOrder
    prescribedOn?: SortOrder
    expiresOn?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrescriptionAvgOrderByAggregateInput = {
    refills?: SortOrder
    refillsRemaining?: SortOrder
  }

  export type PrescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrder
    refills?: SortOrder
    refillsRemaining?: SortOrder
    pharmacy?: SortOrder
    status?: SortOrder
    prescribedOn?: SortOrder
    expiresOn?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrder
    refills?: SortOrder
    refillsRemaining?: SortOrder
    pharmacy?: SortOrder
    status?: SortOrder
    prescribedOn?: SortOrder
    expiresOn?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrescriptionSumOrderByAggregateInput = {
    refills?: SortOrder
    refillsRemaining?: SortOrder
  }

  export type EnumPrescriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrescriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
  }

  export type EnumLabTestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LabTestStatus | EnumLabTestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabTestStatus[] | ListEnumLabTestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabTestStatus[] | ListEnumLabTestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabTestStatusFilter<$PrismaModel> | $Enums.LabTestStatus
  }

  export type EnumTestPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TestPriority | EnumTestPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TestPriority[] | ListEnumTestPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestPriority[] | ListEnumTestPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTestPriorityFilter<$PrismaModel> | $Enums.TestPriority
  }

  export type LabTestCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    orderedById?: SortOrder
    testName?: SortOrder
    testCode?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    completedDate?: SortOrder
    results?: SortOrder
    notes?: SortOrder
    priority?: SortOrder
    fasting?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabTestMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    orderedById?: SortOrder
    testName?: SortOrder
    testCode?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    completedDate?: SortOrder
    results?: SortOrder
    notes?: SortOrder
    priority?: SortOrder
    fasting?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabTestMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    orderedById?: SortOrder
    testName?: SortOrder
    testCode?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    completedDate?: SortOrder
    results?: SortOrder
    notes?: SortOrder
    priority?: SortOrder
    fasting?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLabTestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LabTestStatus | EnumLabTestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabTestStatus[] | ListEnumLabTestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabTestStatus[] | ListEnumLabTestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabTestStatusWithAggregatesFilter<$PrismaModel> | $Enums.LabTestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLabTestStatusFilter<$PrismaModel>
    _max?: NestedEnumLabTestStatusFilter<$PrismaModel>
  }

  export type EnumTestPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestPriority | EnumTestPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TestPriority[] | ListEnumTestPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestPriority[] | ListEnumTestPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTestPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TestPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTestPriorityFilter<$PrismaModel>
    _max?: NestedEnumTestPriorityFilter<$PrismaModel>
  }

  export type EnumMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeFilter<$PrismaModel> | $Enums.MetricType
  }

  export type HealthMetricCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    recordedAt?: SortOrder
    notes?: SortOrder
  }

  export type HealthMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    recordedAt?: SortOrder
    notes?: SortOrder
  }

  export type HealthMetricMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    recordedAt?: SortOrder
    notes?: SortOrder
  }

  export type EnumMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.MetricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricTypeFilter<$PrismaModel>
    _max?: NestedEnumMetricTypeFilter<$PrismaModel>
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    topic?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    topic?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    topic?: SortOrder
  }

  export type EnumMessageSenderFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageSender | EnumMessageSenderFieldRefInput<$PrismaModel>
    in?: $Enums.MessageSender[] | ListEnumMessageSenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageSender[] | ListEnumMessageSenderFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageSenderFilter<$PrismaModel> | $Enums.MessageSender
  }

  export type ChatSessionScalarRelationFilter = {
    is?: ChatSessionWhereInput
    isNot?: ChatSessionWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    content?: SortOrder
    sentBy?: SortOrder
    sentAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    content?: SortOrder
    sentBy?: SortOrder
    sentAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    content?: SortOrder
    sentBy?: SortOrder
    sentAt?: SortOrder
  }

  export type EnumMessageSenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageSender | EnumMessageSenderFieldRefInput<$PrismaModel>
    in?: $Enums.MessageSender[] | ListEnumMessageSenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageSender[] | ListEnumMessageSenderFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageSenderWithAggregatesFilter<$PrismaModel> | $Enums.MessageSender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageSenderFilter<$PrismaModel>
    _max?: NestedEnumMessageSenderFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type PatientCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type PatientUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type PatientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutPatientInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type LabTestCreateNestedManyWithoutPatientInput = {
    create?: XOR<LabTestCreateWithoutPatientInput, LabTestUncheckedCreateWithoutPatientInput> | LabTestCreateWithoutPatientInput[] | LabTestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutPatientInput | LabTestCreateOrConnectWithoutPatientInput[]
    createMany?: LabTestCreateManyPatientInputEnvelope
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
  }

  export type HealthMetricCreateNestedManyWithoutPatientInput = {
    create?: XOR<HealthMetricCreateWithoutPatientInput, HealthMetricUncheckedCreateWithoutPatientInput> | HealthMetricCreateWithoutPatientInput[] | HealthMetricUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HealthMetricCreateOrConnectWithoutPatientInput | HealthMetricCreateOrConnectWithoutPatientInput[]
    createMany?: HealthMetricCreateManyPatientInputEnvelope
    connect?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
  }

  export type ChatSessionCreateNestedManyWithoutPatientInput = {
    create?: XOR<ChatSessionCreateWithoutPatientInput, ChatSessionUncheckedCreateWithoutPatientInput> | ChatSessionCreateWithoutPatientInput[] | ChatSessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutPatientInput | ChatSessionCreateOrConnectWithoutPatientInput[]
    createMany?: ChatSessionCreateManyPatientInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type LabTestUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<LabTestCreateWithoutPatientInput, LabTestUncheckedCreateWithoutPatientInput> | LabTestCreateWithoutPatientInput[] | LabTestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutPatientInput | LabTestCreateOrConnectWithoutPatientInput[]
    createMany?: LabTestCreateManyPatientInputEnvelope
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
  }

  export type HealthMetricUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<HealthMetricCreateWithoutPatientInput, HealthMetricUncheckedCreateWithoutPatientInput> | HealthMetricCreateWithoutPatientInput[] | HealthMetricUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HealthMetricCreateOrConnectWithoutPatientInput | HealthMetricCreateOrConnectWithoutPatientInput[]
    createMany?: HealthMetricCreateManyPatientInputEnvelope
    connect?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<ChatSessionCreateWithoutPatientInput, ChatSessionUncheckedCreateWithoutPatientInput> | ChatSessionCreateWithoutPatientInput[] | ChatSessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutPatientInput | ChatSessionCreateOrConnectWithoutPatientInput[]
    createMany?: ChatSessionCreateManyPatientInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    upsert?: UserUpsertWithoutPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientInput, UserUpdateWithoutPatientInput>, UserUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type LabTestUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LabTestCreateWithoutPatientInput, LabTestUncheckedCreateWithoutPatientInput> | LabTestCreateWithoutPatientInput[] | LabTestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutPatientInput | LabTestCreateOrConnectWithoutPatientInput[]
    upsert?: LabTestUpsertWithWhereUniqueWithoutPatientInput | LabTestUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LabTestCreateManyPatientInputEnvelope
    set?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    disconnect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    delete?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    update?: LabTestUpdateWithWhereUniqueWithoutPatientInput | LabTestUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LabTestUpdateManyWithWhereWithoutPatientInput | LabTestUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
  }

  export type HealthMetricUpdateManyWithoutPatientNestedInput = {
    create?: XOR<HealthMetricCreateWithoutPatientInput, HealthMetricUncheckedCreateWithoutPatientInput> | HealthMetricCreateWithoutPatientInput[] | HealthMetricUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HealthMetricCreateOrConnectWithoutPatientInput | HealthMetricCreateOrConnectWithoutPatientInput[]
    upsert?: HealthMetricUpsertWithWhereUniqueWithoutPatientInput | HealthMetricUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: HealthMetricCreateManyPatientInputEnvelope
    set?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    disconnect?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    delete?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    connect?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    update?: HealthMetricUpdateWithWhereUniqueWithoutPatientInput | HealthMetricUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: HealthMetricUpdateManyWithWhereWithoutPatientInput | HealthMetricUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: HealthMetricScalarWhereInput | HealthMetricScalarWhereInput[]
  }

  export type ChatSessionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ChatSessionCreateWithoutPatientInput, ChatSessionUncheckedCreateWithoutPatientInput> | ChatSessionCreateWithoutPatientInput[] | ChatSessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutPatientInput | ChatSessionCreateOrConnectWithoutPatientInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutPatientInput | ChatSessionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ChatSessionCreateManyPatientInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutPatientInput | ChatSessionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutPatientInput | ChatSessionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type LabTestUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LabTestCreateWithoutPatientInput, LabTestUncheckedCreateWithoutPatientInput> | LabTestCreateWithoutPatientInput[] | LabTestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutPatientInput | LabTestCreateOrConnectWithoutPatientInput[]
    upsert?: LabTestUpsertWithWhereUniqueWithoutPatientInput | LabTestUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LabTestCreateManyPatientInputEnvelope
    set?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    disconnect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    delete?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    update?: LabTestUpdateWithWhereUniqueWithoutPatientInput | LabTestUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LabTestUpdateManyWithWhereWithoutPatientInput | LabTestUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
  }

  export type HealthMetricUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<HealthMetricCreateWithoutPatientInput, HealthMetricUncheckedCreateWithoutPatientInput> | HealthMetricCreateWithoutPatientInput[] | HealthMetricUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HealthMetricCreateOrConnectWithoutPatientInput | HealthMetricCreateOrConnectWithoutPatientInput[]
    upsert?: HealthMetricUpsertWithWhereUniqueWithoutPatientInput | HealthMetricUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: HealthMetricCreateManyPatientInputEnvelope
    set?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    disconnect?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    delete?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    connect?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    update?: HealthMetricUpdateWithWhereUniqueWithoutPatientInput | HealthMetricUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: HealthMetricUpdateManyWithWhereWithoutPatientInput | HealthMetricUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: HealthMetricScalarWhereInput | HealthMetricScalarWhereInput[]
  }

  export type ChatSessionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ChatSessionCreateWithoutPatientInput, ChatSessionUncheckedCreateWithoutPatientInput> | ChatSessionCreateWithoutPatientInput[] | ChatSessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutPatientInput | ChatSessionCreateOrConnectWithoutPatientInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutPatientInput | ChatSessionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ChatSessionCreateManyPatientInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutPatientInput | ChatSessionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutPatientInput | ChatSessionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDoctorInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type LabTestCreateNestedManyWithoutOrderedByInput = {
    create?: XOR<LabTestCreateWithoutOrderedByInput, LabTestUncheckedCreateWithoutOrderedByInput> | LabTestCreateWithoutOrderedByInput[] | LabTestUncheckedCreateWithoutOrderedByInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutOrderedByInput | LabTestCreateOrConnectWithoutOrderedByInput[]
    createMany?: LabTestCreateManyOrderedByInputEnvelope
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
  }

  export type AvailabilityCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AvailabilityCreateWithoutDoctorInput, AvailabilityUncheckedCreateWithoutDoctorInput> | AvailabilityCreateWithoutDoctorInput[] | AvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutDoctorInput | AvailabilityCreateOrConnectWithoutDoctorInput[]
    createMany?: AvailabilityCreateManyDoctorInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput> | ReviewCreateWithoutDoctorInput[] | ReviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDoctorInput | ReviewCreateOrConnectWithoutDoctorInput[]
    createMany?: ReviewCreateManyDoctorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type LabTestUncheckedCreateNestedManyWithoutOrderedByInput = {
    create?: XOR<LabTestCreateWithoutOrderedByInput, LabTestUncheckedCreateWithoutOrderedByInput> | LabTestCreateWithoutOrderedByInput[] | LabTestUncheckedCreateWithoutOrderedByInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutOrderedByInput | LabTestCreateOrConnectWithoutOrderedByInput[]
    createMany?: LabTestCreateManyOrderedByInputEnvelope
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AvailabilityCreateWithoutDoctorInput, AvailabilityUncheckedCreateWithoutDoctorInput> | AvailabilityCreateWithoutDoctorInput[] | AvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutDoctorInput | AvailabilityCreateOrConnectWithoutDoctorInput[]
    createMany?: AvailabilityCreateManyDoctorInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput> | ReviewCreateWithoutDoctorInput[] | ReviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDoctorInput | ReviewCreateOrConnectWithoutDoctorInput[]
    createMany?: ReviewCreateManyDoctorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    upsert?: UserUpsertWithoutDoctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorInput, UserUpdateWithoutDoctorInput>, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type LabTestUpdateManyWithoutOrderedByNestedInput = {
    create?: XOR<LabTestCreateWithoutOrderedByInput, LabTestUncheckedCreateWithoutOrderedByInput> | LabTestCreateWithoutOrderedByInput[] | LabTestUncheckedCreateWithoutOrderedByInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutOrderedByInput | LabTestCreateOrConnectWithoutOrderedByInput[]
    upsert?: LabTestUpsertWithWhereUniqueWithoutOrderedByInput | LabTestUpsertWithWhereUniqueWithoutOrderedByInput[]
    createMany?: LabTestCreateManyOrderedByInputEnvelope
    set?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    disconnect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    delete?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    update?: LabTestUpdateWithWhereUniqueWithoutOrderedByInput | LabTestUpdateWithWhereUniqueWithoutOrderedByInput[]
    updateMany?: LabTestUpdateManyWithWhereWithoutOrderedByInput | LabTestUpdateManyWithWhereWithoutOrderedByInput[]
    deleteMany?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
  }

  export type AvailabilityUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AvailabilityCreateWithoutDoctorInput, AvailabilityUncheckedCreateWithoutDoctorInput> | AvailabilityCreateWithoutDoctorInput[] | AvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutDoctorInput | AvailabilityCreateOrConnectWithoutDoctorInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutDoctorInput | AvailabilityUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AvailabilityCreateManyDoctorInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutDoctorInput | AvailabilityUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutDoctorInput | AvailabilityUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput> | ReviewCreateWithoutDoctorInput[] | ReviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDoctorInput | ReviewCreateOrConnectWithoutDoctorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutDoctorInput | ReviewUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ReviewCreateManyDoctorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutDoctorInput | ReviewUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutDoctorInput | ReviewUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type LabTestUncheckedUpdateManyWithoutOrderedByNestedInput = {
    create?: XOR<LabTestCreateWithoutOrderedByInput, LabTestUncheckedCreateWithoutOrderedByInput> | LabTestCreateWithoutOrderedByInput[] | LabTestUncheckedCreateWithoutOrderedByInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutOrderedByInput | LabTestCreateOrConnectWithoutOrderedByInput[]
    upsert?: LabTestUpsertWithWhereUniqueWithoutOrderedByInput | LabTestUpsertWithWhereUniqueWithoutOrderedByInput[]
    createMany?: LabTestCreateManyOrderedByInputEnvelope
    set?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    disconnect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    delete?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    update?: LabTestUpdateWithWhereUniqueWithoutOrderedByInput | LabTestUpdateWithWhereUniqueWithoutOrderedByInput[]
    updateMany?: LabTestUpdateManyWithWhereWithoutOrderedByInput | LabTestUpdateManyWithWhereWithoutOrderedByInput[]
    deleteMany?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AvailabilityCreateWithoutDoctorInput, AvailabilityUncheckedCreateWithoutDoctorInput> | AvailabilityCreateWithoutDoctorInput[] | AvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutDoctorInput | AvailabilityCreateOrConnectWithoutDoctorInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutDoctorInput | AvailabilityUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AvailabilityCreateManyDoctorInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutDoctorInput | AvailabilityUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutDoctorInput | AvailabilityUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput> | ReviewCreateWithoutDoctorInput[] | ReviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDoctorInput | ReviewCreateOrConnectWithoutDoctorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutDoctorInput | ReviewUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ReviewCreateManyDoctorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutDoctorInput | ReviewUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutDoctorInput | ReviewUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type DoctorCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<DoctorCreateWithoutAvailabilityInput, DoctorUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAvailabilityInput
    connect?: DoctorWhereUniqueInput
  }

  export type DoctorUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<DoctorCreateWithoutAvailabilityInput, DoctorUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAvailabilityInput
    upsert?: DoctorUpsertWithoutAvailabilityInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutAvailabilityInput, DoctorUpdateWithoutAvailabilityInput>, DoctorUncheckedUpdateWithoutAvailabilityInput>
  }

  export type PatientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type EnumAppointmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentType
  }

  export type PatientUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    upsert?: PatientUpsertWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAppointmentsInput, PatientUpdateWithoutAppointmentsInput>, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    upsert?: DoctorUpsertWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutAppointmentsInput, DoctorUpdateWithoutAppointmentsInput>, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPrescriptionsInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutPrescriptionsInput
    connect?: DoctorWhereUniqueInput
  }

  export type EnumPrescriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.PrescriptionStatus
  }

  export type PatientUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPrescriptionsInput
    upsert?: PatientUpsertWithoutPrescriptionsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPrescriptionsInput, PatientUpdateWithoutPrescriptionsInput>, PatientUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutPrescriptionsInput
    upsert?: DoctorUpsertWithoutPrescriptionsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutPrescriptionsInput, DoctorUpdateWithoutPrescriptionsInput>, DoctorUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PatientCreateNestedOneWithoutLabTestsInput = {
    create?: XOR<PatientCreateWithoutLabTestsInput, PatientUncheckedCreateWithoutLabTestsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutLabTestsInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutLabOrdersInput = {
    create?: XOR<DoctorCreateWithoutLabOrdersInput, DoctorUncheckedCreateWithoutLabOrdersInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutLabOrdersInput
    connect?: DoctorWhereUniqueInput
  }

  export type EnumLabTestStatusFieldUpdateOperationsInput = {
    set?: $Enums.LabTestStatus
  }

  export type EnumTestPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TestPriority
  }

  export type PatientUpdateOneRequiredWithoutLabTestsNestedInput = {
    create?: XOR<PatientCreateWithoutLabTestsInput, PatientUncheckedCreateWithoutLabTestsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutLabTestsInput
    upsert?: PatientUpsertWithoutLabTestsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutLabTestsInput, PatientUpdateWithoutLabTestsInput>, PatientUncheckedUpdateWithoutLabTestsInput>
  }

  export type DoctorUpdateOneRequiredWithoutLabOrdersNestedInput = {
    create?: XOR<DoctorCreateWithoutLabOrdersInput, DoctorUncheckedCreateWithoutLabOrdersInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutLabOrdersInput
    upsert?: DoctorUpsertWithoutLabOrdersInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutLabOrdersInput, DoctorUpdateWithoutLabOrdersInput>, DoctorUncheckedUpdateWithoutLabOrdersInput>
  }

  export type PatientCreateNestedOneWithoutHealthMetricsInput = {
    create?: XOR<PatientCreateWithoutHealthMetricsInput, PatientUncheckedCreateWithoutHealthMetricsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutHealthMetricsInput
    connect?: PatientWhereUniqueInput
  }

  export type EnumMetricTypeFieldUpdateOperationsInput = {
    set?: $Enums.MetricType
  }

  export type PatientUpdateOneRequiredWithoutHealthMetricsNestedInput = {
    create?: XOR<PatientCreateWithoutHealthMetricsInput, PatientUncheckedCreateWithoutHealthMetricsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutHealthMetricsInput
    upsert?: PatientUpsertWithoutHealthMetricsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutHealthMetricsInput, PatientUpdateWithoutHealthMetricsInput>, PatientUncheckedUpdateWithoutHealthMetricsInput>
  }

  export type PatientCreateNestedOneWithoutChatSessionsInput = {
    create?: XOR<PatientCreateWithoutChatSessionsInput, PatientUncheckedCreateWithoutChatSessionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutChatSessionsInput
    connect?: PatientWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type PatientUpdateOneRequiredWithoutChatSessionsNestedInput = {
    create?: XOR<PatientCreateWithoutChatSessionsInput, PatientUncheckedCreateWithoutChatSessionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutChatSessionsInput
    upsert?: PatientUpsertWithoutChatSessionsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutChatSessionsInput, PatientUpdateWithoutChatSessionsInput>, PatientUncheckedUpdateWithoutChatSessionsInput>
  }

  export type ChatMessageUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type EnumMessageSenderFieldUpdateOperationsInput = {
    set?: $Enums.MessageSender
  }

  export type ChatSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    upsert?: ChatSessionUpsertWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutMessagesInput, ChatSessionUpdateWithoutMessagesInput>, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type DoctorCreateNestedOneWithoutReviewsInput = {
    create?: XOR<DoctorCreateWithoutReviewsInput, DoctorUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutReviewsInput
    connect?: DoctorWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DoctorUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<DoctorCreateWithoutReviewsInput, DoctorUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutReviewsInput
    upsert?: DoctorUpsertWithoutReviewsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutReviewsInput, DoctorUpdateWithoutReviewsInput>, DoctorUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumPrescriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusFilter<$PrismaModel> | $Enums.PrescriptionStatus
  }

  export type NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrescriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumLabTestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LabTestStatus | EnumLabTestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabTestStatus[] | ListEnumLabTestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabTestStatus[] | ListEnumLabTestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabTestStatusFilter<$PrismaModel> | $Enums.LabTestStatus
  }

  export type NestedEnumTestPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TestPriority | EnumTestPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TestPriority[] | ListEnumTestPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestPriority[] | ListEnumTestPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTestPriorityFilter<$PrismaModel> | $Enums.TestPriority
  }

  export type NestedEnumLabTestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LabTestStatus | EnumLabTestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabTestStatus[] | ListEnumLabTestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabTestStatus[] | ListEnumLabTestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabTestStatusWithAggregatesFilter<$PrismaModel> | $Enums.LabTestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLabTestStatusFilter<$PrismaModel>
    _max?: NestedEnumLabTestStatusFilter<$PrismaModel>
  }

  export type NestedEnumTestPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestPriority | EnumTestPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TestPriority[] | ListEnumTestPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestPriority[] | ListEnumTestPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTestPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TestPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTestPriorityFilter<$PrismaModel>
    _max?: NestedEnumTestPriorityFilter<$PrismaModel>
  }

  export type NestedEnumMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeFilter<$PrismaModel> | $Enums.MetricType
  }

  export type NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.MetricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricTypeFilter<$PrismaModel>
    _max?: NestedEnumMetricTypeFilter<$PrismaModel>
  }

  export type NestedEnumMessageSenderFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageSender | EnumMessageSenderFieldRefInput<$PrismaModel>
    in?: $Enums.MessageSender[] | ListEnumMessageSenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageSender[] | ListEnumMessageSenderFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageSenderFilter<$PrismaModel> | $Enums.MessageSender
  }

  export type NestedEnumMessageSenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageSender | EnumMessageSenderFieldRefInput<$PrismaModel>
    in?: $Enums.MessageSender[] | ListEnumMessageSenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageSender[] | ListEnumMessageSenderFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageSenderWithAggregatesFilter<$PrismaModel> | $Enums.MessageSender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageSenderFilter<$PrismaModel>
    _max?: NestedEnumMessageSenderFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type PatientCreateWithoutUserInput = {
    id?: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    labTests?: LabTestCreateNestedManyWithoutPatientInput
    healthMetrics?: HealthMetricCreateNestedManyWithoutPatientInput
    chatSessions?: ChatSessionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    id?: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    labTests?: LabTestUncheckedCreateNestedManyWithoutPatientInput
    healthMetrics?: HealthMetricUncheckedCreateNestedManyWithoutPatientInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type DoctorCreateWithoutUserInput = {
    id?: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
    labOrders?: LabTestCreateNestedManyWithoutOrderedByInput
    availability?: AvailabilityCreateNestedManyWithoutDoctorInput
    reviews?: ReviewCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutUserInput = {
    id?: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    labOrders?: LabTestUncheckedCreateNestedManyWithoutOrderedByInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutUserInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type PatientUpsertWithoutUserInput = {
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    labTests?: LabTestUpdateManyWithoutPatientNestedInput
    healthMetrics?: HealthMetricUpdateManyWithoutPatientNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    labTests?: LabTestUncheckedUpdateManyWithoutPatientNestedInput
    healthMetrics?: HealthMetricUncheckedUpdateManyWithoutPatientNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutUserInput = {
    update: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
    labOrders?: LabTestUpdateManyWithoutOrderedByNestedInput
    availability?: AvailabilityUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    labOrders?: LabTestUncheckedUpdateManyWithoutOrderedByNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserCreateWithoutPatientInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    doctor?: DoctorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatientInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateWithoutPatientInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    type?: $Enums.AppointmentType
    reason?: string | null
    notes?: string | null
    location?: string | null
    duration: number
    calendarEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: string
    doctorId: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    type?: $Enums.AppointmentType
    reason?: string | null
    notes?: string | null
    location?: string | null
    duration: number
    calendarEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutPatientInput = {
    id?: string
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    refills?: number
    refillsRemaining?: number
    pharmacy?: string | null
    status?: $Enums.PrescriptionStatus
    prescribedOn?: Date | string
    expiresOn?: Date | string | null
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutPrescriptionsInput
  }

  export type PrescriptionUncheckedCreateWithoutPatientInput = {
    id?: string
    doctorId: string
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    refills?: number
    refillsRemaining?: number
    pharmacy?: string | null
    status?: $Enums.PrescriptionStatus
    prescribedOn?: Date | string
    expiresOn?: Date | string | null
    updatedAt?: Date | string
  }

  export type PrescriptionCreateOrConnectWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionCreateManyPatientInputEnvelope = {
    data: PrescriptionCreateManyPatientInput | PrescriptionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type LabTestCreateWithoutPatientInput = {
    id?: string
    testName: string
    testCode?: string | null
    status?: $Enums.LabTestStatus
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    results?: string | null
    notes?: string | null
    priority?: $Enums.TestPriority
    fasting?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderedBy: DoctorCreateNestedOneWithoutLabOrdersInput
  }

  export type LabTestUncheckedCreateWithoutPatientInput = {
    id?: string
    orderedById: string
    testName: string
    testCode?: string | null
    status?: $Enums.LabTestStatus
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    results?: string | null
    notes?: string | null
    priority?: $Enums.TestPriority
    fasting?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabTestCreateOrConnectWithoutPatientInput = {
    where: LabTestWhereUniqueInput
    create: XOR<LabTestCreateWithoutPatientInput, LabTestUncheckedCreateWithoutPatientInput>
  }

  export type LabTestCreateManyPatientInputEnvelope = {
    data: LabTestCreateManyPatientInput | LabTestCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type HealthMetricCreateWithoutPatientInput = {
    id?: string
    type: $Enums.MetricType
    value: string
    unit: string
    recordedAt?: Date | string
    notes?: string | null
  }

  export type HealthMetricUncheckedCreateWithoutPatientInput = {
    id?: string
    type: $Enums.MetricType
    value: string
    unit: string
    recordedAt?: Date | string
    notes?: string | null
  }

  export type HealthMetricCreateOrConnectWithoutPatientInput = {
    where: HealthMetricWhereUniqueInput
    create: XOR<HealthMetricCreateWithoutPatientInput, HealthMetricUncheckedCreateWithoutPatientInput>
  }

  export type HealthMetricCreateManyPatientInputEnvelope = {
    data: HealthMetricCreateManyPatientInput | HealthMetricCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type ChatSessionCreateWithoutPatientInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    topic?: string | null
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateWithoutPatientInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    topic?: string | null
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionCreateOrConnectWithoutPatientInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutPatientInput, ChatSessionUncheckedCreateWithoutPatientInput>
  }

  export type ChatSessionCreateManyPatientInputEnvelope = {
    data: ChatSessionCreateManyPatientInput | ChatSessionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientInput = {
    update: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
  }

  export type UserUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    doctor?: DoctorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    endTime?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    reason?: StringNullableFilter<"Appointment"> | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    duration?: IntFilter<"Appointment"> | number
    calendarEventId?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutPatientInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutPatientInput>
  }

  export type PrescriptionScalarWhereInput = {
    AND?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    OR?: PrescriptionScalarWhereInput[]
    NOT?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    id?: StringFilter<"Prescription"> | string
    patientId?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    medicationName?: StringFilter<"Prescription"> | string
    dosage?: StringFilter<"Prescription"> | string
    frequency?: StringFilter<"Prescription"> | string
    duration?: StringFilter<"Prescription"> | string
    instructions?: StringNullableFilter<"Prescription"> | string | null
    refills?: IntFilter<"Prescription"> | number
    refillsRemaining?: IntFilter<"Prescription"> | number
    pharmacy?: StringNullableFilter<"Prescription"> | string | null
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    prescribedOn?: DateTimeFilter<"Prescription"> | Date | string
    expiresOn?: DateTimeNullableFilter<"Prescription"> | Date | string | null
    updatedAt?: DateTimeFilter<"Prescription"> | Date | string
  }

  export type LabTestUpsertWithWhereUniqueWithoutPatientInput = {
    where: LabTestWhereUniqueInput
    update: XOR<LabTestUpdateWithoutPatientInput, LabTestUncheckedUpdateWithoutPatientInput>
    create: XOR<LabTestCreateWithoutPatientInput, LabTestUncheckedCreateWithoutPatientInput>
  }

  export type LabTestUpdateWithWhereUniqueWithoutPatientInput = {
    where: LabTestWhereUniqueInput
    data: XOR<LabTestUpdateWithoutPatientInput, LabTestUncheckedUpdateWithoutPatientInput>
  }

  export type LabTestUpdateManyWithWhereWithoutPatientInput = {
    where: LabTestScalarWhereInput
    data: XOR<LabTestUpdateManyMutationInput, LabTestUncheckedUpdateManyWithoutPatientInput>
  }

  export type LabTestScalarWhereInput = {
    AND?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
    OR?: LabTestScalarWhereInput[]
    NOT?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
    id?: StringFilter<"LabTest"> | string
    patientId?: StringFilter<"LabTest"> | string
    orderedById?: StringFilter<"LabTest"> | string
    testName?: StringFilter<"LabTest"> | string
    testCode?: StringNullableFilter<"LabTest"> | string | null
    status?: EnumLabTestStatusFilter<"LabTest"> | $Enums.LabTestStatus
    scheduledDate?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    completedDate?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    results?: StringNullableFilter<"LabTest"> | string | null
    notes?: StringNullableFilter<"LabTest"> | string | null
    priority?: EnumTestPriorityFilter<"LabTest"> | $Enums.TestPriority
    fasting?: BoolFilter<"LabTest"> | boolean
    createdAt?: DateTimeFilter<"LabTest"> | Date | string
    updatedAt?: DateTimeFilter<"LabTest"> | Date | string
  }

  export type HealthMetricUpsertWithWhereUniqueWithoutPatientInput = {
    where: HealthMetricWhereUniqueInput
    update: XOR<HealthMetricUpdateWithoutPatientInput, HealthMetricUncheckedUpdateWithoutPatientInput>
    create: XOR<HealthMetricCreateWithoutPatientInput, HealthMetricUncheckedCreateWithoutPatientInput>
  }

  export type HealthMetricUpdateWithWhereUniqueWithoutPatientInput = {
    where: HealthMetricWhereUniqueInput
    data: XOR<HealthMetricUpdateWithoutPatientInput, HealthMetricUncheckedUpdateWithoutPatientInput>
  }

  export type HealthMetricUpdateManyWithWhereWithoutPatientInput = {
    where: HealthMetricScalarWhereInput
    data: XOR<HealthMetricUpdateManyMutationInput, HealthMetricUncheckedUpdateManyWithoutPatientInput>
  }

  export type HealthMetricScalarWhereInput = {
    AND?: HealthMetricScalarWhereInput | HealthMetricScalarWhereInput[]
    OR?: HealthMetricScalarWhereInput[]
    NOT?: HealthMetricScalarWhereInput | HealthMetricScalarWhereInput[]
    id?: StringFilter<"HealthMetric"> | string
    patientId?: StringFilter<"HealthMetric"> | string
    type?: EnumMetricTypeFilter<"HealthMetric"> | $Enums.MetricType
    value?: StringFilter<"HealthMetric"> | string
    unit?: StringFilter<"HealthMetric"> | string
    recordedAt?: DateTimeFilter<"HealthMetric"> | Date | string
    notes?: StringNullableFilter<"HealthMetric"> | string | null
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutPatientInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutPatientInput, ChatSessionUncheckedUpdateWithoutPatientInput>
    create: XOR<ChatSessionCreateWithoutPatientInput, ChatSessionUncheckedCreateWithoutPatientInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutPatientInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutPatientInput, ChatSessionUncheckedUpdateWithoutPatientInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutPatientInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutPatientInput>
  }

  export type ChatSessionScalarWhereInput = {
    AND?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    OR?: ChatSessionScalarWhereInput[]
    NOT?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    patientId?: StringFilter<"ChatSession"> | string
    startedAt?: DateTimeFilter<"ChatSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"ChatSession"> | Date | string | null
    topic?: StringNullableFilter<"ChatSession"> | string | null
  }

  export type UserCreateWithoutDoctorInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    patient?: PatientCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoctorInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateWithoutDoctorInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    type?: $Enums.AppointmentType
    reason?: string | null
    notes?: string | null
    location?: string | null
    duration: number
    calendarEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    type?: $Enums.AppointmentType
    reason?: string | null
    notes?: string | null
    location?: string | null
    duration: number
    calendarEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutDoctorInput = {
    id?: string
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    refills?: number
    refillsRemaining?: number
    pharmacy?: string | null
    status?: $Enums.PrescriptionStatus
    prescribedOn?: Date | string
    expiresOn?: Date | string | null
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
  }

  export type PrescriptionUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    refills?: number
    refillsRemaining?: number
    pharmacy?: string | null
    status?: $Enums.PrescriptionStatus
    prescribedOn?: Date | string
    expiresOn?: Date | string | null
    updatedAt?: Date | string
  }

  export type PrescriptionCreateOrConnectWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionCreateManyDoctorInputEnvelope = {
    data: PrescriptionCreateManyDoctorInput | PrescriptionCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type LabTestCreateWithoutOrderedByInput = {
    id?: string
    testName: string
    testCode?: string | null
    status?: $Enums.LabTestStatus
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    results?: string | null
    notes?: string | null
    priority?: $Enums.TestPriority
    fasting?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutLabTestsInput
  }

  export type LabTestUncheckedCreateWithoutOrderedByInput = {
    id?: string
    patientId: string
    testName: string
    testCode?: string | null
    status?: $Enums.LabTestStatus
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    results?: string | null
    notes?: string | null
    priority?: $Enums.TestPriority
    fasting?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabTestCreateOrConnectWithoutOrderedByInput = {
    where: LabTestWhereUniqueInput
    create: XOR<LabTestCreateWithoutOrderedByInput, LabTestUncheckedCreateWithoutOrderedByInput>
  }

  export type LabTestCreateManyOrderedByInputEnvelope = {
    data: LabTestCreateManyOrderedByInput | LabTestCreateManyOrderedByInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilityCreateWithoutDoctorInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    available?: boolean
  }

  export type AvailabilityUncheckedCreateWithoutDoctorInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    available?: boolean
  }

  export type AvailabilityCreateOrConnectWithoutDoctorInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutDoctorInput, AvailabilityUncheckedCreateWithoutDoctorInput>
  }

  export type AvailabilityCreateManyDoctorInputEnvelope = {
    data: AvailabilityCreateManyDoctorInput | AvailabilityCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutDoctorInput = {
    id?: string
    patientName: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientName: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutDoctorInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput>
  }

  export type ReviewCreateManyDoctorInputEnvelope = {
    data: ReviewCreateManyDoctorInput | ReviewCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDoctorInput = {
    update: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type UserUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    patient?: PatientUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutDoctorInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutDoctorInput>
  }

  export type LabTestUpsertWithWhereUniqueWithoutOrderedByInput = {
    where: LabTestWhereUniqueInput
    update: XOR<LabTestUpdateWithoutOrderedByInput, LabTestUncheckedUpdateWithoutOrderedByInput>
    create: XOR<LabTestCreateWithoutOrderedByInput, LabTestUncheckedCreateWithoutOrderedByInput>
  }

  export type LabTestUpdateWithWhereUniqueWithoutOrderedByInput = {
    where: LabTestWhereUniqueInput
    data: XOR<LabTestUpdateWithoutOrderedByInput, LabTestUncheckedUpdateWithoutOrderedByInput>
  }

  export type LabTestUpdateManyWithWhereWithoutOrderedByInput = {
    where: LabTestScalarWhereInput
    data: XOR<LabTestUpdateManyMutationInput, LabTestUncheckedUpdateManyWithoutOrderedByInput>
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutDoctorInput, AvailabilityUncheckedUpdateWithoutDoctorInput>
    create: XOR<AvailabilityCreateWithoutDoctorInput, AvailabilityUncheckedCreateWithoutDoctorInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutDoctorInput, AvailabilityUncheckedUpdateWithoutDoctorInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutDoctorInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AvailabilityScalarWhereInput = {
    AND?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    OR?: AvailabilityScalarWhereInput[]
    NOT?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    id?: StringFilter<"Availability"> | string
    doctorId?: StringFilter<"Availability"> | string
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    available?: BoolFilter<"Availability"> | boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutDoctorInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutDoctorInput, ReviewUncheckedUpdateWithoutDoctorInput>
    create: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutDoctorInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutDoctorInput, ReviewUncheckedUpdateWithoutDoctorInput>
  }

  export type ReviewUpdateManyWithWhereWithoutDoctorInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutDoctorInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    doctorId?: StringFilter<"Review"> | string
    patientName?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type DoctorCreateWithoutAvailabilityInput = {
    id?: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
    user: UserCreateNestedOneWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
    labOrders?: LabTestCreateNestedManyWithoutOrderedByInput
    reviews?: ReviewCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    userId: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    labOrders?: LabTestUncheckedCreateNestedManyWithoutOrderedByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutAvailabilityInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutAvailabilityInput, DoctorUncheckedCreateWithoutAvailabilityInput>
  }

  export type DoctorUpsertWithoutAvailabilityInput = {
    update: XOR<DoctorUpdateWithoutAvailabilityInput, DoctorUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<DoctorCreateWithoutAvailabilityInput, DoctorUncheckedCreateWithoutAvailabilityInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutAvailabilityInput, DoctorUncheckedUpdateWithoutAvailabilityInput>
  }

  export type DoctorUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
    labOrders?: LabTestUpdateManyWithoutOrderedByNestedInput
    reviews?: ReviewUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    labOrders?: LabTestUncheckedUpdateManyWithoutOrderedByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientCreateWithoutAppointmentsInput = {
    id?: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    user: UserCreateNestedOneWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    labTests?: LabTestCreateNestedManyWithoutPatientInput
    healthMetrics?: HealthMetricCreateNestedManyWithoutPatientInput
    chatSessions?: ChatSessionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    userId: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    labTests?: LabTestUncheckedCreateNestedManyWithoutPatientInput
    healthMetrics?: HealthMetricUncheckedCreateNestedManyWithoutPatientInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAppointmentsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
  }

  export type DoctorCreateWithoutAppointmentsInput = {
    id?: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
    user: UserCreateNestedOneWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
    labOrders?: LabTestCreateNestedManyWithoutOrderedByInput
    availability?: AvailabilityCreateNestedManyWithoutDoctorInput
    reviews?: ReviewCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    userId: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    labOrders?: LabTestUncheckedCreateNestedManyWithoutOrderedByInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutAppointmentsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
  }

  export type PatientUpsertWithoutAppointmentsInput = {
    update: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    labTests?: LabTestUpdateManyWithoutPatientNestedInput
    healthMetrics?: HealthMetricUpdateManyWithoutPatientNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    labTests?: LabTestUncheckedUpdateManyWithoutPatientNestedInput
    healthMetrics?: HealthMetricUncheckedUpdateManyWithoutPatientNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutAppointmentsInput = {
    update: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
    labOrders?: LabTestUpdateManyWithoutOrderedByNestedInput
    availability?: AvailabilityUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    labOrders?: LabTestUncheckedUpdateManyWithoutOrderedByNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientCreateWithoutPrescriptionsInput = {
    id?: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    user: UserCreateNestedOneWithoutPatientInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    labTests?: LabTestCreateNestedManyWithoutPatientInput
    healthMetrics?: HealthMetricCreateNestedManyWithoutPatientInput
    chatSessions?: ChatSessionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    userId: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    labTests?: LabTestUncheckedCreateNestedManyWithoutPatientInput
    healthMetrics?: HealthMetricUncheckedCreateNestedManyWithoutPatientInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPrescriptionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
  }

  export type DoctorCreateWithoutPrescriptionsInput = {
    id?: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
    user: UserCreateNestedOneWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    labOrders?: LabTestCreateNestedManyWithoutOrderedByInput
    availability?: AvailabilityCreateNestedManyWithoutDoctorInput
    reviews?: ReviewCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    userId: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    labOrders?: LabTestUncheckedCreateNestedManyWithoutOrderedByInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutPrescriptionsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
  }

  export type PatientUpsertWithoutPrescriptionsInput = {
    update: XOR<PatientUpdateWithoutPrescriptionsInput, PatientUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPrescriptionsInput, PatientUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PatientUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    labTests?: LabTestUpdateManyWithoutPatientNestedInput
    healthMetrics?: HealthMetricUpdateManyWithoutPatientNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    labTests?: LabTestUncheckedUpdateManyWithoutPatientNestedInput
    healthMetrics?: HealthMetricUncheckedUpdateManyWithoutPatientNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutPrescriptionsInput = {
    update: XOR<DoctorUpdateWithoutPrescriptionsInput, DoctorUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutPrescriptionsInput, DoctorUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type DoctorUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    labOrders?: LabTestUpdateManyWithoutOrderedByNestedInput
    availability?: AvailabilityUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    labOrders?: LabTestUncheckedUpdateManyWithoutOrderedByNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientCreateWithoutLabTestsInput = {
    id?: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    user: UserCreateNestedOneWithoutPatientInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    healthMetrics?: HealthMetricCreateNestedManyWithoutPatientInput
    chatSessions?: ChatSessionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutLabTestsInput = {
    id?: string
    userId: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    healthMetrics?: HealthMetricUncheckedCreateNestedManyWithoutPatientInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutLabTestsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutLabTestsInput, PatientUncheckedCreateWithoutLabTestsInput>
  }

  export type DoctorCreateWithoutLabOrdersInput = {
    id?: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
    user: UserCreateNestedOneWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
    availability?: AvailabilityCreateNestedManyWithoutDoctorInput
    reviews?: ReviewCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutLabOrdersInput = {
    id?: string
    userId: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutLabOrdersInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutLabOrdersInput, DoctorUncheckedCreateWithoutLabOrdersInput>
  }

  export type PatientUpsertWithoutLabTestsInput = {
    update: XOR<PatientUpdateWithoutLabTestsInput, PatientUncheckedUpdateWithoutLabTestsInput>
    create: XOR<PatientCreateWithoutLabTestsInput, PatientUncheckedCreateWithoutLabTestsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutLabTestsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutLabTestsInput, PatientUncheckedUpdateWithoutLabTestsInput>
  }

  export type PatientUpdateWithoutLabTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    healthMetrics?: HealthMetricUpdateManyWithoutPatientNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutLabTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    healthMetrics?: HealthMetricUncheckedUpdateManyWithoutPatientNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutLabOrdersInput = {
    update: XOR<DoctorUpdateWithoutLabOrdersInput, DoctorUncheckedUpdateWithoutLabOrdersInput>
    create: XOR<DoctorCreateWithoutLabOrdersInput, DoctorUncheckedCreateWithoutLabOrdersInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutLabOrdersInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutLabOrdersInput, DoctorUncheckedUpdateWithoutLabOrdersInput>
  }

  export type DoctorUpdateWithoutLabOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
    availability?: AvailabilityUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutLabOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientCreateWithoutHealthMetricsInput = {
    id?: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    user: UserCreateNestedOneWithoutPatientInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    labTests?: LabTestCreateNestedManyWithoutPatientInput
    chatSessions?: ChatSessionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutHealthMetricsInput = {
    id?: string
    userId: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    labTests?: LabTestUncheckedCreateNestedManyWithoutPatientInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutHealthMetricsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutHealthMetricsInput, PatientUncheckedCreateWithoutHealthMetricsInput>
  }

  export type PatientUpsertWithoutHealthMetricsInput = {
    update: XOR<PatientUpdateWithoutHealthMetricsInput, PatientUncheckedUpdateWithoutHealthMetricsInput>
    create: XOR<PatientCreateWithoutHealthMetricsInput, PatientUncheckedCreateWithoutHealthMetricsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutHealthMetricsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutHealthMetricsInput, PatientUncheckedUpdateWithoutHealthMetricsInput>
  }

  export type PatientUpdateWithoutHealthMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    labTests?: LabTestUpdateManyWithoutPatientNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutHealthMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    labTests?: LabTestUncheckedUpdateManyWithoutPatientNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutChatSessionsInput = {
    id?: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    user: UserCreateNestedOneWithoutPatientInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    labTests?: LabTestCreateNestedManyWithoutPatientInput
    healthMetrics?: HealthMetricCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutChatSessionsInput = {
    id?: string
    userId: string
    patientId: string
    dateOfBirth?: Date | string | null
    address?: string | null
    insuranceProvider?: string | null
    insuranceNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    labTests?: LabTestUncheckedCreateNestedManyWithoutPatientInput
    healthMetrics?: HealthMetricUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutChatSessionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutChatSessionsInput, PatientUncheckedCreateWithoutChatSessionsInput>
  }

  export type ChatMessageCreateWithoutSessionInput = {
    id?: string
    content: string
    sentBy: $Enums.MessageSender
    sentAt?: Date | string
  }

  export type ChatMessageUncheckedCreateWithoutSessionInput = {
    id?: string
    content: string
    sentBy: $Enums.MessageSender
    sentAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageCreateManySessionInputEnvelope = {
    data: ChatMessageCreateManySessionInput | ChatMessageCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutChatSessionsInput = {
    update: XOR<PatientUpdateWithoutChatSessionsInput, PatientUncheckedUpdateWithoutChatSessionsInput>
    create: XOR<PatientCreateWithoutChatSessionsInput, PatientUncheckedCreateWithoutChatSessionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutChatSessionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutChatSessionsInput, PatientUncheckedUpdateWithoutChatSessionsInput>
  }

  export type PatientUpdateWithoutChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    labTests?: LabTestUpdateManyWithoutPatientNestedInput
    healthMetrics?: HealthMetricUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    labTests?: LabTestUncheckedUpdateManyWithoutPatientNestedInput
    healthMetrics?: HealthMetricUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSessionInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSessionInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    sessionId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    sentBy?: EnumMessageSenderFilter<"ChatMessage"> | $Enums.MessageSender
    sentAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatSessionCreateWithoutMessagesInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    topic?: string | null
    patient: PatientCreateNestedOneWithoutChatSessionsInput
  }

  export type ChatSessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    patientId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    topic?: string | null
  }

  export type ChatSessionCreateOrConnectWithoutMessagesInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
  }

  export type ChatSessionUpsertWithoutMessagesInput = {
    update: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatSessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneRequiredWithoutChatSessionsNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorCreateWithoutReviewsInput = {
    id?: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
    user: UserCreateNestedOneWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
    labOrders?: LabTestCreateNestedManyWithoutOrderedByInput
    availability?: AvailabilityCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    doctorId: string
    specialization: string
    qualifications?: string | null
    hospital?: string | null
    clinic?: string | null
    about?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    yearsExperience?: number | null
    verified?: boolean
    rating?: number | null
    reviewCount?: number
    calendarId?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    labOrders?: LabTestUncheckedCreateNestedManyWithoutOrderedByInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutReviewsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutReviewsInput, DoctorUncheckedCreateWithoutReviewsInput>
  }

  export type DoctorUpsertWithoutReviewsInput = {
    update: XOR<DoctorUpdateWithoutReviewsInput, DoctorUncheckedUpdateWithoutReviewsInput>
    create: XOR<DoctorCreateWithoutReviewsInput, DoctorUncheckedCreateWithoutReviewsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutReviewsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutReviewsInput, DoctorUncheckedUpdateWithoutReviewsInput>
  }

  export type DoctorUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
    labOrders?: LabTestUpdateManyWithoutOrderedByNestedInput
    availability?: AvailabilityUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    labOrders?: LabTestUncheckedUpdateManyWithoutOrderedByNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type AppointmentCreateManyPatientInput = {
    id?: string
    doctorId: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    type?: $Enums.AppointmentType
    reason?: string | null
    notes?: string | null
    location?: string | null
    duration: number
    calendarEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionCreateManyPatientInput = {
    id?: string
    doctorId: string
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    refills?: number
    refillsRemaining?: number
    pharmacy?: string | null
    status?: $Enums.PrescriptionStatus
    prescribedOn?: Date | string
    expiresOn?: Date | string | null
    updatedAt?: Date | string
  }

  export type LabTestCreateManyPatientInput = {
    id?: string
    orderedById: string
    testName: string
    testCode?: string | null
    status?: $Enums.LabTestStatus
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    results?: string | null
    notes?: string | null
    priority?: $Enums.TestPriority
    fasting?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HealthMetricCreateManyPatientInput = {
    id?: string
    type: $Enums.MetricType
    value: string
    unit: string
    recordedAt?: Date | string
    notes?: string | null
  }

  export type ChatSessionCreateManyPatientInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    topic?: string | null
  }

  export type AppointmentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    refills?: IntFieldUpdateOperationsInput | number
    refillsRemaining?: IntFieldUpdateOperationsInput | number
    pharmacy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    prescribedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    refills?: IntFieldUpdateOperationsInput | number
    refillsRemaining?: IntFieldUpdateOperationsInput | number
    pharmacy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    prescribedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    refills?: IntFieldUpdateOperationsInput | number
    refillsRemaining?: IntFieldUpdateOperationsInput | number
    pharmacy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    prescribedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabTestUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLabTestStatusFieldUpdateOperationsInput | $Enums.LabTestStatus
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTestPriorityFieldUpdateOperationsInput | $Enums.TestPriority
    fasting?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderedBy?: DoctorUpdateOneRequiredWithoutLabOrdersNestedInput
  }

  export type LabTestUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderedById?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLabTestStatusFieldUpdateOperationsInput | $Enums.LabTestStatus
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTestPriorityFieldUpdateOperationsInput | $Enums.TestPriority
    fasting?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabTestUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderedById?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLabTestStatusFieldUpdateOperationsInput | $Enums.LabTestStatus
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTestPriorityFieldUpdateOperationsInput | $Enums.TestPriority
    fasting?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthMetricUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HealthMetricUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HealthMetricUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatSessionUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: string
    patientId: string
    date: Date | string
    startTime: string
    endTime: string
    status?: $Enums.AppointmentStatus
    type?: $Enums.AppointmentType
    reason?: string | null
    notes?: string | null
    location?: string | null
    duration: number
    calendarEventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionCreateManyDoctorInput = {
    id?: string
    patientId: string
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    refills?: number
    refillsRemaining?: number
    pharmacy?: string | null
    status?: $Enums.PrescriptionStatus
    prescribedOn?: Date | string
    expiresOn?: Date | string | null
    updatedAt?: Date | string
  }

  export type LabTestCreateManyOrderedByInput = {
    id?: string
    patientId: string
    testName: string
    testCode?: string | null
    status?: $Enums.LabTestStatus
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    results?: string | null
    notes?: string | null
    priority?: $Enums.TestPriority
    fasting?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityCreateManyDoctorInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    available?: boolean
  }

  export type ReviewCreateManyDoctorInput = {
    id?: string
    patientName: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    refills?: IntFieldUpdateOperationsInput | number
    refillsRemaining?: IntFieldUpdateOperationsInput | number
    pharmacy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    prescribedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    refills?: IntFieldUpdateOperationsInput | number
    refillsRemaining?: IntFieldUpdateOperationsInput | number
    pharmacy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    prescribedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    refills?: IntFieldUpdateOperationsInput | number
    refillsRemaining?: IntFieldUpdateOperationsInput | number
    pharmacy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    prescribedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabTestUpdateWithoutOrderedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLabTestStatusFieldUpdateOperationsInput | $Enums.LabTestStatus
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTestPriorityFieldUpdateOperationsInput | $Enums.TestPriority
    fasting?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutLabTestsNestedInput
  }

  export type LabTestUncheckedUpdateWithoutOrderedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLabTestStatusFieldUpdateOperationsInput | $Enums.LabTestStatus
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTestPriorityFieldUpdateOperationsInput | $Enums.TestPriority
    fasting?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabTestUncheckedUpdateManyWithoutOrderedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLabTestStatusFieldUpdateOperationsInput | $Enums.LabTestStatus
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTestPriorityFieldUpdateOperationsInput | $Enums.TestPriority
    fasting?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilityUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilityUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManySessionInput = {
    id?: string
    content: string
    sentBy: $Enums.MessageSender
    sentAt?: Date | string
  }

  export type ChatMessageUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentBy?: EnumMessageSenderFieldUpdateOperationsInput | $Enums.MessageSender
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentBy?: EnumMessageSenderFieldUpdateOperationsInput | $Enums.MessageSender
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentBy?: EnumMessageSenderFieldUpdateOperationsInput | $Enums.MessageSender
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.PatientScalarFieldEnum = {
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

exports.Prisma.DoctorScalarFieldEnum = {
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

exports.Prisma.AvailabilityScalarFieldEnum = {
  id: 'id',
  doctorId: 'doctorId',
  dayOfWeek: 'dayOfWeek',
  startTime: 'startTime',
  endTime: 'endTime',
  available: 'available'
};

exports.Prisma.AppointmentScalarFieldEnum = {
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

exports.Prisma.PrescriptionScalarFieldEnum = {
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

exports.Prisma.LabTestScalarFieldEnum = {
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

exports.Prisma.HealthMetricScalarFieldEnum = {
  id: 'id',
  patientId: 'patientId',
  type: 'type',
  value: 'value',
  unit: 'unit',
  recordedAt: 'recordedAt',
  notes: 'notes'
};

exports.Prisma.ChatSessionScalarFieldEnum = {
  id: 'id',
  patientId: 'patientId',
  startedAt: 'startedAt',
  endedAt: 'endedAt',
  topic: 'topic'
};

exports.Prisma.ChatMessageScalarFieldEnum = {
  id: 'id',
  sessionId: 'sessionId',
  content: 'content',
  sentBy: 'sentBy',
  sentAt: 'sentAt'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  doctorId: 'doctorId',
  patientName: 'patientName',
  rating: 'rating',
  comment: 'comment',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserRole = exports.$Enums.UserRole = {
  PATIENT: 'PATIENT',
  DOCTOR: 'DOCTOR',
  ADMIN: 'ADMIN'
};

exports.AppointmentStatus = exports.$Enums.AppointmentStatus = {
  SCHEDULED: 'SCHEDULED',
  CHECKED_IN: 'CHECKED_IN',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
  RESCHEDULED: 'RESCHEDULED',
  WAITING: 'WAITING'
};

exports.AppointmentType = exports.$Enums.AppointmentType = {
  IN_PERSON: 'IN_PERSON',
  TELEMEDICINE: 'TELEMEDICINE'
};

exports.PrescriptionStatus = exports.$Enums.PrescriptionStatus = {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

exports.LabTestStatus = exports.$Enums.LabTestStatus = {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
  IN_PROGRESS: 'IN_PROGRESS'
};

exports.TestPriority = exports.$Enums.TestPriority = {
  NORMAL: 'NORMAL',
  URGENT: 'URGENT',
  STAT: 'STAT'
};

exports.MetricType = exports.$Enums.MetricType = {
  BLOOD_PRESSURE: 'BLOOD_PRESSURE',
  HEART_RATE: 'HEART_RATE',
  WEIGHT: 'WEIGHT',
  BLOOD_GLUCOSE: 'BLOOD_GLUCOSE',
  TEMPERATURE: 'TEMPERATURE',
  OXYGEN_SATURATION: 'OXYGEN_SATURATION',
  OTHER: 'OTHER'
};

exports.MessageSender = exports.$Enums.MessageSender = {
  PATIENT: 'PATIENT',
  AI_DOCTOR: 'AI_DOCTOR'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

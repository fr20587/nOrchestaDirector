import { Schema } from 'mongoose';

export const CompanySchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    code: { type: String },

    name: { type: String },
    organism: { type: String },
    email: { type: String },
    webSite: { type: String },

    REUP: { type: String },
    NIT: { type: String },
    CUPCount: { type: String },
    recipientCUPCount: { type: String },
    branchOfficeCUPCount: { type: String },
    USDCount: { type: String },
    recipientUSDCount: { type: String },
    branchOfficeUSDCount: { type: String },

    address: { type: String },
    country: { ref: 'Company', type: Schema.Types.ObjectId },
    state: { ref: 'Company', type: Schema.Types.ObjectId },
    city: { ref: 'Company', type: Schema.Types.ObjectId },
    postalCode: { type: String },

    CEO_Name: { type: String },
    CEO_IDNumber: { type: String },
    CEO_Phone: { type: String },
    CFO_Name: { type: String },
    CFO_IDNumber: { type: String },
    CFO_Phone: { type: String },

    logo: { type: String },
    logoUrl: { type: String },
  },
  {
    versionKey: false,
  },
);

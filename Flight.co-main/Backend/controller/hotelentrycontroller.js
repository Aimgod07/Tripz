import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import  HotelEntry  from "../models/hotelentryschema.js";
import mongoose from "mongoose";
import _ from "lodash";
import { sendBulkHotelBookingConfirmations } from "../services/emailService.js";

export const addhotelentry = catchAsyncErrors(async (req, res, next) => {
  console.log(req);
  const data = req.body;
  const payload = data?.map((entry) =>
    _.pick(entry, [
      "check_in_date",
      "check_out_date",
      "city",
      "title",
      "first_name",
      "last_name",
      "dob",
      "nationality",
      "country_code",
      "phone",
      "email",
      "purpose",
    ])
  );

  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const hotelEntries = await HotelEntry.insertMany(payload, { session });
    await session.commitTransaction();
    // Send email confirmations after successful booking
    const emailResults = await sendBulkHotelBookingConfirmations(hotelEntries);

    // Log email results for debugging
    console.log("Email confirmation results:", emailResults);

    // Check if any emails failed
    const failedEmails = emailResults.filter((result) => !result.success);

    res.status(201).json({
      success: true,
      hotelEntries,
      emailConfirmation: {
        totalEmails: emailResults.length,
        successfulEmails: emailResults.filter((result) => result.success)
          .length,
        failedEmails: failedEmails.length,
        emailResults: emailResults,
      },
      message:
        failedEmails.length > 0
          ? `Booking created successfully, but ${failedEmails.length} email confirmation(s) failed to send.`
          : "Booking created successfully and confirmation emails sent.",
    });
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
});



export const getAllHotelEntries = catchAsyncErrors(async (req, res, next) => {
    const hotelEntries = await HotelEntry.find();

    if (!hotelEntries || hotelEntries.length === 0) {
        return next(new ErrorHandler("No hotel entries found", 404));
    }

    res.status(200).json({
        success: true,
        hotelEntries
    });
});

export const getHotelEntryById = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new ErrorHandler("Invalid hotel entry ID", 400));
    }

    const hotelEntry = await HotelEntry.findById(id);

    if (!hotelEntry) {
        return next(new ErrorHandler("Hotel entry not found", 404));
    }

    res.status(200).json({
        success: true,
        hotelEntry
    });
});



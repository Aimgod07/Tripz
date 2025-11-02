import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import  ErrorHandler  from "../middlewares/error.js";
import TicketEntry  from "../models/ticketentryschema.js";
import mongoose from "mongoose";
import _ from "lodash";
import { sendBulkBookingConfirmations } from "../services/emailService.js";


export const addTicketEntry = catchAsyncErrors(async (req, res, next) => {
    const data = req.body;

    const tickets = data?.map((ticket) => {
        return _.pick(ticket, ['from_city', 'to_city', 'date', 'first_name', 'last_name', 'email', 'phone', 'country_code', 'purpose_of_travel', 'title', 'nationality'])
    });

    // start transaction
    const session = await mongoose.startSession();
    session.startTransaction();
    
    try {
        const ticketEntry = await TicketEntry.insertMany(tickets, { session });
        await session.commitTransaction();
        
        // Send email confirmations after successful booking
        const emailResults = await sendBulkBookingConfirmations(ticketEntry);
        
        // Log email results for debugging
        console.log('Email confirmation results:', emailResults);
        
        // Check if any emails failed
        const failedEmails = emailResults.filter(result => !result.success);
        
        res.status(201).json({
            success: true,
            ticketEntry,
            emailConfirmation: {
                totalEmails: emailResults.length,
                successfulEmails: emailResults.filter(result => result.success).length,
                failedEmails: failedEmails.length,
                emailResults: emailResults
            },
            message: failedEmails.length > 0 
                ? `Booking created successfully, but ${failedEmails.length} email confirmation(s) failed to send.`
                : 'Booking created successfully and confirmation emails sent.'
        });
        
    } catch (error) {
        await session.abortTransaction();
        throw error;
    } finally {
        session.endSession();
    }
});



export const getAllTicketEntries = catchAsyncErrors(async (req, res, next) => {
    const ticketEntries = await TicketEntry.find();

    if (!ticketEntries || ticketEntries.length === 0) {
        return next(new ErrorHandler("No ticket entries found", 404));
    }

    res.status(200).json({
        success: true,
        ticketEntries
    });
});
export const getTicketEntryById = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new ErrorHandler("Invalid ticket entry ID", 400));
    }

    const ticketEntry = await TicketEntry.findById(id);

    if (!ticketEntry) {
        return next(new ErrorHandler("Ticket entry not found", 404));
    }

    res.status(200).json({
        success: true,
        ticketEntry
    });
});



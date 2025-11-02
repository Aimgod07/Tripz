import mongoose from "mongoose";
import Price from "../models/priceschema.js";
import _ from "lodash";
import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js";



export const addSinglePrice = catchAsyncErrors(async (req, res, next) => {
    const data = _.pick(req.body, ["Id", "basePrice", "discount", "finalPrice"]);

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        // Delete all previous prices
        await Price.deleteMany({}, { session });

        // Add the new price
        const price = await Price.create([data], { session });

        await session.commitTransaction();

        res.status(201).json({
            success: true,
            price: price[0],
            message: "Previous prices deleted and new price added successfully.",
        });
    } catch (error) {
        await session.abortTransaction();
        throw error;
    } finally {
        session.endSession();
    }
});


export const getSinglePrice = catchAsyncErrors(async (req, res, next) => {
    const price = await Price.find({ Id: req.params.id });

    if (!price) {
        return res.status(404).json({
            success: false,
            message: "Price not found",
        });
    }

    res.status(200).json({
        success: true,
        price,
    });
});

export const getAllPrices = catchAsyncErrors(async (req, res, next) => {
    const prices = await Price.find();

    if (!prices || prices.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No prices found",
        });
    }

    res.status(200).json({
        success: true,
        prices,
    });
}

);

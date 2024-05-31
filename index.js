import mongoose from "mongoose";
import { Customer } from "./models/Customer.js";
import dotenv from 'dotenv';
dotenv.config();

const db = mongoose.connect("mongodb://localhost:27017/customercli");

// Add customer
 export const addCustomer = async (customer) => {
  await Customer.create(customer);
  console.info("New Customer Added");
  process.exit(0);
};

// Find customer
export const findCustomer = async (name) => {
  const search = new RegExp(name, "i");
  const customers = await Customer.find({
    $or: [{ firstname: search }, { lastname: search }],
  });
  console.info(customers);
  console.info(`${customers.length} matches`);
  process.exit(0);
};

//Update customer
export const updateCustomer = async (_id, customer) => {
  await Customer.updateOne({ _id }, customer);
  console.info("Customer updated");
  process.exit(0);
};

// Remove customer
export const removeCustomer = async (_id) => {
  await Customer.deleteOne({ _id });
  console.info("Customer Removed");
  process.exit(0);
};

// List all customer
export const listAllCustomer = async () => {
  const customers = await Customer.find();
  console.info(customers);
  console.info(`${customers.length} customers`);
  process.exit(0);
};


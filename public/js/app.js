import { extractEventDetails } from "./email-parser.js";
import { handleFormSubmit } from "./form-handler.js";
import { applyTemplate } from "./template-manager.js";
import { saveFunctionSheet, getFunctionSheets } from "./storage.js";
import { downloadFunctionSheet } from "./download.js";

document.getElementById("emailForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const emailText = document.getElementById("emailInput").value;
  const extractedDetails = await extractEventDetails(emailText);

  console.log("Extracted:", extractedDetails);
});

document.getElementById("manualForm").addEventListener("submit", async (e) => {
  handleFormSubmit(e);
});

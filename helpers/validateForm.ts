import type { FormData } from "../types";

type FormErrors = Partial<Record<keyof FormData, string>>;

const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.firstName) errors.firstName = "First name is required.";
  if (!formData.lastName) errors.lastName = "Last name is required.";
  if (!formData.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid.";
  }
  if (!formData.companyName) errors.companyName = "Company name is required.";
  if (!formData.websiteUrl) {
    errors.websiteUrl = "Website URL is required.";
  } else if (!/^https?:\/\//i.test(formData.websiteUrl)) {
    errors.websiteUrl = "Website URL must start with http or https.";
  }
  if (!formData.selectedOption)
    errors.selectedOption = "Please select an option.";
  if (!formData.message) errors.message = "Message is required.";

  return errors;
};

export default validateForm;

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  websiteUrl: string;
  message: string;
  selectedOption: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  const formatData = {
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    email: formData.email.trim(),
    companyName: formData.companyName.trim(),
    websiteUrl: formData.websiteUrl.trim(),
    message: formData.message.trim(),
    selectedOption: formData.selectedOption.trim(),
  };

  if (!formatData.firstName) errors.firstName = "First name is required.";
  if (!formatData.lastName) errors.lastName = "Last name is required.";
  if (!formatData.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(formatData.email)) {
    errors.email = "Email is invalid.";
  }
  if (!formatData.companyName) errors.companyName = "Company name is required.";
  if (!formatData.websiteUrl) errors.websiteUrl = "Website URL is required.";
  if (!formatData.selectedOption)
    errors.selectedOption = "Please select an option.";
  if (!formatData.message) errors.message = "Message is required.";

  return errors;
};

export default validateForm;

import React, { useState } from "react";
import contactStyles from "./Contact.module.scss";
import Input from "../../Input";
import Dropdown from "../../Select/";
import Button from "../../Button";
import Success from "../../Success";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  websiteUrl: string;
  message: string;
  selectedOption: string;
};

const options = [
  { value: "AWS", label: "AWS" },
  { value: "Azure", label: "Azure" },
  { value: "Google Cloud", label: "Google Cloud" },
  { value: "Render", label: "Render" },
  { value: "Vercel", label: "Vercel" },
  { value: "Others", label: "Others" },
];

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    websiteUrl: "",
    message: "",
    selectedOption: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.companyName)
      newErrors.companyName = "Company name is required.";
    if (!formData.websiteUrl) newErrors.websiteUrl = "Website URL is required.";
    if (!formData.selectedOption)
      newErrors.selectedOption = "Please select an option.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleDropdownChange = (value: string) => {
    handleChange("selectedOption", value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        console.log(formData);
        setSuccess(true);
      }, 5000);
    }
  };

  if (success) {
    return <Success />;
  }

  return (
    <div className={contactStyles.wrapper}>
      <div className={contactStyles.container}>
        <div className={contactStyles.text}>
          <h1>Contact sales</h1>
          <p>Send us a message and we’ll promptly get back to you.</p>
        </div>

        <form onSubmit={handleSubmit} className={contactStyles.form}>
          <div className={contactStyles.nameFields}>
            <Input
              type="text"
              value={formData.firstName}
              onChange={(value) => handleChange("firstName", value)}
              placeholder="First Name"
              error={!!errors.firstName}
              validationText={errors.firstName}
            />
            <Input
              type="text"
              value={formData.lastName}
              onChange={(value) => handleChange("lastName", value)}
              placeholder="Last Name"
              error={!!errors.lastName}
              validationText={errors.lastName}
            />
          </div>

          <Input
            type="text"
            value={formData.email}
            onChange={(value) => handleChange("email", value)}
            placeholder="Email"
            error={!!errors.email}
            validationText={errors.email}
          />
          <Input
            type="text"
            value={formData.companyName}
            onChange={(value) => handleChange("companyName", value)}
            placeholder="Company name"
            error={!!errors.companyName}
            validationText={errors.companyName}
          />
          <Dropdown
            options={options}
            value={formData.selectedOption}
            onChange={handleDropdownChange}
            placeholder="Select an option"
            error={!!errors.selectedOption}
            validationText={errors.selectedOption}
          />
          <Input
            type="text"
            value={formData.websiteUrl}
            onChange={(value) => handleChange("websiteUrl", value)}
            placeholder="Website URL"
            error={!!errors.websiteUrl}
            validationText={errors.websiteUrl}
          />
          <Input
            type="textarea"
            value={formData.message}
            onChange={(value) => handleChange("message", value)}
            placeholder="Message"
            error={!!errors.message}
            validationText={errors.message}
          />
          <Button type="submit" disabled={loading} loading={loading}>
            {loading ? "Sending message..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;

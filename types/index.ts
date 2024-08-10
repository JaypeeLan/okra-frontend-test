export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  websiteUrl: string;
  message: string;
  selectedOption: string;
}

interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: Option[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
  validationText?: string;
}

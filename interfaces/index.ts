// Card component props
export interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}

// Button component props
export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

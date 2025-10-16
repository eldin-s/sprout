import { CheckCircle2 } from "lucide-react";
import React from "react";

const FormSuccess = ({ message }: { message?: string }) => {
  if (!message) return null;

  return (
    <div className="bg-teal-400 text-secondary-foreground p-3 rounded-md">
      <CheckCircle2 />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;

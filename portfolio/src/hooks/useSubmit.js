import { useState } from "react";

export const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (values) => {
    setIsLoading(true);
    try {
      // Simulate an API call
      const res = Math.random() > 0.5 ? { type: "success", message: "Success" } : { type: "error", message: "Error" };
      setResponse(res);
      return res;
    } catch (error) {
      setResponse({ type: "error", message: error.message });
      return { type: "error", message: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  return { submit, isLoading, response };
};
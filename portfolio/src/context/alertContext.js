import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const useAlertContext = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const onOpen = (alert) => setAlert(alert);
  const onClose = () => setAlert(null);

  return (
    <AlertContext.Provider value={{ alert, onOpen, onClose }}>
      {children}
      {alert && (
        <div>
          <p>{alert.message}</p>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </AlertContext.Provider>
  );
};
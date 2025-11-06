import { useState } from 'react';

const useValidation = (plans = [], valueKey = 'defaultValue') => {
  const [invalidFields, setInvalidFields] = useState({});

  const validateDropdowns = () => {
    let isValid = true;
    const invalid = {};

    plans.forEach((plan) => {
      plan.inputs?.forEach((input) => {
        if (
          !input[valueKey] ||
          input[valueKey] === '' ||
          input[valueKey] === input.placeholder
        ) {
          isValid = false;
          invalid[`${plan.id}-${input.label}`] = true;
        }
      });
    });

    setInvalidFields(invalid);
    return isValid;
  };

  // 👇 new helper: clear invalid state for a field when it’s updated
  const clearInvalidField = (fieldKey) => {
    setInvalidFields((prev) => {
      const updated = { ...prev };
      delete updated[fieldKey];
      return updated;
    });
  };

  return { validateDropdowns, invalidFields, clearInvalidField };
};

export default useValidation;

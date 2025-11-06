import { useState } from 'react';

const useValidation = (plans = [], valueKey = 'defaultValue') => {
  const [invalidFields, setInvalidFields] = useState({});

  const validateDropdowns = () => {
    let isValid = true;
    const invalid = {};

    plans.forEach((plan) => {
      plan.inputs?.forEach((input) => {
        const value = input[valueKey];

        // Check if value is empty, null, undefined, or matches placeholder
        const isEmpty =
          !value ||
          value === '' ||
          value === input.placeholder ||
          value === null ||
          value === undefined;

        if (isEmpty) {
          isValid = false;
          invalid[`${plan.id}-${input.label}`] = true;
        }
      });
    });

    setInvalidFields(invalid);
    return isValid;
  };

  // Clear invalid state for a field when it's updated
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

import { useState, useCallback, Dispatch, SetStateAction } from 'react';

export default function useInput<T>(
  initialValue: T
): [
  T,
  (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void,
  Dispatch<SetStateAction<T>>
] {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = useCallback(
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setValue(event.target.value as T);
    },
    []
  );

  return [value, handleChange, setValue];
}

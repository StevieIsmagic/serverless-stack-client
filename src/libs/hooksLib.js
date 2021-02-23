import { useState } from "react";

export function useFormFields(initialState) {
  const [fields, setValue] = useState(initialState);
  //
  return [
    fields,
    function (event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
  ];
}

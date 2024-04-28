import { ErrorMessage, Field } from "formik";

export const FormControl = ({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={name} className="capitalize">
        {name}
      </label>
      <Field
        name={name}
        placeholder={placeholder}
        className="px-4 py-2 border rounded"
      />
      <ErrorMessage
        name={name}
        render={(err) => <span className="text-red-500 text-xs">{err}</span>}
      />
    </div>
  );
};

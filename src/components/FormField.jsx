export const FormField = ({ type, placeholder, name, value, onChange, options }) => {
  if (type === "select") {
    return (
      <select className="bg-gray-100 p-2 rounded focus:outline-gray-400" name={name} value={value} onChange={onChange}>
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="bg-gray-100 p-2 rounded focus:outline-gray-400"
    />
  );
};

export const Button = ({ classProps, label, ...props }) => {
  return (
    <button
      className={classProps ? `btn ${classProps}` : "btn"}
      {...props}
      type="button"
    >
      <span>{label}</span>
    </button>
  );
};

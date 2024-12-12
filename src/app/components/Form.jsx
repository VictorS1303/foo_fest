export default function Form({ children, submitForm }) {
  return (
    <form onSubmit={submitForm} className="flex flex-col gap-5  justify-start">
      {children}
    </form>
  );
}
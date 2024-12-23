interface InputProps {
  label: string;
  valor?: string;
  placeholder: string;
  name: string;
  type: string;
}

export function Input({ label, name, placeholder, type }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="text-sm font-bold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id=""
        placeholder={placeholder}
        className="rounded-lg border border-white/10 outline-none bg-transparent py-2 px-4 w-full placeholder:text-sm placeholder:text-textPrimary-1 font-semibold"
      />
    </div>
  );
}

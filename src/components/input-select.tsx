import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface InputSelectProps {
  label: string;
  options: string[];
}

export function InputSelect({ label, options }: InputSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="text-sm font-bold">
        {label}
      </label>
      <Select>
        <SelectTrigger className="text-white/60 w-full py-3 h-10 px-4 rounded-lg border border-white/10 font-bold hover:bg-white/5">
          <SelectValue placeholder="Selecionar" />
        </SelectTrigger>
        <SelectContent className="bg-brand-1 text-white border-white/10">
          {options.map((optin) => (
            <SelectItem key={optin} value={optin}>
              {optin}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

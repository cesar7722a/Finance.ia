import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type InpurDiaProps = {
  label: string;
};

export function InputDia({ label }: InpurDiaProps) {
  const [date, setDate] = React.useState<Date>();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="text-sm font-bold">
        {label}
      </label>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "justify-start text-left font-bold bg-transparent text-white w-full py-3 h-10 px-4 rounded-lg border border-white/10 hover:bg-white/5 hover:text-white",
              !date &&
                "bg-transparent text-white/80 hover:text-white/80 font-normal"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "P") : <span>Selecionar Dia</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

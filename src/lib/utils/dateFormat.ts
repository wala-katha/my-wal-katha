import { format, isValid } from "date-fns";

interface DateDisplayProps {
  date: Date | string;
}

const DateDisplay = ({ date }: DateDisplayProps) => {
  if (!date) return null;

  const dateObj = typeof date === "string" ? new Date(date) : date;

  // දිනය වලංගු නොවේ නම් කිසිවක් පෙන්වන්නේ නැත (Crash වීම් වැළැක්වීමට)
  if (!isValid(dateObj)) return null;

  // දවස, මාසය සහ අවුරුද්ද වෙන වෙනම Format කර ගැනීම
  const day = format(dateObj, "dd");
  const month = format(dateObj, "MMM");
  const year = format(dateObj, "yyyy");
  const isoString = dateObj.toISOString();

  return (
    <div className="bg-slate-900 p-4 rounded-lg inline-block">
      {/* SEO වලට 100% ගැලපෙන සහ කළු පසුබිමේ ලස්සනට කැපී පෙනෙන ආකාරය */}
      <time dateTime={isoString} className="text-sm tracking-wide">
        <span className="text-amber-400 font-bold">{day}</span>{" "}
        <span className="text-slate-200">{month}</span>,{" "}
        <span className="text-slate-400 text-xs">{year}</span>
      </time>
    </div>
  );
};

export default DateDisplay;

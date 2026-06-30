import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search by weave type..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white
          py-4
          pl-14
          pr-5
          text-lg
          shadow-sm
          transition-all
          duration-300
          outline-none
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      />
    </div>
  );
}

export default SearchBar;
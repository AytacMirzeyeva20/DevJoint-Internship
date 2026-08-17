import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { GrLinkNext } from "react-icons/gr";

export default function Pagination({ page, setPage }) {
  return (
    <div className="flex items-center justify-center gap-5 mt-11 mb-9">
      <button onClick={()=> page > 1 && setPage(page-1)}  className="flex items-center gap-2 bg-blue-950 text-white border border-white/10 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:border-amber-500 disabled:opacity-35 disabled:cursor-not-allowed">
        <IoMdArrowBack size={18} /> Previous
      </button>
      <span className="text-[20px] text-gray-400">
        Səhifə {page}
      </span>
      <button  onClick={()=>setPage(page+1)} className="flex items-center gap-2 bg-blue-950 text-white border border-white/10 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:border-amber-500 disabled:opacity-35 disabled:cursor-not-allowed" >
         Next <GrLinkNext size={16} />
      </button>
    </div>
  );
}
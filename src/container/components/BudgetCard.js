import React from "react";
import { EB_Garamond } from "next/font/google";
import { formatCurrency } from "@/utils/helper";

const Garamond = EB_Garamond({ subsets: ["latin"] });

function BudgetCard({ budget, setBudget }) {
  return (
    <div className="bg-white flex flex-col justify-center border border-solid rounded-2xl shadow-sm md:px-12 px-6 md:py-6 py-4 border-black">
      <div className="font-semibold text-3xl mt-8">Your Budget</div>
      <div className={Garamond.className}>
        <div className="text-4xl font-normal">{formatCurrency(budget)}</div>
      </div>
      <div className="mt-12 flex flex-col gap-y-2 md:mb-16 mb-10">
        <div className="text-base font-normal">Input Your Budget</div>
        <input className="border border-solid border-black rounded-lg md:w-[50%] w-[80%] p-2 shadow-md" type="number" placeholder="Rp 250.000" onChange={(ev) => setBudget(ev.target.value)} />
      </div>
    </div>
  );
}

export default BudgetCard;

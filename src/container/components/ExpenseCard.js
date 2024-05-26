import React from "react";
import { EB_Garamond } from "next/font/google";
import { formatCurrency } from "@/utils/helper";

const Garamond = EB_Garamond({ subsets: ["latin"] });

function ExpenseCard({
  expense,
  setLabel,
  setExpense,
  addMore,
  totalExpense,
  idx,
  prev,
  next,
  length,
  delExpense,
}) {
  return (
    <div className="bg-white flex flex-col justify-center border border-solid rounded-2xl shadow-sm md:px-12 px-6 md:py-6 py-4 border-black">
      <div className="font-semibold text-3xl mt-8">Your Expenses</div>
      <div className={Garamond.className}>
        <div className="text-4xl font-normal">
          {formatCurrency(totalExpense)}
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-y-2 mb-8">
        <div className="flex items-center gap-x-4">
          <div className="text-base font-normal">Input Your Expense</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={`w-4 h-4 ${
              idx !== 1 ? "cursor-pointer hover:fill-red-500 duration-150" : "fill-gray-300"
            }`}
            onClick={idx !== 1 ? delExpense : null}
          >
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-y-2 w-full">
            <input
              className="border border-solid border-black rounded-lg md:w-[50%] w-[70%] p-2 shadow-md"
              type="text"
              placeholder="Biaya Listrik"
              onChange={(ev) => setLabel(ev.target.value)}
              value={expense.label}
            />
            <input
              className="border border-solid border-black rounded-lg md:w-[50%] w-[70%] p-2 shadow-md"
              type="number"
              placeholder="Rp 250.000"
              onChange={(ev) => setExpense(ev.target.value)}
              value={expense.value != 0 ? expense.value : ""}
            />
          </div>
          <div className="flex flex-col gap-y-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={`w-8 h-8 ${
                idx !== 1
                  ? "hover:-translate-y-1 duration-150 fill-black cursor-pointer"
                  : "fill-gray-300"
              }`}
              onClick={idx !== 1 ? prev : null}
            >
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
            <div className="text-lg font-bold">{idx}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={`w-8 h-8 rotate-180 ${
                idx !== length
                  ? "hover:translate-y-1 duration-150 fill-black cursor-pointer"
                  : "fill-gray-300"
              }`}
              onClick={idx !== length ? next : null}
            >
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="flex items-center gap-x-2 cursor-pointer mb-8"
        onClick={() => addMore()}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.75 16.1543C11.336 16.1543 11 15.8183 11 15.4043V8.07727C11 7.66327 11.336 7.32727 11.75 7.32727C12.164 7.32727 12.5 7.66327 12.5 8.07727V15.4043C12.5 15.8183 12.164 16.1543 11.75 16.1543Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.4165 12.4902H8.0835C7.6685 12.4902 7.3335 12.1542 7.3335 11.7402C7.3335 11.3262 7.6685 10.9902 8.0835 10.9902H15.4165C15.8305 10.9902 16.1665 11.3262 16.1665 11.7402C16.1665 12.1542 15.8305 12.4902 15.4165 12.4902Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.064 2.5C4.292 2.5 2.5 4.397 2.5 7.335V16.165C2.5 19.103 4.292 21 7.064 21H16.436C19.209 21 21 19.103 21 16.165V7.335C21 4.397 19.209 2.5 16.436 2.5H7.064ZM16.436 22.5H7.064C3.437 22.5 1 19.954 1 16.165V7.335C1 3.546 3.437 1 7.064 1H16.436C20.063 1 22.5 3.546 22.5 7.335V16.165C22.5 19.954 20.063 22.5 16.436 22.5Z"
            fill="black"
          />
        </svg>
        <div className="text-base font-normal">Add More Expense</div>
      </div>
    </div>
  );
}

export default ExpenseCard;

"use client";
import React, { useState } from "react";
import BudgetCard from "../components/BudgetCard";
import ExpenseCard from "../components/ExpenseCard";
import SolutionCard from "../components/SolutionCard";
import {
  allocateBudgetDivideAndConquer,
  allocateBudgetGreedy,
  runFunction,
} from "@/utils/algorithm";

function Calculate() {
  const [budget, setBudget] = useState(0);
  const [idx, setIdx] = useState(0);
  const [expenses, setExpenses] = useState([{ label: "", value: 0 }]);
  const [isLoading, setIsLoading] = useState(false);
  const [greedyRes, setGreedyRes] = useState(null);
  const [dncRes, setDncRes] = useState(null);

  const totalExpense = expenses.reduce((sum, item) => sum + item.value, 0);

  const addMoreExpense = () => {
    const newExpense = {
      label: "",
      value: 0,
    };
    setExpenses([...expenses, newExpense]);
    setIdx(expenses.length);
  };

  const setLabel = (val) => {
    expenses[idx].label = val;
    setExpenses([...expenses]);
  };

  const setExpense = (val) => {
    expenses[idx].value = parseInt(val, 10);
    setExpenses([...expenses]);
  };

  const handleDeleteExpense = () => {
    expenses.splice(idx, 1);
    setExpenses([...expenses]);
    setIdx(idx - 1);
  };

  const solve = () => {
    setIsLoading(true);
    const resGreed = runFunction(() => allocateBudgetGreedy(budget, expenses));
    const resDnc = runFunction(() =>
      allocateBudgetDivideAndConquer(budget, expenses)
    );
    setGreedyRes(resGreed);
    setDncRes(resDnc);
    setIsLoading(false);
  };

  return (
    <div className="md:p-6 p-4">
      <div className="bg-[#38A1FF] rounded-2xl dark:bg-[#0F172A] md:py-8 py-4 md:px-10 px-4">
        <div className="font-normal text-4xl text-white">Lets Get Started!</div>
        <div className="font-normal text-lg mt-4 text-white w-[80%] mb-6">
          Tell us your budget and expenses below, and we’ll help you to give the
          best and optimal solution for your budgeting using greedy and dnc
          algorithm!
        </div>
        <div className="flex md:flex-row flex-col gap-y-6 gap-x-6">
          <div className="md:w-[50%] flex flex-col justify-between">
            <BudgetCard budget={budget} setBudget={setBudget} />
            <button
              onClick={solve}
              disabled={budget == 0 || expenses.length == 0}
              className="md:flex justify-center hidden bg-white p-2 rounded-3xl w-full border border-solid shadow-md text-base font-semibold border-black hover:bg-black hover:text-white duration-150 transition-all"
            >
              {isLoading ? (
                <svg
                  aria-hidden="true"
                  class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                "Solve!"
              )}
            </button>
          </div>
          <div className="md:w-[50%]">
            <ExpenseCard
              totalExpense={totalExpense}
              expense={expenses[idx]}
              addMore={addMoreExpense}
              setExpense={setExpense}
              setLabel={setLabel}
              idx={idx + 1}
              prev={() => setIdx(idx - 1)}
              next={() => setIdx(idx + 1)}
              length={expenses.length}
              delExpense={handleDeleteExpense}
            />
          </div>
          <button
            onClick={solve}
            disabled={budget == 0 || expenses.length == 0}
            className="md:hidden flex justify-center bg-white p-2 rounded-3xl w-full border border-solid shadow-md text-base font-semibold border-black hover:bg-black hover:text-white duration-150 transition-all"
          >
            {isLoading ? (
              <svg
                aria-hidden="true"
                class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              "Solve!"
            )}
          </button>
        </div>
        <SolutionCard greedyRes={greedyRes} dncRes={dncRes} />
      </div>
    </div>
  );
}

export default Calculate;

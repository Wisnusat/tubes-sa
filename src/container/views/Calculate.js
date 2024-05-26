"use client";
import React, { useState } from "react";
import BudgetCard from "../components/BudgetCard";
import ExpenseCard from "../components/ExpenseCard";

function Calculate() {
  const [budget, setBudget] = useState(0);
  const [idx, setIdx] = useState(0);
  const [expenses, setExpenses] = useState([{ label: "", value: 0 }]);

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

  return (
    <div className="md:p-6 p-4">
      <div className="bg-[#38A1FF] rounded-2xl dark:bg-[#0F172A] py-8 md:px-10 px-6">
        <div className="font-normal text-4xl text-white">Lets Get Started!</div>
        <div className="font-normal text-lg mt-4 text-white w-[80%] mb-6">
          Tell us your budget and expenses below, and we’ll help you to give the
          best and optimal solution for your budgeting using greedy and dnc
          algorithm!
        </div>
        <div className="flex md:flex-row flex-col gap-y-6 gap-x-6">
          <div className="md:w-[50%] flex flex-col justify-between">
            <BudgetCard budget={budget} setBudget={setBudget} />
            <button className="md:flex justify-center hidden bg-white p-2 rounded-3xl w-full border border-solid shadow-md text-base font-semibold border-black hover:bg-black hover:text-white duration-150 transition-all">
              Solve!
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
          <button className="md:hidden flex justify-center bg-white p-2 rounded-3xl w-full border border-solid shadow-md text-base font-semibold border-black hover:bg-black hover:text-white duration-150 transition-all">
            Solve!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculate;

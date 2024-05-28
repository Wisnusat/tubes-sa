import React, { useState } from "react";

function SolutionCard({ greedyRes, dncRes }) {
  const [showGreedComp, setShowGreedComp] = useState(false);
  const [showGreedCon, setGreedCon] = useState(false);
  const [showDncComp, setShowDncComp] = useState(false);
  const [showDncCon, setDncCon] = useState(false);
  return (
    <div
      className={`${
        greedyRes == null && dncRes == null && "h-0 hidden"
      } duration-150 bg-white flex flex-col justify-center border border-solid rounded-2xl shadow-sm md:px-12 px-6 md:py-6 py-4 border-black mt-10`}
    >
      <div className="flex flex-col items-center">
        <div className="font-semibold text-3xl mt-8">Your Best Solution!</div>
        <div className="font-normal text-xl mt-4 md:text-center">
          This is the list of your best and optimal budgeting solution <br />{" "}
          according to our greedy and dnc algorithm
        </div>
      </div>
      <div className="mt-6">
        <div className="font-semibold text-3xl mt-8">
          <li>
            Greedy |{" "}
            <span className="bg-[#38A1FF] p-2 text-lg rounded-3xl mb-1">
              {greedyRes != null && greedyRes.runTime} ms
            </span>
          </li>
          <div className="font-normal text-xl mt-4">
            Expenses:{" "}
            {greedyRes != null &&
              greedyRes.result.map((x) => (
                <li>
                  {x.label}: {x.value}
                </li>
              ))}
            <div className="mt-2">
              Total:{" "}
              {greedyRes != null &&
                greedyRes.result.reduce((sum, item) => sum + item.value, 0)}
            </div>
            <div
              className="flex items-center gap-x-6 mt-7 font-semibold cursor-pointer"
              onClick={() => setShowGreedComp(!showGreedComp)}
            >
              Time Complexity
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={`w-5 h-5 fill-black ${
                  showGreedComp && "rotate-180"
                } duration-150`}
              >
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
              </svg>
            </div>
            {showGreedComp && (
              <div className="text-base mt-1 md:w-[40%] w-full flex gap-x-4">
                <div className="border border-solid border-gray-400 rounded-lg" />
                <div className="flex flex-col gap-y-2">
                  <li>
                    Sorting:{" "}
                    {
                      "expenses.sort((a, b) => a.value - b.value) memiliki kompleksitas waktu O(n log n), di mana n adalah jumlah elemen dalam daftar pengeluaran."
                    }
                  </li>
                  <li>
                    Selection: Iterasi melalui daftar pengeluaran memiliki
                    kompleksitas waktu O(n).
                  </li>
                  Jadi, total kompleksitas waktu untuk algoritma Greedy adalah
                  O(n log n).
                </div>
              </div>
            )}
            <div
              className="flex items-center gap-x-6 mt-4 font-semibold cursor-pointer"
              onClick={() => setGreedCon(!showGreedCon)}
            >
              Conclution
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={`w-5 h-5 fill-black ${
                  showGreedCon && "rotate-180"
                } duration-150`}
              >
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
              </svg>
            </div>
            {showGreedCon && (
              <div className="text-base mt-1 md:w-[40%] w-full flex gap-x-4">
                <div className="border border-solid border-gray-400 rounded-lg" />
                Algoritma Greedy mungkin akan lebih cepat dalam prakteknya
                dibandingkan dengan Divide and Conquer karena algoritma Greedy
                hanya melakukan satu iterasi linear setelah pengurutan,
                sedangkan Divide and Conquer memerlukan pembagian dan
                penggabungan solusi berkali-kali.
              </div>
            )}
          </div>
        </div>
      </div>
      <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
      <div>
        <div className="font-semibold text-3xl">
          <li>
            Divide and Conquer |{" "}
            <span className="bg-[#38A1FF] p-2 text-lg rounded-3xl mb-1">
              {dncRes != null && dncRes.runTime} ms
            </span>
          </li>
          <div className="font-normal text-xl mt-4">
            Expenses:{" "}
            {dncRes != null &&
              dncRes.result.map((x) => (
                <li>
                  {x.label}: {x.value}
                </li>
              ))}
            <div className="mt-2">
              Total:{" "}
              {dncRes != null &&
                dncRes.result.reduce((sum, item) => sum + item.value, 0)}
            </div>
            <div
              className="flex items-center gap-x-6 mt-7 font-semibold cursor-pointer"
              onClick={() => setShowDncComp(!showDncComp)}
            >
              Time Complexity
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={`w-5 h-5 fill-black ${
                  showDncComp && "rotate-180"
                } duration-150`}
              >
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
              </svg>
            </div>
            {showDncComp && (
              <div className="text-base mt-1 md:w-[40%] w-full flex gap-x-4">
                <div className="border border-solid border-gray-400 rounded-lg" />
                <div className="flex flex-col gap-y-2">
                  <li>
                    Pembagian daftar pengeluaran menjadi dua bagian terus
                    menerus hingga mencapai elemen tunggal. Ini memiliki
                    kompleksitas logaritmik O(log n).
                  </li>
                  <li>
                    Untuk setiap pembagian, ada penggabungan solusi yang
                    memerlukan iterasi melalui daftar, dengan kompleksitas O(n).
                  </li>
                  Jadi, total kompleksitas waktu untuk Divide and Conquer adalah
                  O(n log n).
                </div>
              </div>
            )}
            <div
              className="flex items-center gap-x-6 mt-4 font-semibold cursor-pointer"
              onClick={() => setDncCon(!showDncCon)}
            >
              Conclution
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={`w-5 h-5 fill-black ${
                  showDncCon && "rotate-180"
                } duration-150`}
              >
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
              </svg>
            </div>
            {showDncCon && (
              <div className="text-base mt-1 md:w-[40%] w-full flex gap-x-4">
                <div className="border border-solid border-gray-400 rounded-lg" />
                <div className="flex flex-col gap-y-2">
                  <li>
                    Overhead Rekursi: Algoritma Divide and Conquer memiliki
                    overhead tambahan dari panggilan fungsi rekursif yang dapat
                    membuatnya lebih lambat dalam prakteknya, meskipun
                    kompleksitas waktu teoretisnya sama dengan Greedy.
                  </li>
                  <li>
                    Efisiensi Praktis: Algoritma Greedy, setelah pengurutan,
                    hanya melakukan iterasi linear sederhana, yang cenderung
                    lebih cepat dalam implementasi praktis dibandingkan dengan
                    pembagian dan penggabungan berulang.
                  </li>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionCard;

export function allocateBudgetGreedy(budget, expenses) {
    // Mengurutkan daftar pengeluaran berdasarkan nilai terkecil terlebih dahulu
    expenses.sort((a, b) => a.value - b.value);
    
    let allocatedExpenses = []; // Daftar untuk menyimpan pengeluaran yang dipilih
    let remainingBudget = budget; // Anggaran yang tersisa

    // Iterasi melalui daftar pengeluaran
    for (let expense of expenses) {
        // Jika pengeluaran tidak melebihi anggaran yang tersisa, tambahkan ke daftar
        if (expense.value <= remainingBudget) {
            allocatedExpenses.push(expense);
            remainingBudget -= expense.value; // Kurangi anggaran yang tersisa
        }
    }
    return allocatedExpenses; // Kembalikan daftar pengeluaran yang dipilih
}

// ------------------------------------------------------------------------------------------------------------

export function allocateBudgetDivideAndConquer(budget, expenses) {
    // Kasus dasar: Jika tidak ada pengeluaran atau anggaran habis
    if (expenses.length === 0 || budget === 0) {
        return [];
    }

    // Kasus dasar: Jika hanya ada satu pengeluaran dan biaya pengeluaran tersebut tidak melebihi anggaran
    if (expenses.length === 1) {
        return expenses[0].value <= budget ? [expenses[0]] : [];
    }

    const mid = Math.floor(expenses.length / 2); // Menentukan titik tengah dari daftar pengeluaran
    const leftHalf = expenses.slice(0, mid); // Membagi daftar menjadi dua bagian: kiri
    const rightHalf = expenses.slice(mid); // Membagi daftar menjadi dua bagian: kanan

    // Mencari solusi terbaik untuk setiap bagian secara rekursif
    const leftSolution = allocateBudgetDivideAndConquer(budget, leftHalf);
    const remainingBudget = budget - leftSolution.reduce((sum, expense) => sum + expense.value, 0);
    const rightSolution = allocateBudgetDivideAndConquer(remainingBudget, rightHalf);

    // Menggabungkan solusi dari kedua bagian
    const combinedSolution = [...leftSolution, ...rightSolution];
    combinedSolution.sort((a, b) => a.value - b.value); // Mengurutkan solusi gabungan

    // Memotong solusi jika total biaya melebihi anggaran
    while (combinedSolution.reduce((sum, expense) => sum + expense.value, 0) > budget) {
        combinedSolution.pop();
    }

    return combinedSolution; // Kembalikan daftar pengeluaran yang dipilih
}

// ------------------------------------------------------------------------------------------------------------

export function runFunction(func) {
    const start = performance.now();
    const res = func();
    const end = performance.now();
    return { result: res, runTime: end - start };
}
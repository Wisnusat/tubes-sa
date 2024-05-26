export const formatCurrency = (val) => {
  let Rupiah = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });
  return Rupiah.format(val);
};

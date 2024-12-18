export const formatCurrency = (amount: number | string | undefined): string => {
  if (amount === undefined || amount === null || isNaN(Number(amount))) {
    return "$0.00"; // Default value for invalid or missing amounts
  }

  // Convert string to number if needed and format it
  const numberAmount = typeof amount === "string" ? parseFloat(amount) : amount;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2, // limit to two decimal places
  }).format(numberAmount);
};

export const filterDate = (data, date) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.toLocaleString("default", { day: "numeric" });

  console.log(year);
  let filteredData = data.filter(
    (item) =>
      // console.log(new Date(item.date).getFullYear() === year);

      new Date(item.date).toLocaleString("default", { month: "long" }) === month
  );
  //   console.log(filteredData);
  return filteredData;
};

export const filterCheckBox = (data, checkBox, category) => {
  let filteredData = data.filter((item) => {
    return item[category] === checkBox;
  });
  return filteredData;
};

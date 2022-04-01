export const filterCheckBox = (data, checkBox, category, array, action) => {
  array =
    action !== "add"
      ? array.map((element) => {
          return element.filter((item) => item[category] !== checkBox);
        })
      : data.filter((item) => item[category] === checkBox);

  //  data.filter((item) => {
  //   return item[category] === checkBox;
  // });
  return array;
};

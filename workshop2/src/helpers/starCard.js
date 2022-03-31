export const starCard = (data) => {
  if (localStorage.getItem("starred") === null) {
    localStorage.setItem("starred", JSON.stringify([data]));
  } else {
    let starred = JSON.parse(localStorage.getItem("starred"));
    starred.push(data);
    localStorage.setItem("starred", JSON.stringify(starred));
  }
};

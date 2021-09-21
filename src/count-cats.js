export default function countCats(arr) {
  let cats = 0;

  arr.forEach((subArr) => {
    subArr.forEach((el) => {
      if (el === "^^") cats++
    });
  });

  return cats;
}

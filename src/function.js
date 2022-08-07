export const checkingCondition = (valueArr, conditionArr) => {
  let result = valueArr.filter((item) => conditionArr.includes(item));
  return result.length ? true : false;
};

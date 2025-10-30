const usePagination = (page, data) => {
  const limit = 3;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const pageData = data.slice(startIndex, endIndex);

  console.log(pageData);
  return pageData;
};

export default usePagination;

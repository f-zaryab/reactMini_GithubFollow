const paginate = (followers) => {
  // console.log("Data Array in utils: ", followers);

  const itemsPerPage = 9;
  const pages = Math.ceil(followers.length / itemsPerPage);
  // console.log("PerPage:", pages); // 12

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    // console.log(start); // 0, 1, 2, 3,...,11
    const listPerPage = followers.slice(start, start + itemsPerPage);
    // console.log("listPerPage: ", listPerPage); // [{0-item}, {1-item}, {2-item}, {3-item}...{8-item}] => length: always 9

    return listPerPage;
  });
  // console.log(newFollowers); //12 * 9 array 

  return newFollowers;
};

export default paginate;

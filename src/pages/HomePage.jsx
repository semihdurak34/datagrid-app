import React, { useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import ListDatas from "../components/ListDatas";
import Pagination from "../components/Pagination";
import SelectLimit from "../components/selectLimit";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const { datasState } = useSelector((state) => state);
  console.log(datasState.datas);

  const getDatas = function (page, limit) {
    let array = [];
    for (
      let i = (page - 1) * limit;
      i < page * limit && datasState.datas[i];
      i++
    ) {
      array.push(datasState.datas[i]);
      console.log(array);
    }

    return array;
  };

  const getLength = function () {
    return datasState.datas.length;
  };

  let totalPage = Math.ceil(getLength() / limit);
  let pageNo;
  if (page <= totalPage) {
    pageNo = page;
  } else {
    setPage(totalPage);
    pageNo = page;
  }

  function handlePageChange(value) {
    if (value === "&laquo" || value === "...") {
      setPage(1);
    } else if (value === "&lsaquo") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === "&rsaquo") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === "&raquo" || value === "...") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  }

  return (
    <div className="container homepage">
      <Header />
      <ListDatas datas={getDatas(page, limit)} />
      <div className="pagination-container">
        <SelectLimit onLimitChange={setLimit} />
        <Pagination
          totalPage={totalPage}
          page={pageNo}
          limit={limit}
          siblings={1}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import ListDatas from "../components/ListDatas";
import Pagination from "../components/Pagination";
import SelectLimit from "../components/selectLimit";
import { Link } from "react-router-dom";
import AddData from "./AddData";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const { datasState } = useSelector((state) => state);
  const [searchText, setSearchText] = useState("");
  const [filteredDatas, setFilteredDatas] = useState(datasState.datas);
  const [sorted, setSorted] = useState({ sorted: "link", reversed: false });
  console.log(datasState.datas);

  const [isActiveModal, setIsActiveModal] = useState(false);

  const sortByLink = () => {
    setSorted({ sorted: "link", reversed: !sorted.reversed });
    const datasCopy = [...filteredDatas];
    datasCopy.sort((a, b) => {
      const fullLinkA = a.link;
      const fullLinkB = b.link;
      if (sorted.reversed) {
        return fullLinkB.localeCompare(fullLinkA);
      }
      return fullLinkA.localeCompare(fullLinkB);
    });
    setFilteredDatas(datasCopy);
  };
  const sortByCategory = () => {
    setSorted({ sorted: "categoryId", reversed: !sorted.reversed });
    const categoryCopy = [...filteredDatas];
    categoryCopy.sort((a, b) => {
      if (sorted.reversed) {
        return a.categoryId - b.categoryId;
      }
      return b.categoryId - a.categoryId;
    });
    setFilteredDatas(categoryCopy);
  };

  // search işlemi
  useEffect(() => {
    console.log(searchText);
    const tempArray = datasState.datas.filter((item) =>
      item.link.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredDatas(tempArray);
  }, [searchText, page, limit]);

  const getDatas = function (page, limit) {
    let array = [];
    for (
      let i = (page - 1) * limit;
      i < page * limit && filteredDatas[i];
      i++
    ) {
      array.push(filteredDatas[i]);
      console.log(array);
    }

    return array;
  };

  const getLength = function () {
    return filteredDatas.length;
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

  console.log("setIsActiveModal", isActiveModal);

  return (
    <div className={`homepage`}>
      <Header />
      <div className="window1">
        <div className="search-add">
          <div className="searchInput">
            <input
              type="text"
              className="form-control"
              placeholder="Search objects..."
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </div>
          <div>
            <button
              className="addbutton"
              onClick={() => setIsActiveModal(true)}
            >
              <span className="plus-sign">+</span> Yeni Hesap Ekle
            </button>
          </div>
        </div>
        <div className="table-body">
          <div className="list-data">
            <ListDatas
              datas={getDatas(page, limit)}
              filteredDatas={filteredDatas}
              setFilteredDatas={setFilteredDatas}
              searchText={searchText}
              setSearchText={setSearchText}
              sortByLink={sortByLink}
              sortByCategory={sortByCategory}
              sorted={sorted}
            />
          </div>
          <div className="pegination pagination-container pegilimit">
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
      </div>
      {isActiveModal && (
        <AddData
          isActiveModal={isActiveModal}
          setIsActiveModal={setIsActiveModal}
        />
      )}
    </div>
  );
};

export default HomePage;

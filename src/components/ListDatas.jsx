import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const ListDatas = (props) => {
  const [searchText, setSearchText] = useState("");
  const [filteredDatas, setFilteredDatas] = useState(props.datas);
  const { categoriesState } = useSelector((state) => state);
  // search işlemi

  useEffect(() => {
    console.log(searchText);
    const tempArray = props.datas.filter((item) =>
      item.link.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredDatas(tempArray);
  });
  return (
    <div className=" table">
      <div className="top-title">
        <div className="searchInput">
          <input
            type="text"
            className="form-control"
            placeholder="Aramak İstediğiniz Başlığı Girin"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>
        <Link to={"/add-data"} className="addbutton">
          <span className="plus-sign">+</span> Yeni Hesap Ekle
        </Link>
      </div>
      <table className="table table-striped text-left table-hover table-bordered">
        <thead>
          <tr>
            <th className="p-3" scope="col">
              Sosyal Medya Linki
            </th>
            <th className="p-3" scope="col">
              Sosyal Medya Adı
            </th>
            <th className="p-3" scope="col">
              Açıklama
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredDatas.map((data) => {
            const myCategory = categoriesState.categories.find(
              (item) => item.id === data.categoryId
            );
            return (
              <tr key={data.id}>
                <td>{data.link}</td>
                <td>{myCategory.title}</td>
                <td>{data.comment}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListDatas;

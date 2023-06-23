import React from "react";
import { useSelector } from "react-redux";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ListDatas = (props) => {
  const { categoriesState } = useSelector((state) => state);
  const empty = 15 - props.datas.length;
  const renderEmpty = () => {
    let i = 0;
    let array = [];
    while (i < empty) {
      i++;
      array.push("td");
    }
  };
  const renderArrow = () => {
    if (props.sorted.reversed) {
      return <FaArrowUp />;
    }
    return <FaArrowDown />;
  };

  console.log(empty);
  return (
    <>
      <div className=" table-responsive-xl">
        <div>
          <table className="table text-left table-hover table-bordered">
            <thead>
              <tr>
                <th className="p-3" scope="col" onClick={props.sortByLink}>
                  <span style={{ marginRight: "20px" }}>
                    Sosyal Medya Linki
                  </span>
                  {props.sorted.sorted === "link" ? renderArrow() : null}
                </th>
                <th className="p-3" scope="col" onClick={props.sortByCategory}>
                  <span style={{ marginRight: "20px" }}>Sosyal Medya Adı</span>
                  {props.sorted.sorted === "categoryId" ? renderArrow() : null}
                </th>
                <th className="p-3" scope="col">
                  <span>Açıklama</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {props.datas.map((data) => {
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
              {Array(empty)
                .fill(0)
                .map((_, i) => (
                  <tr className="empty-row">
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListDatas;

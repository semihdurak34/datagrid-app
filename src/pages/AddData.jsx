import React, { useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import api from "../api/api";
import urls from "../api/urls";
import { useDispatch } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";

const AddData = ({ setIsActiveModal, isActiveModal }) => {
  const { categoriesState } = useSelector((state) => state);
  const [form, setForm] = useState({
    id: new Date().getTime(),
    link: "",
    comment: "",
    categoryId: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    /*validation işlemi*/
    if (form.link === "" || form.comment === "") {
      alert("Link ve Açıklama Kısmı Boş Bırakılamaz");
      return;
    }
    const newData = {
      ...form,
      id: new Date().getTime(),
    };
    api
      .post(urls.datas, newData)
      .then((res) => {
        dispatch({
          type: actionTypes.dataActions.ADD_DATAS,
          payload: newData,
        });
        setIsActiveModal(false);
      })
      .catch((err) => {});
  };

  /* api ye request yollama ve stora a dispatch olma */
  console.log(isActiveModal);
  return (
    <div className="add-data">
      <div className="real-window">
        <div>
          <div className="d-flex justify-content-end ">
            <button
              onClick={() => {
                setIsActiveModal(false);
              }}
              type="button"
              className="btn-close  "
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit} className="add-form">
            <div className="mb-3">
              <label
                htmlFor="link"
                className="form-label d-flex justify-content-start"
              >
                Sosyal Medya Linki
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                id="link"
                placeholder=""
                value={form.link}
                onChange={(event) =>
                  setForm({ ...form, link: event.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label d-flex justify-content-start ">
                Sosyal Medya Adı
              </label>
              <select
                className="form-select rounded-pill "
                defaultValue={categoriesState.categories[0].id}
                value={form.categoryId}
                onChange={(event) =>
                  setForm({ ...form, categoryId: Number(event.target.value) })
                }
              >
                {categoriesState.categories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label
                htmlFor="comment"
                className="form-label d-flex justify-content-start font-weight-semibold"
              >
                Açıklama
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                id="comment"
                placeholder=""
                value={form.comment}
                onChange={(event) =>
                  setForm({ ...form, comment: event.target.value })
                }
              />
            </div>
            <div className="buttons">
              <button
                onClick={() => {
                  setIsActiveModal(false);
                }}
                type="button"
                className="cancelButton"
              >
                Vazgeç
              </button>
              <button
                type="submit"
                className="saveButton"
                onClick={handleSubmit}
              >
                Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddData;

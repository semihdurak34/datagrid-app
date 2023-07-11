import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import api from "./api/api";
import urls from "./api/urls";
import { useDispatch } from "react-redux";
import actionTypes from "./redux/actions/actionTypes";
import { useSelector } from "react-redux";
import "./App.css";

import Error from "./pages/Error";

function App() {
  const dispatch = useDispatch();
  const { datasState, categoriesState } = useSelector((state) => state);
  useEffect(() => {
    // fetch işlemi
    dispatch({ type: actionTypes.dataActions.GET_DATAS_START });
    api
      .get(urls.datas)
      .then((res) => {
        dispatch({
          type: actionTypes.dataActions.GET_DATAS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.dataActions.GET_DATAS_FAIL,
          payload: "Serverda Bir Hata Oluştu!",
        });
      });
    // fetch categories
    dispatch({ type: actionTypes.categoryActions.GET_CATEGORIES_START });
    api
      .get(urls.categories)
      .then((res) => {
        dispatch({
          type: actionTypes.categoryActions.GET_CATEGORIES_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.categoryActions.GET_CATEGORIES_FAIL,
          payload: "Serverda Bir Hata Oluştu!",
        });
      });
  }, []);
  // önce constactor daha sonra render çalıştıpğı için burada koşullu bir render yapmam gerekiyor. Hatadan kaçınmak için
  // önce veriler gelmeli daha sonra render olamalı.
  if (datasState.success === false || categoriesState.success === false)
    return null;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

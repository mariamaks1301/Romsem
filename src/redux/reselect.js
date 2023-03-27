import { createSelector } from "@reduxjs/toolkit";

export const userSelector = createSelector( store => store.persistedReducer.user, user => user);
export const productsSlice = createSelector( store => store.persistedReducer.product, product => product);
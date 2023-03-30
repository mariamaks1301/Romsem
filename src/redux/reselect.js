import { createSelector } from "@reduxjs/toolkit";

export const userSelector = createSelector( store => store.persistedReducer.user, user => user);
export const productsSelector = createSelector( store => store.persistedReducer.products, products => products);

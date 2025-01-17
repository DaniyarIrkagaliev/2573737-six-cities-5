import {createAction} from '@reduxjs/toolkit';
import {
  AuthorizationStatus,
  TypeCity, TypeFavorite,
  TypeOfferData,
  TypePlacesInfo,
  TypeReviewInfo,
  UserData
} from '../types/types.ts';


export const setCity = createAction<TypeCity>('SET_CITY');
export const setOffers = createAction<TypePlacesInfo[]>('SET_OFFERS');
export const setOffersByCity = createAction<TypePlacesInfo[]>('SET_OFFERS_BY_CITY');
export const setOffersLoading = createAction<boolean>('OFFERS_LOADING');
export const setError = createAction<string | null>('SET_ERROR');
export const setAuthorization = createAction<AuthorizationStatus>('SET_AUTHORIZATION');
export const setUserData = createAction<UserData>('SET_USER_DATA');
export const setOfferById = createAction <TypeOfferData>('SET_OFFER_BY_ID');
export const setComments = createAction<TypeReviewInfo[]>('SET_COMMENTS');
export const setNearbyOffers = createAction <TypePlacesInfo[]>('SET_NEARBY_OFFERS');
export const getFavoriteOffers = createAction <TypePlacesInfo[]>('GET_FAVORITE_OFFERS');
export const setFavorite = createAction <TypeFavorite>('SET_FAVORITE_OFFERS');

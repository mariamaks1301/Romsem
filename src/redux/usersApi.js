import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    endpoints: (build) => ({
        getUsers: build.query({
            query: (limit = '10')=> `/users?${limit && `_limit=${limit}`}`,
        })
    })
});

export const { useGetUsersQuery } = usersApi;
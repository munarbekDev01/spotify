
import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getSeveralAlbums: build.query<SPOTIFY.GetSpotifyAlbumsResponse, SPOTIFY.GetSpotifyAlbumsRequest>({
      query: () => ({
        url: `/albums`,
        method: "GET",
      }),
      providesTags: ["spotify"]
    // add'дайте название для функции': build.mutation<>({
    //   query: (data) => ({
    //     url: ``,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["напишите название которое дали как тег"],
    // }),
    // delete'дайте название для функции': build.mutation<>({
    //   query: (_id) => ({
    //     url: `${_id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["напишите название которое дали как тег"],
    // }),
    // Update'дайте название для функции': build.mutation<>({
    //   query: ({ _id, newData }) => ({
    //     url: `${_id}`,
    //     method: "PATCH",
    //     body: newData,
    //   }),
    //   invalidatesTags: ["напишите название которое дали как тег"],
    }),
  }),
});

export const {useGetSeveralAlbumsQuery} = api;




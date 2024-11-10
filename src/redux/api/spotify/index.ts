import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getSeveralPlaylist: build.query<SPOTIFY.PlayListResponse, SPOTIFY.PlayListRequest>({
      query: () => ({
        url: `/me/playlists`,
        method: "GET",
      }),
      providesTags: ["spotify"],
    }),
    getPlaylistWithId: build.query<SPOTIFY.PlayListWithIdResponse, SPOTIFY.PlayListWithIdRequest>({
      query: (playlist_id) => ({
        url: `/playlists/${playlist_id}`,
        method: "GET",
      }),
      providesTags: ["spotify"],
    }),
  }),
});

export const {useGetSeveralPlaylistQuery, useLazyGetPlaylistWithIdQuery} = api;


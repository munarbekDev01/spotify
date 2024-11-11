import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPlaylistTracksWithId: build.query<
      SPOTIFY.PlayListTracksWithIdResponse,
      SPOTIFY.PlayListTracksWithIdRequest
    >({
      query: (playlist_id) => ({
        url: `/playlists/${playlist_id}/tracks`,
        method: "GET",
      }),
      providesTags: ["spotify"],
    }),
    getSeveralPlaylist: build.query<
      SPOTIFY.PlayListResponse,
      SPOTIFY.PlayListRequest
    >({
      query: () => ({
        url: `/me/playlists`,
        method: "GET",
      }),
      providesTags: ["spotify"],
    }),
    getPlaylistWithId: build.query<
      SPOTIFY.PlayListWithIdResponse,
      SPOTIFY.PlayListWithIdRequest
    >({
      query: (playlist_id) => ({
        url: `/playlists/${playlist_id}`,
        method: "GET",
      }),
      providesTags: ["spotify"],
    }),
    getTracks: build.query<SPOTIFY.TracksResponse, SPOTIFY.TraksRequest>({
      query: () => ({
        url: `/tracks?ids=7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B`,
        method: "GET",
      }),
      providesTags: ["spotify"],
    }),
    getTrackWithId: build.query<
      SPOTIFY.TrackWithIdResponse,
      SPOTIFY.TrackWithIdRequest
    >({
      query: (track_id) => ({
        url: `/tracks/${track_id}`,
        method: "GET",
      }),
      providesTags: ["spotify"],
    }),
    getArtistsData: build.query<SPOTIFY.ArtistResponse, SPOTIFY.ArtistRequest>({
      query: (artist_id) => ({
        url: `/artists/${artist_id}`,
        method: "GET",
      }),
      providesTags: ["spotify"],
    }),
  }),
});

export const {
  useGetSeveralPlaylistQuery,
  useLazyGetPlaylistWithIdQuery,
  useGetTracksQuery,
  useGetPlaylistTracksWithIdQuery,
  useGetTrackWithIdQuery,
  useGetArtistsDataQuery,
} = api;

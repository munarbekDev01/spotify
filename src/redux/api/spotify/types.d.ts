namespace SPOTIFY {
  type GetSpotifyAuthorizationResponse = {
    message: string;
    accessToken: string;
    accessTokenExpiration: string;
    refreshToken: string;
  }[];
  type GetSpotifyAuthorizationRequest = {
    email: string;
    password: string;
    username: string;
    photo: string;
  };
  type GetSpotifyAlbumsResponse = {
    albums: {
      album_type: string;
      total_tracks: number;
      available_markets: string[];
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: {
        url: string;
        height: number;
        width: number;
      }[];
      name: string;
      release_date: string;
      release_date_precision: string;
      restrictions?: {
        reason: string;
      };
      type: string;
      uri: string;
      artists: {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }[];
      tracks: {
        href: string;
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
        items: {
          artists: {
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
          }[];
          available_markets: string[];
          disc_number: number;
          duration_ms: number;
          explicit: boolean;
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          is_playable: boolean;
          linked_from?: {
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            type: string;
            uri: string;
          };
          restrictions?: {
            reason: string;
          };
          name: string;
          preview_url: string;
          track_number: number;
          type: string;
          uri: string;
          is_local: boolean;
        }[];
      };
      copyrights: {
        text: string;
        type: string;
      }[];
      external_ids: {
        isrc?: string;
        ean?: string;
        upc?: string;
      };
      genres: string[];
      label: string;
      popularity: number;
    }[];
  }
  type GetSpotifyAlbumsRequest = void ;
  
}








































// namespace FILE {
  
  //   type AddFileResponse = {
    //     format: string;
    //     name: string;
    //     url: string;
    //   };
    //   type AddFileRequest = FormData;
    // }







    
    //     type Add'дайте название'Response = {
    //       _id: number;
    //       "дайте название для ключа": string,
    //     }[];
    //     type Add'дайте название'Request = {
    //       "дайте название для ключа": string,
    //     };
    
    // type Delete'дайте название'Response = void;
    // type Delete'дайте название'Request = number;
    
    // type Update'дайте название'Response = {
    //   _id: number;
    //   "дайте название для ключа" : string;
    // };
    // type Update'дайте название'Request = {
    //   _id: number;
    //   newData: {
    //     "дайте название для ключа": string,
    //   };
    // };
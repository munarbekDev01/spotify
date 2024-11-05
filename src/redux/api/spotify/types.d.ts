
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
}

// namespace FILE {
  
//   type AddFileResponse = {
//     format: string;
//     name: string;
//     url: string;
//   };
//   type AddFileRequest = FormData;
// }



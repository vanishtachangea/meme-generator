import { username, password } from "./secrets";

export const RECEIVE_MEMES = "RECEIVE_MEMES";
export const NEW_MEME = "NEW_MEME";

//action creator
function receiveMemes(json) {
  const { memes } = json.data;
  return {
    type: RECEIVE_MEMES,
    memes,
  };
}
function fetchMemesJson() {
  return fetch("https://api.imgflip.com/get_memes").then((response) =>
    response.json()
  );
}

//action creator
export function fetchMemes() {
  //return function which has dispatch option
  return function (dispatch) {
    return fetchMemesJson().then((json) => dispatch(receiveMemes(json)));
  };
}

export function newMeme(meme) {
  return {
    type: NEW_MEME,
    meme,
  };
}

function postMemeJson(params) {
  params["username"] = username;
  params["password"] = password;
  const bodyParams = Object.keys(params)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");
  console.log("bb", bodyParams);
  return fetch("https://api.imgflip.com/caption_image", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: bodyParams,
  }).then((response) => response.json());
}

export function createMeme(new_meme_object) {
  return function (dispatch) {
    return postMemeJson(new_meme_object).then((m) => dispatch(newMeme(m)));
  };
}

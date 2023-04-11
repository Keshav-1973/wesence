import { cleanEnv, str, url } from "envalid";

export default cleanEnv(process.env, {
  REACT_APP_OPENWEATHER_API_BASEURL: url(),
  REACT_APP_OPENWEATHER_API_KEY: str(),
  REACT_APP_GEOLOCATION_API_KEY: str(),
  REACT_APP_GEOLOCATION_GEOCODE_BASEURL: url(),
});

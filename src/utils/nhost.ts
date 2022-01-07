import { NhostClient } from "@nhost/nhost-js";

const nhost = new NhostClient({
  // backendUrl: process.env.REACT_APP_BACKEND_URL,
  backendUrl: 'http://localhost:1337'

});

export { nhost };

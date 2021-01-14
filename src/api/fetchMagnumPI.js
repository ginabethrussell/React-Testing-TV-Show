import axios from "axios";

export const fetchMagnumPI = () => {
    return axios.get(
        "http://api.tvmaze.com/singlesearch/shows?q=magnum&embed=episodes"
      )
      .then(res => {return res})
      .catch(err => {return err})
  };
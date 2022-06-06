import { request } from "https";
import React, { useState, useEffect } from "react";
import { DEFAULT_MIN_VERSION } from "tls";
import axios from "../axios";
import { requests } from "../request";

type movieProps = {
    title?: string;
    name?: string;
    orignal_name?: string;
    backdrop_path?: string;
    overview?: string;
  };
  
  export const Banner = () => {
    const [movie, setMovie] = useState<movieProps>({});
    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(requests.feachNetflixOriginals);
        console.log(request.data.result);
  
        //apiからランダムで値を取得している
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
      }
      fetchData();
    }, []);
    console.log(movie);
  
    // descriptionの切り捨てよう関数
    function truncate(str: any, n: number) {
      // undefinedを弾く
      if (str !== undefined) {
        return str.length > n ? str?.substr(0, n - 1) + "..." : str;
      }
    }
  };
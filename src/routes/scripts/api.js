import axios from "axios";
import { restaurantDatas } from "./data";

const url = "https://api_42delicious.deta.dev/api";

export function listData() {
  axios
    .get(`${url}/list`)
    .then((r) => {
      restaurantDatas.set(r.data.list);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function queryData(q) {
  axios
    .post(`${url}/query`, { query: q })
    .then((r) => {
      restaurantDatas.set(r.data.list);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function sortData(method) {
  axios
    .post(`${url}/sort`, { sort: method })
    .then((r) => {
      restaurantDatas.set(r.data.list);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function provideDirections(start, lat, lng, provider, name) {
  let s_lng = "127.0300294";
  let s_lat = "37.4921415";
  let flag = "서초 클러스터";
  let isMobile = false;
  if (start == "gaepo") {
    s_lng = "127.064795";
    s_lat = "37.4881993";
    flag = "개포 클러스터";
  }

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
  }

  if (provider == "N") {
    //naver map
    let url;
    if (isMobile === true) {
      url = `nmap://route/walk?slat=${s_lat}&slng=${s_lng}&sname=${flag}&dlat=${lat}&dlng=${lng}&dname=${name}`;
    } else {
      url = `https://map.naver.com/v5/directions/${s_lng},${s_lat},${flag},,PLACE_POI/${lng},${lat},${name},,PLACE_POI/-/walk`;
    }
    console.log(url);
    window.open(url);
  } else if (provider == "K") {
    //kakao map
    let url;
    if (isMobile === true) {
      url = `kakaomap://route?sp=${s_lat},${s_lng}&ep=${lat},${lng}&by=FOOT`;
    } else {
      url = `https://map.kakao.com/link/to/${name},${lat},${lng}`;
    }
    window.open(url);
  }
}

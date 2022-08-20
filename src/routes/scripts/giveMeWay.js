export function giveMeWay(lat, lng, provider, name) {
    const s_lng = '127.029776';
    const s_lat = '37.4920509';

    if (provider === 'N') {
        //naver map
        const url = `nmap://route/walk?slat=${s_lat}&slng=${s_lng}&sname=피씨너들의_무덤&dlat=37.4764356&dlng=126.9618302&dname=${name}`
        window.open(url);
    } else if (provider === 'K') {
        //kakao map
        const url = `kakaomap://route?sp=${s_lat},${s_lng}&ep=${lat},${lng}&by=FOOT`
        window.open(url);
    }
}
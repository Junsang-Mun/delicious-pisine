// lat/lng 관련 Note:
// 신경쓸 필요 없음
// DB상 저장이 잘못되어서 lat/lng 이슈는 Main.svelte에서만 확인하면 괜찮음

export function giveMeWay(lat, lng, provider, name) {
    const s_lng = '127.0300294';
    const s_lat = '37.4921415';

    if (provider === 'N') {
        //naver map
        const url = `nmap://route/walk?slat=${s_lat}&slng=${s_lng}&sname=피씨너들의_무덤&dlat=${lat}&dlng=${lng}&dname=${name}`
        window.open(url);
    } else if (provider === 'K') {
        //kakao map
        const url = `kakaomap://route?sp=${s_lat},${s_lng}&ep=${lat},${lng}&by=FOOT`
        window.open(url);
    }
}
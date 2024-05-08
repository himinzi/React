//filename : promise_await.js
//1위 영화제목 출력

const url ='http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240507';

// function successCall(result){
//     //console.log(result.boxOfficeResult);
//     let bOResult = result.boxOfficeResult;
//     let dBOList = bOResult.dailyBoxOfficeList;
//     console.log(dBOList[0]);
//     console.log(dBOList[0].movieNm);
// };

// const svc = {
//     movieName(successCall, errorCall){
//         fetch(url)
//         .then(result => result.json())
//         .then(successCall)
//         .catch(errorCall);
//     }, movie = async(){
//      let result = await fetch(url);
//      result = await result.json();
//      console.log(result.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
//     }
// }

// svc.movieName(result =>{
//      //console.log(result.boxOfficeResult);
//      let bOResult = result.boxOfficeResult;
//      let dBOList = bOResult.dailyBoxOfficeList;
//      //console.log(dBOList[0]);
//      console.log(dBOList[0].movieNm);
// }, err => console.error(err));

export async function movie(){
    const url2 ='http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240507';
    let result = await fetch(url);
    result = await result.json();
    console.log(result.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
}


//export {movie}
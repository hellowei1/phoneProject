import jsonp from 'jsonp'

const parseParams = param => {
  let params = [];
   for(const key in param){
      params.push([key,param[key]]);
   }
   //[[page:1],[id:2]]
   return params.map(value=>value.join("=")).join("&")
  //[page=1,id=2]
  //page=1&id=2
}

export default (url, data, options) => {
  url += (url.indexOf('?') < 0 ? '?' : '&') + parseParams(data);

  return new Promise((resolve,reject) => {
    jsonp(url, options, (err, data) => {
      if (err) {
        reject.err();
      } else {
        resolve(data);
      }
    });
  });
}
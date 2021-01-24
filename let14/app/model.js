export default class Model{
    baseUrl = 'http://newsapi.org/v2/';
    apiKey = '&apiKey=58d7638951004aa495513f5703d744f7'
    topUkraine = 'top-headlines?country=ua';

    constructor(){

    }

    loadNews(){
        const url = this.baseUrl + this.topUkraine + this.apiKey;
        const props = { mode : 'no-cors' };
        fetch(url, props).then(resp => resp.text()).then(data => console.log(data));
    }
}
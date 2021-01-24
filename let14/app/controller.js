import Model from "./model.js";

export default class Controller{
    constructor(){
        this.model = new Model();
        this.model.loadNews();
    }
}
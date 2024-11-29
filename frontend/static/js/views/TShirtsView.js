import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("DashBoard");
    }

    async getHtml(){
        return ``;
    }
}
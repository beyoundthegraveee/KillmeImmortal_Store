
import DashBoard from "./views/DashBoard.js";
import AboutView from "./views/AboutView.js";
import SignInView from "./views/SignInView.js";
import RegisterView from "./views/RegisterView.js";


const navigateTo = url =>{
    history.pushState(null, null,url);
    router();
}




const router = async() => {
    const routes = [
        {path: "/", view: DashBoard},
        {path: "/home", view: DashBoard },
        {path: "/about", view: AboutView},
        {path: "/login", view: SignInView},
        {path: "/register", view: RegisterView}
        // {path: "/t-shirts-and-tops", view: () => TShirtsView },
        // {path: "/hoodies", view: () => HoodiesView },
        // {path: "/outerwear", view: () => OuterwearView },
        // {path: "/bottoms", view: () => console.log("/") },
    ];


    const potentialMatches = routes.map(route => {
        return{
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

    if(!match){
        match ={
            route : routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
    





};

window.addEventListener("popstate", router);


document.addEventListener("DOMContentLoaded", () =>{
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});


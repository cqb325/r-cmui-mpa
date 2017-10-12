import App from './app';

// const Radio = resolve => require(['./pages/radio/index'], resolve);

let routers = {
    path: '/',
    component: App,
    childRoutes: [
        // {path: 'TableForm', getComponent: (next, cb)=>{TableForm((a)=>{cb(null, a.default);});}},
    ]
};

// let links = [];
// getLinks(menu.data);
// function getLinks(items){
//     items.forEach((item)=>{
//         if(item.comp){
//             links.push({
//                 path: item.link,
//                 comp: item.comp
//             });
//         }

//         if(item.children){
//             getLinks(item.children);
//         }
//     });
// }

// // buildRoutes(routers, links);

// function buildRoutes(r, items){
//     r.childRoutes = items.map((item)=>{
//         return buildRoute(item);
//     });
// }

// function buildRoute(item){
//     let r = {
//         path: item.path,
//         getComponent: (nextState, cb)=>{
//             require.ensure([], require=>{
//                 cb(null, require('./pages/'+item.comp).default)
//             });
//         }
//     };
//     return r;
// }

export default routers;

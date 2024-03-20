var L=Object.defineProperty;var T=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var f=(e,t,n)=>(T(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const v=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Notas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="Escribe una nota" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendientes</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="filtro" class="selected" href="#/">Todas</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completadas</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
</footer>`;let N;const P=new Uint8Array(16);function H(){if(!N&&(N=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!N))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return N(P)}const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));function C(e,t=0){return a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]}const U=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),w={randomUUID:U};function F(e,t,n){if(w.randomUUID&&!t&&!e)return w.randomUUID();e=e||{};const i=e.random||(e.rng||H)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){n=n||0;for(let o=0;o<16;++o)t[n+o]=i[o];return t}return C(i)}class h{constructor(t){f(this,"id");f(this,"descripccion");f(this,"estado");f(this,"fecha");this.id=F(),this.descripccion=t,this.estado=!1,this.fecha=new Date}}const u={Todas:"Todas",Completado:"Completado",Pendiente:"Pendiente"},c={notas:[new h("Hacer desayuno"),new h("Hacer almuerzo"),new h("Hacer comida"),new h("Hacer tareas"),new h("Ir a trabajar")],filtros:u.Todas},x=()=>{E(),console.log("NOTAS APP 🦆")},y=()=>{localStorage.setItem("contenedorNotas",JSON.stringify(c))},E=()=>{if(!localStorage.getItem("contenedorNotas"))return;const{notas:e=[],filtros:t=u.Todas}=JSON.parse(localStorage.getItem("contenedorNotas"));c.notas=e,c.filtros=t},A=(e=u.Todas)=>{switch(e){case u.Todas:return[...c.notas];case u.Completado:return c.notas.filter(t=>t.estado);case u.Pendiente:return c.notas.filter(t=>!t.estado);default:throw new Error(`El filtro ${e} no esta disponible`)}},I=e=>{if(!e)throw new Error("No implementado");c.notas.push(new h(e)),y()},O=e=>{c.notas=c.notas.map(t=>(t.id===e&&(t.estado=!t.estado),t)),y()},k=e=>{c.notas=c.notas.filter(t=>t.id!==e),y()},q=()=>{c.notas=c.notas.filter(e=>!e.estado),y()},D=(e=u.Todas)=>{c.filtros=e,y()},M=()=>c.filtros,d={iniciarNotas:x,obtenerNotas:A,cargarNotas:E,anadirNota:I,modificarEstadoNota:O,eliminarNota:k,borrarCompletados:q,establecerFiltro:D,notasFiltro:M};let g;const $=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(`Elemento no encontrado ${e}`);g.innerHTML="",t.forEach(n=>{g.append(R(n))})},R=e=>{let t="";const{descripccion:n,estado:i,id:o}=e;if(!e)throw new Error("El objeto nota es necesario para crearlo");i?t="checked":t="";const s=`
        <div class="view">
            <input class="toggle" type="checkbox" ${t}>
            <label>${n}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `,l=document.createElement("li");return l.innerHTML=s,l.setAttribute("data-id",o),i&&l.classList.add("completed"),l};let b;const V=e=>{if(b||(b=document.querySelector(e)),!b)throw new Error(`Elemento no encontrado ${e}`);b.innerHTML=d.obtenerNotas(u.Pendiente).length},m={limpiarNotas:".clear-completed",ListaNotas:".todo-list",NuevaNota:".new-todo",NotaFiltro:".filtro",contadotHtml:"#pending-count"},j=e=>{const t=()=>{const r=d.obtenerNotas(d.notasFiltro());$(m.ListaNotas,r),n()},n=()=>{V(m.contadotHtml)};(()=>{const r=document.createElement("div");r.innerHTML=v,document.querySelector(e).append(r),t()})();const i=document.querySelector(m.NuevaNota),o=document.querySelector(m.ListaNotas),s=document.querySelector(m.limpiarNotas),l=document.querySelectorAll(m.NotaFiltro);i.addEventListener("keyup",r=>{r.keyCode===13&&r.target.value.trim().length!==0&&(d.anadirNota(r.target.value),t(),r.target.value="")}),o.addEventListener("click",r=>{const p=r.target.closest("[data-id]");d.modificarEstadoNota(p.getAttribute("data-id")),t()}),o.addEventListener("click",r=>{if(r.target.className==="destroy"){const p=r.target.closest("[data-id]");d.eliminarNota(p.getAttribute("data-id")),t()}}),s.addEventListener("click",r=>{d.borrarCompletados(),t()}),l.forEach(r=>{r.addEventListener("click",p=>{switch(l.forEach(S=>{S.classList.remove("selected")}),p.target.classList.add("selected"),p.target.text){case"Todos":d.establecerFiltro(u.Todas);break;case"Pendientes":d.establecerFiltro(u.Pendiente);break;case"Completados":d.establecerFiltro(u.Completado);break}t()})})};d.iniciarNotas();j("#app");

var root = document.body;

var Home = {
    view: function () {
        return m('',[
            m(Menu), m(BodyData)])
    }
}

var Menu = {
    view: () => {
        return m("nav", {class : 'nav'}, [
            m("a[href=/splash]", { oncreate: m.route.link }, "Splash"),
            m("a[href=/hello]", { oncreate: m.route.link }, "Hello"),
        ])
    }
}

var BodyData = {
    view: () => {
        return m(login)
    }
}

var Hello = {
    view: () => {
        return m("main", [
            m("h1", { class: "title" }, "My first app"),
            m("button", "A button"),
        ])
    }
}
var Splash = {
    view: () => {
        // return m("a", m.route.set('/splash'), "Enter!")
        return m("a", { href: "#!/hello" }, "Enter!")

    }
}

var login = {
    view: () => {
        return m("div", { class: 'login' }, [m("label", { class: 'email-label' }, "Email") ,
        m("input", "Enter the Email"),
        m("br", ""),
        m("label", {class:'password-label'}, "Password"),
        m("input", "Enter the Password")])
        
    }
}
m('div','hello')
m.route(root , "/home", {
    "/home" : Home,
    "/splash" : Splash,
    "/hello" : Hello
})
// m.render(root, )

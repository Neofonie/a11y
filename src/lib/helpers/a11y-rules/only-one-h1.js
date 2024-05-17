export default {
    description: "Es gibt nur eine `<h1 />` pro Seite",
    isActive: false,
    test: (dom) => {
        let nodes = Array.from(dom?.querySelectorAll("h1"));

        console.debug('nodes:', nodes);
          
        return nodes.length <= 1;
    }
}
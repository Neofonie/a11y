export default {
    description: "Alle `<img />-Elemente` haben ein Alt-Attribut",
    isActive: false,
    test: (dom) => {
      let nodes = Array.from(dom?.querySelectorAll("img"));
      let nodesWithoutAlt = nodes.filter((img) => img.getAttribute("alt") === (undefined || ''));

      console.debug('nodes:', nodes);
      console.debug('nodesWithoutAlt:', nodesWithoutAlt);

      return nodesWithoutAlt.length === 0;
    }
}

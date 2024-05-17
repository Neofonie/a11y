export default {
    description: "`<html />` hat korrektes lang-attribut",
    isActive: false,
    test: (dom) => {
      let node = dom?.querySelector('html');
      let attr = node?.getAttribute('lang');

      console.debug('node:', node);
      console.debug('attr:', attr);
      
      return attr !== undefined && attr !== null;
    }
};
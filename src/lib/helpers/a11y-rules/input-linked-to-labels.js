export default {
    description: "Alle Inputs sind mit entsprechenden Label verbunden",
    isActive: false,
    test: (dom) => {
      let inputs = Array.from(dom?.querySelectorAll("input"));
      let labels = Array.from(dom?.querySelectorAll("label"));
      let nonLinkedInput = inputs.find((input) => {
        let inputId = input.getAttribute("id");
        let matchingLabel = labels.find(
          (label) => label.getAttribute("for") === inputId,
        );

        return inputId === undefined || matchingLabel === undefined;
      });

      console.debug('inputs:', inputs);
      console.debug('labels:', labels);
      console.debug('nonLinkedInput:', nonLinkedInput);

      return nonLinkedInput === undefined;
    }
}
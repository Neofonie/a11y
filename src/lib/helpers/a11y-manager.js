import htmlLangSet from './a11y-rules/html-lang-set';
import onlyOneH1 from './a11y-rules/only-one-h1';
import imageHasAlt from './a11y-rules/image-has-alt';
import inputLinkedToLabels from './a11y-rules/input-linked-to-labels';

/**
 * Defines the ruleset. Each rule uses a key, which is related to the 'id'-attribute
 *  used in the a11y-page (like <input id="foo">  ==>  rule 'foo').
 * There is also a 'description' (later this ruleset could be used to generate all
 *  checkboxes, so thats the reason for the 'description'), a flag 'isActive' (which
 *  will be set/unset by the checkbox later on via linking rule and node together)
 *  and a 'test'-function which is called during testing and must return 'true' or
 *  'false' either for a successful or failed test.
 * Only rules flagged as 'isActive === true' are processed.
 */
const a11yRuleset = {
  groups: {
    Allgemein: {},
    Markup: {
      htmlLangSet,
    },
    Content: {
      onlyOneH1,
    },
    Bilder: {
      imageHasAlt,
    },
    Formulare: {
      inputLinkedToLabels,
    },
    Mobile: {},
    Tastatur: {},
  },
};

/**
 * A flat list of all rules for a convenient check.
 */
let flatA11yRuleset = {};

/**
 * The context we're going to test with our ruleset. This is set with 'watchedA11yContent()'
 *  which must be called with a DOM-context (not a html string!).
 */
let a11yDomContext;

// Building the 'flat'-ruleset
Array.from(Object.keys(a11yRuleset.groups)).forEach(
  (group) =>
    (flatA11yRuleset = { ...flatA11yRuleset, ...a11yRuleset.groups[group] }),
);

/**
 * Used to execute all a11y-test in the ruleset which are flagged to be active. This
 *  is automatically triggered as soon any linked node for a rule changes its state.
 */
export function testA11yRules() {
  if (a11yDomContext) {
    const
      mainStyle = 'font-weight: bold; font-size: 1.25em;',
      ruleStyle = 'color: hsl(0deg 0% 50%);',
      resultPositiveStyle = 'font-weight: bold; border-bottom: 2px solid hsl(120deg 100% 50%); font-style: italics;',
      resultNegativeStyle = 'font-weight: bold; border-bottom: 2px solid hsl(0deg 100% 50%); font-style: italics;';

    console.group(`%cRun all A11y-rules on content:`, mainStyle, a11yDomContext);

    Object.keys(flatA11yRuleset).forEach((ruleId) => {
      const rule = flatA11yRuleset[ruleId];

      rule.linked?.classList.remove("--a11ySuccess");
      rule.linked?.classList.remove("--a11yFailed");

      if (rule?.isActive) {
        console.group(`%cCheck A11y-rule '${ruleId}'...`, ruleStyle, rule);
        let ruleResult = rule.test(a11yDomContext);
        console.debug(`%cResult = ${ruleResult}`, ruleResult ? resultPositiveStyle : resultNegativeStyle);
        console.groupEnd();

        rule.linked?.classList.add(
          ruleResult ? "--a11ySuccess" : "--a11yFailed",
        );
      }
    });

    console.groupEnd();
  }
}

/**
 * Use this function to fill in a DOM-context that should be tested. Note that
 *  this just accepts a DOM, not a HTML-string or anything.
 */
export function watchedA11yContent(dom) {
  a11yDomContext = dom;
}

/**
 * Use this as 'use:'-directive on a single <input>-element so that the element can be
 *  linked to a rule. To do so you need to provde an 'id'-attribute on your element
 *  that corresponse to a rule-id. If they match, they are linked. Whenever the input
 *  changes it'll changes the 'active'-state of the linked rule and runs all a11y-tests.
 *
 * @param {*} node the element to link
 * @returns object
 */
export function linkA11yRule(node) {
  if (node && node.dataset?.rule && flatA11yRuleset[node.dataset.rule]) {
    // Due to the reactivity of svelte a simple 'change'-listener
    //  doesn't help here, unfortunately 'MutationObserver' won't
    //  work either (at least in the developemt enviroment as we
    //  run a NodeJS), so the simpliest solution for now is a
    //  setInterval (w/o extra dependencies).
    setInterval(() => {
      if (node.checked !== flatA11yRuleset[node.dataset.rule].isActive) {
        flatA11yRuleset[node.dataset.rule].isActive = node.checked;
        testA11yRules();
      }
    }, 100);
    flatA11yRuleset[node.dataset.rule].linked = node;
    flatA11yRuleset[node.dataset.rule].isActive = node.checked;
    node.classList.add("--a11yRuleLinked");
  }
  return {
    destroy() {},
  };
}

export const ruleset = a11yRuleset;

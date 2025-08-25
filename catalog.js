// Replace this stub with your full catalog if you already have one.
// Must define window.RECIPES = [ ... ] (array of recipe objects).
// Each recipe uses:
// { id, name, base: [strings], profile: [strings], sweetness: 'dry'|'balanced'|'sweet',
//   ingredients: [[amount, item], ...], method, glass, garnish, tags: [strings] }

(function(){
  window.RECIPES = [
    {
      id: 'daiquiri',
      name: 'Daiquiri',
      base: ['rum'],
      profile: ['citrusy'],
      sweetness: 'balanced',
      ingredients: [['2 oz','White rum'],['1 oz','Lime juice'],['0.75 oz','Simple syrup']],
      method: 'Shake with ice, strain into a chilled coupe.',
      glass: 'Coupe',
      garnish: 'None',
      tags: ['sour','shaken']
    },
    {
      id: 'old-fashioned',
      name: 'Old Fashioned',
      base: ['bourbon','rye'],
      profile: ['spirit-forward','aromatic'],
      sweetness: 'dry',
      ingredients: [['2 oz','Bourbon or rye'],['1 tsp','Demerara syrup'],['2 dashes','Angostura bitters']],
      method: 'Stir with ice 20–30 sec. Strain over a large cube.',
      glass: 'Rocks',
      garnish: 'Orange peel',
      tags: ['classic','stirred']
    }
  ];
})();

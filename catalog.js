// catalog.js — Recipe catalog separated from index.html
// This file defines window.RECIPES so the HTML stays clean.
// You can freely edit/add recipes here without touching the app logic.

(function(){
  window.RECIPES = [
    {
      name: 'Old Fashioned',
      id: 'old-fashioned',
      base: ['bourbon','rye'],
      profile: ['spirit-forward','aromatic'],
      sweetness: 'dry',
      ingredients: [
        ['2 oz','Bourbon or rye'],
        ['1 tsp','Demerara syrup (2:1)'],
        ['2 dashes','Angostura bitters']
      ],
      method: 'Stir with ice 20–30 sec. Strain over a large cube.',
      glass: 'Rocks',
      garnish: 'Expressed orange peel',
      tags: ['classic','stirred']
    },
    {
      name: 'Manhattan',
      id: 'manhattan',
      base: ['rye','bourbon'],
      profile: ['spirit-forward','aromatic'],
      sweetness: 'dry',
      ingredients: [
        ['2 oz','Rye or bourbon'],
        ['1 oz','Sweet vermouth'],
        ['2 dashes','Angostura bitters']
      ],
      method: 'Stir with ice, strain into a chilled coupe.',
      glass: 'Coupe',
      garnish: 'Brandied cherry',
      tags: ['classic','stirred']
    },
    {
      name: 'Martini (Gin)',
      id: 'martini-gin',
      base: ['gin'],
      profile: ['spirit-forward','aromatic'],
      sweetness: 'dry',
      ingredients: [
        ['2.5 oz','Gin'],
        ['0.5 oz','Dry vermouth'],
        ['1 dash','Orange bitters (optional)']
      ],
      method: 'Stir with ice, strain into a chilled coupe.',
      glass: 'Coupe',
      garnish: 'Lemon twist or olive',
      tags: ['classic','stirred']
    },
    {
      name: 'Vodka Martini',
      id: 'martini-vodka',
      base: ['vodka'],
      profile: ['spirit-forward'],
      sweetness: 'dry',
      ingredients: [
        ['2.5 oz','Vodka'],
        ['0.5 oz','Dry vermouth']
      ],
      method: 'Stir (or shake) with ice, strain into a chilled coupe.',
      glass: 'Coupe',
      garnish: 'Lemon twist',
      tags: ['classic']
    },
    {
      name: 'Margarita',
      id: 'margarita',
      base: ['tequila'],
      profile: ['citrusy'],
      sweetness: 'balanced',
      ingredients: [
        ['2 oz','Tequila blanco'],
        ['1 oz','Lime juice'],
        ['0.75 oz','Triple sec (or curaçao)']
      ],
      method: 'Shake with ice, strain over fresh ice or up.',
      glass: 'Rocks or Coupe',
      garnish: 'Salt rim, lime wheel',
      tags: ['sour','shaken']
    },
    {
      name: 'Daiquiri',
      id: 'daiquiri',
      base: ['rum'],
      profile: ['citrusy'],
      sweetness: 'balanced',
      ingredients: [
        ['2 oz','White rum'],
        ['1 oz','Lime juice'],
        ['0.75 oz','Simple syrup']
      ],
      method: 'Shake with ice, strain into a chilled coupe.',
      glass: 'Coupe',
      garnish: 'None needed',
      tags: ['sour','shaken']
    },
    {
      name: 'Whiskey Sour',
      id: 'whiskey-sour',
      base: ['bourbon'],
      profile: ['citrusy'],
      sweetness: 'balanced',
      ingredients: [
        ['2 oz','Bourbon'],
        ['0.75 oz','Lemon juice'],
        ['0.75 oz','Simple syrup'],
        ['1','Egg white (optional)']
      ],
      method: 'Shake (dry if using egg), then with ice. Strain over fresh ice.',
      glass: 'Rocks',
      garnish: 'Angostura dash art',
      tags: ['sour','shaken']
    },
    {
      name: 'Tom Collins',
      id: 'tom-collins',
      base: ['gin'],
      profile: ['bubbly','citrusy'],
      sweetness: 'balanced',
      ingredients: [
        ['2 oz','Gin'],
        ['0.75 oz','Lemon juice'],
        ['0.75 oz','Simple syrup'],
        ['Top','Soda water']
      ],
      method: 'Build over ice, gentle stir, top with soda.',
      glass: 'Collins',
      garnish: 'Lemon wheel, cherry',
      tags: ['highball','built']
    },
    {
      name: 'Negroni',
      id: 'negroni',
      base: ['gin'],
      profile: ['bitter','spirit-forward'],
      sweetness: 'balanced',
      ingredients: [
        ['1 oz','Gin'],
        ['1 oz','Campari'],
        ['1 oz','Sweet vermouth']
      ],
      method: 'Stir with ice, strain over a large cube or serve up.',
      glass: 'Rocks or Coupe',
      garnish: 'Orange peel',
      tags: ['classic','stirred']
    },
    {
      name: 'Boulevardier',
      id: 'boulevardier',
      base: ['bourbon'],
      profile: ['bitter','spirit-forward'],
      sweetness: 'balanced',
      ingredients: [
        ['1.5 oz','Bourbon'],
        ['1 oz','Campari'],
        ['1 oz','Sweet vermouth']
      ],
      method: 'Stir with ice, strain into coupe or over a big cube.',
      glass: 'Coupe or Rocks',
      garnish: 'Orange peel',
      tags: ['stirred']
    },
    {
      name: 'Paper Plane',
      id: 'paper-plane',
      base: ['bourbon'],
      profile: ['bitter','citrusy'],
      sweetness: 'balanced',
      ingredients: [
        ['0.75 oz','Bourbon'],
        ['0.75 oz','Aperol'],
        ['0.75 oz','Amaro Nonino (or similar)'],
        ['0.75 oz','Lemon juice']
      ],
      method: 'Shake with ice, strain into a coupe.',
      glass: 'Coupe',
      garnish: 'Lemon twist (optional)',
      tags: ['modern','shaken']
    },
    {
      name: 'Last Word',
      id: 'last-word',
      base: ['gin'],
      profile: ['herbal','citrusy'],
      sweetness: 'balanced',
      ingredients: [
        ['0.75 oz','Gin'],
        ['0.75 oz','Green Chartreuse'],
        ['0.75 oz','Maraschino liqueur'],
        ['0.75 oz','Lime juice']
      ],
      method: 'Shake with ice, strain into a coupe.',
      glass: 'Coupe',
      garnish: 'None',
      tags: ['shaken']
    },
    {
      name: 'Corpse Reviver No. 2',
      id: 'corpse-reviver-2',
      base: ['gin'],
      profile: ['citrusy','herbal'],
      sweetness: 'balanced',
      ingredients: [
        ['0.75 oz','Gin'],
        ['0.75 oz','Cointreau'],
        ['0.75 oz','Lillet Blanc (or Cocchi Americano)'],
        ['0.75 oz','Lemon juice'],
        ['Rinse','Absinthe']
      ],
      method: 'Shake with ice, strain into an absinthe-rinsed coupe.',
      glass: 'Coupe',
      garnish: 'Cherry (optional)',
      tags: ['classic','shaken']
    },
    {
      name: 'French 75',
      id: 'french-75',
      base: ['gin'],
      profile: ['bubbly','citrusy'],
      sweetness: 'balanced',
      ingredients: [
        ['1 oz','Gin'],
        ['0.5 oz','Lemon juice'],
        ['0.5 oz','Simple syrup'],
        ['Top','Champagne']
      ],
      method: 'Shake first three with ice, strain into flute, top with Champagne.',
      glass: 'Flute',
      garnish: 'Lemon twist',
      tags: ['sparkling']
    },
    {
      name: 'Mojito',
      id: 'mojito',
      base: ['rum'],
      profile: ['citrusy','herbal'],
      sweetness: 'sweet',
      ingredients: [
        ['2 oz','White rum'],
        ['0.75 oz','Lime juice'],
        ['0.5 oz','Simple syrup'],
        ['8–10','Mint leaves'],
        ['Top','Soda water']
      ],
      method: 'Lightly muddle mint with syrup, add rum & lime, ice, top with soda.',
      glass: 'Collins',
      garnish: 'Mint bouquet',
      tags: ['highball']
    },
    {
      name: 'Mai Tai',
      id: 'mai-tai',
      base: ['rum','jamaican rum'],
      profile: ['tiki','citrusy'],
      sweetness: 'balanced',
      ingredients: [
        ['2 oz','Aged rum (split base encouraged)'],
        ['0.75 oz','Lime juice'],
        ['0.5 oz','Orange curaçao'],
        ['0.25 oz','Orgeat'],
        ['0.25 oz','Demerara syrup']
      ],
      method: 'Shake, dump into rocks with crushed ice.',
      glass: 'Rocks',
      garnish: 'Mint, spent lime shell',
      tags: ['tiki','shaken']
    },
    {
      name: 'Jungle Bird',
      id: 'jungle-bird',
      base: ['rum'],
      profile: ['tiki','bitter'],
      sweetness: 'balanced',
      ingredients: [
        ['1.5 oz','Dark rum'],
        ['0.75 oz','Campari'],
        ['1.5 oz','Pineapple juice'],
        ['0.5 oz','Lime juice'],
        ['0.5 oz','Demerara syrup']
      ],
      method: 'Shake with ice, strain over fresh ice.',
      glass: 'Rocks',
      garnish: 'Pineapple frond',
      tags: ['tiki','shaken']
    },
    {
      name: 'Paloma',
      id: 'paloma',
      base: ['tequila'],
      profile: ['bubbly','citrusy'],
      sweetness: 'balanced',
      ingredients: [
        ['2 oz','Tequila blanco'],
        ['0.5 oz','Lime juice'],
        ['Top','Grapefruit soda']
      ],
      method: 'Build over ice, gentle stir.',
      glass: 'Highball',
      garnish: 'Salt rim, grapefruit wedge',
      tags: ['highball']
    },
    {
      name: 'Old Cuban',
      id: 'old-cuban',
      base: ['rum'],
      profile: ['bubbly','herbal'],
      sweetness: 'balanced',
      ingredients: [
        ['1.5 oz','Aged rum'],
        ['0.75 oz','Lime juice'],
        ['0.75 oz','Simple syrup'],
        ['6–8','Mint leaves'],
        ['2 dashes','Angostura bitters'],
        ['Top','Champagne']
      ],
      method: 'Shake (no Champagne), fine strain into coupe, top with Champagne.',
      glass: 'Coupe',
      garnish: 'Mint leaf',
      tags: ['sparkling','shaken']
    },
    {
      name: 'Sazerac',
      id: 'sazerac',
      base: ['rye'],
      profile: ['spirit-forward','aromatic'],
      sweetness: 'dry',
      ingredients: [
        ['2 oz','Rye whiskey'],
        ['0.25 oz','Demerara syrup'],
        ['3 dashes','Peychaud’s bitters'],
        ['Rinse','Absinthe']
      ],
      method: 'Stir with ice. Rinse chilled glass with absinthe. Strain neat.',
      glass: 'Rocks (no ice)',
      garnish: 'Expressed lemon peel',
      tags: ['new-orleans','stirred']
    },
    {
      name: 'Vieux Carré',
      id: 'vieux-carre',
      base: ['rye','cognac'],
      profile: ['spirit-forward','aromatic'],
      sweetness: 'balanced',
      ingredients: [
        ['0.75 oz','Rye'],
        ['0.75 oz','Cognac'],
        ['0.75 oz','Sweet vermouth'],
        ['0.25 oz','Bénédictine'],
        ['2 dashes','Angostura'],
        ['2 dashes','Peychaud’s']
      ],
      method: 'Stir with ice, strain into rocks with large cube.',
      glass: 'Rocks',
      garnish: 'Orange peel',
      tags: ['classic','stirred']
    },
    {
      name: 'Penicillin',
      id: 'penicillin',
      base: ['scotch'],
      profile: ['citrusy','herbal'],
      sweetness: 'balanced',
      ingredients: [
        ['2 oz','Blended Scotch'],
        ['0.75 oz','Lemon juice'],
        ['0.75 oz','Honey-ginger syrup'],
        ['0.25 oz','Islay Scotch (float)']
      ],
      method: 'Shake first three, strain over ice. Float Islay.',
      glass: 'Rocks',
      garnish: 'Candied ginger',
      tags: ['modern','shaken']
    },
    {
      name: 'Pisco Sour',
      id: 'pisco-sour',
      base: ['pisco'],
      profile: ['citrusy'],
      sweetness: 'balanced',
      ingredients: [
        ['2 oz','Pisco'],
        ['1 oz','Lime juice'],
        ['0.75 oz','Simple syrup'],
        ['1','Egg white']
      ],
      method: 'Dry shake, then shake with ice. Strain into coupe.',
      glass: 'Coupe',
      garnish: '3 drops Angostura',
      tags: ['sour','shaken']
    },
    {
      name: 'Sidecar',
      id: 'sidecar',
      base: ['cognac'],
      profile: ['citrusy'],
      sweetness: 'balanced',
      ingredients: [
        ['2 oz','Cognac'],
        ['0.75 oz','Cointreau'],
        ['0.75 oz','Lemon juice']
      ],
      method: 'Shake with ice, strain into coupe (sugar rim optional).',
      glass: 'Coupe',
      garnish: 'Orange twist',
      tags: ['classic','shaken']
    },
    {
      name: 'Espresso Martini',
      id: 'espresso-martini',
      base: ['vodka','coffee liqueur'],
      profile: ['dessert'],
      sweetness: 'sweet',
      ingredients: [
        ['1.5 oz','Vodka'],
        ['1 oz','Fresh espresso'],
        ['0.5 oz','Coffee liqueur'],
        ['0.25 oz','Simple syrup (to taste)']
      ],
      method: 'Shake hard with ice, fine strain into coupe.',
      glass: 'Coupe',
      garnish: '3 coffee beans',
      tags: ['modern','shaken']
    },
    {
      name: 'White Russian',
      id: 'white-russian',
      base: ['vodka','coffee liqueur'],
      profile: ['dessert'],
      sweetness: 'sweet',
      ingredients: [
        ['2 oz','Vodka'],
        ['1 oz','Coffee liqueur'],
        ['1 oz','Cream (or alt)']
      ],
      method: 'Build over ice, gentle stir.',
      glass: 'Rocks',
      garnish: 'None',
      tags: ['creamy','built']
    },
    {
      name: 'Moscow Mule',
      id: 'moscow-mule',
      base: ['vodka'],
      profile: ['bubbly','citrusy'],
      sweetness: 'sweet',
      ingredients: [
        ['2 oz','Vodka'],
        ['0.5 oz','Lime juice'],
        ['Top','Ginger beer']
      ],
      method: 'Build over ice, gentle stir.',
      glass: 'Copper mug or Highball',
      garnish: 'Lime wedge',
      tags: ['highball','built']
    },
    {
      name: "Dark 'n Stormy",
      id: 'dark-n-stormy',
      base: ['rum'],
      profile: ['bubbly','citrusy'],
      sweetness: 'sweet',
      ingredients: [
        ['2 oz','Dark rum'],
        ['0.5 oz','Lime juice (optional)'],
        ['Top','Ginger beer']
      ],
      method: 'Build over ice, float rum if desired.',
      glass: 'Highball',
      garnish: 'Lime wedge',
      tags: ['highball','built']
    },
    {
      name: 'Gimlet',
      id: 'gimlet',
      base: ['gin'],
      profile: ['citrusy'],
      sweetness: 'balanced',
      ingredients: [
        ['2 oz','Gin'],
        ['0.75 oz','Lime juice'],
        ['0.75 oz','Simple syrup']
      ],
      method: 'Shake with ice, strain into coupe (or stir with lime cordial).',
      glass: 'Coupe',
      garnish: 'Lime wheel',
      tags: ['sour','shaken']
    },
    {
      name: 'Hanky Panky',
      id: 'hanky-panky',
      base: ['gin'],
      profile: ['herbal','spirit-forward'],
      sweetness: 'dry',
      ingredients: [
        ['1.5 oz','Gin'],
        ['1.5 oz','Sweet vermouth'],
        ['0.25 oz','Fernet-Branca']
      ],
      method: 'Stir with ice, strain into coupe.',
      glass: 'Coupe',
      garnish: 'Orange twist',
      tags: ['stirred']
    },
    {
      name: 'Aperol Spritz',
      id: 'aperol-spritz',
      base: ['aperol'],
      profile: ['bubbly','bitter'],
      sweetness: 'sweet',
      ingredients: [
        ['3 oz','Prosecco'],
        ['2 oz','Aperol'],
        ['1 oz','Soda water']
      ],
      method: 'Build over ice in a wine glass.',
      glass: 'Wine',
      garnish: 'Orange slice',
      tags: ['spritz','built']
    },
    {
      name: 'Doctor Cocktail',
      id: 'doctor-cocktail',
      base: ['rum','swedish punsch'],
      profile: ['citrusy','tiki'],
      sweetness: 'balanced',
      ingredients: [
        ['1.5 oz','Swedish Punsch (e.g., Kronan)'],
        ['0.75 oz','Aged rum'],
        ['0.75 oz','Lime juice']
      ],
      method: 'Shake with ice, strain into coupe.',
      glass: 'Coupe',
      garnish: 'Lime wheel',
      tags: ['vintage','shaken']
    },
    {
      name: 'Diki-Diki',
      id: 'diki-diki',
      base: ['calvados','swedish punsch'],
      profile: ['citrusy'],
      sweetness: 'dry',
      ingredients: [
        ['1.5 oz','Calvados'],
        ['0.75 oz','Swedish Punsch'],
        ['0.75 oz','Grapefruit juice']
      ],
      method: 'Shake with ice, strain into coupe.',
      glass: 'Coupe',
      garnish: 'Grapefruit twist',
      tags: ['vintage','shaken']
    },
    {
      name: 'Biffy Cocktail',
      id: 'biffy',
      base: ['gin','swedish punsch'],
      profile: ['citrusy','herbal'],
      sweetness: 'balanced',
      ingredients: [
        ['1.5 oz','Gin'],
        ['0.75 oz','Swedish Punsch'],
        ['0.5 oz','Lemon juice'],
        ['0.25 oz','Simple syrup (to taste)']
      ],
      method: 'Shake with ice, strain into coupe.',
      glass: 'Coupe',
      garnish: 'Lemon twist',
      tags: ['vintage','shaken']
    },
    {
      name: 'Toronto',
      id: 'toronto',
      base: ['rye'],
      profile: ['herbal','spirit-forward'],
      sweetness: 'dry',
      ingredients: [
        ['2 oz','Rye whiskey'],
        ['0.25 oz','Fernet-Branca'],
        ['0.25 oz','Simple syrup'],
        ['2 dashes','Angostura bitters']
      ],
      method: 'Stir with ice, strain into coupe.',
      glass: 'Coupe',
      garnish: 'Orange twist',
      tags: ['stirred']
    },
    {
      name: 'Bramble',
      id: 'bramble',
      base: ['gin'],
      profile: ['citrusy','dessert'],
      sweetness: 'sweet',
      ingredients: [
        ['2 oz','Gin'],
        ['0.75 oz','Lemon juice'],
        ['0.5 oz','Simple syrup'],
        ['0.5 oz','Crème de mûre (float)']
      ],
      method: 'Shake first three, strain over crushed ice. Float mûre.',
      glass: 'Rocks',
      garnish: 'Blackberries, lemon slice',
      tags: ['modern','shaken']
    },
    {
      name: 'New York Sour',
      id: 'new-york-sour',
      base: ['bourbon'],
      profile: ['citrusy'],
      sweetness: 'balanced',
      ingredients: [
        ['2 oz','Bourbon'],
        ['0.75 oz','Lemon juice'],
        ['0.75 oz','Simple syrup'],
        ['0.5 oz','Dry red wine (float)']
      ],
      method: 'Shake first three, strain over ice. Float red wine.',
      glass: 'Rocks',
      garnish: 'Orange peel (optional)',
      tags: ['shaken']
    },
    {
      name: 'Rum Old Fashioned',
      id: 'rum-old-fashioned',
      base: ['rum'],
      profile: ['spirit-forward'],
      sweetness: 'dry',
      ingredients: [
        ['2 oz','Aged rum'],
        ['1 tsp','Demerara syrup'],
        ['2 dashes','Angostura']
      ],
      method: 'Stir with ice, strain over large cube.',
      glass: 'Rocks',
      garnish: 'Orange peel',
      tags: ['stirred']
    },
    {
      name: "Bee's Knees",
      id: 'bees-knees',
      base: ['gin'],
      profile: ['citrusy','herbal'],
      sweetness: 'balanced',
      ingredients: [
        ['2 oz','Gin'],
        ['0.75 oz','Lemon juice'],
        ['0.75 oz','Honey syrup (1:1)']
      ],
      method: 'Shake with ice, strain into coupe.',
      glass: 'Coupe',
      garnish: 'Lemon twist',
      tags: ['prohibition','shaken']
    },
    {
      name: 'Kingston Negroni',
      id: 'kingston-negroni',
      base: ['jamaican rum'],
      profile: ['bitter','spirit-forward'],
      sweetness: 'balanced',
      ingredients: [
        ['1 oz','Jamaican rum'],
        ['1 oz','Campari'],
        ['1 oz','Sweet vermouth']
      ],
      method: 'Stir with ice, strain over a large cube.',
      glass: 'Rocks',
      garnish: 'Orange peel',
      tags: ['stirred']
    }
  ];
})();

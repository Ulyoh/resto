module.exports = {
  alerts_msg: {
    ok: "ok",
    modify: "modifier",
    cancel: "annuler",
    supp: "supprimer",
    wrong_nbr: "ce numéro n'existe pas"
  },
  articles_related:[
    {
      list_name: "boissons",
      ask_for_number: "Entrer le numéro de la boisson:",
      ask_to_choose_by_click: "Ou cliquer ci-dessous:",
      confirm_selected_article_msg: "ajouter la boisson ci-dessous?",
      confirm_command_msg: "Confirmer vos boissons. Vous serez servi dans quelques minutes",
      articles_groups: [
        {
          title: 'Apéritifs',
          articles: [
            {
              nbr: '100',
              title: 'martini rouge',
              price: '2.25'
            },
            {
              nbr: '101',
              title: 'porto',
              price: '2.30'
            },
            {
              nbr: '120',
              title: 'pastis',
              price: '2.30'
            },
            {
              nbr: '203',
              title: 'cuba libre',
              price: '2.30'
            },
            {
              nbr: '105',
              title: 'martini blanc',
              price: '2.30'
            },
            {
              nbr: '731',
              title: 'whisky',
              price: '2.30'
            }
          ]
        },
        {
          title: 'Vins',
          articles: [{
              nbr: '200',
              title: 'verre de vin rouge',
              price: '2.25'
            },
            {
              nbr: '201',
              title: 'verre de vin blanc',
              price: '2.30'
            },
            {
              nbr: '220',
              title: 'verre de rosé',
              price: '2.30'
            },
            {
              nbr: '303',
              title: 'côte du Rhöne (bouteille)',
              price: '2.30'
            },
            {
              nbr: '205',
              title: 'champagne',
              price: '2.30'
            }
          ]
        },
        {
          title: 'Sans Alcool',
          articles: [{
              nbr: '300',
              title: 'thé vert',
              price: '2.25'
            },
            {
              nbr: '301',
              title: 'thé glacé',
              price: '2.30'
            },
            {
              nbr: '320',
              title: 'jus de tomate',
              price: '2.30'
            },
            {
              nbr: '403',
              title: 'jus de melon',
              price: '2.30'
            },
            {
              nbr: '305',
              title: 'limonade',
              price: '2.30'
            }
          ]
        }
      ]
    }
  ]
}

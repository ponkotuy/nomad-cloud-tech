Reveal.addEventListener('ready', () => {
  const nodes = new vis.DataSet([
    {id: 1, label: 'NomadCloud', size: 100},
    {id: 2, label: 'Amateras'},
    {id: 3, label: 'ItandiAccounts'},
    {id: 4, label: 'DaidaraBosch'},
    {id: 5, label: 'Shikigami'},
    {id: 6, label: 'Connect'}
  ]);

  const edges = new vis.DataSet([
    {from: 1, to: 2, arrows: 'to'},
    {from: 1, to: 3, arrows: 'to'},
    {from: 1, to: 5, arrows: 'to'},
    {from: 2, to: 3, arrows: 'to'},
    {from: 2, to: 4, arrows: 'to'},
    {from: 2, to: 6, arrows: 'to'},
    {from: 4, to: 3, arrows: 'to'},
    {from: 5, to: 3, arrows: 'to'}
  ]);

  const data = {nodes: nodes, edges: edges};
  const container = document.getElementById('services_image');
  const options = {nodes: {font: {size: 18}}, edges: {hoverWidth: 0.1}};
  const network = new vis.Network(container, data, options);
});

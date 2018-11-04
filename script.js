$('#print-btn').on('click', () => {
  printDiv();
});

const printDiv = () => {
  $('#to-print').printThis({
    importCSS: false,   // Do not import css from <link> tag
    importStyle: true,  // Iport css from <style> tag
  });
}
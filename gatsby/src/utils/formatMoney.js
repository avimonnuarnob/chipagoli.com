const formatter = Intl.NumberFormat('bn-BD', {
  style: 'currency',
  currency: 'BDT',
});

const formatMoney = (cents) => formatter.format(cents);

export default formatMoney;

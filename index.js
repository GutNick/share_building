const arrayData = ['1.5', '3', '6', '1.5'];

if (arrayData.length < 50000) {
    const percentages = arrayData.map(item => (parseFloat(item) / arrayData.reduce((acc, val) => acc + parseFloat(val), 0)) * 100);
    const formattedPercentages = percentages.map(percentage => percentage.toFixed(3));
    console.log(formattedPercentages);
}

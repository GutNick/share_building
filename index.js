const arrayData = ['1.5', '3', '6', '1.5'];

if (arrayData.length < 50000) {
    const percentages = arrayData.map(item => (item * 100).toFixed(3));
    console.log(percentages);
}

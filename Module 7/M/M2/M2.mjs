// Functie om een array met willekeurige getallen te genereren
const generateRandomArray = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 1000));
};

// Bubblesort implementatie (langzaam)
const bubbleSort = (arr) => {
    const result = [...arr]; // Kopieer de array om mutatie te voorkomen
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - 1; j++) {
            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]]; // Swap
            }
        }
    }
    return result;
};

// JavaScript's ingebouwde sort (veel sneller)
const nativeSort = (arr) => {
    return [...arr].sort((a, b) => a - b);
};

// Functie om sorteermethodes te vergelijken
document.getElementById('compareButton').addEventListener('click', () => {
    const testArray = generateRandomArray(5000);
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = ''; // Reset resultaten

    // Tijd meten voor BubbleSort
    const bubbleStart = performance.now();
    const bubbleSortedArray = bubbleSort(testArray);
    const bubbleEnd = performance.now();
    const bubbleDuration = (bubbleEnd - bubbleStart).toFixed(2);

    // Tijd meten voor NativeSort
    const nativeStart = performance.now();
    const nativeSortedArray = nativeSort(testArray);
    const nativeEnd = performance.now();
    const nativeDuration = (nativeEnd - nativeStart).toFixed(2);

    // Controleer of beide methodes dezelfde output geven
    console.assert(
        JSON.stringify(bubbleSortedArray) === JSON.stringify(nativeSortedArray),
        "❌ De sorteermethodes geven verschillende resultaten!"
    );

    // UI Resultaten tonen
    const isBubbleFaster = parseFloat(bubbleDuration) < parseFloat(nativeDuration);
    resultDiv.innerHTML = `
        <div class="result-item ${isBubbleFaster ? 'faster' : 'slower'}">
            🛑 BubbleSort: ${bubbleDuration} ms
        </div>
        <div class="result-item ${isBubbleFaster ? 'slower' : 'faster'}">
            ⚡ NativeSort: ${nativeDuration} ms
        </div>
    `;

    // Console output
    console.log(`🔵 BubbleSort duurde: ${bubbleDuration} ms`);
    console.log(`🟢 NativeSort duurde: ${nativeDuration} ms`);
});

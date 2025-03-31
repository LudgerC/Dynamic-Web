// Functie om een bericht te formatteren voor een tweet (max 280 tekens)
const formatTweet = (text) => text.length > 280 ? text.slice(0, 277) + "..." : text;

// Functie om een bericht te formatteren voor een social media post (max 500 tekens)
const formatPost = (text) => text.length > 500 ? text.slice(0, 497) + "..." : text;

// Functie voor het gecombineerde bericht
const formatCombo = (text) => `#Combo: ${formatTweet(text)} ${formatPost(text)}`;

// Functie die de tekst ophaalt en de formatteerde berichten toont
const formatText = () => {
    const text = document.getElementById('inputText').value;

    // Toon de formatteerde berichten in de respectieve div's
    document.getElementById('tweetOutput').innerText = formatTweet(text);
    document.getElementById('postOutput').innerText = formatPost(text);
    document.getElementById('comboOutput').innerText = formatCombo(text);
};

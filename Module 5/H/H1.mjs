document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".block");
    const startBtn = document.getElementById("startBtn");

    function wacht(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function verlichtBlok(block, tijd) {
        const origineleKleur = block.style.backgroundColor;
        block.style.backgroundColor = "white";
        await wacht(tijd);
        block.style.backgroundColor = origineleKleur;
    }

    async function startLichtshow() {
        startBtn.disabled = true;

        // Van links naar rechts
        for (let block of blocks) {
            await verlichtBlok(block, 500);
        }

        // Korte pauze
        await wacht(500);

        // Van rechts naar links
        for (let i = blocks.length - 1; i >= 0; i--) {
            await verlichtBlok(blocks[i], 500);
        }

        startBtn.disabled = false;
    }

    startBtn.addEventListener("click", startLichtshow);
});
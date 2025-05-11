type WarningMessage = 
    "Your BAC is barely a blip — you're as sober as a nun at a church service. Go ahead, make good choices." | 
    "Look at you, just a tiny bit buzzed. Enough to feel like you're at a party, but still capable of texting your ex and regretting it later." | 
    "Congrats, you're now exactly as sober as the law barely allows — a true champion of mediocrity!" |
    "Bravo! You've officially entered the “I'm fine to drive” phase — otherwise known as the delusional Olympics. What could possibly go wrong?" |
    "Ah yes, the full party package: slurred speech, wobbly legs, blurred vision, and a sudden desire to cry, fight, or confess deep secrets to strangers in a bathroom." |
    "Ah, the dangerous waters of overindulgence. Your body's basically begging for a nap, but your judgment checked out a while ago. You're just one bad decision away from an ER visit." |
    "Congrats, you've outdone yourself — this is where your liver files a formal complaint and your body goes into full meltdown mode. Even WorldOfTShirts would've shook his head in shame.";

export type ResultsProps = {
    bacTotal: number,
    warningMessage: WarningMessage
    timeToZero: number
}
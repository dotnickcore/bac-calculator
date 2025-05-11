import type { IFormInput } from '../interfaces/IFormInput';

const getWarningMessage = (bacTotal: number) => {
  const roundedBacTotal = bacTotal.toFixed(2);
  console.log('Rounded:', roundedBacTotal);

  if (bacTotal >= 0.3) {
    return "Congrats, you've outdone yourself — this is where your liver files a formal complaint and your body goes into full meltdown mode. Even WorldOfTShirts just shook his head in shame.";
  } else if (bacTotal >= 0.15 && bacTotal < 0.3) {
    return "Ah, the dangerous waters of overindulgence. Your body's basically begging for a nap, but your judgment checked out a while ago. You're just one bad decision away from an ER visit.";
  } else if (bacTotal >= 0.08 && bacTotal < 0.15) {
    return 'Ah yes, the full party package: slurred speech, wobbly legs, blurred vision, and a sudden desire to cry, fight, or confess deep secrets to strangers in a bathroom.';
  } else if (bacTotal > 0.05 && bacTotal < 0.08) {
    return "Bravo! You've officially entered the “I'm fine to drive” phase — otherwise known as the delusional Olympics. What could possibly go wrong?";
  } else if (bacTotal === 0.05) {
    return "Congrats, you're now exactly as sober as the law barely allows — a true champion of mediocrity!";
  } else if (bacTotal >= 0.02 && bacTotal < 0.05) {
    return "Look at you, just a tiny bit buzzed. Enough to feel like you're at a party, but still capable of texting your ex and regretting it later.";
  } else {
    return "Your BAC is barely a blip — you're as sober as a nun at a church service. Go ahead, make good choices.";
  }
};

export const useBACCalculator = () => {
  const calculateResults = (formData: IFormInput) => {
    const {
      bodyWeight,
      weightMeasurement,
      numberOfStandardDrinks,
      hoursSinceFirstDrink,
      gender,
    } = formData;

    const totalGrams = numberOfStandardDrinks * 14;

    const weightInGrams =
      weightMeasurement === 'kg' ? bodyWeight * 1000 : bodyWeight * 453.592;

    const genderConstant = gender === 'male' ? 0.68 : 0.55;

    const rawBAC = (totalGrams / (weightInGrams * genderConstant)) * 100;

    const bac = Math.max(0, rawBAC - 0.015 * hoursSinceFirstDrink);

    const soberTime = bac > 0 ? bac / 0.015 : 0;

    console.log('BAC:', bac); // Now accurate
    console.log('Until Sober:', soberTime);

    const warningMessage = getWarningMessage(bac);

    return {
      bloodAlcoholContent: bac,
      warningMessage: warningMessage,
      hoursUntilSober: Math.floor(soberTime),
    };
  };

  return { calculateResults };
};

export default useBACCalculator;

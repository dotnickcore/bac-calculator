import { useBACResults } from "../../hooks/useBACResults";

function Results() {
  const { results } = useBACResults();

  if (!results) {
    return (
      <div className="text-center py-4">
        Submit the form to see your BAC results
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Your BAC Results</h2>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-medium">Blood Alcohol Content (BAC):</span>
          <span>{results.bloodAlcoholContent.toFixed(3)}%</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Hours until sober:</span>
          <span>{results.hoursUntilSober} hours</span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
        <p>
          {results.warningMessage}
        </p>
      </div>
    </div>
  );
}

export default Results;

import boomerang from "./boomerang.png";

const Dashboard = () => {
  return (
    <div className="w-7/12 bg-[#FDE74C] flex flex-col justify-between items-start p-12">
      <div className="text-6xl font-bold items-start leading-tight">
        <div>Guess</div>
        <div> The </div>
        <div>Number</div>
      </div>
      <div className="font-semibold text-lg">
        Rules
        <ol className="list-decimal pl-5">
          <li>Start the game</li>
          <li>Guess the number between 1-10</li>
          <li>You would get 5 changes to guess it right.</li>
          <li>Lost ? Replay</li>
          <li>Won ? Congrats 🎉!!</li>
        </ol>
      </div>
      <div className="absolute top-1/2 right-[480px]">
        <img src={boomerang} alt="Game Image" className="w-1/3" />
      </div>
    </div>
  );
};

export default Dashboard;

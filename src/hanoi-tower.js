module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsSpeedsec = turnsSpeed / 3600;

  let turns = Math.pow(2, disksNumber);
  let time = turns / turnsSpeedsec;

  return {
    turns: turns,
    seconds: time
  };
};

const REP = 10;
const rep = () => {
  let eleArr = [];
  for (let i = 0; i < REP; i++) {
    eleArr.push(
      <div key={`${i}`}>
        <h1 className="title">{`${i}`}</h1>
        <div className="outerDiv">{`${i}`}</div>
        <hr />
      </div>
    );
  }
  return eleArr;
};

export default rep;

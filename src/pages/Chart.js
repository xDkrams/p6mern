import Bar from "../chartComponents/BarChart";
import PieChart from "../chartComponents/PieChart";
import axios from "axios";
import { useState, useEffect } from "react";

const Chart = () => {
  const [incoming, setIncoming] = useState();
  const [outgoing, setOutgoing] = useState();
  const [core, setCore] = useState();
  const [strat, setStrat] = useState();
  const [supp, setSupp] = useState();
  const [fInfo, setfInfo] = useState();

  useEffect(() => {
    axios.get("/summary/incoming").then((res) => {
      setIncoming(Number(res.data.length));
      console.log(res.data);
    });
    axios.get("/summary/outgoing").then((res) => {
      setOutgoing(Number(res.data.length));
    });
    axios.get("/summary/incoming").then((res) => {
      const data = res.data;
      const coreData = data.filter((inc) => inc.contentType === "Core").length;
      setCore(coreData);
      const stratData = data.filter(
        (inc) => inc.contentType === "Strategic"
      ).length;
      setStrat(stratData);
      const suppData = data.filter(
        (inc) => inc.contentType === "Support"
      ).length;
      setSupp(Number(suppData));
      const infoData = data.filter(
        (inc) => inc.contentType === "For Info"
      ).length;
      setfInfo(infoData);
    });
  }, []);
  console.log(core);

  return (
    <div className="contChart">
      <div className="barChart">
        <Bar className="barCharts" incoming={incoming} outgoing={outgoing} />
      </div>
      <div>
        <PieChart core={core} strat={strat} supp={supp} fInfo={fInfo} />
      </div>
    </div>
  );
};
export default Chart;

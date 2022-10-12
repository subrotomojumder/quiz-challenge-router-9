import { useContext } from "react";
import { Bar, BarChart, Brush, CartesianGrid, Legend, ReferenceLine, Tooltip, XAxis, YAxis } from "recharts";
import { QuizContext } from "./Root";

const Chart = () => {
  const allQuiz = useContext(QuizContext);

  return (
    <div>
      <h1 className="ml-32 text-2xl my-4">Total question Chart</h1>
      <BarChart
        width={800}
        height={500}
        data={allQuiz}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Bar dataKey="total" fill="#8884d8" />
        <Bar fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
export default Chart;

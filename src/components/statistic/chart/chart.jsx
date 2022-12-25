import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper, ChartBalInfo } from './chart.styled';
import colorsChart from './colorsChart';

ChartJS.register(ArcElement, Tooltip);

export function Chart({ statistics }) {
  console.log('statistics', statistics);
  const { expenseSummary, categoriesSummary, incomeSummary } = statistics;
  const data = {
    labels: categoriesSummary.map(category => category.name),
    datasets: [
      {
        label: 'Amount',
        data: categoriesSummary.map(category =>
          category.total ? category.total : 0
        ),
        backgroundColor: colorsChart,
        borderWidth: 0,
        cutout: '65%',
      },
    ],
  };
  return (
    <>
      <ChartWrapper>
        <Doughnut data={data} />
        <ChartBalInfo>{` ₴ ${expenseSummary + incomeSummary}`}</ChartBalInfo>
      </ChartWrapper>
    </>
  );
}

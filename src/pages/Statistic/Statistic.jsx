import { useSelector } from 'react-redux';
import { Chart } from '../../components/statistic/chart/chart';
import { Table } from '../../components/statistic/table/table';
import {
  StatisticsContainer,
  TableContainer,
  StatisticsWrapper,
} from './Statistic.styled';
import { Selectors } from '../../components/statistic/selector/dropdown-select';

export function Statistic() {
  const statistics = useSelector(state => state.statisticData.statistic);
  console.log('statData',statistics)
 

  return (
    <>
      <StatisticsContainer>
        <h2>Statistics</h2>
        <StatisticsWrapper>
          {statistics && (
            <>
              {statistics?.incomeSummary || statistics?.expenseSummary ? (
                statistics?.expenseSummary ? (
                  <Chart statistics={statistics} />
                ) : (
                  <p>
                    There are no expenses
                    <br /> in the selected period
                  </p>
                )
              ) : null}
            </>
          )}
          <TableContainer>
            <Selectors />
            <Table statistics={statistics} />
          </TableContainer>
        </StatisticsWrapper>
      </StatisticsContainer>
    </>
  );
}

export default Statistic;

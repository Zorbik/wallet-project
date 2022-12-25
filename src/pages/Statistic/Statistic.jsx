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
  const categoriesSummary = statistics?.categoriesSummary?.filter(
    trans => trans.type !== 'INCOME'
  );

  const statisticsExpenses = { ...statistics, categoriesSummary };

  return (
    <>
      <StatisticsContainer>
        <h2>Statistics</h2>
        <StatisticsWrapper>
          {statistics && (
            <>
              {statistics?.expenseSummary ? (
                <Chart statistics={statisticsExpenses} />
              ) : (
                <p>
                  There are no expenses
                  <br /> in the selected period
                </p>
              )}
            </>
          )}
          <TableContainer>
            <Selectors />
            <Table statistics={statisticsExpenses} />
          </TableContainer>
        </StatisticsWrapper>
      </StatisticsContainer>
    </>
  );
}

export default Statistic;

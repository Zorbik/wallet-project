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
  const statistics = useSelector(state => state.userInformation.financeData);

  return (
    <>
      <StatisticsContainer>
        <h2>Statistics</h2>
        <StatisticsWrapper>
          {statistics && (
            <>
              {statistics?.totalIncome || statistics?.totalExpenses ? (
                statistics?.totalExpenses ? (
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

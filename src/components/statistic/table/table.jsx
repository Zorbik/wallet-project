import {
  Total,
  Tabrow,
  TabHeader,
  Tabl,
  TableHead,
  TableHeadTr,
  TableBody,
  BodyTr,
  BodyText,
  ExpenseSummary,
  IncomeSummary,
} from './table.styled';
import colorsChart from '../chart/colorsChart';

export function Table({ statistics }) {
  if (!statistics) {
    return null;
  }
  const { expenseSummary, incomeSummary, categoriesSummary } = statistics;

  return (
    <>
      {!expenseSummary && !incomeSummary ? null : (
        <Tabl>
          <TableHead>
            <TableHeadTr>
              <TabHeader>Category</TabHeader>
              <TabHeader>Sum</TabHeader>
            </TableHeadTr>
          </TableHead>
          <TableBody>
            {categoriesSummary.map(({ name, total }, el) => (
              <BodyTr key={name}>
                <Tabrow>
                  <p
                    style={{
                      backgroundColor: colorsChart[el],
                      width: '24px',
                      height: '24px',
                      borderRadius: '2px',
                    }}
                  ></p>
                  <BodyText>{name}</BodyText>
                </Tabrow>
                <Tabrow></Tabrow>
                <Tabrow>
                  <BodyText>{total ? total : 0}</BodyText>
                </Tabrow>
              </BodyTr>
            ))}
          </TableBody>
        </Tabl>
      )}
      <Total>
        Expenses:
        <ExpenseSummary>{expenseSummary}</ExpenseSummary>
      </Total>
      <Total>
        Income: <IncomeSummary>{incomeSummary}</IncomeSummary>
      </Total>
    </>
  );
}

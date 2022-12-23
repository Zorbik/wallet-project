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
              {categoriesSummary.map(category => (
                <BodyTr key={category.id}>
                  <Tabrow>
                    <p
                      style={{
                        backgroundColor: category.color,
                        width: '24px',
                        height: '24px',
                        borderRadius: '2px',
                      }}
                    ></p>
                    <BodyText>{category.title}</BodyText>
                  </Tabrow>
                  <Tabrow></Tabrow>
                  <Tabrow>
                    <BodyText>{category.total ? category.total : 0}</BodyText>
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
  
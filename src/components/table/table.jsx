import moment from 'moment';
import React, { useEffect } from 'react';
import { useMedia } from 'react-use';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/categoriesTransactions/categoriesOperations';
import {
  deleteTransaction,
  getTransactions,
} from '../../redux/transactions/transactionsOperations';
import { getCurrentUser } from '../../redux/userAuth/userAuthOperations';
import {
  Table,
  HeaderTr,
  RowTr,
  Header,
  RowAmount,
  ButtonStyle,
  IconStyle,
  Thead,
} from './table.styled';
import {
  TableMobile,
  HeaderMobile,
  TransData,
  TableMobileItem,
} from './tableMobile.styled';

const TableTransactions = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector(state => state.transactionsData);
  const { categories } = useSelector(state => state.categoriesData);
  const isWide = useMedia('(max-width:768px)');

  const sortedTransactions = transactions => {
    return [...transactions].sort(function (a, b) {
      if (a.transactionDate < b.transactionDate) {
        return 1;
      }
      if (a.transactionDate > b.transactionDate) {
        return -1;
      }
      return 0;
    });
  };

  const sortedTransactionsList = sortedTransactions(transactions);

  useEffect(() => {
    dispatch(getTransactions());

    dispatch(fetchCategories());
  }, [dispatch]);

  const onDeleteTransaction = transactionId => {
    dispatch(deleteTransaction(transactionId));
    dispatch(getCurrentUser());
  };
  const onFormatDate = date => {
    return moment(date).format('DD.MM.YY');
  };
  const showCategoryName = categoryId => {
    const foundCategory = categories.filter(el => el.id === categoryId);
    return foundCategory[0]?.name;
  };

  return (
    <>
      {isWide ? (
        <>
          {sortedTransactionsList.map(trans => {
            const color = trans.type === 'INCOME' ? '#24CCA7' : '#FF6596';

            return (
              <TableMobile
                key={nanoid()}
                style={{
                  borderLeft: '5px solid ',
                  borderLeftColor: `${color}`,
                }}
              >
                <TableMobileItem>
                  <HeaderMobile>Date</HeaderMobile>
                  <TransData>{onFormatDate(trans.transactionDate)}</TransData>
                </TableMobileItem>
                <TableMobileItem>
                  <HeaderMobile>Type</HeaderMobile>
                  <TransData>{trans.type === 'INCOME' ? '+' : '-'}</TransData>
                </TableMobileItem>
                <TableMobileItem>
                  <HeaderMobile>Category</HeaderMobile>
                  <TransData>{showCategoryName(trans.categoryId)}</TransData>
                </TableMobileItem>
                <TableMobileItem>
                  <HeaderMobile>Comment</HeaderMobile>
                  <TransData>{trans.comment}</TransData>
                </TableMobileItem>
                <TableMobileItem>
                  <HeaderMobile>Sum</HeaderMobile>
                  <TransData color={color}>{trans.amount.toFixed(2)}</TransData>
                </TableMobileItem>
                <TableMobileItem>
                  <HeaderMobile>Balance</HeaderMobile>
                  <TransData>{trans.balanceAfter.toFixed(2)}</TransData>
                </TableMobileItem>
              </TableMobile>
            );
          })}
        </>
      ) : (
        <Table>
          <Thead>
            <HeaderTr>
              <Header>Date</Header>
              <Header>Type</Header>
              <Header>Category</Header>
              <Header>Comment</Header>
              <Header>Sum</Header>
              <Header>Balance</Header>
              <Header>Delete</Header>
            </HeaderTr>
          </Thead>
          <tbody>
            {sortedTransactionsList.map(trans => {
              return (
                <RowTr key={trans.id}>
                  <td>{onFormatDate(trans.transactionDate)}</td>
                  <td>{trans.type === 'INCOME' ? '+' : '-'}</td>
                  <td>{showCategoryName(trans.categoryId)}</td>
                  <td>{trans.comment}</td>
                  <RowAmount type={trans.type}>
                    {trans.amount.toFixed(2)}
                  </RowAmount>
                  <td>{trans.balanceAfter.toFixed(2)}</td>
                  <td>
                    <ButtonStyle
                      type="button"
                      onClick={() => {
                        onDeleteTransaction(trans.id);
                      }}
                    >
                      <IconStyle />
                    </ButtonStyle>
                  </td>
                </RowTr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default TableTransactions;

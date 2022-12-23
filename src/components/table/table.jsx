import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/categoriesTransactions/categoriesOperations';
import {
  deleteTransaction,
  getTransactions,
} from '../../redux/transactions/transactionsOperations';
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

const TableTransactions = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector(state => state.transactionsData);
  const { categories } = useSelector(state => state.categoriesData);

  useEffect(() => {
    dispatch(getTransactions());

    dispatch(fetchCategories());
  }, [dispatch]);

  const onDeleteTransaction = transactionId => {
    dispatch(deleteTransaction(transactionId));
  };
  const onFormatDate = date => {
    return moment().format('DD.MM.YY');
  };
  const showCategoryName = categoryId => {
    const foundCategory = categories.filter(el => el.id === categoryId);
    return foundCategory[0]?.name;
  };
  return (
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
        {transactions.map(trans => {
          return (
            <RowTr key={trans.id}>
              <td>{onFormatDate(trans.transactionDate)}</td>
              <td>{trans.type === 'INCOME' ? '+' : '-'}</td>
              <td>{showCategoryName(trans.categoryId)}</td>
              <td>{trans.comment}</td>
              <RowAmount type={trans.type}>{trans.amount.toFixed(2)}</RowAmount>
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
  );
};

export default TableTransactions;

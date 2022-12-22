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
  StrTr,
  Row,
  Header,
  RowAmount,
  ButtonStyle,
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

  const showCategoryName = categoryId => {
    const foundCategory = categories.filter(el => el.id === categoryId);
    return foundCategory[0].name;
  };
  return (
    <Table>
      <thead>
        <HeaderTr>
          <Header>Date</Header>
          <Header>Type</Header>
          <Header>Category</Header>
          <Header>Comment</Header>
          <Header>Sum</Header>
          <Header>Balance</Header>
          <Header>Delete</Header>
        </HeaderTr>
      </thead>
      <tbody>
        {transactions.map(trans => {
          return (
            <StrTr key={trans.id}>
              <Row>{trans.transactionDate}</Row>
              <Row>{trans.type === 'INCOME' ? '+' : '-'}</Row>
              <Row>{showCategoryName(trans.categoryId)}</Row>
              <Row>{trans.comment}</Row>
              <RowAmount type={trans.type}>{trans.amount.toFixed(2)}</RowAmount>
              <Row>{trans.balanceAfter.toFixed(2)}</Row>
              <Row>
                <ButtonStyle
                  onClick={() => {
                    onDeleteTransaction(trans.id);
                  }}
                >
                  Delete
                </ButtonStyle>
              </Row>
            </StrTr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableTransactions;

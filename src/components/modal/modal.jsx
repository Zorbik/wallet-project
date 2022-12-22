import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-datetime/css/react-datetime.css';
import Select from 'react-select';
import moment from 'moment';
import Modal from './backdrop';
import { fetchCategories } from '../../redux/categoriesTransactions/categoriesOperations';
import { addTransaction } from '../../redux/transactions/transactionsOperations';

import {
  CloseAddModal,
  ModalTitle,
  AddTransactionForm,
  SwitchWrapper,
  CheckBoxIcon,
  SelectCategoryWrapper,
  VolumeTransactionWrapper,
  FormInputSum,
  DateIcon,
  SumInput,
  ContextMenuIcon,
  CommentInput,
  CheckBox,
  MainSwitch,
  SelectDateWrapper,
  DateWrapper,
  TimeInput,
  SubmitBtn,
  StyledNavLink,
  ContextMenuStyles,
} from './modal.styled';

export const ModalTransactions = ({ onClose }) => {
  const dispatch = useDispatch();
  const [userChoice, setUserChoice] = useState({});
  const { categories } = useSelector(state => state.categoriesData);
  console.log(categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const expenseCategories = categories
    .filter(category => category.type === 'EXPENSE')
    .map(category => {
      return { value: category.name, label: category.name };
    });

  const [selectedDate, setSelectedDate] = useState(
    moment().format('DD.MM.YYYY')
  );

  const handleDateChange = e => {
    setSelectedDate(moment(e._d).format('DD.MM.YYYY'));
  };

  const toIsoDate = date => {
    const reversed = date.split('.').reverse().join('-');

    const newDate = new Date(reversed);

   return  newDate.toISOString();
  };

  const [initialState, setState] = useState({
    date: selectedDate,
    type: false,
    category: '',
    comment: '',
    sum: '',
    checked: true,
  });
  const { comment, sum, checked } = initialState;

  useEffect(() => {
    setState(items => ({
      ...items,
    }));
    return;
  }, [checked]);

  const handleChangeCheckbox = switchCheck => {
    setState(items => ({
      ...items,
      checked: switchCheck,
      value: null,
      label: '',
    }));
  };

  const onChangeSelect = e => {
    setState(items => ({
      ...items,
      category: e.value,
    }));
    setUserChoice(e);
  };

  useEffect(() => {
    console.log('userChoice', userChoice);
  }, [userChoice]);

  const handleChange = e => {
    const { name, value } = e.target;
    setState(items => ({
      ...items,
      [name]: value,
    }));
  };

  const data = useSelector(state => state.categoriesData);
  console.log(data);

  const findCategory = value => {
    return data.categories.find(category => category.name === value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const category = findCategory(userChoice.value);
    // console.log("category", category)
    // ( function () {
    const userSum = Number(sum).toFixed(2);
    dispatch(
      addTransaction(
               {
          transactionDate: toIsoDate(selectedDate),
          type: category.type,
          categoryId: category.id,
          comment: comment || '',
          amount:
            category.type === 'EXPENSE' ? -Number(userSum) : Number(userSum),
        }
      )
    );

    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <CloseAddModal type="button" onClick={onClose}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M1 1L17 17" stroke="black" />
          <path d="M1 17L17 0.999999" stroke="black" />
        </svg>
      </CloseAddModal>
      <ModalTitle>Add transaction</ModalTitle>
      <AddTransactionForm onSubmit={handleSubmit}>
        <SwitchWrapper as="div">
          <CheckBox className={`${!checked && 'active-income'} `}>
            Income
          </CheckBox>
          <MainSwitch
            styles={{ margin: '0 15px 20px 15px' }}
            onColor={'#fff'}
            offColor={'#fff'}
            name="checked"
            value={checked}
            onChange={handleChangeCheckbox}
            checked={checked}
            height={40}
            width={80}
            handleDiameter={44}
            onHandleColor="#FF6596"
            offHandleColor="#24cca7"
            checkedHandleIcon={
              <CheckBoxIcon
                id="add-icon"
                width="20"
                height="20"
                viewBox="0 0 20 2"
                fill="none"
              >
                <path d="M0 1L20 0.999999" stroke="white" strokeWidth="2" />
              </CheckBoxIcon>
            }
            uncheckedHandleIcon={
              <CheckBoxIcon
                id="expense-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path d="M10 0V20" stroke="white" strokeWidth="2" />
                <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
              </CheckBoxIcon>
            }
          />
          <CheckBox className={`${checked && 'active-expense'}`}>
            Expense
          </CheckBox>
        </SwitchWrapper>
        {checked && (
          <SelectCategoryWrapper>
            <Select
              name="option"
              onChange={onChangeSelect}
              placeholder="Select a category"
              styles={ContextMenuStyles}
              options={expenseCategories}
              required
            />
            <ContextMenuIcon
              id="arrow-icon"
              width="20"
              height="2"
              viewBox="0 0 20 11"
              fill="none"
            >
              <path d="M1 1L10 10L19 1" stroke="black" />
            </ContextMenuIcon>
          </SelectCategoryWrapper>
        )}

        <VolumeTransactionWrapper>
          <FormInputSum>
            <SumInput
              name="sum"
              value={sum}
              required
              type="number"
              placeholder="0.00"
              autoComplete="off"
              onChange={handleChange}
              maxLength="6"
              pattern="^[ 0-9]+$"
              error={sum === '-' || sum === '--'}
              title="input only positive numbers"
            ></SumInput>
          </FormInputSum>

          <SelectDateWrapper>
            <DateWrapper direction="row">
              <TimeInput
                locale="ua"
                type="date"
                value={selectedDate}
                selected={selectedDate}
                onChange={handleDateChange}
                timeFormat={false}
                dateFormat="DD.MM.YYYY"
                required={true}
                closeOnSelect={true}
              />
              <DateIcon width="24" height="24" viewBox="0 0 26 30" fill="none">
                <path
                  d="M10 11H8V13H10V11ZM14 11H12V13H14V11ZM18 11H16V13H18V11ZM20 4H19V2H17V4H9V2H7V4H6C4.89 4 4.01 4.9 4.01 6L4 20C4 21.1 4.89 22 6 22H20C21.1 22 22 21.1 22 20V6C22 4.9 21.1 4 20 4ZM20 20H6V9H20V20Z"
                  fill="#4A56E2"
                />
              </DateIcon>
            </DateWrapper>
          </SelectDateWrapper>
        </VolumeTransactionWrapper>

        <>
          <CommentInput
            name="comment"
            type="text"
            onChange={handleChange}
            value={comment}
            placeholder="Comment"
            autoComplete="off"
            maxLength="300"
            // resize= "none"
            // minRows={1}
            // maxRows={3}
            // size="30"
            required={false}
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ]+([-'\s][a-zA-Zа-яА-ЯІіЇїҐґ]+)*$"
          ></CommentInput>
        </>

        <SubmitBtn btnText={'Add'} minWidth={'300px'}>
          ADD
        </SubmitBtn>
        <StyledNavLink onClick={onClose} btnText={'Cancel'} minWidth={'300px'}>
          CANCEL
        </StyledNavLink>
      </AddTransactionForm>
    </Modal>
  );
};
ModalTransactions.propTypes = {
  onClose: PropTypes.func,
};

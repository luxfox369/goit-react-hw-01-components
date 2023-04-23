import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory =  ({ data }) =>{
    return (
        <table className={css.transactionHistory}>
          <thead className={css.thead}>
            <tr>
               <th>Type</th>
               <th>Amount</th>
               <th>Currency</th>
            </tr>
          </thead>
          <tbody>
                {data.map(({ type, amount, currency,id }) => {
                    return (
                        <tr key={id}>
                            <td>{ type}</td>
                            <td>{amount }</td>
                            <td>{currency}</td>
                        </tr>);
        })}  
        </tbody>
       </table>
    );
}
TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currensy: PropTypes.string,
};
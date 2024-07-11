import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { rupee } from '../../utils/Icons';
import Chart from '../Chart/Chart';
import Styles from "./Dashboard.module.css"

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    },[])

    return (
        <div className={Styles.main}>
                <h1>All Transactions</h1>
                <div className={Styles.statsCon}>
                    <div className={Styles.chartCon}>
                        <Chart />
                        <div className={Styles.amountCon}>
                            <div className={Styles.income}>
                                <h2>Total Income</h2>
                                <p className={Styles.amount_p}>
                                    {rupee} {totalIncome()}
                                </p>
                            </div>
                            <div className={Styles.expense}>
                                <h2>Total Expense</h2>
                                <p className={Styles.amount_p}>
                                    {rupee} {totalExpenses()}
                                </p>
                            </div>
                            <div className={Styles.balance}>
                                <h2>Total Balance</h2>
                                <p className={Styles.balance_p} >
                                    {rupee} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.historyCon}>
                        <History />
                        <h2 className={`${Styles.salary_title} ${Styles.historyCon_h2}`}>Min <span className={Styles.salary_title_span}>Salary</span>Max</h2>
                        <div className={Styles.salary_item}>
                            <p className={Styles.salary_item_p} >
                                ₹{Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p className={Styles.salary_item_p}>
                                ₹{Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className={`${Styles.salary_title} ${Styles.historyCon_h2}`}>Min <span className={Styles.salary_title_span}>Expense</span>Max</h2>
                        <div className={Styles.salary_item}>
                            <p className={Styles.salary_item_p}>
                                ₹{Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p className={Styles.salary_item_p}>
                                ₹{Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Dashboard
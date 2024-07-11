import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import Styles from "./Income.module.css"

function Income() {
    const {incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    }, [])
    return (
        <div className={Styles.main}>
                <h1>Incomes</h1>
                <h2 className={Styles.total_income}>Total Income: <span>₹{totalIncome()}</span></h2>
                <div className={Styles.income_content}>
                    <div className={Styles.form_container}>
                        <Form />
                    </div>
                    <div className={Styles.incomes}>
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
        </div>
    )
}

export default Income
import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses"

export function addExpense(data) {
    console.log(data)
    return {
        type: ADD_EXPENSE,
        data,
    }
}

export function deleteExpense(data) {
    return {
        type: DELETE_EXPENSE,
        data,
    }
}

export function searchExpense(query) {
    return {
        type: SEARCH_EXPENSE,
        query,
    }
}
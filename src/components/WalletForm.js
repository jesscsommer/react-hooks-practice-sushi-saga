import { useState } from "react"

const WalletForm = ({ addMoney }) => {
    const [newFunds, setNewFunds] = useState(0)

    const handleChange = (e) => {
        setNewFunds(parseInt(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addMoney(newFunds)
        setNewFunds(0)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" step="0.25" value={newFunds} onChange={handleChange}/> 
            <input type="submit" value="Add money" />
        </form>
    )
}

export default WalletForm
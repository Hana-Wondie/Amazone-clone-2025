import numeral from "numeral"

function CurrencyFormatter({amount}) {
    const formatedAmount = numeral(amount).format("$0,0.00")
  return (
    <div>
      {formatedAmount}
    </div>
  )
}

export default CurrencyFormatter

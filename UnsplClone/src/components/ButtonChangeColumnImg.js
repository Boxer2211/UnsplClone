import CustomButton from 'src/components/CustomButton'
import { useColumnContext } from 'src/context/ColumnContext'

const ButtonChangeColumnImg = () => {
  const { columns, toggleColumns } = useColumnContext()

  return <CustomButton label={columns === 3 ? 'to 5 columns' : 'to 3 columns'} action={toggleColumns} />
}

export default ButtonChangeColumnImg

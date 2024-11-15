const CustomButton = ({ label, action, disabled = false }) => (
  <button
    onClick={action}
    className='px-2 py-1 border border-gray-400 text-gray-400 rounded-md shadow-md
             hover:border-black hover:text-black transition-colors duration-200 whitespace-nowrap
                           disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-400 disabled:hover:text-gray-400`}
'
    disabled={disabled}
  >
    {label}
  </button>
)

export default CustomButton
